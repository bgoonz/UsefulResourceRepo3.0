require 'spec_helper'

describe User do
  before :each do
    @u = FactoryGirl.create(:user)
  end
  
  context "validation" do
    it "should be valid" do
      @u.should be_valid
    end
    it "gets an error without email" do
      @u.email = ""
      @u.should_not be_valid
    end
    
    it "gets an error without password" do
      @u.password = ""
      @u.save
      @u.should_not be_valid
    end
    
    it "gets an error with invalid email" do
      @u.email = "t@t.t"
      @u.should_not be_valid
    end
    
    it "not allow repeated emails" do
      u = User.new(email: @u.email, name: "a", password: "passw93")
      u.should_not be_valid
    end
    
  end
  
  context "authentication" do
    it "login" do
      User.authenticate(@u.email, @u.password).should_not be_nil
    end
    
    it "not login for non-existing user" do
      User.authenticate(@u.email+";", @u.password).should be_nil
    end
  end
  
  context "user score" do
  end
end
