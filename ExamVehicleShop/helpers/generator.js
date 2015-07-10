var vehicleShop = vehicleShop || {};

(function (scope) {
	var categories = [],
		vehicles = [],
		reviews = [];

	function generateData() {
		var categoryCar,
			categorySUV,
			categoryMotorcycle;
		var vehicleAudi,
			vehicleMercedes,
			vehicleBMW,
			vehicleVolkswagen,
			vehicleDucatti,
			vehicleYamaha,
			vehicleKawasaki,
			vehicleChevy,
			vehicleToyota,
			vehicleGMC;

		// Generate categories
		categoryCar = vehicleShop.getCategory('Car');
		categorySUV = vehicleShop.getCategory('SUV');
		categoryMotorcycle = vehicleShop.getCategory('Motorcycle');
		categories = [categoryCar, categorySUV, categoryMotorcycle];

		// Generate Vehicles
		vehicleAudi = vehicleShop.getVehicle('Audi', 'A4', 'diesel', 'manual', 25000);
		vehicleMercedes = vehicleShop.getVehicle('Mercedes', 'CLS 500', 'petrol', 'automatic', 28000);
		vehicleBMW = vehicleShop.getVehicle('BMW', '740 d xDrive', 'diesel', 'automatic', 150000);
		vehicleVolkswagen = vehicleShop.getVehicle('Volkswagen', 'Passat', 'diesel', 'automatic', 24000);
		vehicleDucatti = vehicleShop.getVehicle('Ducatti', '848', 'petrol', 'manual', 14000);
		vehicleYamaha = vehicleShop.getVehicle('Yamaha', 'YZF-R1M', 'petrol', 'manual', 20000);
		vehicleKawasaki = vehicleShop.getVehicle('Kawasaki', 'Ninja', 'petrol', 'manual', 16000);
		vehicleChevy = vehicleShop.getVehicle('Chevrolet', 'Captiva', 'diesel', 'automatic', 33800);
		vehicleToyota = vehicleShop.getVehicle('Toyota', 'Hilux', 'diesel', 'automatic', 46999);
		vehicleGMC = vehicleShop.getVehicle('GMC', 'Acadia Denali', 'diesel', 'automatic', 49999);

		// Add vehicles to categories
		categoryCar.addVehicle(vehicleAudi);
		categoryCar.addVehicle(vehicleBMW);
		categoryCar.addVehicle(vehicleMercedes);
		categorySUV.addVehicle(vehicleChevy);
		categorySUV.addVehicle(vehicleToyota);
		categorySUV.addVehicle(vehicleGMC);
		categoryMotorcycle.addVehicle(vehicleDucatti);
		categoryMotorcycle.addVehicle(vehicleKawasaki);
		categoryMotorcycle.addVehicle(vehicleYamaha);
		

		vehicles = [vehicleAudi, 
			vehicleBMW,
			vehicleMercedes,
			vehicleChevy,
			vehicleToyota,
			vehicleGMC,
			vehicleDucatti,
			vehicleKawasaki,
			vehicleYamaha
		];

		// TODO: Generate reviews
		var review1 = vehicleShop.getReview('Jiko Trapeca', 'Mnou qka bri4ka', new Date(2014, 9, 23));
		var review2 = vehicleShop.getReview('Mincho Gyrba', 'Kopele egati kojeniq salon', new Date(2014, 9, 23));
		var review3 = vehicleShop.getReview('Marko Trabanta', 'Mnogo brum4i we', new Date(2014, 9, 23));
		var review4 = vehicleShop.getReview('Geco Kombainata', 'Stava za vendyj na rabota', new Date(2014, 9, 23));
		var review5 = vehicleShop.getReview('Shuri Kirkata', 'Onq den dignah 200 s toz zver :P', new Date(2014, 9, 23));
		var review6 = vehicleShop.getReview('Trapo Genov', 'Mn bavno za shopi', new Date(2014, 9, 23));
		var review7 = vehicleShop.getReview('Geno Arpadjika', 'Tiq ot vehicleShop reitinga im kuca neshto', new Date(2014, 9, 23));
		var review8 = vehicleShop.getReview('Dimka Lopatata', 'Gledam go za 3ti pyt i nishto ne shvashtam', new Date(2014, 9, 23));
		var review9 = vehicleShop.getReview('Maca Bosileka', 'Brato mnogo si typ, bace.', new Date(2014, 9, 23));

		// Add reviews to vehicles
		vehicleAudi.addReview(review1);
		vehicleBMW.addReview(review2);
		vehicleChevy.addReview(review3);
		vehicleDucatti.addReview(review6);
		vehicleGMC.addReview(review4);
		vehicleKawasaki.addReview(review7);
		vehicleMercedes.addReview(review8);
		vehicleToyota.addReview(review5);
		vehicleVolkswagen.addReview(review9);
		
		reviews = [review1, 
			review2,
			review3,
			review4,
			review5,
			review6,
			review7,
			review8,
			review9
		];
	}

	function getCategories() {
		return categories;
	}

	vehicleShop.generateData = generateData;
	vehicleShop.getCategories = getCategories;
}(vehicleShop));