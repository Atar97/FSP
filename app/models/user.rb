# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  DOB             :date             not null
#  gender          :string
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  country         :string
#

class User < ApplicationRecord
  validates :email, :fname, :lname,
  :DOB, :session_token, :password_digest, presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  before_validation :ensure_session_token

  has_many :routes,
  foreign_key: :creator_id

  has_many :workouts

  attr_reader :password

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(password_digest).is_password?(pw)
  end

  def self.find_by_email(email, pw)
    user = User.find_by(email: email)
    if user && user.is_password?(pw)
      return user
    end
    nil
  end

  def self.token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.token
  end

  def reset_session_token!
    self.session_token = User.token
    self.save
    self.session_token
  end

  def self.create_demo_user
    User.create({email: Faker::Internet.email,
      fname: Faker::Name.first_name,
      lname: Faker::Name.last_name,
      DOB: Faker::Date.birthday(16, 120),
      password: 'starwars',
      gender: ['F', 'M'].shuffle[0],
      country: Faker::WorldCup.team})
  end
end
