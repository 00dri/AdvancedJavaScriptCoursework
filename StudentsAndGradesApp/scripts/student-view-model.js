app = app || {};

app.viewModel = (function() {
	function ViewModel(model){
		this.model = model;
	}

	ViewModel.prototype.showAllStudents = function() {
		this.model.students.getAllStudents(
			function(studentsData) {
				studentsData.results.forEach(function(student) {
					console.log(student.name);
					console.log(student.grade);
				});
			}
		);
	}

	return{
		loadViewModel : function(model){
			return new ViewModel(model);
		}
	}
})();