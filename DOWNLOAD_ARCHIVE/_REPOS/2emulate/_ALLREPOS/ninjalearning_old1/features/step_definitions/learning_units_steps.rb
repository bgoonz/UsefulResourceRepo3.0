When /^I add a url in the form$/ do
  fill_in 'add_url', :with => 'http://guides.rubyonrails.org/'
  click_on 'Fetch'
end

Then /^I should be able to add the urls$/ do
  attach_file 'upload', '/features/step_definitions/files/sample.pdf'
end