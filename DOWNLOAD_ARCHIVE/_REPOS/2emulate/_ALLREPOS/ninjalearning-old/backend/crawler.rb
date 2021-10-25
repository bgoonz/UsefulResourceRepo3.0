require 'anemone' # @see https://github.com/chriskite/anemone/blob/master/lib/anemone/
require 'action_controller'
require 'linkeddata'
require './vocabularies'


# ==============================
# = Modifying WebCrawler Class =
# ==============================
class Anemone::Page 
  #
  # Converts relative URL *link* into an absolute URL based on the
  # location of the page
  #
  def to_absolute(link)
    return nil if link.nil?

     # remove anchor # CHANGED: add (.) to the group for cases like 
    link = URI.encode(URI.decode(link.to_s).gsub(/#[a-zA-Z\.0-9_-]*$/,''))

    relative = URI(link)
    absolute = base ? base.merge(relative) : @url.merge(relative)

    absolute.path = '/' if absolute.path.empty?

    return absolute
  end  
  
  #
  # Array of distinct A tag HREFs from the page
  #
  def links (focused='', force=false, other_domains=false)
    if !(@links.nil? or force)
      return @links  
    end
    
    @links = []
    return @links if !doc

    doc.search(focused+"//a[@href]").each do |a|
      u = a['href']
      next if u.nil? or u.empty?
      abs = to_absolute(URI(URI.escape(u))) rescue next
      @links << abs if other_domains || in_domain?(abs) # CHANGED: accept multiple domains
    end
    @links.uniq!
    @links
  end
  
end


# ==========================
# = Removing HTML tags =
# ==========================
def text_from_html xmldoc
  HTML::FullSanitizer.new.sanitize(xmldoc.to_s).gsub(/\t+/,' ').gsub(/\n+/,' ').gsub(/ +/,' ')
end
    
#
# Web crawler wrapper class
#
class WebCrawler
end

REGEX_FILES_EXTENSIONS = /\.(ogg|OGG|pdf|PDF|svg|SVG|gif|GIF|jpg|JPG|png|PNG|ico|ICO|css|CSS|sit|SIT|eps|EPS|wmf|WMF|zip|ZIP|ppt|PPT|mpg|MPG|xls|XLS|gz|GZ|rpm|RPM|tgz|TGZ|mov|MOV|exe|EXE|jpeg|JPEG|bmp|BMP|js|JS)$/

=begin
  TODO list of links to crawl
=end
url = "http://cilantrox.dyndns.org/crawl-test.html"
url = "http://cilantrox.dyndns.org/crawl-test.html"
url = "http://en.wikipedia.org/wiki/Mark_Watson_(baseball)"
def docrawling(url)
Anemone.crawl(url) do |crawler| # https://github.com/chriskite/anemone/blob/master/lib/anemone/core.rb
  crawler.obey_robots_txt = false
  crawler.verbose = true
  #anemone.delay = 1
  crawler.depth_limit = 1
  #crawler.discard_page_bodies = true

  # ==========
  # = skip files =
  # ==========
  crawler.skip_links_like REGEX_FILES_EXTENSIONS
  
  # ==========
  # = focused crawl =
  # ==========
  # @see http://michalkuklis.com/blog/2010/01/11/anemone-with-hpricot/
  crawler.focus_crawl do |page| # https://github.com/chriskite/anemone/blob/master/lib/anemone/page.rb:66
    #puts "url: #{page.url}" 
    #puts "content-type: #{page.content_type}"
    #puts "code: #{page.code}" 
    puts "-links: #{page.links('//*[@id="bodyContent"]',true,false).length.to_s}" #todo change
    
    # Extract wikipedia content
    page.data = {}
    page.data[:parent_url] = url
    page.data[:title] = page.doc.xpath('//*[@id="firstHeading"]/text()') rescue next # Title
    page.data[:content] = page.doc.xpath('//*[@id="bodyContent"]') rescue next # Body Content
    page.data[:content] = text_from_html(page.data[:content])
    
    # convert html to plain text.
    
    
    # TODO Generate RDF 
    # TODO Save RDF in the database
    
    #update links with new ones including other domains
    #page.links.replace(wiki_content_links)
    #puts "*links: #{page.links.length.to_s}"
    page.links
  end

  # ==========
  # = Add a block to be executed on the PageStore after the crawl is finished =
  # ==========
  # https://gist.github.com/1149906
  crawler.after_crawl do |pages|
    puts "\nRESULTS #{url}:"
    puts "-----------------------------------------"
    puts "Total number of links found: " +pages.uniq!.size.to_s 
    puts "-----------------------------------------"
    pages.each_value { |page| puts "== #{page.data[:title].to_s} | #{page.url} => #{page.data[:parent_url]}\n #{page.data[:content].to_s[100..400]}" }
    puts "\n"    
    
    #
    # TODO: generate and save 
    #
    
    
  end
end
end


