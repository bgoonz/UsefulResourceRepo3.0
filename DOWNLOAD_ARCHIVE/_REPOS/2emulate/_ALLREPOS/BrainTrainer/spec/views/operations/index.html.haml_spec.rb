require 'spec_helper'

describe "operations/index" do
  before(:each) do
    assign(:operations, [
      stub_model(Operation,
        :numbers => "MyText",
        :operator => "Operator",
        :align => "Align"
      ),
      stub_model(Operation,
        :numbers => "MyText",
        :operator => "Operator",
        :align => "Align"
      )
    ])
  end

  it "renders a list of operations" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Operator".to_s, :count => 2
    assert_select "tr>td", :text => "Align".to_s, :count => 2
  end
end
