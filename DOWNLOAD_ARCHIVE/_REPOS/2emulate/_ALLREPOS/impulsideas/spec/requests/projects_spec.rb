require 'spec_helper'

# FIXME: include bussiness flow...
# https://developer.paypal.com/webapps/developer/docs/classic/lifecycle/crowdfunding/

feature "Projects" do
  given(:user) { FactoryGirl.create :user }

  scenario 'anonymous users cannot create projects' do
    visit new_project_path
    expect(page).to have_content 'You need to sign in or sign up before continuing'
  end

  scenario "it succeed creating project when all the required fields are provided" do
    login_as user, scope: :user
    visit new_project_path
    fill_in 'Título', with: 'My Project'
    # fill_in :media, with: 'Photo or Video'
    fill_in 'Descripción Detallada', with: 'Bla bla bla'*33
    fill_in 'Meta', with: 930
    fill_in 'Duración', with: 60
    # fill_in 'Tags', with: 'test, capybara'
    #
    # TODO: collects the project owner's PayPal account (Log In with PayPal)
    # https://developer.paypal.com/webapps/developer/docs/classic/lifecycle/crowdfunding/
    # If the platform approves the project, it collects the project owner's PayPal account information through their Log In with PayPal (formerly PayPal Access) account.
    #
    click_button 'Salvar'
    expect(page).to have_content /success/i
  end

  scenario "created projects are displayed in the home page" do
    FactoryGirl.create :project,
      title: 'The awesome',
      short_description: 'Back us, this project is awesome'
    visit root_path
    expect(page).to have_content 'The awesome'
    expect(page).to have_content 'Back us, this project is awesome'
  end

  scenario 'creator can modify the project' do
    creator = FactoryGirl.create :user
    project = FactoryGirl.create :project, user: creator
    login_as creator, scope: :user
    visit edit_project_path(project)
    fill_in 'Descripción Detallada', with: 'support us! '*50
    click_button 'Update Project'
    expect(page).to have_content 'support us!'
  end

  scenario 'a user cannot modify a project is not his' do
    creator = FactoryGirl.create :user
    project = FactoryGirl.create :project, user: creator
    login_as user, scope: :user
    visit edit_project_path(project)
    expect(page).to have_content 'You cannot modify this project'
  end

  scenario 'a user cannot delete a project is not his'
  scenario "created projects can be shared on facebook"
end

feature "Backers" do
  given(:user) { FactoryGirl.create :user }

  scenario "Backers can make donations to a project" do
    project = FactoryGirl.create :project, user: user
    visit project_path(project)
    click_link 'Contribute now'
    fill_in 'contribution_amount', with: 23
    click_button 'Create Contribution'
    # After agreeing to the payment, the customer is redirected back to the platform and their preapproved amount is added to a running subtotal of the pledge amounts.
    # redirect to paypal and process payment
    # save_and_open_page
    expect(page).to have_content 'Contribution was successfully'
  end

  scenario "Backers can cancel donations"
end
