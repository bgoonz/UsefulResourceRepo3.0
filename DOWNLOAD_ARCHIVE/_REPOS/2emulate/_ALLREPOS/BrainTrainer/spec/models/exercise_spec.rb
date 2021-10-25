require 'spec_helper'

describe Exercise do
  before :each do
    # TODO use FactoryGirl.build to speed up the test
    @ex = FactoryGirl.create(:exercise) 
    @op = FactoryGirl.create(:operation)
  end
  
  context "validations" do
    it "should be valid" do
      @ex.should be_valid
      @op.should be_valid
    end
    
    it "shouldn't allow exercises with the same number" do
      @ex = Exercise.create!(no: 5000, short_description: Faker::Lorem.sentence, long_description: Faker::Lorem.paragraph)
      @ex2 = Exercise.new(no: 5000, short_description: Faker::Lorem.sentence, long_description: Faker::Lorem.paragraph)
      @ex2.should_not be_valid
    end
    
  end
  
  context "calculating operations answers without any exercise" do
    it "answers should be nil" do
      @ex.answers.should be_nil
    end
    it "get total of correct answers in percentage: 'rate' method" do
      @ex.rate([20,40]).should be_nil
    end
  end
  
  context "calculating operations answers" do
    before :each do 
       @ex.operations << @op
    end
    
    it "get total of correct answers in percentage: 'rate' method" do
      @ex.rate([20]).should be 100
    end
    
    it "get total of incorrect answers in percentage: 'rate' method" do
      @ex.rate([90]).should be 0
    end
    
    it "get array of all the operations answers: 'answers' method" do
      @ex.answers.should eq [20]
    end
    it "get total of correct answers in percentage: 'check_answers' method" do
       @ex.check_answers([20]).should be true
    end
    
    context "multiple exercises" do
      before :each do 
        @op2 = Operation.create(numbers: "3,2,4", operator: "+", align:"vertical")
        @ex.operations << @op2
        @ans = [20,9]
      end

      it "get total of correct answers in percentage: 'rate' method" do
        @ex.rate([20,9]).should be 100
      end
      
      it "get total of incorrect answers in percentage: 'rate' method" do
        @ex.rate([10,9]).should be 50
      end
      
      it "get total of incorrect answers and incomplete in percentage: 'rate' method" do
        @ex.rate([9]).should be 0
      end

      it "get array of all the operations answers: 'answers' method" do
        @ex.answers.should eq @ans
      end
      it "get total of correct answers in percentage: 'check_answers' method" do
         @ex.check_answers(@ans).should be true
      end      
    end
    
    context "real-life exercises" do
      before :each do
        @e = Exercise.create!(no: 1, 
              short_description: "Add pairs that sum 10", 
              long_description: "Add the following numbers from top down by grouping pairs of numbers that sum 10.")
        no1 = ["7,6,4,5,1,9", "8,9,1,2,3,7", "4,5,5,5,4,6", "5,2,8,4,1,9", "6,4,6,3,2,8", "5,5,3,6,4,8",
           "5,4,6,6,3,7", "3,2,7,3,1,2", "8,2,9,8,1,9", "6,9,1,5,4,6", "5,5,3,2,4,6", "9,6,4,8,1,7", "3,7,6,2,8,8",
           "1,9,9,1,5,4", "6,4,4,5,4,3", "6,3,7,2,2,5", "1,3,7,9,3,7","7,6,2,8,5,5", "1,9,4,3,9,1", "1,5,5,9,4,6", 
           "6,4,7,6,3,7", "3,4,6,4,6,3","7,5,5,3,6,2", "4,9,1,3,2,8"]
        no1.each do |n|
         o = Operation.create!(numbers: n, operator: "+", align:"vertical")
         @e.operations << o
        end
        @a = [32,30,29,29,29,31,31,18,37,31,25,35,34,29,26,25,30,33,27,30,33,26,28,27]
      end
      
      it "should return the answer array" do
        @e.answers.should eq @a
      end
      
      it "should get a correct result" do
        @e.rate(@a).should be 100
      end
      
      it "gets the rate for 45% of correct answers" do
        @e.rate([32,30,29,29,29,31,31,18,37,31,25]).should be 45
      end
      
      it "gets the rate for 0% of correct answers" do
        @e.rate([26,25,30,33,27,30,33,26,28,27,32,30,29,18,37,31,25,35,34,29,29,29,31,31]).should be 0
      end
      
      it "gets the rate for 0% of correct answers with empty array" do
        @e.rate([]).should be 0
      end
      
      it "gets the rate for 100% of correct answers with overflow array" do
        @e.rate(@a + @a).should be 100
      end
      
    end
    
  end
  
end
