class AddWorkflowStateColumnToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :workflow_state, :string, default: 'awaiting_payment'

    if Order.new.respond_to?(:completed)
      Order.where(completed: true).update_all(workflow_state: 'awaiting_delivery')
    end

    remove_column :orders, :completed, :boolean, default: false

    add_index :orders, [:orderable_id, :orderable_type]
    add_index :orders, :workflow_state
  end
end
