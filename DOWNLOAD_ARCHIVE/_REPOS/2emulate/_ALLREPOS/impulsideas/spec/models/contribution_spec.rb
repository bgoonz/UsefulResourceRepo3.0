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

require 'spec_helper'

describe Contribution do
  it { should belong_to(:user) }
  it { should belong_to(:project) }
  it { should have_many(:payment_notifications) }
  it { should validate_presence_of(:amount) }
  it { should validate_numericality_of(:amount).is_greater_than(0) }
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:project_id) }

  context '.preapproval_params' do
    let(:project) { FactoryGirl.create :project }
    let(:contribution) { FactoryGirl.create :contribution, project: project, amount: 100.0 }

    it 'has amount' do
      contribution.preapproval_params[:maxTotalAmountOfAllPayments].should be 100.0
    end

    it 'has cancel url' do
      contribution.preapproval_params[:cancelUrl].should == "http://0.0.0.0:3000/projects/#{project.id}/contributions/new"
    end

    it 'has return url' do
      contribution.preapproval_params[:returnUrl].should == "http://0.0.0.0:3000/projects/#{project.id}"
    end

    it 'has IPN url' do
      contribution.preapproval_params[:ipnNotificationUrl].should == "http://0.0.0.0:3000/ipn_notifications/#{contribution.id}"
    end
  end

  context '.paypal' do
    pending 'test paypal API mock it out'
  end
end
