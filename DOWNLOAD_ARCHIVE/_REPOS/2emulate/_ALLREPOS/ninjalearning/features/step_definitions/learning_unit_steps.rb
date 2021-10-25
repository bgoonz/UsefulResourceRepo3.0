Then /^show me the page$/ do
  save_and_open_page
end

When /^I visit the home page$/ do
  visit '/'
end

Given /^I'm in the homepage$/ do
  visit '/'
end

# ------ show learning unit
Given /^there is some content already$/ do
  @lu = LearningUnit.create(title: "RailsGuides", url: "http://guides.rubyonrails.org/")
end

Then /^should see all the content available$/ do
  visit '/'
  page.should have_link 'RailsGuides'
end


# ------ add learning unit

When /^I add the "(.*?)" link$/ do |url|
  fill_in 'add_url', :width => 'url'
end

Then /^the link "(.*?)" should show up in the main page$/ do |url|
  page.should have_content url
end

When /^I upload the file "(.*?)"$/ do |arg1|
  pending # express the regexp above with the code you wish you had
end

Then /^the file name should show up in the main page with the name "(.*?)"$/ do |arg1|
  pending # express the regexp above with the code you wish you had
end

# ------ navigation
Then /^I should see the following links:$/ do |links|
  links.raw.each do |link|
    page.should have_link link[0].to_s
  end
end

