module ApplicationHelper
	def embedded_links_to_live(text)
		text = Rinku.auto_link(text)
		text = find_youtube_link_and_embed(text)
	end

	def find_youtube_link_and_embed(text_with_youtube_url)
		text_with_youtube_url + '<br>'+ youtube_embed(text_with_youtube_url)
	end

	def youtube_embed(youtube_url)
    youtube_id = youtube_url[/(?<=v(\=|\/))([-a-zA-Z0-9_]+)|(?<=youtu\.be\/)([-a-zA-Z0-9_]+)/]
	  youtube_id.blank? ? "" : %Q{<iframe title="YouTube video player" width="640" height="390" src="http://www.youtube.com/embed/#{ youtube_id }" frameborder="0" allowfullscreen></iframe>}
	end

end
