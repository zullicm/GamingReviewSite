class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :comment, presence: true
  validates :comment, length: { maximum: 90 }
  validates :rating, presence: true

end
