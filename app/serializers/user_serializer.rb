class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_img, :password_digest
end
