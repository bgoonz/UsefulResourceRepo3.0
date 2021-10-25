# == Schema Information
#
# Table name: contributions
#
#  id             :integer          not null, primary key
#  amount         :float
#  project_id     :integer
#  user_id        :integer
#  payment_status :string(255)      default("UNPROCESSED")
#  anonymous      :boolean          default(FALSE)
#  created_at     :datetime
#  updated_at     :datetime
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :contribution do
    amount 1.5
    payment_status 'ACTIVE'
    association :user
    association :project
  end
end
