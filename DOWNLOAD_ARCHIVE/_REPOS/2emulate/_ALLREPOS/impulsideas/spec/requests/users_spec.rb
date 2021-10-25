require 'spec_helper'

feature "Signing in" do
  background do
    FactoryGirl.create :user, :email => 'user@example.com', :password => 'caplin2013'
  end

  scenario "Signing in with correct credentials" do
    visit '/users/sign_in'
    fill_in 'Email', :with => 'user@example.com'
    fill_in 'Contraseña', :with => 'caplin2013'
    click_button 'Sign in'
    expect(page).to have_content 'success'
  end

  given :other_user do
    FactoryGirl.build :user, :email => 'other@example.com', :password => 'rous21229'
  end

  scenario "Signing in as unregistered user" do
    visit '/users/sign_in'
    fill_in 'Email', :with => other_user.email
    fill_in 'Password', :with => other_user.password
    click_button 'Sign in'
    expect(page).to have_content 'Invalid email or password'
  end
end

feature 'Signing up' do
  scenario 'Signing up with correct credentials'
  scenario 'Signing up with missing fields'
end
