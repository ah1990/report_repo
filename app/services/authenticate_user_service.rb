class AuthenticateUserService < ApplicationService

  def initialize(email:, password:)
    @email = email
    @password = password
  end

  def call
    if user
      {
        jwt: JsonWebToken.encode(user_id: user.id),
        user_id: user.id
      }
    end
  end

  def user
    user = User.find_by_email(@email)
    return user if user.try(:authenticate, @password)
    errors.add(:user_authentication, 'bad credentials')
    nil
  end

end
