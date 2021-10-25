# == Schema Information
#
# Table name: contributions
#
#  id             :integer          not null, primary key
#  amount         :float
#  project_id     :integer
#  user_id        :integer
#  payment_status :string(255)      default("UNPROCESSED")
#  anonymous      :boolean          default(FALSE)
#  created_at     :datetime
#  updated_at     :datetime
#

class Contribution < ActiveRecord::Base
  include Rails.application.routes.url_helpers

  belongs_to :project
  belongs_to :user
  has_many :payment_notifications, dependent: :destroy

  validates :amount, numericality: { greater_than: 0 }, presence: true
  validates :user_id, presence: true
  validates :project_id, presence: true

  def paypal_url
    @preapproval = PAYPAL_API.build_preapproval(preapproval_params)

    # Make API call & get response
    @preapproval_response = PAYPAL_API.preapproval(@preapproval)
    logger.info "\r\n@preapproval_response = #{@preapproval_response.inspect}"

    # Access Response
    if @preapproval_response.success?
      @preapproval_response.preapprovalKey
    else
      logger.info "\r\n@preapproval_response.error = #{@preapproval_response.error.map(&:message)}"
    end

    "https://www.sandbox.paypal.com/webscr?cmd=_ap-preapproval&preapprovalkey=#{@preapproval_response.preapprovalKey}"
  end

  def preapproval_params
    host = Rails.env.production? ? 'impulsideas.com' : '0.0.0.0:3000'
    {
      :cancelUrl => new_project_contribution_url(self.project, host: host),
      :returnUrl => project_url(self.project, host: host),
      :startingDate => Time.now,
      :endingDate => 180.days.from_now.localtime,
      :currencyCode => "USD",
      :memo => "Aporte al proyecto #{self.project.title}",
      :ipnNotificationUrl => ipn_notifications_url(self.id, host: host),
      :maxAmountPerPayment => self.amount,
      :maxTotalAmountOfAllPayments => self.amount,
      :maxNumberOfPayments => 1,
      :maxNumberOfPaymentsPerPeriod => 1,
      :pinType => "NOT_REQUIRED",
      :feesPayer => "PRIMARYRECEIVER",
      :displayMaxTotalAmount => false
    }
  end
end
