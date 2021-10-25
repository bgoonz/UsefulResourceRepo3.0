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

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :project do
    sequence(:title){|n| "MyString#{n}" }
    short_description "MyString"
    media_link "http://www.youtube.com/watch?v=EDUpiVwi6lw"
    extended_description "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel sem eu lectus dictum ornare amet."
    funding_goal 1522.3
    funding_duration 50
    category "MyString"
    tags "MyString"
    association :user
  end
end
