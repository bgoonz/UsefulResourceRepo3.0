class CreateOperations < ActiveRecord::Migration
  def change
    create_table :operations do |t|
      t.text :numbers
      t.string :operator
      t.string :align

      t.timestamps
    end
  end
end
