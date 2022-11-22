class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :platform, :description, :rating
end
