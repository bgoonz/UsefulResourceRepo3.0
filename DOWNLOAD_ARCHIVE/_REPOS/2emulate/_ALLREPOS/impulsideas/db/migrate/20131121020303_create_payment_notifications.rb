class CreatePaymentNotifications < ActiveRecord::Migration
  def change
    create_table :payment_notifications do |t|
      t.text :params
      t.string :payment_status, default: 'unprocessed'
      t.string :transaction_id
      t.integer :contribution_id

      t.timestamps
    end
  end
end
