json.array!(@payment_notifications) do |payment_notification|
  json.extract! payment_notification, :params, :status, :transaction_id, :contribution_id
  json.url payment_notification_url(payment_notification, format: :json)
end
