class Matchup < ApplicationRecord

  has_many :bracket_matchups

  after_update do
    bracket_matchups.each do |bracket_matchup|
      bracket_matchup.update!(correct: bracket_matchup.choice == winner)
    end
  end

  def choices=(value)
    self[:choices] = value.join(", ")
  end

  def choices
    self[:choices].split(", ")
  end

  def select_choices
    choices.map do |choice|
      [choice.titleize, choice]
    end
  end

  def title
    "THE TITLE"
  end

  class << self
    def seed
      destroy_all
      %w[
          cheese beef
          sausage chicken
          chocolate ice_cream
          peanut_butter dog_treat
          watermelon blueberry
          carrot artichoke
          bread goldfish
          popcorn noodle
        ].each_slice(2) do |choices|
        create(choices: choices, round: 1)
      end

      [1, 2, 3].each do |round|
        where(round: round).each_slice(2) do |matchups|
          create(round: round + 1, choices: matchups.map(&:choices).flatten)
        end
      end
    end
  end
end
