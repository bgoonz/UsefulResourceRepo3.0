class RemovePostIdFromTags < ActiveRecord::Migration
  def up
    remove_column :tags, :post
  end

  def down
    add_column :tags, :post, :references
  end
end
