class BracketsController < ApplicationController

  def index
    @brackets = Bracket.all
  end

  def show
    @bracket = Bracket.find(params[:id])
  end

  def new
    @round1 = Matchup.where(round: 1)
    @round2 = Matchup.where(round: 2)
    @round3 = Matchup.where(round: 3)
  end

  def create
    @bracket = Bracket.create(name: params[:bracket_name])
    params[:bracket_matchup].each do |matchup_id, choice|
      byebug
      BracketMatchup.create(bracket: @bracket, matchup_id: matchup_id, choice: choice)
    end
    render(:show)
  end

end
