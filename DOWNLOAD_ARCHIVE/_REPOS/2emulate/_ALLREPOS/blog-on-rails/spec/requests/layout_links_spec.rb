require 'spec_helper'

describe "Layout links" do
  describe "when not signed in" do
    it "should have a signin link" do
      visit root_path
      response.should have_selector("a", :href => login_path, :content => "Login")
    end
  end
  describe "when signed in" do
    before(:each) do
      @user = Factory(:user)
      visit login_path
      fill_in :email, :with => @user.email
      fill_in :password, :with => @user.password
      click_button
    end
    it "should have a signout link" do
      visit root_path
      response.should have_selector("a", :href => logout_path,:content => "Logout")
    end
    it "should have a profile link" do
      visit root_path
      response.should have_selector("a", :href => user_path(@user), :content => "Profile")
    end
  end
end