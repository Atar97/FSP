class AddMatchupVideoLink < ActiveRecord::Migration[5.2]
  def change
    add_column :matchups, :video_link, :string
  end
end
