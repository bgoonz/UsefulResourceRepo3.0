class ChangeShortDescriptionStringForShortDescriptionText < ActiveRecord::Migration
  def up
    remove_column :projects, :short_description
    add_column :projects, :short_description, :text
  end

  def down
    remove_column :projects, :short_description
    add_column :projects, :short_description, :string
  end
end
