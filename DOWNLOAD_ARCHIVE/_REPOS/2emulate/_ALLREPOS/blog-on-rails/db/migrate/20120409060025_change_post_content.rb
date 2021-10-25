class ChangePostContent < ActiveRecord::Migration
  def up
    remove_column :posts, :content
    add_column :posts, :content, :text
  end

  def down
    remove_column :posts, :content
    add_column :posts, :content, :string
  end
end
