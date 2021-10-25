include ApplicationHelper
class CommentsController < ApplicationController
  before_filter :require_login, :only => [:destroy]
  #http_basic_authenticate_with name: "admin", password: "1234", only: :destroy
  
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(params[:comment])
    flash[:error] = @comment.errors unless @comment.save
    redirect_to post_path(@post)
  end
  
  def destroy
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post)
  end
end
