class Api::MarkersController < ApplicationController

  def create
    debugger
    @markers = Marker.create(marker_params[:markers])
  end

  def index
  end

  private

  def marker_params
    params.permit(markers: [])
  end
end
