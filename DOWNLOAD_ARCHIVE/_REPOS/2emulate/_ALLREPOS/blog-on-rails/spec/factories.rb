# By using the symbol ':user', we get Factory Girl to simulate the User model.
FactoryGirl.define :user do |user|
  user.name "Adrian Mejia"
  user.email "amejia@example.com"
  user.password "pass1234"
  user.password_confirmation "pass1234"
end
