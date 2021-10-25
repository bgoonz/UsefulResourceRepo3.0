class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :short_description
      t.text :extended_description
      t.float :funding_goal
      t.integer :funding_duration
      t.string :category
      t.string :tags
      t.integer :user_id

      t.timestamps
    end
  end
end
