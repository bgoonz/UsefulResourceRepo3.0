module SpecTestHelper   
  def login_admin
    login(:admin)
  end

  def login(email)
    user = User.where(:email => email)
    request.session[:user_id] = user.id
  end

  def current_user
    User.find(request.session[:user_id])
  end
end