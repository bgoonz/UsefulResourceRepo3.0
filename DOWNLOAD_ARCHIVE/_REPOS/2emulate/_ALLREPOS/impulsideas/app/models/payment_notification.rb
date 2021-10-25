# == Schema Information
#
# Table name: payment_notifications
#
#  id              :integer          not null, primary key
#  params          :text
#  payment_status  :string(255)      default("unprocessed")
#  transaction_id  :string(255)
#  contribution_id :integer
#  created_at      :datetime
#  updated_at      :datetime
#

class PaymentNotification < ActiveRecord::Base
  belongs_to :contribution
  serialize :params
  after_create :update_contribution_status

  validates :transaction_id, presence: true, uniqueness: true

  private
    def update_contribution_status
      contribution.update_attributes(payment_status: payment_status)
    end
end
