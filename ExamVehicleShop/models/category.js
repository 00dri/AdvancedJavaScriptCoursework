var vehicleShop = vehicleShop || {};

(function (scope) {
	'use strict';
	
	var id = 0;

	function Category(name){
		this._id = ++id;
		this.name = name;
		this._vehicles = [];
	}

	Category.prototype.addVehicle = function addVehicle(vehicle) {
		this._vehicles.push(vehicle);
	}

	Category.prototype.deleteVehicle = function (vehicle) {
		var index = this._vehicles.indexOf(vehicle);
		this._vehicles.splice(index, 1);
	}

	Category.prototype.deleteVehicleById = function (vehicleId) {
		var vehicle = this._vehicles.filter(function (vehicle) {
			return vehicle._id === vehicleId;
		});
		this.deleteVehicle(vehicle);
	}

	Category.prototype.getVehicles = function () {
		return this._vehicles;
	}

	scope.getCategory = function (name) {
		return new Category(name);
	};
}(vehicleShop));