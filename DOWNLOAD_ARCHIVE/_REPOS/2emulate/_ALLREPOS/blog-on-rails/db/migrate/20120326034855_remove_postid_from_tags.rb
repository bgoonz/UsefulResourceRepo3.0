class RemovePostidFromTags < ActiveRecord::Migration
  def up
    remove_column :tags, :post_id
      end

  def down
    add_column :tags, :post_id, :integer
  end
end
