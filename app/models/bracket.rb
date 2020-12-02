class Bracket < ApplicationRecord
  validates :name, presence: :true

  has_many :bracket_matchups
  has_many :matchups, through: :bracket_matchups

end
