require 'spec_helper'

describe "exercises/edit" do
  before(:each) do
    @exercise = assign(:exercise, stub_model(Exercise,
      :no => 1,
      :short_description => "MyString",
      :long_description => "MyText",
      :operation => nil
    ))
  end

  it "renders the edit exercise form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => exercises_path(@exercise), :method => "post" do
      assert_select "input#exercise_no", :name => "exercise[no]"
      assert_select "input#exercise_short_description", :name => "exercise[short_description]"
      assert_select "textarea#exercise_long_description", :name => "exercise[long_description]"
      assert_select "input#exercise_operation", :name => "exercise[operation]"
    end
  end
end
