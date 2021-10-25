module ApplicationHelper
  def active?(title, element)
    if title and title.downcase.include? element.downcase
      "active"
    else
      ""
    end
  end
  
  def require_login
    unless signed_in?
      flash[:error] = "You must login first before access this section."
      redirect_to login_path
    end
  end
  
  def linkedin_link
    link_to "linkedin", "http://www.linkedin.com/in/adrianmejia", target: "_blank"
  end
  
  def resume_link
    link_to "resume", "http://dl.dropbox.com/u/5846396/Adrian%20Mejia%20Resume.pdf", target: "_blank"
  end
  
end
