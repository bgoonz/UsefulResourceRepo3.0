require 'spec_helper'

describe Operation do
  before :each do
    @operation = FactoryGirl.create(:operation)
  end
  
  context "validations" do
    it "should be valid" do
      @operation.should be_valid
    end
    it "should be invalid without numbers" do
      @operation.numbers = ""
      @operation.should_not be_valid
    end
    
    it "should be invalid without operator" do
      @operation.operator = ""
      @operation.should_not be_valid
    end
    
    it "should be invalid without aligniation" do
      @operation.align = ""
      @operation.should_not be_valid
    end
    
  end
  context "calculating operations answers" do
    
    it "gets the correct answer for sum exersice" do
      @operation.answer.should be 20
    end
  
    it "gets the correct answer for substraction exersice" do
      @operation.should be_valid
      @operation.operator = "-"
      @operation.answer.should be -16
    end
    
    it "gets the correct answer for substraction exersice with positive result" do
      @operation.should be_valid
      @operation.numbers = "256,002,4"
      @operation.operator = "-"
      @operation.answer.should be 250
    end
  
    it "gets the correct answer for multiplication exersice" do
      @operation.operator = "*"
      @operation.answer.should be 336
    end
  
    it "gets the correct answer for division exersice bigger than 0" do
      @operation.numbers = "256,002,4"
      @operation.operator = "/"
      @operation.answer.should be 32
    end
    
  end
  
end
