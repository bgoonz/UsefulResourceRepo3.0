# == Schema Information
#
# Table name: orders
#
#  id             :integer          not null, primary key
#  user_id        :integer
#  orderable_id   :integer
#  orderable_type :string(255)
#  payment_uid    :string(255)
#  amount         :decimal(8, 2)
#  description    :string(255)
#  raw            :hstore
#  completed      :boolean          default(FALSE)
#  created_at     :datetime
#  updated_at     :datetime
#  workflow_state :string(255)      default("awaiting_payment")
#
# Indexes
#
#  index_orders_on_orderable_id_and_orderable_type  (orderable_id,orderable_type)
#  index_orders_on_user_id                          (user_id)
#  index_orders_on_workflow_state                   (workflow_state)
#

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :order do
    payment_uid "MyString"
    amount "9.99"
    description "MyString"
    association :user
  end
end
