require 'spec_helper'

describe HomeController do

  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

  describe "GET 'train'" do
    it "returns http success" do
      get 'train'
      response.should be_success
    end
  end

  describe "GET 'score'" do
    it "returns http success" do
      get 'score'
      response.should be_success
    end
  end

  describe "GET 'about'" do
    it "returns http success" do
      get 'about'
      response.should be_success
    end
  end

end
