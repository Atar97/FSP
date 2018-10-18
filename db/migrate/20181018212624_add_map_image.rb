class AddMapImage < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :image_url, :text
  end
end
