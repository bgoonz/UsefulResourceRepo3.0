class CreateOrders < ActiveRecord::Migration
  def change
    enable_extension 'hstore'

    create_table :orders do |t|
      t.belongs_to :user, index: true
      t.references :orderable, polymorphic: true
      t.string :payment_uid
      t.decimal :amount, precision: 8, scale: 2
      t.string :description
      t.hstore :raw
      t.boolean :completed, default: false, index: true

      t.timestamps
    end
  end
end
