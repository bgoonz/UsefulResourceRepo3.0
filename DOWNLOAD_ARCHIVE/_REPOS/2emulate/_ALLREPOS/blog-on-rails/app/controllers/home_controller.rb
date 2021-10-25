class HomeController < ApplicationController
  def index
    @title = "Home"
    @recent_posts = Post.order("updated_at DESC").limit(5)
  end
end
