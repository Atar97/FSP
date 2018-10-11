class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 406
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def demo_user
    @user = User.create_demo_user
    login(@user)
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :fname,
    :lname, :DOB, :gender, :country)
  end
end
