require 'spec_helper'

describe "exercises/show" do
  before(:each) do
    @exercise = assign(:exercise, stub_model(Exercise,
      :no => 1,
      :short_description => "Short Description",
      :long_description => "MyText",
      :operation => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
    rendered.should match(/Short Description/)
    rendered.should match(/MyText/)
    rendered.should match(//)
  end
end
