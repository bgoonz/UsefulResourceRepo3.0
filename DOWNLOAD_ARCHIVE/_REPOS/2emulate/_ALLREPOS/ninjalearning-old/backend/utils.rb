# Return everything after the # sign
def clean_uri url
  i = url.index('#')
  url[i+1..-2]
end
