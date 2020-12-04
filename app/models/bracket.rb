class Bracket < ApplicationRecord
  validates :name, presence: :true

  has_many :bracket_matchups, dependent: :destroy
  has_many :matchups, through: :bracket_matchups

  def score
    sum = 0
    (1..4).each do |round|
      sum += round * bracket_matchups.select do |bracket_matchup|
        bracket_matchup.matchup.round == round && bracket_matchup.correct
      end.count
    end
    sum
  end

end
