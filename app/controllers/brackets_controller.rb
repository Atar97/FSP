class BracketsController < ApplicationController

  def index
    @brackets = Bracket.all
  end

  def show
    @bracket = Bracket.find(params[:id])
  end

  def new
  end

  def create
    @bracket = Bracket.new(name: params[:bracket_name])
    if @bracket.save
      params[:bracket_matchup].each do |matchup_id, choice|
        puts choice.inspect
        BracketMatchup.create(bracket: @bracket, matchup_id: matchup_id, choice: choice)
      end
    end
    redirect_to(bracket_path(@bracket))
  end

  def admin
    if request.get?
      set_rounds
    elsif request.post?
      params[:matchup_winners].each do |matchup_id, winner|
        if winner.present?
          Matchup.find(matchup_id).update!(winner: winner)
        end
      end
      redirect_to(brackets_path)
    end
  end

private

  before_action(:set_rounds, only: %w[ new index ])

  def set_rounds
    @rounds = (1..4).map { |num| Matchup.where(round: num).sort }
  end

end
