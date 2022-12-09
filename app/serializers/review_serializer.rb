class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :game_id
  has_one :game
  has_one :user
end
