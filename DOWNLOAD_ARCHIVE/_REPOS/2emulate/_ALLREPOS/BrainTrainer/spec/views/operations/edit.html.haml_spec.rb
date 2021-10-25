require 'spec_helper'

describe "operations/edit" do
  before(:each) do
    @operation = assign(:operation, stub_model(Operation,
      :numbers => "MyText",
      :operator => "MyString",
      :align => "MyString"
    ))
  end

  it "renders the edit operation form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => operations_path(@operation), :method => "post" do
      assert_select "textarea#operation_numbers", :name => "operation[numbers]"
      assert_select "input#operation_operator", :name => "operation[operator]"
      assert_select "input#operation_align", :name => "operation[align]"
    end
  end
end
