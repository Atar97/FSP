class BracketsController < ApplicationController

  def index
    @brackets = Bracket.all
  end

  def show
    @bracket = Bracket.find_by(name: params[:name])
  end

end
