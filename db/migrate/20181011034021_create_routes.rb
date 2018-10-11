class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :creator_id, null: false
      t.string :city, null: false
      t.integer :distance, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :routes, :creator_id
    add_index :routes, :city
  end
end
