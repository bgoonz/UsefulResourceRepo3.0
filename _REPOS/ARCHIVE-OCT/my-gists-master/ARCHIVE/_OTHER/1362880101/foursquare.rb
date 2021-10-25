require 'foursquare2'

token  = 'oauth_token'

client = Foursquare2::Client.new(:oauth_token =>token)

last_seen = client.user_checkins.items.select{|i| i['private'].nil?}.first.venue

p last_seen.name
p last_seen.location.address