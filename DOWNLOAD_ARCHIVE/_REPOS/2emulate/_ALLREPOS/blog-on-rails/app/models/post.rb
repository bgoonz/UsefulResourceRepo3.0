class Post < ActiveRecord::Base
  extend FriendlyId
  before_validation :check_tags
  
  friendly_id :title, use: [:slugged, :history]
  
  #validates :name, :presence => true
  validates :title, :presence => true, :length => { :minimum => 2}

  belongs_to :user  
  has_many :comments, dependent: :destroy, :autosave => true
  has_and_belongs_to_many :tags, :autosave => true
  
  accepts_nested_attributes_for :tags, allow_destroy: :true, 
    reject_if: proc{ |attrs| attrs.all?{|k,v| v.blank? } }
	
	
  private
	# Use an existing tag if it already exists.
	def check_tags
		tags.map! do |tag|
			existing_tag = Tag.find_by_name(tag.name)
			(existing_tag)? existing_tag : tag
		end
	end
end

=begin
	In a create operation under Rails, there are six callbacks before the database operation, and two after. In order, these are:

	before_validation
	before_validation_on_create
	after_validation
	after_validation_on_create
	before_save
	before_create
	DATABASE INSERT
	after_create
	after_save
=end