class CreateMarkers < ActiveRecord::Migration[5.2]
  def change
    create_table :markers do |t|
      t.integer :route_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :sequence, null: false
      t.boolean :last, default: false

      t.timestamps
    end
    add_index :markers, :route_id
  end
end
