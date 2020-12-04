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
    redirect_to("/brackets/#{@bracket.id}")
  end

  def admin

  end

private

  before_action(:set_rounds, only: %w[ new index ])

  def set_rounds
    @rounds = (1..4).map { |num| Matchup.where(round: num) }
  end

end
