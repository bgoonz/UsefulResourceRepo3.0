class AddColumnsToUser < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string
    add_column :users, :uid, :string
    add_column :users, :name, :string
    add_column :users, :username, :string
    add_column :users, :image, :text
    add_column :users, :raw_info, :text
  end
end
