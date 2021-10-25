class AddAdminToUser < ActiveRecord::Migration
  def change
    add_column :users, :admin, :boolean, default: false
    add_column :users, :name, :string
    User.update_all ["admin = ?", false]
  end
  
end
