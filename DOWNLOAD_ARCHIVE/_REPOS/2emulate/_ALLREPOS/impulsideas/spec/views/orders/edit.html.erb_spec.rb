require 'spec_helper'

describe "orders/edit" do
  before(:each) do
    @order = assign(:order, stub_model(Order,
      :user => nil,
      :payment_uid => "MyString",
      :amount => "9.99",
      :description => "MyString"
    ))
  end

  it "renders the edit order form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", order_path(@order), "post" do
      assert_select "input#order_user[name=?]", "order[user]"
      assert_select "input#order_payment_uid[name=?]", "order[payment_uid]"
      assert_select "input#order_amount[name=?]", "order[amount]"
      assert_select "input#order_description[name=?]", "order[description]"
    end
  end
end
