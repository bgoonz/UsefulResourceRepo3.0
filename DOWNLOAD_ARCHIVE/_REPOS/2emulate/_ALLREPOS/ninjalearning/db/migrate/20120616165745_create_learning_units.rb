class CreateLearningUnits < ActiveRecord::Migration
  def change
    create_table :learning_units do |t|
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
