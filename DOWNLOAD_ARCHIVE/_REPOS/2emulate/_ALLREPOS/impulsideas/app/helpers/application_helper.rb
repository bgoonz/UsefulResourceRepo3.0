module ApplicationHelper

  def display_base_errors resource
    return '' if (resource.errors.empty?) or (resource.errors[:base].empty?)
    messages = resource.errors[:base].map { |msg| content_tag(:p, msg) }.join
    html = <<-HTML
    <div class="alert alert-error alert-block">
      <button type="button" class="close" data-dismiss="alert">&#215;</button>
      #{messages}
    </div>
    HTML
    html.html_safe
  end

  def bootstrap_class_for(flash_type)
    case flash_type
      when "success", :success
        "alert-success"   # Green
      when "error", :error
        "alert-danger"    # Red
      when "alert", :alert
        "alert-warning"   # Yellow
      when "notice", :notice
        "alert-info"      # Blue
      else
        flash_type.to_s
    end
  end
end
