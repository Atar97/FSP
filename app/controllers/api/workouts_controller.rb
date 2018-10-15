class Api::WorkoutsController < ApplicationController

  def index
  end

  def show
  end

  def destroy
  end

  def create
  end 

  private
  def find_workout
    @workout = Workout.find(params[:id])
  end

  def workout_params
    params.require(:workout).permit(:title, :date, :start_time,
      :body, :distance, :duration)
  end
end
