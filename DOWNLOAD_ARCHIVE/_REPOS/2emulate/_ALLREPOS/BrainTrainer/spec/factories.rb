require 'faker'

FactoryGirl.define do
  
  # operation factory
  factory :operation do 
    numbers "2,3,7,8"
    operator "+"
    align "horizontal"
  end
  
  # exercise factory
  factory :exercise do
    no {1 + rand(1000)}
    short_description {Faker::Lorem.sentence}
    long_description {Faker::Lorem.paragraphs}
  end
  
  #user
  factory :user do
    email {Faker::Internet.email}
    password "123456"
    admin false
    name {Faker::Name.name}
  end  
end
