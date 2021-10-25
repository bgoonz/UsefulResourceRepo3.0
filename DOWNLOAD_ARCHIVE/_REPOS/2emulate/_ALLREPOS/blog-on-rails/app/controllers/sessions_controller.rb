class SessionsController < ApplicationController  
  def new
    @title = 'Login'
  end

  def destroy
    sign_out
    redirect_to root_path
  end
  
  def create
    @title = 'Log in'
    
    user = User.authenticate(params[:session][:email], params[:session][:password])
    if user.nil?
      flash.now[:error] = "Invalid email/password combination."
      render 'new'
    else
      # redirect_to home_index_path
      sign_in user
      redirect_to user
    end
  end
  
end
