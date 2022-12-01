class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :created_at
  has_one :user
end
