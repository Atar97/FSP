class BracketsController < ApplicationController

  def index
    @brackets = Bracket.all
  end

  def show
    @bracket = Bracket.find(params[:id])
  end

  def new
    @rounds = (1..4).map { |num| Matchup.where(round: num) }
  end

  def create
    @bracket = Bracket.create(name: params[:bracket_name])
    params[:bracket_matchup].each do |matchup_id, choice|
      puts choice.inspect
      BracketMatchup.create(bracket: @bracket, matchup_id: matchup_id, choice: choice)
    end
    redirect_to(action: "show", id: @bracket.id)
  end

end
