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

require 'spec_helper'

describe Item do
  subject { FactoryGirl.build :item }

  it { should belong_to :user }
  it { should belong_to :project }
  it { should have_many :orders }
  it { should validate_presence_of :description }
  it { should validate_presence_of :price }
  it { should validate_numericality_of(:price).is_greater_than_or_equal_to(0.0) }
  it { should validate_presence_of :stock }
  it { should validate_numericality_of(:stock).only_integer.is_greater_than_or_equal_to(0) }
  it { should validate_presence_of :user_id }

  context '.sold_out' do
    it 'should be true if stock is 0' do
      item = FactoryGirl.create :item, stock: 0
      item.should be_sold_out
    end

    it 'should be false if stock is 1' do
      item = FactoryGirl.create :item, stock: 1
      item.should_not be_sold_out
    end
  end
end
