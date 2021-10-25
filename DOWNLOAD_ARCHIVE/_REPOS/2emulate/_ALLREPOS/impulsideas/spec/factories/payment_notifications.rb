# == Schema Information
#
# Table name: payment_notifications
#
#  id              :integer          not null, primary key
#  params          :text
#  payment_status  :string(255)      default("unprocessed")
#  transaction_id  :string(255)
#  contribution_id :integer
#  created_at      :datetime
#  updated_at      :datetime
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :payment_notification do
    params "MyText"
    status "MyString"
    transaction_id "MyString"
    contribution_id 1
  end
end
