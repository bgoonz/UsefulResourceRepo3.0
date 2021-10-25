class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.integer :no
      t.string :short_description
      t.text :long_description
      t.references :operation

      t.timestamps
    end
    add_index :exercises, :operation_id
  end
end
