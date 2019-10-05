class Api::V1::ApplicationController < Api::ApplicationController
  before_action :authenticate_user

  attr_reader :current_user

  private

  def authenticate_user
    @current_user = AuthRequestService.call(
      headers: request.headers
    ).result
    render json: { error: 'Not Authorized' }, status: :unauthorized unless @current_user
  end
end