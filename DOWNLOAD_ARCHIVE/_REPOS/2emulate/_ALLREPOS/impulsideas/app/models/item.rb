# == Schema Information
#
# Table name: items
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  picture     :string(255)
#  description :text
#  price       :decimal(, )
#  stock       :integer
#  user_id     :integer
#  project_id  :integer
#  created_at  :datetime
#  updated_at  :datetime
#
# Indexes
#
#  index_items_on_project_id  (project_id)
#  index_items_on_user_id     (user_id)
#
# TODO: can be created as orphans but not published.
# TODO: state orphan, adoping, adopeted
# TODO: published when adopted
# TODO: percentage to support the project: 10% - 100%
# TODO: not changed after first buyer.
# TODO: location
# TODO: phone number
#
class Item < ActiveRecord::Base
  mount_uploader :picture, PictureUploader
  belongs_to :user
  belongs_to :project
  has_many :orders, as: :orderable

  validates :title, presence: true
  validates :description, presence: true
  validates :price, presence: true,
    numericality: { greater_than_or_equal_to: 0.0 }
  validates :stock, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :user_id, presence: true

  def to_param
    "#{id} #{title}".parameterize
  end

  def sold_out?
    self.stock <= 0
  end
end
