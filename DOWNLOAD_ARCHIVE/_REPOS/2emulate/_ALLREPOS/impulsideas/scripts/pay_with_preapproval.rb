# load './doc/pay_with_preapproval.rb'

require 'paypal-sdk-adaptivepayments'

PayPal::SDK.load("config/paypal.yml", "test")

@api = PayPal::SDK::AdaptivePayments::API.new

APPROVAL_KEY = 'PA-36M768801J859553F' # paste preapproval key

# Build request object
@pay = @api.build_pay({
  :actionType => "PAY",
  :cancelUrl => "https://paypal-sdk-samples.herokuapp.com/adaptive_payments/pay",
  :currencyCode => "USD",
  :feesPayer => "PRIMARYRECEIVER",
  :ipnNotificationUrl => "https://paypal-sdk-samples.herokuapp.com/adaptive_payments/ipn_notify",
  :preapprovalKey => APPROVAL_KEY,
  :receiverList => {
    :receiver => [{
      :amount => 900.0,
      :email => "backer@impulsideas.com",
      :primary => true },{
      :amount => 100.0,
      :email => "project_owner@impulsideas.com",
      :primary => false }] },
  :returnUrl => "https://paypal-sdk-samples.herokuapp.com/adaptive_payments/pay" })

# Make API call & get response
@pay_response = @api.pay(@pay)

puts "@pay_response = #{@pay_response.inspect}"
puts "@pay_response.success? = #{@pay_response.success?.inspect}"
puts "@pay_response.payKey = #{@pay_response.payKey.inspect}"

# Access Response
if @pay_response.success?
  # @pay_response.payKey
  # @pay_response.paymentExecStatus
  # @pay_response.payErrorList
  # @pay_response.paymentInfoList
  # @pay_response.sender
  # @pay_response.defaultFundingPlan
  # @pay_response.warningDataList
  puts "@pay_response.payKey = #{@pay_response.payKey}"
else
  # @pay_response.error
  puts "@pay_response.error = #{@pay_response.error.map(&:message)}"
end
