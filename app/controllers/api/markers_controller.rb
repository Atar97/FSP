class Api::MarkersController < ApplicationController

  def create
    @markers = []
    route_id = params[:route_id].to_i
    params[:markers].each do |index, marker|
      new_marker = Marker.new
      new_marker.lat = marker[:lat]
      new_marker.lng = marker[:lng]
      new_marker.sequence = marker[:sequence]
      new_marker.last = marker[:last]
      new_marker.route_id = route_id
      new_marker.save
      @markers << new_marker
    end
    render :index
  end

  def index
    @markers = Marker.where(route_id: params[:route_id])
  end

  private


end
