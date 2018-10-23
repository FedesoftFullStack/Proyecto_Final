json.extract! user, :id, :name, :phone, :typedoc, :numdoc, :created_at, :updated_at
json.url user_url(user, format: :json)
