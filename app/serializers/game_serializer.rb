class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_year, :platform, :description, :image, :reviews
end
