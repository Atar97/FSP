class BracketMatchup < ApplicationRecord

  belongs_to :bracket
  belongs_to :matchup

  validate do
    if choice
      choice = choice.strip.downcase
      if !choice.in?(matchup.choices)
        errors.add(:choice, "acceptable choices for this round are #{matchup.choices}")
      end
    end
  end

  before_update do
    if choice == matchup.winner
      correct = true
    else
      correct = false
    end
  end

end
