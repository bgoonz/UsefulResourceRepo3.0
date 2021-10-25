module OrdersHelper
  def link_to_events(order, user)
    if order.current_state.meta[order.who?(user)]
      html = []
      events = order.current_state.events
      events.keys.each do |action|
        style = events[action].meta[:style] || 'default'
        html << link_to(t(action.to_s),
                  event_order_path(order, action),
                  class: "btn btn-#{style} btn-xs",
                  role: 'button',
                  confirm: "Esta acción es reversible. Esta seguro que desea #{t action}?" )
      end
      html.join(" ")
    else
      style = order.current_state.meta[:style] || 'default'
      content_tag :span, class: "label label-#{style}" do
        t(order.workflow_state)
      end
    end
  end
end
