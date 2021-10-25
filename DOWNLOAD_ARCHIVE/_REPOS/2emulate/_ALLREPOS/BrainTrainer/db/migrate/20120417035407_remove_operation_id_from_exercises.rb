class RemoveOperationIdFromExercises < ActiveRecord::Migration
  def up
    remove_column :exercises, :operation_id
    add_column :operations, :exercise_id, :integer
  end

  def down
    add_column :exercises, :operation_id, :integer
    remove_column :operations, :exercise_id
  end
end
