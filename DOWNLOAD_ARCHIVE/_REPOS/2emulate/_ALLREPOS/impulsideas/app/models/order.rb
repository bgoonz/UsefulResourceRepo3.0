# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  user_id        :integer
#  orderable_id   :integer
#  orderable_type :string(255)
#  payment_uid    :string(255)
#  amount         :decimal(8, 2)
#  description    :string(255)
#  raw            :hstore
#  completed      :boolean          default(FALSE)
#  created_at     :datetime
#  updated_at     :datetime
#  workflow_state :string(255)      default("awaiting_payment")
#
# Indexes
#
#  index_orders_on_orderable_id_and_orderable_type  (orderable_id,orderable_type)
#  index_orders_on_user_id                          (user_id)
#  index_orders_on_workflow_state                   (workflow_state)
#
# TODO: order confirmation number (seller) [mobile].
# TODO: send email to seller with coupon number.
# TODO: send email to buyer with coupon secret.
# TODO: is only completed when coupon number and secret match.
# 
class Order < ActiveRecord::Base
  include ActionView::Helpers::NumberHelper
  include Rails.application.routes.url_helpers
  include Workflow

  belongs_to :user

  belongs_to :orderable, polymorphic: true
  belongs_to :item, -> { includes(:orders).where(orders: {orderable_type: 'Item'})}, foreign_key: 'orderable_id'


  attr_accessor :approval_url, :paypal_errors

  validates :amount, presence: true, numericality: { greater_or_equal_to: 0 }
  validates :description, presence: true
  validate :item_availability

  default_scope { order('id ASC') }
  scope :completed, ->{ with_completed_state }
  scope :by, ->(project) { includes(item: :project).where(projects: {id: project.id}) }
  scope :bought_items_by, ->(user) { where(user: user) }
  scope :sold_items_by, ->(user) { includes(item: :user).where(items: {user_id: user.id}) }
  scope :sold_projects_items_by, ->(user) { includes(item: {project: :user}).where(projects: {user_id: user.id}) }

  after_create :create_payment

  def item_availability
    if orderable.try(:sold_out?)
      errors.add(:base, "Producto agotado.")
    end
  end

  def create_payment
    payment = PayPal::SDK::REST::Payment.new(payment_params)
    payment.create

    if payment.success?
      update_column(:payment_uid, payment.id)
      @approval_url = payment.links[1].href
    else
      messages = payment.error.details.map(&:issue).join(". ")
      logger.error messages
      errors.add(:paypal, messages)
    end

    update_columns(raw: payment.to_hash)
    logger.debug "------- #{payment.to_hash}"
  end

  def executed_payment? (params)
    return false if params[:cancel]

    if orderable.try(:sold_out?)
      @paypal_errors = "Producto agotado"
      return false
    end

    payment = PayPal::SDK::REST::Payment.find(payment_uid)
    status = false

    if payment.execute(payer_id: params[:PayerID])
      logger.debug "------- #{payment.to_hash}"
      update_columns(raw: payment.to_hash)
      orderable.update_column(:stock, orderable.stock - 1) if orderable.try(:stock)
      pay!
      status = true
    else
      logger.error "------- #{payment.error}"
      update_column(:raw, payment.to_hash.merge({ errors: payment.error }))
      cancel!
      @paypal_errors = "Paypal no pudo realizar la transacción. #{payment.error.try(:[], :message)}"
    end

    status
  end

  def payment_params
    host = Rails.env.production? ? 'beta.impulsideas.com' : '0.0.0.0:4000'
    url = "#{execute_order_url(id, host: host)}"

    {
      :intent => "sale",
      :payer => {
        :payment_method => "paypal" },
      :redirect_urls => {
        :return_url => "#{url}?success=true",
        :cancel_url => "#{url}?cancel=true" },
      :transactions => [ {
        :amount => {
          :total => "#{number_to_currency(amount, unit: "")}",
          :currency => "USD" },
        :description => "#{description}" } ]
    }
  end

  def who? (current_user)
    if current_user == item.user
      :seller
    elsif current_user == user
      :buyer
    else
      :unknown
    end
  end

  #
  # State Machine
  #
  workflow do
    state :awaiting_payment, meta: { buyer: true, seller: false } do
      event :pay, transitions_to: :awaiting_delivery, meta: { style: 'primary'}
      event :cancel, transitions_to: :cancelled, meta: { style: 'danger'}
    end

    state :cancelled, meta: { style: 'warning'}

    state :awaiting_delivery, meta: { buyer: true, seller: true } do
      event :deliver, transitions_to: :awaiting_delivery_confirmation, meta: { style: 'primary'}
      event :cancel, transitions_to: :awaiting_refund, meta: { style: 'danger'}
    end

    state :awaiting_refund, meta: { buyer: false, seller: true } do
      event :refund, transitions_to: :awaiting_refund_confirmation, meta: { style: 'primary'}
    end

    state :awaiting_refund_confirmation, meta: { buyer: true, seller: false } do
      event :confirm_refund, transitions_to: :refunded, meta: { style: 'primary'}
    end

    state :refunded, meta: { style: 'warning'}

    state :awaiting_delivery_confirmation, meta: { buyer: false, seller: true } do
      event :confirm_delivery, transitions_to: :completed, meta: { style: 'primary'}
      event :cancel, transitions_to: :awaiting_refund, meta: { style: 'danger'}
    end

    state :completed, meta: { style: 'success'}
  end

  #
  # Notes
  #

  # Order.with_refunded_state
  # Order.current_state
  # Order.workflow_state
  # o.current_state.events.keys
  # o.current_state.meta[:buyer]
  # o.current_state.meta[:seller]
  #
  # all states
  # Order.workflow_spec.states.keys
  #
  # all events
  # Order.workflow_spec.states.values.map(&:events).map(&:keys).flatten.uniq
end
