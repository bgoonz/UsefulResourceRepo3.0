class ContributionsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_project
  before_action :set_contribution, only: [:show, :edit, :update, :destroy]
  before_action :check_country, only: [:new, :create]

  # GET /contributions
  # GET /contributions.json
  def index
    @contributions = @project.contributions.all
  end

  # GET /contributions/1
  # GET /contributions/1.json
  def show
  end

  # GET /contributions/new
  def new
    @contribution = @project.contributions.build
  end

  # GET /contributions/1/edit
  def edit
  end

  # POST /contributions
  # POST /contributions.json
  def create
    @contribution = @project.contributions.build(contribution_params)
    @contribution.user = current_user

    # respond_to do |format|
      if @contribution.save
        redirect_to @contribution.paypal_url
        # format.html { redirect_to [@project, @contribution], notice: 'Contribution was successfully created.' }
        # format.html { redirect_to @project, notice: 'La contribución se realizó satisfactoriamente.' }
        # format.json { render action: 'show', status: :created, location: [@project, @contribution] }
      else
        flash[:error] = @contribution.errors.full_messages
        render action: 'new'
        # format.html { render action: 'new' }
        # format.json { render json: @contribution.errors, status: :unprocessable_entity }
      end
    # end
  end

  # PATCH/PUT /contributions/1
  # PATCH/PUT /contributions/1.json
  def update
    respond_to do |format|
      if @contribution.update(contribution_params)
        format.html { redirect_to [@project, @contribution], notice: 'Contribution was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @contribution.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contributions/1
  # DELETE /contributions/1.json
  def destroy
    @contribution.destroy
    respond_to do |format|
      format.html { redirect_to project_contributions_url }
      format.json { head :no_content }
    end
  end

  private

    def set_project
      @project = Project.find(params[:project_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_contribution
      @contribution = @project.contributions.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contribution_params
      params.require(:contribution).permit(:amount)
    end
end
