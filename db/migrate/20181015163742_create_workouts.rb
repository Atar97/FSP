class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title, null: false
      t.date :date, null: false
      t.time :start_time
      t.text :body
      t.integer :route_id
      t.time :duration
      t.integer :distance

      t.timestamps
    end
    add_index :workouts, :route_id
  end
end
