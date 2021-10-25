require 'spec_helper'

describe "Users" do
  describe "GET /users" do
    it "works! (now write some real specs)" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get users_path  
      response.status.should be(200)
    end # it works
  end # describe
  
  describe "signup" do
    describe "failure" do
      it "should not make a new user" do
        visit register_path
        fill_in "Name", :with => ""
        fill_in "Email", :with => ""
        fill_in "Password", :with => ""
        fill_in "Password Confirmation", :with => ""
        click_button
        response.should render_template('users/new')
        response.should have_selector("div#error_explanation")
      end
    end
    describe "sign in/out" do
      describe "failure" do
        it "should not sign a user in" do
          visit login_path
          fill_in :email, :with => ""
          fill_in :password, :with => ""
          click_button
          response.should have_selector("div#error_explanation h2", :content => "Invalid")
        end
      end
    end
    describe "success" do
      it "should make a new user" do
        lambda do
          visit register_path
          fill_in "Name", :with => "Example User"
          fill_in "Email", :with => "user@example.com"
          fill_in "Password", :with => "foobar"
          fill_in "Password Confirmation", :with => "foobar"
          click_button
          response.should have_selector("p#notice", :content => "Welcome Example User!")
          response.should render_template('users/show')
        end.should change(User, :count).by(1)
      end 
    end #describe success
  end #describe sign-up
end #Users
