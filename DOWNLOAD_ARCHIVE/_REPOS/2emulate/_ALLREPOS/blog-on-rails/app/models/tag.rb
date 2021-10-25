class Tag < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: :slugged
  validates :name, presence: true, :uniqueness => {:case_sensitive => false }
  has_and_belongs_to_many :posts
end
