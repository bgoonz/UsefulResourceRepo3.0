Feature: Add learning unit
  In order to add new content
  As a registered user
  I want to add links and upload files

	Scenario: User adds a link
	  Given I visit the home page
	  When I add the "http://guides.rubyonrails.org" link
		Then the link "http://guides.rubyonrails.org" should show up in the main page
	  #Then It should show up in the main page with the title "Ruby on Rails Guide"
	
	Scenario: User upload a file
		Given I visit the home page
		When I upload the file "features/files/ninjalearning-wireframe.pdf"
		Then the file name should show up in the main page with the name "ninjalearning-wireframe.pdf"
