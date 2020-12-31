Matchup.where(round: 1).each_slice(2) do |slice|
  winners = slice.map(&:winner).flatten
  Matchup.find(slice.first.id + 8).update(choices: winners)
end
