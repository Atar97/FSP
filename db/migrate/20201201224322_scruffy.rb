class Scruffy < ActiveRecord::Migration[5.2]
  def change
    create_table :brackets do |t|
      t.string :name
      t.string :email
      t.timestamps
    end

    create_table :matchups do |t|
      t.integer :round
      t.string :choices
      t.string :winner
      t.timestamps
    end

    create_table :bracket_matchups do |t|
      t.belongs_to :bracket
      t.belongs_to :matchup
      t.string :choice
      t.boolean :correct
      t.timestamps
    end

  end
end
