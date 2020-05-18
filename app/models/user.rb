class User < ApplicationRecord
  has_secure_password
  validates :password, length: { minimum: 6 }, on: :create
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }


  has_many :members
  has_and_belongs_to_many :groups, through: :members
  has_many :interests
end
