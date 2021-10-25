class Score < ActiveRecord::Base
  belongs_to :user
  belongs_to :exercise
  attr_accessible :rating, :time
  
  # validates :rating, :time, numericality: true
  # validates :rating, inclusion: { in: 0..100 }
  # validates :time, inclusion: { mininum: 0 }
  # changed remove attempts. the number of attempts are implicity gotten with @user.scores.count
end
