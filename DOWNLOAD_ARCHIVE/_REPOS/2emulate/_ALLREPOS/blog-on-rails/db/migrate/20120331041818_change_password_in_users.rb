class ChangePasswordInUsers < ActiveRecord::Migration
  def change
    remove_column :users, :password
    add_column :users, :encrypted_password, :string
  end
end
