class ApplicationController < ActionController::Base
  # skip_before_action :verify_authenticity_token
  # helper_method :current_user, :logged_in?
  # before_action :underscore_params!

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
      return true
    end
    nil
  end

  private

  def underscore_params!
    params.transform_keys!(&:underscore)
  end

end
