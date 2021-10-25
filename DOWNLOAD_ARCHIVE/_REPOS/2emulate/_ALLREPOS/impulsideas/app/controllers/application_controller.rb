class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # before_filter :check_country
  before_filter :configure_permitted_parameters, if: :devise_controller?
  DPARAMS = [:first_name, :last_name, :username, :email, :password, :password_confirmation, :name, :username]


  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) do |u|
        u.permit(*DPARAMS)
      end
      devise_parameter_sanitizer.for(:account_update) do |u|
        u.permit(*DPARAMS)
      end
    end

    def check_country
      results = Geocoder.search request.remote_ip
      logger.info "INFO: request.remote_ip = #{request.remote_ip}, GEO= #{results.inspect}, FORBIDDEN_COUNTRIES=#{User::FORBIDDEN_COUNTRIES}"
      return true unless results
      if results.any?{|result| User::FORBIDDEN_COUNTRIES.include?(result.data["country_code"]) }
        flash[:error] = "Lo sentimos, su pais no esta permitido todavía."
        render 'about/terms'
      end
    end
end
