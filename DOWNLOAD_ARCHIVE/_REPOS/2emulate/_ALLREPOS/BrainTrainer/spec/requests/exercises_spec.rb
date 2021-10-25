require 'spec_helper'

describe "Exercises" do
  
  describe "user can filling the exercise" do
    it "can " do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      get exercises_path
      response.status.should be(200)
    end
  end
  
end
