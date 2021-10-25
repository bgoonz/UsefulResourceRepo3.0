class ChangePasswordToPasswordEncrypted < ActiveRecord::Migration
  def change
    rename_column :users, :password, :password_encrypted
  end
end
