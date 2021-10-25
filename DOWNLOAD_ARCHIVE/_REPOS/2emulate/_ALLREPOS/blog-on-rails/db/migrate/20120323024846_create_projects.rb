class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.references :company
      t.date :start_date
      t.date :end_date
      t.text :description
      t.string :technologies

      t.timestamps
    end
    add_index :projects, :company_id
  end
end
