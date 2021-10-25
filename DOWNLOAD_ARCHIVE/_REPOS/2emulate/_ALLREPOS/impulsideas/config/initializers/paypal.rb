PAYPAL_CONFIG = PayPal::SDK.load("config/paypal.yml", Rails.env)
PayPal::SDK.logger = Rails.logger

PAYPAL_API = PayPal::SDK::AdaptivePayments::API.new
