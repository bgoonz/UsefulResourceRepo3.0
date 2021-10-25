Feature: Show learning unit
  In order show all the learning units (courses,tutorials,ebooks)
  As a user
  I want see the list of resources available
  
	Scenario: show all content to the users
	  Given there is some content already 
	  When I visit the home page
	  #Then show me the page
		Then should see all the content available