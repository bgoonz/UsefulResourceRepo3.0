require 'spec_helper'

describe "operations/show" do
  before(:each) do
    @operation = assign(:operation, stub_model(Operation,
      :numbers => "MyText",
      :operator => "Operator",
      :align => "Align"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/MyText/)
    rendered.should match(/Operator/)
    rendered.should match(/Align/)
  end
end
