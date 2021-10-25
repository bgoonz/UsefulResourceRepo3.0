# == Schema Information
#
# Table name: projects
#
#  id                   :integer          not null, primary key
#  title                :string(255)
#  extended_description :text
#  funding_goal         :float
#  funding_duration     :integer
#  category             :string(255)
#  tags                 :string(255)
#  user_id              :integer
#  created_at           :datetime
#  updated_at           :datetime
#  media_link           :string(255)
#  media_meta           :text
#  project_url          :string(255)
#  short_description    :text
#
# TODO: 3 min. products.
# TODO: total_contributed (order payed and beyond) and total_completed ().
#
class Project < ActiveRecord::Base
  belongs_to :user

  has_many :items, dependent: :destroy
  has_many :orders, through: :items

  validates :title, presence: true
  validates :short_description, presence: true, length: { minimum: 5 }
  validates :extended_description, presence: true, length: { minimum: 50 }
  validates :funding_goal, presence: true, numericality: { greater_than: 0.0 }
  validates :funding_duration, presence: true, numericality: {
    greater_than: 0, less_than_or_equal_to: 90
  }
  validates :media_link, presence: true,
    format: URI::regexp(%w(http https))
  validates :project_url, :allow_blank => true,
    format: URI::regexp(%w(http https))

  after_save :get_video_info

  def to_param
    "#{id} #{title}".parameterize
  end

  def total_contributed
    Project.where(id: self.id)
      .where("orders.workflow_state='completed'")
      .joins(items: :orders)
      .sum(:amount)
      .to_f
  end

  def total_contributors
    Project.where(id: self.id)
      .where("orders.workflow_state='completed'")
      .joins(items: :orders)
      .select('DISTINCT orders.user_id').count
  end

  def time_left
    return 0 unless created_at
    left = funding_duration - ((Time.now - created_at)/1.day).round
    left > 0 ? left : 0
  end

  def funding_percentage
    return 0.0 unless funding_goal.to_f > 0
    ((total_contributed.to_f / funding_goal.to_f) * 100)
  end

  def get_video_info
    if self.media_link.present?
      video = VideoInfo.get self.media_link
      self.update_columns(media_meta: video.to_yaml)
    end
  end
end
