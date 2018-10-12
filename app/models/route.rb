# == Schema Information
#
# Table name: routes
#
#  id         :bigint(8)        not null, primary key
#  creator_id :integer          not null
#  city       :string           not null
#  distance   :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Route < ApplicationRecord
  validates :creator_id, :city, :distance, :name, presence: true

  belongs_to :creator,
  class_name: :User,
  foreign_key: :creator_id

  has_many :markers

  def self.create_random_route(user_id)
    Route.create({
      creator_id: user_id,
      city: Faker::LordOfTheRings.location,
      distance: rand(2000),
      name: Faker::LordOfTheRings.character
      })
  end
end
