class User < ApplicationRecord
  has_secure_password
  has_many :reviews
  has_many :games, through: :reviews

  validates :username, presence: true, uniqueness: true
  validates :profile_img, presence: true, uniqueness: true
  validates :password, presence: true

end
