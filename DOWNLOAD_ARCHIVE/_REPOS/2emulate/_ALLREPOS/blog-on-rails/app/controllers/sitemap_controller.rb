class SitemapController < ApplicationController
  layout nil
  after_filter :update_search_engines
  
  def index
	# Things to include in the sitemap
	@posts = Post.find(:all, :order => "updated_at DESC", :limit => 50000)
	@tags = Tag.find(:all, :order => "updated_at DESC", :limit => 50000)
	@static = [root_path, portfolio_path, blog_path, about_path, contactme_path]
	@base_url = "http://#{request.host_with_port}"
	
	respond_to do |format|
		format.html # sitmap for users
		format.xml # sitemap for SEO
		format.rxml
	end
  end
  
  def rss
	@posts = Post.find(:all, :order => "updated_at DESC", :limit => 10)
	@base_url = "http://#{request.host_with_port}"
	
	respond_to do |format|
		format.xml # sitemap for SEO
	end	
  end
  
  private
	# Notify popular search engines of the updated sitemap.xml
    def update_search_engines
	  @url = "http://#{request.host_with_port}/"
      sitemap_uri = @url + 'sitemap.xml'
      escaped_sitemap_uri = CGI.escape(sitemap_uri)
	  Rails.logger.info "Notifiying new sitemap => " + escaped_sitemap_uri
      Rails.logger.info "Notifying Google..."
      res = Net::HTTP.get_response('www.google.com', '/webmasters/tools/ping?sitemap=' + escaped_sitemap_uri)
      Rails.logger.info res.class
      Rails.logger.info "Notifying Yahoo..."
      res = Net::HTTP.get_response('search.yahooapis.com', '/SiteExplorerService/V1/updateNotification?appid=SitemapWriter&url=' + escaped_sitemap_uri)
      Rails.logger.info res.class
      Rails.logger.info "Notifying Bing..."
      res = Net::HTTP.get_response('www.bing.com', '/webmaster/ping.aspx?siteMap=' + escaped_sitemap_uri)
      Rails.logger.info res.class
      Rails.logger.info "Notifying Ask..."
      res = Net::HTTP.get_response('submissions.ask.com', '/ping?sitemap=' + escaped_sitemap_uri)
      Rails.logger.info res.class
    end
  
end

=begin Review
http://en.wikipedia.org/wiki/Site_map
http://www.candland.net/2012/04/06/basic-rails-sitemap-setup/
http://johntopley.com/2010/02/27/create-a-sitemap-for-your-rails-application/
http://www.fortytwo.gr/blog/19/Generating-Sitemaps-With-Rails
=end