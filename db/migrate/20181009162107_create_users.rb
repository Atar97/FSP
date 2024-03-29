class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.date :DOB, null: false
      t.string :gender
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :city
      t.string :state

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token
  end
end
