class Api::V1::SessionsController < Api::V1::ApplicationController
  skip_before_action :authenticate_user

  def login
    unless params[:email] && params[:password]
      render status: :unauthorized,
             json: { success: false }
    end

    action = AuthenticateUserService.call(
      email: params[:email],
      password: params[:password]
    )

    if action.success?
      render json: {
        auth_token: action.result[:jwt],
      }
    else
      render json: { error: action.errors.messages, message: 'Email или пароль неверны' }, status: :unauthorized
    end
  end
end
