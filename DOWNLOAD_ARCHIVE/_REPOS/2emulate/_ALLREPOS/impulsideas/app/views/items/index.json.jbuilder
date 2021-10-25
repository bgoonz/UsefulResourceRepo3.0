json.array!(@items) do |item|
  json.extract! item, :id, :title, :description, :price, :stock, :user_id
  json.url item_url(item, format: :json)
end
