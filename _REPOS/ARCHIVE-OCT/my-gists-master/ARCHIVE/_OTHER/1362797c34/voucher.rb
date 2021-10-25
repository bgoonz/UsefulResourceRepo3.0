require 'rubygems'
require 'hpricot'
require 'open-uri'
require 'twitter'
require 'httparty'

# TODO rescue from timeouts
# TODO find usls in text    %r{( https?:// | www\. )[^\s<]+}x
# TODO affilate code
# switch to http://vouchers.im/

def get_code(site)
  find_code(Hpricot(open("http://www.retailmenot.com/view/#{site}")))
rescue
  "No codes available, sorry :'("
end

def find_code(page)
  "#{page.search("//td[@class='code']/strong").first.inner_html}: #{page.search("//td[@class='discount']").first.inner_html}"
end

def tiny_url(site)
  HTTParty.get("http://tinyurl.com/api-create.php?url=http://www.retailmenot.com/view/#{site}")
rescue
  ''
end

def lengthen(url)
  HTTParty.get("http://api.longurl.org/v1/expand?url=#{url}")['response']['long_url']
end

def message(text)
  site = text.gsub(/@codefor /, '')
  long = URI.escape(site)
  valid =  (long.index('http') == 0 ? long : 'http://' + long)
  url = lengthen(valid)
  get_code(url) + ' ' + tiny_url(url)
end

def reply_to_twitters(search, user, password)
  twit = Twitter::Base.new(user, password)
  for result in Twitter::Search.new(search).since(twit.user(user).status.in_reply_to_status_id)
    twit.post("@#{result.from_user} #{message(result.text)}", :in_reply_to_status_id => result.id)
  end
end