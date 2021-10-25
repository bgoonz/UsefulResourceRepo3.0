require 'spec_helper'

describe "Users", type: :request do
  before :each do
    @user = FactoryGirl.create(:user) #User.create!(email: "test@adrianmejia.com", password: "1234", name: "test")
  end
  
  describe "user can login" do
    it "fields in place" do
      visit login_path
      page.should have_content("Email")
      page.should have_content("Password")  
    end
    
    it "allows user to login" do
      # user login
      visit login_path
      fill_in "Email", with: @user.email
      fill_in "Password", with: "1234"
      click_button "Login"
      page.should have_content("Exercise")
    end
    
    describe "user logged in" do
      before :each do
        #login
        visit login_path
        fill_in "Email", with: @user.email
        fill_in "Password", with: "1234"
        click_button "Login"
        page.should have_content("Exercise")
        
        @e = FactoryGirl.create(:exercise)
        @o = FactoryGirl.create(:operation)
        @e.operations << @o
      end
      
      it "should have description and start button" do
        page.should have_content("Exercise")
        visit exercise_path(@e.id)
        page.should have_content(@e.short_description)
        #page.should have_content(@e.long_description)
        page.should have_content("Start")
      end
      
      it "should be able to execute the exercises correctly"
        
    end
    
  end
end
