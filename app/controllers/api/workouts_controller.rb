class Api::WorkoutsController < ApplicationController
  before_action :find_workout, only: [:edit, :destroy, :show]

  def index
    @workouts = Workout.find_by(user_id: params[:user_id])
  end

  def show
  end

  def destroy
    id = @workout.id
    @workout.destroy
    render json: {id: id}
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    @workout.start_time = workout_params[:startTime]
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages
    end
  end

  def edit
    @workout.start_time = workout_params[:startTime]
    if @workout.update(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages
    end 
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
