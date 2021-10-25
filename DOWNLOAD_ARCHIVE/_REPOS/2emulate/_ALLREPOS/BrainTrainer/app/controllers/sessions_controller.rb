class SessionsController < ApplicationController
  
  def new
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path, notice: "Logged out."
  end

  def create
    user = User.authenticate(params[:email],params[:password])
    if user
      session[:user_id] = user.id
      flash[:success] = "Time to get smarter #{user.name}"
      redirect_to exercises_path
    else
      flash.now[:error] = "Invalid email or password"
      render 'new'
    end
  end
  
end
