class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :picture
      t.text :description
      t.decimal :price
      t.integer :stock
      t.references :user, index: true
      t.references :project, index: true

      t.timestamps
    end
  end
end
