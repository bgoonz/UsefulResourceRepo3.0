# load './doc/preapproval.rb'

require 'paypal-sdk-adaptivepayments'

PayPal::SDK.load("config/paypal.yml", "test")

@api = PayPal::SDK::AdaptivePayments::API.new

# Build request object
@preapproval = @api.build_preapproval({
  :cancelUrl => "https://paypal-sdk-samples.herokuapp.com/adaptive_payments/preapproval",
  :currencyCode => "USD",
  :endingDate => 180.days.from_now.localtime,
  :maxAmountPerPayment => 1000.0,
  :maxNumberOfPayments => 1,
  :maxNumberOfPaymentsPerPeriod => 1,
  :maxTotalAmountOfAllPayments => 1000.0,
  :returnUrl => "https://paypal-sdk-samples.herokuapp.com/adaptive_payments/preapproval",
  :memo => "Contributing towards XXX project",
  :ipnNotificationUrl => "https://paypal-sdk-samples.herokuapp.com/adaptive_payments/ipn_notify",
  :senderEmail => "testus@impulsideas.com",
  :startingDate => Time.now,
  :pinType => "NOT_REQUIRED",
  :feesPayer => "PRIMARYRECEIVER",
  :displayMaxTotalAmount => false })

# Make API call & get response
@preapproval_response = @api.preapproval(@preapproval)

puts "\r\n@preapproval_response = #{@preapproval_response.inspect}"

# Access Response
if @preapproval_response.success?
  @preapproval_response.preapprovalKey
else
  puts "\r\n@preapproval_response.error = #{@preapproval_response.error.map(&:message)}"
end

puts "\r\nhttps://www.sandbox.paypal.com/webscr?cmd=_ap-preapproval&preapprovalkey=#{@preapproval_response.preapprovalKey}"



