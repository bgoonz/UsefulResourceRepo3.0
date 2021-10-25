class TagsController < ApplicationController
  def show
    @tag = Tag.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }
    end
  end
  
  def index
    @tags = Tag.all
  end
  
end
