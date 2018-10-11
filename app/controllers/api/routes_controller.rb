class Api::RoutesController < ApplicationController
  before_action :find_route, only: [:show, :destroy, :update]

  def myindex
    @routes = Route.where(creator_id: current_user.id)
    render :index
  end

  def index
    @routes = Route.all
  end

  def show
    @user = User.find(@route.creator_id)
    render :user_show
  end

  def create
    @route = Route.new(route_params)
    @route.creator_id = current_user.id
    if @route.save
      render :show
    else
      render json: @route.errors.full_messages, status: 406
    end
  end

  def destroy
    @route.destroy
    render json: ['Route Destroyed']
  end

  def update
    if @route.update(route_params)
      render :show
    else
      render json: @route.errors.full_messages, status: 406
    end
  end

  private

  def route_params
    params.require(:route).permit(:city, :distance, :name)
  end

  def find_route
    @route = Route.find(params[:id])
  end

end
