class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.references :user, null: false
      t.references :exercise, null: false
      t.integer :rating
      t.integer :time

      t.timestamps
    end
    add_index :scores, :user_id
    add_index :scores, :exercise_id
  end
end
