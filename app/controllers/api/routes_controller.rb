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
  end

  def create
  end

  def destroy
  end

  def update

  end

  private

  def route_params
    params.require(:route).permit(:city, :distance, :name)
  end

  def find_route
    @route = Route.find(params[:id])
  end

end
