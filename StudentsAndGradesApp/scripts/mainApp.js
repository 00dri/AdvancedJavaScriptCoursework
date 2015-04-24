var app = app || {};

(function(){
	var model = app.models.loadModels('https://api.parse.com/1/classes/');
	var viewModel = new app.viewModel.loadViewModel(model);
	viewModel.showAllStudents();
	
	// model.students.getAllStudents(
	// 	function(data) {
	// 		console.log(data);
	// 	},

	// 	function (err) {
	// 		console.error(err.responseText);
	// 	}
	// )

	// model.students.postStudent(
	// 	{
	// 		name: 'Penka',
	// 		grade: 6
	// 	},
	// 	function(data) {
	// 		console.log(data);
	// 	},
	// 	function(err) {
	// 		console.error(err.responseText);
	// 	}

	// )

	// model.students.removeStudent(
		
	// 	'pkCLmNpv6V',
		

	// 	function(data) {
	// 		console.log(data);
	// 	},
	// 	function(err) {
	// 		console.error(err.responseText);
	// 	}
	// )
})(); 