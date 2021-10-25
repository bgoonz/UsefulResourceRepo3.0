require 'spec_helper'

describe "exercises/new" do
  before(:each) do
    assign(:exercise, stub_model(Exercise,
      :no => 1,
      :short_description => "MyString",
      :long_description => "MyText",
      :operation => nil
    ).as_new_record)
  end

  it "renders new exercise form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => exercises_path, :method => "post" do
      assert_select "input#exercise_no", :name => "exercise[no]"
      assert_select "input#exercise_short_description", :name => "exercise[short_description]"
      assert_select "textarea#exercise_long_description", :name => "exercise[long_description]"
      assert_select "input#exercise_operation", :name => "exercise[operation]"
    end
  end
end
