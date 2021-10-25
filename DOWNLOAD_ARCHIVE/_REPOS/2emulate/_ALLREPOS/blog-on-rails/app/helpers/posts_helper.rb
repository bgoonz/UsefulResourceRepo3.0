module PostsHelper
  def post_tags(post)
    post.tags.map { |t| link_to(t.name, t) }.join(", ") if not post.tags.nil?
  end
end
