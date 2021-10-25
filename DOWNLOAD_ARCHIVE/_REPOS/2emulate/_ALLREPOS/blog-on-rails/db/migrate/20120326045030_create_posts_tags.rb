class CreatePostsTags < ActiveRecord::Migration
  def change
    create_table :posts_tags, :id => false do |t|
      t.references :post, :tag
    end
    add_index :posts_tags, [:post_id, :tag_id]
  end
end
