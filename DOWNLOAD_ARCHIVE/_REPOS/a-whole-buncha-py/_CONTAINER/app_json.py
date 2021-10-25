from os import environ
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from marshmallow_jsonapi.flask import Schema
from marshmallow_jsonapi import fields
from flask_rest_jsonapi import Api, ResourceDetail, ResourceList
from marshmallow_jsonapi.flask import Relationship
from flask_rest_jsonapi import ResourceRelationship

# Create a new Flask app
app = Flask(__name__)

# SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("SQLALCHEMY_DATABASE_URI")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Listing(db.Model):
    __tablename__ = "Listing"
    id = db.Column(db.BigInteger, primary_key=True, unique=True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    neighborhood_overview = db.Column(db.String)
    neighbourhood_cleansed = db.Column(db.String)
    neighbourhood_group_cleansed = db.Column(db.String)
    latitude = db.Column(db.DECIMAL)
    longitude = db.Column(db.DECIMAL)
    property_type = db.Column(db.String)
    room_type = db.Column(db.String)
    accommodates = db.Column(db.Integer)
    bathrooms = db.Column(db.Integer)
    beds = db.Column(db.Integer)
    amenities = db.Column(db.JSON)
    minimum_nights = db.Column(db.Integer)
    maximum_nights = db.Column(db.Integer)
    has_availability = db.Column(db.Integer)
    number_of_reviews = db.Column(db.Integer)
    number_of_reviews_ly = db.Column(db.Integer)
    number_of_reviews_l30d = db.Column(db.Integer)
    first_review = db.Column(db.DATE)
    last_review = db.Column(db.DATE)
    reviews_per_month = db.Column(db.Integer)
    review_scores_rating = db.Column(db.Integer)
    review_scores_accuracy = db.Column(db.Integer)
    review_scores_cleanliness = db.Column(db.Integer)
    review_scores_checkin = db.Column(db.Integer)
    review_scores_communication = db.Column(db.Integer)
    review_scores_location = db.Column(db.Integer)
    review_scores_value = db.Column(db.Integer)
    instant_bookable = db.Column(db.BOOLEAN)


class Host(db.Model):
    __tablename__ = "Host"
    id = db.Column(db.BigInteger, primary_key=True, unique=True)
    host_since = db.Column(db.DATE)
    host_name = db.Column(db.String)
    host_location = db.Column(db.String)
    host_about = db.Column(db.VARCHAR)
    host_response_time = db.Column(db.String)
    host_response_rate = db.Column(db.String)
    host_acceptance_rate = db.Column(db.String)
    host_is_superhost = db.Column(db.BOOLEAN)
    host_neighbourhood = db.Column(db.String)
    host_listings_count = db.Column(db.Integer)
    host_verifications = db.Column(db.JSON)
    host_has_profile_pic = db.Column(db.BOOLEAN)
    host_identity_verified = db.Column(db.BOOLEAN)
    listing_id = db.Column(db.BigInteger, db.ForeignKey("Listing.id"))
    listings = db.relationship(
        "Listing", backref=db.backref("comment_Listing", lazy=True)
    )


# Create the table for listings and hosts
db.create_all()


# Create data abstraction layer
class ListingSchema(Schema):
    class Meta:
        type_ = "Listing"
        self_view = "listing"
        self_view_kwargs = {"id": "<id>"}
        self_view_many = "listings"

    id = fields.Integer()
    name = fields.String()
    description = fields.String()
    neighborhood_overview = fields.String()
    neighbourhood_cleansed = fields.String()
    neighbourhood_group_cleansed = fields.String()
    latitude = fields.Float()
    longitude = fields.Float()
    property_type = fields.String()
    room_type = fields.String()
    accommodates = fields.Integer()
    bathrooms = fields.Integer()
    beds = fields.Integer()
    amenities = fields.Dict()
    minimum_nights = fields.Integer()
    maximum_nights = fields.Integer()
    has_availability = fields.Integer()
    number_of_reviews = fields.Integer()
    number_of_reviews_ly = fields.Integer()
    number_of_reviews_l30d = fields.Integer()
    first_review = fields.Date()
    last_review = fields.Date()
    reviews_per_month = fields.Integer()
    review_scores_rating = fields.Integer()
    review_scores_accuracy = fields.Integer()
    review_scores_cleanliness = fields.Integer()
    review_scores_checkin = fields.Integer()
    review_scores_communication = fields.Integer()
    review_scores_location = fields.Integer()
    review_scores_value = fields.Integer()
    instant_bookable = fields.Boolean()
    hosts = Relationship(
        self_view="listing_host",
        self_url_kwargs={"id": "<id>"},
        related_view="Hosts",
        many=True,
        schema="HostSchema",
        type_="Host",
    )


class HostSchema(Schema):
    class Meta:
        type_ = "Host"
        self_view = "Host"
        self_view_kwargs = {"id": "<id>"}
        self_view_many = "Hosts"

    host_since = fields.Date()
    host_name = fields.String()
    host_location = fields.String()
    host_about = fields.String()
    host_response_time = fields.Integer()
    host_response_rate = fields.Integer()
    host_acceptance_rate = fields.Integer()
    host_is_superhost = fields.Boolean()
    host_neighbourhood = fields.String()
    host_listings_count = fields.Integer()
    host_verifications = fields.Dict()
    host_has_profile_pic = fields.Boolean()
    host_identity_verified = fields.Boolean()


# Create resource managers and endpoints


class ListingsMany(ResourceList):
    schema = ListingSchema
    data_layer = {"session": db.session, "model": Listing}


class ListingOne(ResourceDetail):
    schema = ListingSchema
    data_layer = {"session": db.session, "model": Listing}


class HostsMany(ResourceList):
    schema = HostSchema
    data_layer = {"session": db.session, "model": Host}


class HostOne(ResourceDetail):
    schema = HostSchema
    data_layer = {"session": db.session, "model": Host}


class ListingHost(ResourceRelationship):
    schema = HostSchema
    data_layer = {"session": db.session, "model": Host}


api = Api(app)
api.route(ListingsMany, "listings", "/listings")
api.route(ListingOne, "listing", "/listing/<int:id>")

api.route(ListingsMany, "hosts", "/hosts")
api.route(ListingOne, "host", "/host/<int:id>")

api.route(ListingHost, "listing_host", "/Listings/<int:id>/relationships/hosts")

# main loop to run app in debug mode
if __name__ == "__main__":
    app.run(debug=True)
