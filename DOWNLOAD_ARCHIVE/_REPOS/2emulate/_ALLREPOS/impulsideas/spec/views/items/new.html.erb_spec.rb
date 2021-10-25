require 'spec_helper'

describe "items/new" do
  before(:each) do
    assign(:item, stub_model(Item,
      :title => "MyString",
      :description => "MyText",
      :price => "9.99",
      :stock => 1,
      :user => nil
    ).as_new_record)
  end

  it "renders new item form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", items_path, "post" do
      assert_select "input#item_title[name=?]", "item[title]"
      assert_select "textarea#item_description[name=?]", "item[description]"
      assert_select "input#item_price[name=?]", "item[price]"
      assert_select "input#item_stock[name=?]", "item[stock]"
      assert_select "input#item_user[name=?]", "item[user]"
    end
  end
end
