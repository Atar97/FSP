class Matchup < ApplicationRecord

  def choices=(value)
    self[:choices] = value.join(", ")
  end

  def choices
    self[:choices].split(", ")
  end

  class << self
    def seed
      destroy_all
      # round 1
      [
        %w[ cheese beef ],
        %w[ sausage chicken ],
      ].each do |choices|
        create(choices: choices, round: 1)
      end
      # round 2
      where(round: 1).each_slice(2) do |matchups|
        create(round: 2, choices: matchups.map(&:choices).flatten)
      end
    end
  end
end
