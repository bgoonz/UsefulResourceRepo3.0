class ApplicationController < ActionController::Base
  protect_from_forgery
  
  helper_method :current_user, :admin?, :require_login, :require_admin
  
  private
    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
    
    def admin?
      current_user && current_user.admin
    end
    
    def require_login
      unless current_user
        flash[:info] = "You need to log in first."
        redirect_to login_path
      end
    end
    
    def require_admin
      unless admin?
        flash[:warning] = "You are not authorize for this page."
        redirect_to root_path
      end
    end
  
end
