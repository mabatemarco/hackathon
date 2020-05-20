class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members
  has_many :posts
  has_many :users, through: :posts
  has_many :events
end
