class Group < ApplicationRecord
  has_many :members
  has_and_belongs_to_many :users, through: :members
end
