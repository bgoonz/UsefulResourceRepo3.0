# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  root                   :boolean          default(FALSE)
#  provider               :string(255)
#  uid                    :string(255)
#  name                   :string(255)
#  username               :string(255)
#  image                  :text
#  raw                    :hstore
#  admin                  :boolean          default(FALSE)
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:facebook]
  has_many :projects, dependent: :destroy
  has_many :contributions

  validates :password, :confirmation => true,
            :length => {:within => 6..40},
            :allow_blank => true,
            :on => :update

  FORBIDDEN_COUNTRIES = %w|IN TW MY SG|

  def emailname
    self.name || self.username || self.email.gsub(/@.*$/, '')
  end

  def admin?
    admin
  end

  def self.find_for_facebook_oauth(auth, signed_in_resource=nil)
    user = signed_in_resource || where(email: auth.info.email).first ||
           where(auth.slice(:provider, :uid)).first_or_initialize

    user.tap do |u|
      u.provider = auth.provider
      u.uid = auth.uid
      u.email = auth.info.email if u.email.blank?
      u.password = Devise.friendly_token[0,20] if u.encrypted_password.blank?
      u.name = auth.info.name if u.name.blank?
      u.image = auth.info.image if u.image.blank?
      u.raw = auth.to_hash
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end
end
