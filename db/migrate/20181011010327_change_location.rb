class ChangeLocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :city
    remove_column :users, :state
    add_column :users, :country, :string
  end
end
