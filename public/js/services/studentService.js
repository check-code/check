var grievancesystem=angular.module('grievancesystem');

grievancesystem.service('studentService',function ($http,API_URL) {
	
	this.searchGrievance=function (searchId) {
		var url=API_URL+'grievaceSearch/'+searchId;
		return $http.get(url);

	}

	this.open_grievances=function () {
		var url = API_URL + 'grievances';
		return $http.get(url);

	}

	this.action_grievance = function(data)
	{
        alert("jhag"+ data.id);
		var request = {
                'method': 'POST',
                'url': API_URL+"grievances/updateStatus",
                'data': data,
                'headers': {
                    'Content-Type': undefined
                }
            };
     
            return $http(request)
	}
	
});