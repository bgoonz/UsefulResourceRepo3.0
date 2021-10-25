class ExercisesController < ApplicationController
  before_filter :require_login
  before_filter :require_admin, only: [:destroy, :new, :edit, :update]
  
  # GET /exercises
  # GET /exercises.json
  def index
    @exercises = Exercise.all
    @user = current_user # changed get logged user
    
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @exercises }
    end
  end

  # GET /exercises/1
  # GET /exercises/1.json
  def show
    @exercise = Exercise.find(params[:id])
    @score = Score.new
    
    previous = Exercise.where(no: @exercise.no-1)[0]
    
    #CHANGED check if the user is allow to access this exercise. If he enter the url manually.
    unless Exercise.first.no == @exercise.no or (previous && previous.scores.where(["rating >= ? AND user_id = ?",80,current_user.id]).size > 0)
      flash[:warning] = "You have to complete the previous exercises before accessing this one."
      redirect_to exercises_path
    else
      respond_to do |format|
        format.html # show.html.erb
        format.json { render json: @exercise }
      end
    end
  end

  # GET /exercises/new
  # GET /exercises/new.json
  def new
    @exercise = Exercise.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @exercise }
    end
  end

  # GET /exercises/1/edit
  def edit
    @exercise = Exercise.find(params[:id])
  end

  # POST /exercises
  # POST /exercises.json
  def create
    @exercise = Exercise.new(params[:exercise])

    respond_to do |format|
      if @exercise.save
        format.html { redirect_to @exercise, notice: 'Exercise was successfully created.' }
        format.json { render json: @exercise, status: :created, location: @exercise }
      else
        flash.now[:error] = @exercise.errors.full_messages
        format.html { render action: "new"}
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /exercises/1
  # PUT /exercises/1.json
  def update
    @exercise = Exercise.find(params[:id])

    respond_to do |format|
      if @exercise.update_attributes(params[:exercise])
        format.html { redirect_to @exercise, notice: 'Exercise was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exercises/1
  # DELETE /exercises/1.json
  def destroy
    @exercise = Exercise.find(params[:id])
    @exercise.destroy

    respond_to do |format|
      format.html { redirect_to exercises_url }
      format.json { head :no_content }
    end
  end
end
