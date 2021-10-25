class AddMediaLinkToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :media_link, :string
    add_column :projects, :media_meta, :text
    add_column :projects, :project_url, :string
  end
end
