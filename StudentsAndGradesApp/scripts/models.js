var app = app || {};

app.models = (function() {
	function Models(baseUrl) {
		this.baseUrl = baseUrl;
		this.students = new Students(baseUrl);
		//this.schools = new Schools();
	};

	//class for handling http requests
	var Requester = (function() {
		function makeRequest(method, url, data, success, error){
			$.ajax({
				method: method,
				headers: {
					'X-Parse-Application-Id': 'MdlIkr9LnGnIEr183oX0W7Ay73qnM5LRrVfSbzSx',
					'X-Parse-REST-API-Key' : 'yqHShqdwlATxJz05SO8j08P3knP5SbDqrVdlAQDI'
				},
				url: url,
				contentType: 'application/json', 
				data: JSON.stringify(data),
				success: success,
				error: error
			})
		}

		function getRequest(url, success, error){
			makeRequest('GET', url, null, success, error);
		}

		function postRequest(url, data, success, error){
			makeRequest('POST', url, data, success, error);
		}

		function deleteRequest(url, success, error){
			makeRequest('DELETE', url, null, success, error);
		}

		return{
			getRequest: getRequest,
			postRequest: postRequest,
			deleteRequest: deleteRequest
		}
	})();

	//student class returns functions
	var Students = (function() {

		function Students(baseUrl) {
			this.serviceUrl = baseUrl + 'Students/'
		}

		Students.prototype.getAllStudents = function(success, error){
			return  Requester.getRequest(this.serviceUrl, success, error)
		};

		Students.prototype.postStudent = function(student, success, error){
			return  Requester.postRequest(this.serviceUrl, student, success, error)
		};

		Students.prototype.removeStudent = function(id, success, error){
			return  Requester.deleteRequest(this.serviceUrl + id, success, error)
		};

		return Students;
	})();

	return {
		loadModels: function(baseUrl) {
			return new Models(baseUrl);
		}
	}
})();