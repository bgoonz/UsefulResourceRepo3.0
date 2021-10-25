json.array!(@contributions) do |contribution|
  json.extract! contribution, :amount
  json.url contribution_url(contribution, format: :json)
end
