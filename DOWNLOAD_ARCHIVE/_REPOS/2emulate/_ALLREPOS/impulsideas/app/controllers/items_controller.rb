class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]
  before_action :set_project, only: [:index, :new, :create]
  before_action :check_can_edit, only: [:edit, :update, :destroy]
  before_action :set_creator, only: [:show]

  # GET /items
  # GET /items.json
  # GET /projects/:project_id/items
  # GET /projects/:project_id/items.json
  def index
    if @project
      @items = @project.items
    else
      @items = Item.all
    end
  end

  # GET /items/1
  # GET /items/1.json
  def show
  end

  # GET /project/:id/items/new
  def new
    @item = @project.items.build
    @form_url = project_items_path(@project)
  end

  # GET /items/1/edit
  def edit
    @form_url = item_path
  end

  # POST /projects/:project_id/items
  # POST /projects/:project_id/items.json
  def create
    @item = @project.items.build(item_params)
    @item.user = current_user

    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.json { render action: 'show', status: :created, location: @item }
      else
        format.html { render action: 'new' }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    def set_project
      if params[:project_id]
        @project = Project.find(params[:project_id])
      else
        @project = nil
      end
    end

    def set_creator
      @creator = @item.user == current_user || current_user.try(:admin?)
    end

    def check_can_edit
      return true if current_user.admin?
      unless @item.user == current_user
        err_msg = 'No puedes modificar este producto.'
        flash[:error] = err_msg
        respond_to do |format|
          format.html { redirect_to @item }
          format.json { render json: err_msg, status: :unprocessable_entity }
        end
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:title, :description, :price, :stock, :user_id, :project_id, :picture)
    end
end
