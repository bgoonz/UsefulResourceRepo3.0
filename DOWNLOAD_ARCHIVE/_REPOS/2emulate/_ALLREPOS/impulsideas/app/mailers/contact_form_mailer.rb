class ContactFormMailer < ActionMailer::Base

  default :from => "webmaster@impulsideas.com"

  def notification_email(user)
    @user = user
    mail(to: "#{user.recipients}",
      subject: "#{user.email} - Formulario de Contacto",
      from: "#{user.name} <#{user.email}>",
      reply_to: "#{user.name} <#{user.email}>")
  end
end
