class BracketsController < ApplicationController

  def index
    @brackets = Bracket.all.preload(:bracket_matchups)
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
      redirect_to(bracket_path(@bracket))
    else
      redirect_to(new_bracket_path)
    end
  end

  def admin
    if request.get?
      @brackets = Bracket.all
      return redirect_to(brackets_path, alert: "Where do you think you're going?") if params[:password] != "scroopy-noops"
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

  def seed
    if Matchup.count == 0
      Matchup.seed
    end
    redirect_to(brackets_path, notice: "Matchups Seeded")
  end

  def destroy
    @bracket = Bracket.find(params[:id])
    if @bracket
      @bracket.destroy
    end
    redirect_to(admin_brackets_path(password: "scroopy-noops"))
  end

  def introduction

  end

private

  before_action(:set_rounds, only: %w[ new index ])

  def set_rounds
    @rounds = (1..4).map { |num| Matchup.where(round: num).sort }
  end

end
