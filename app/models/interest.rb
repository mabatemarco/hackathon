class Interest < ApplicationRecord
  has_many :sharedinterests
  has_many :users, through: :sharedinterests
end
