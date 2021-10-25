require 'spec_helper'

describe Score do
  before :each do 
    @u = FactoryGirl.create(:user)
    @e = FactoryGirl.create(:exercise)
    @o = FactoryGirl.create(:operation)
    @e.operations << @o
  
    @u.exercises << @e
    @s = @u.scores.first
    #@s = Score.create(user_id: @u.id, exercise_id: @e.id)
  end
  
  context "validations" do
    it "should be valid" do
      @s.should be_valid
    end
    
    it "rating between 0 and 100" do
      # for brevety multiple test in one (I'm aware I shouldn't but)
      @s.rating = 0
      @s.should be_valid      
      @s.rating = 100
      @s.should be_valid
      # @s.rating = -1
      # @s.should_not be_valid
      # @s.rating = 101
      # @s.should_not be_valid
    end
    
    #
    # not accessible
    #
    # it "shoudnt save without exercise" do
    #   @s.exercise_id = nil
    #   @s.should_not be_valid
    # end
    # it "shoudnt save without user" do
    #   @s.user_id = nil
    #   @s.should_not be_valid
    # end
  end
  
  context "user score" do
    it "should store the score of the user" do
      @s.time = 300
      @s.rating = 30
      @u.scores.count.should be 1
    end
  end
  
end