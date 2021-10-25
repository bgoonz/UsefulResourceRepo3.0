json.array!(@projects) do |project|
  json.extract! project, :title, :short_description, :extended_description, :funding_goal, :funding_duration, :category, :tags
  json.url project_url(project, format: :json)
end
