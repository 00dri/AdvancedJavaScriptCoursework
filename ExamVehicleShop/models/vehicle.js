var vehicleShop = vehicleShop || {};

(function (scope) {
	'use strict';
	
	var id = 0;

	function Vehicle(brand, model, engine, transmission, price) {
		this._id = ++id;
		this.brand = brand;
		this.model = model;
		this.engine = engine;
		this.transmission = transmission;
		this.price = price;
		this._reviews = [];
	}

	Vehicle.prototype.addReview = function addReview(review) {
		this._reviews.push(review);
	}

	Vehicle.prototype.deleteReview = function (review) {
		var index = this._reviews.indexOf(review);
		this._reviews.splice(index, 1);
	}

	Vehicle.prototype.deleteReviewById = function (reviewId) {
		var review = this._reviews.filter(function (review) {
			return review._id === reviewId;
		});

		this.deleteReview(review);
	}

	Vehicle.prototype.getReviews = function () {
		return this._reviews;
	}

	scope.getVehicle = function(brand, model, engine, transmission, price) {
		return new Vehicle(brand, model, engine, transmission, price);
	}

}(vehicleShop));