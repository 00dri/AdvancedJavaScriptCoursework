(function (vehicleShop) {
	var categories;

	vehicleShop.generateData();
	categories = vehicleShop.getCategories();

	vehicleShop.loadHtml('#categories', categories);

	// For testing
	console.log(categories);
}(vehicleShop));