#grabber.rb

require "fastercsv"
require "lib/crawled_record"

#example:
#Category name, http://example.com/category/category-name
categories = FasterCSV.read("data/categories.csv")

puts "-- read categories file -- "


categories.each do |row|
  category_url = row[1].strip
  category_ascii_name = category_url[/[^\/]+?$/]
  file_name = "#{category_ascii_name}.csv"

  begin
    puts "-- crawling #{category_ascii_name} -- "
    puts category_url
    Anemone.crawl(category_url) do |anemone|
      anemone.focus_crawl do |page|
        unless page.url.to_s.include?("/detail/")
          page.links.select { |link| link.to_s.include?(category_url) or link.to_s.include?("/detail/") }.reject { |link| link.to_s.include?("/reg/") }
        else
          []
        end
      end

      file = File.new("data/#{file_name}", "w")
      anemone.on_pages_like(/\/detail\//) do |page|
        file.puts CrawledRecord.new(page).to_csv
      end


      anemone.after_crawl do |pages|
        puts "-- Crawled #{0} companies \n"
      end
    end

  rescue
    puts "-- #{category_ascii_name} failed to get crawled --"
  end
end



#lib/crawled_record
require "fastercsv"

class CrawledRecord

  attr_accessor :name, :www, :address, :email, :phone, :url


  def initialize(page)
    doc = page.doc
    @name = CrawledRecord.get_from_css(doc, '#firmCont h2')
    @email = CrawledRecord.get_from_css(doc, '#cont .email a')
    @address = "#{CrawledRecord.get_from_css(doc, '.info .adr .street-address')} #{CrawledRecord.get_from_css(doc, '.info .adr .postal-code')} #{CrawledRecord.get_from_css(doc, '.info .adr .locality')}"
    @description = CrawledRecord.get_from_css(doc, '#firmCont .description')
    @www = CrawledRecord.get_from_css(doc, '#firmCont .web a')
    @url = page.url.to_s
  end

  def self.get_from_css(doc, css)
      begin
        doc.css(css).text.strip.tr(";", "")
      rescue
        ""
      end
  end

  def to_csv
    [@name, @email, @address, @description, @www, @url].to_csv(:col_sep => ";")
  end
end