class AddColumnRawToUsers < ActiveRecord::Migration
  def change
    add_column :users, :raw, :hstore
    remove_column :users, :raw_info
  end
end
