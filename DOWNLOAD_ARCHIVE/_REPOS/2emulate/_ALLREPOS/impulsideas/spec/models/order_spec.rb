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

require 'spec_helper'

describe Order do
  it { should_not serialize :raw }
  it { should belong_to :user }
  it { should belong_to :orderable }
  it { should belong_to :item }
  it { should validate_presence_of :amount }
  it { should validate_numericality_of :amount }
  it { should validate_presence_of :description }
  it { should validate_presence_of :amount }

  let(:order) do
    VCR.use_cassette('order') do
      FactoryGirl.create :order
    end
  end


  context '.item_availability' do
    let(:item) { FactoryGirl.create :item }

    it 'should not save when item out of stock' do
      item = FactoryGirl.create :item, stock: 0
      order.update_attributes orderable_type: 'Item', orderable_id: item.id
      order.should_not be_valid
      order.errors.full_messages.join(' ').should =~ /agotado/
    end

    it 'should save when item is in stock' do
      order.update_attributes orderable_type: 'Item', orderable_id: item.id
      order.should be_valid
      order.errors.full_messages.join(' ').should_not =~ /agotado/
    end
  end

  # scope tests

  context '.completed' do
    it 'should list a order when is a completed state' do
      order.update_attributes(workflow_state: 'completed')
      Order.completed.should == [order]
    end

    it 'should not list an order than is a awaiting_payment state' do
      Order.completed.should be_empty
    end
  end

  context '.by (project)' do
    let(:project) { FactoryGirl.create :project }

    it 'should have one order of $57.00'
  end

  context '.bought_items_by'
  context '.sold_items_by'
  context '.sold_projects_items_by'
end
