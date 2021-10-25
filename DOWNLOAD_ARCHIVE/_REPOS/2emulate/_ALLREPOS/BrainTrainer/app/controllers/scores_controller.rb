class ScoresController < ApplicationController
  before_filter :require_login
  
  # Show the score of all the users
  def index
  end

  # show the score of the current user
  def show
  end

  # store the result of an exercise in the database
  def create
    r = params[:results]
    
    u = current_user #User.find(1) # changed get logged user
    e = Exercise.find(params[:exercise_id])
    
    u.exercises << e
    redirect_to e, flash: { error: u.errors } if u.errors.any?
    
    user_rating = e.rate r.values.collect{|e| e=e.to_i}
    
    unless user_rating >= 80
      redirect_to e, flash: { error: "Please try again, you need more than #{user_rating}% correct answers." }
    else
      flash[:success] = "Great Job! You got the #{user_rating}% of correct answers!"
      redirect_to exercises_path
    end
    

    
    if params.key? :elapsed_time and params[:elapsed_time].to_i > 0
      time = params[:elapsed_time] 
    else
      time = Time.now.to_i - params[:start_time].to_i
    end
    
    u.scores.where(exercise_id: e.id).last.update_attributes(time: time, rating: user_rating)
  end

  # update the exercise entry of a particular exercise
  def update
  end
end
