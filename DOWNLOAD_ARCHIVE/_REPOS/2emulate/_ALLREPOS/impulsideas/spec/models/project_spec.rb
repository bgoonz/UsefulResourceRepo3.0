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

require 'spec_helper'

describe Project do
  subject { FactoryGirl.build :project }
  let(:invalid_links) { %w[scheme://domain:port/path?query_string#fragment_id ftp://ftp.is.co.za/rfc/rfc1808.txt ldap://[2001:db8::7]/c=GB?objectClass?one] }
  let(:valid_links) { %w[http://files.amr.com:8080/hello?s=562?10 https://www.youtube.com/watch?v=W06qYx2ouSQ] }

  it { should belong_to :user }
  it { should_not have_many :contributions }
  it { should have_many :orders }
  it { should have_many :items }
  it { should validate_presence_of :title }
  it { should validate_presence_of :short_description }
  it { should validate_presence_of :extended_description }
  it { should validate_presence_of :funding_goal }
  it { should validate_presence_of :funding_duration }
  it { should validate_presence_of :media_link }
  it { should ensure_length_of(:short_description).is_at_least(5) }
  it { should ensure_length_of(:extended_description).is_at_least(50) }
  it { should validate_numericality_of(:funding_goal).is_greater_than(0.0) }
  it { should validate_numericality_of(:funding_duration).is_greater_than(0).is_less_than_or_equal_to(90) }
  it { should ensure_length_of(:short_description).is_at_least(5) }
  [:media_link, :project_url].each do |attribute|
    it { should allow_value(valid_links).for(attribute)}
    it { should_not allow_value(invalid_links).for(attribute)}
  end

=begin
  let(:user) { FactoryGirl.create :user }
  let(:project) { FactoryGirl.create :project, funding_goal: 1000 }

  context '.funding_percentage' do
    it 'should have zero when no contribution' do
      project.funding_percentage.should be 0.0
    end

    it 'should calculate percentage when contributions' do
      project.contributions.create!({amount: 200, user: user, payment_status: 'ACTIVE' })
      project.funding_percentage.should be 20.0
    end
  end

  context '.total_contributed' do
    describe 'with no contributors' do
      it 'should be zero' do
        @project = FactoryGirl.create :project
        @project.total_contributed.should be 0.0
      end
    end

    describe 'with one contributor' do
      before :each do
        @project = FactoryGirl.create :project
        @project.contributions.create!({amount: 3.4, user_id: user.id, payment_status: 'ACTIVE' })
        @project.contributions.create!({amount: 7.5, user_id: user.id, payment_status: 'ACTIVE' })
        @project.save!
      end

      it 'gets total contributed' do
        @project.total_contributed.should == (3.4 + 7.5)
      end

      it 'get number of contributors' do
        @project.total_contributors.should == 1
      end
    end

    describe 'with multiple contributors' do
      before :each do
        @user = FactoryGirl.create :user
        @project = FactoryGirl.create :project
        @project.contributions.build({amount: 20, user_id: user.id, payment_status: 'ACTIVE'  })
        @project.contributions.build({amount: 7503, user_id: @user.id, payment_status: 'ACTIVE'  })
        @project.save!
      end

      it 'gets total contributed' do
        @project.total_contributed.should == (7523)
      end

      it 'gets number of contributors' do
        @project.total_contributors.should == 2
      end
    end
  end
=end
end
