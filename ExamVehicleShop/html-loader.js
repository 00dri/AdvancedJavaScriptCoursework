var vehicleShop = vehicleShop || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
		vehiclesContainer = document.getElementById('vehicles'),
		detailsContainer = document.getElementById('details'),
		categoresUl = loadCategories(data);

		container.appendChild(categoresUl);

		categoresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var categoryId,
				category,
				vehiclesHtml;

				categoryId = parseInt(ev.target.getAttribute('data-id'));
				category = data.filter(function (category) {
					return category._id === categoryId;
				})[0];

				vehiclesHtml = loadVehicles(category.getVehicles());
				vehiclesContainer.innerHTML = vehiclesHtml.outerHTML;
				vehiclesContainer.setAttribute('data-category-id', categoryId);
			}
		});

		vehiclesContainer.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI' || ev.target.parentElement.tagName === 'LI') {
				var vehicle,
				vehicleId,
				vehicleIdStr,
				detailsHtml;

				vehicleIdStr = ev.target.getAttribute('data-id') || ev.target.parentElement.getAttribute('data-id');
				vehicleId = parseInt(vehicleIdStr);
				vehicle = getVehicleById(data, vehicleId);
				
				detailsContainer.setAttribute('data-vehicle-id', vehicleId);
				detailsHtml = loadDetails(vehicle.getReviews());
				detailsContainer.innerHTML = detailsHtml.outerHTML;
			}
		});

		detailsContainer.addEventListener('click', function (ev) {
			if (ev.target.getAttribute('class').indexOf('delete') > -1) {
				var vehicle,
				vehicleId,
				reviewId,
				reviewLi;

				vehicleId = parseInt(detailsContainer.getAttribute('data-vehicle-id'));
				reviewId = parseInt(ev.target.getAttribute('data-id'));

				vehicle = getVehicleById(data, vehicleId);
				vehicle.deleteReviewById(reviewId);

				reviewLi = ev.target.parentElement;
				reviewLi.parentElement.removeChild(reviewLi);
			}
		});

		var detailsContainer = document.querySelector('#details');
	}

	function loadCategories(categores) {
		var categoresUl = document.createElement('ul');
		categoresUl.setAttribute('class', 'nav navbar-nav');
		categores.forEach(function (category) {
			var liCategory = document.createElement('li');
			liCategory.innerHTML = category.name;
			liCategory.setAttribute('data-id', category._id);
			categoresUl.appendChild(liCategory);
		});

		return categoresUl;
	}

	function loadVehicles(vehicles) {
		var vehiclesUl = document.createElement('ul');
		vehicles.forEach(function (vehicle) {
			var liVehicle = document.createElement('li');
			liVehicle.setAttribute('data-id', vehicle._id);

			liVehicle.innerHTML = '<h3>' + vehicle.brand + '</h3>';
			liVehicle.innerHTML += '<div>Model: ' + vehicle.model + '</div>';
			liVehicle.innerHTML += '<div>Engine: ' + vehicle.engine + '</div>';
			liVehicle.innerHTML += '<div>Transmission: ' + vehicle.transmission + '</div>';
			liVehicle.innerHTML += '<div>Price: ' + vehicle.price + '$</div>';
			liVehicle.innerHTML += '<div>Reviews: ' + vehicle._reviews.length + '</div>';
			
			vehiclesUl.appendChild(liVehicle);
		});

		return vehiclesUl;
	}

	function loadDetails(reviews) {
		var div,
		reviewsHtmlTag;
		div = document.createElement('div');
		div.innerHTML += '<h2>Reviews</h2>';
		reviewsHtmlTag = getReviews(reviews);
		div.appendChild(reviewsHtmlTag);

		return div;
	}

	function getReviews(reviews) {
		var reviewsUl = document.createElement('ul');
		reviews.forEach(function (review) {
			var liReview = document.createElement('li');
			liReview.setAttribute('data-id', review._id);

			liReview.innerHTML = '<h4>' + review.author + '</h4>';
			liReview.innerHTML += '<div>Review: ' + review.content + '</div>';
			liReview.innerHTML += '<div>Date: ' + review.date + '</div>';
			liReview.innerHTML += '<button class="delete" data-id="' + review._id + '">Delete</button>';

			reviewsUl.appendChild(liReview);
		});

		return reviewsUl;
	}

	function getVehicleById(data, vehicleId) {
		var vehicles = [],
		vehiclesArr,
		vehicle;

		vehiclesArr = data.map(function (genre) {
			return genre._vehicles;
		});

		vehiclesArr.forEach(function (mArr) {
			vehicles = vehicles.concat(mArr);
		});

		vehicle = vehicles.filter(function (vehicle) {
			return vehicle._id === vehicleId;
		})[0];

		return vehicle;
	}

	scope.loadHtml = loadHtml;
}(vehicleShop));