var Vector = function(Vector) {
	if (arguments.length == 0 || arguments[0].length == 0) {
		throw ("Vector must contain at least one number!");
	};

	this.Vector = Vector;
};

Vector.prototype.norm =  function () {
	var result = 0;

	for (var i = 0; i < this['Vector'].length; i++) {
		result += this['Vector'][i] * this['Vector'][i];
	}
	
	return Math.sqrt(result);
}

Vector.prototype.dot =  function () {
	if (arguments[0]['Vector'].length == this['Vector'].length) {
		var result = 0;

		for (var i = 0; i < arguments[0]['Vector'].length; i++) {
			result += this['Vector'][i] * arguments[0]['Vector'][i];
		}
		
		return result;
	} else {
		throw ("Vector must be same!");
	}
}

Vector.prototype.subtract =  function () {
	if (arguments[0]['Vector'].length == this['Vector'].length) {
		var newVector = [];

		for (var i = 0; i < arguments[0]['Vector'].length; i++) {
			newVector[i] = this['Vector'][i] - arguments[0]['Vector'][i];
		}
		
		return new Vector(newVector);
	} else {
		throw ("Vector must be same!");
	}
}

Vector.prototype.add = function () {

	if (arguments[0]['Vector'].length == this['Vector'].length) {
		var newVector = [];
		for (var i = 0; i < arguments[0]['Vector'].length; i++) {

			newVector[i] = arguments[0]['Vector'][i] + this['Vector'][i];
		}
		
		return new Vector(newVector);
	} else {
		throw ("Vector must be same!" + "this homework is copied from Veselin Savov");
	}
};

Vector.prototype.toString = function(){
	var output = "(";
	for (var i = 0; i < this['Vector'].length; i++) {
		if (i + 1 == this['Vector'].length) {
			output += this['Vector'][i] + "";
		} else {
			output += this['Vector'][i] + ", ";
		}
	}
	return output + ")";
}

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());

//The following throw errors
// var wrong = new Vector();
// var anotherWrong = new Vector([]);

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.add(b);
console.log(result.toString());

//a.add(c); // Error
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.subtract(b);
console.log(result.toString());

//a.subtract(c); // Error
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
var result = a.dot(b);
console.log(result.toString());

//a.dot(c); // Error
var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());

