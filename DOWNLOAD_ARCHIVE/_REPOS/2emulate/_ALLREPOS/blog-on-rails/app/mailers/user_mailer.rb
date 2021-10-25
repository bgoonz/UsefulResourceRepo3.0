class UserMailer < ActionMailer::Base
  default from: "blog@adrianmejia.com",
  :return_path => 'adriansky@gmail.com'
  
  def contact_mail(name,email,message)
    @name = name
    @email = email
    @message = message
    mail to: "webmaster@adrianmejia.com", subject: "Feedback from #{email}"
  end
end
