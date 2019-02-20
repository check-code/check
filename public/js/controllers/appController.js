// Controller for grievancesystem i.e., main controller
grievancesystem.controller('appController',function($scope,$http,$location,API_URL,$cookies){
	$scope.page_tab='login';
	$scope.login = {};
	$http.defaults.headers.common.Authorization = $cookies.get('Auth');

	$scope.doLoginAttempt =  function(){
	$http.defaults.headers.common.Authorization = "Basic " + btoa([$scope.login.email, $scope.login.password].join(':'));
	$http.post(API_URL + "login", $scope.login).then(function(response){
		if (response.data == "aicte") {
			$location.path('/aicte');
		}else if (response.data == "student") {
			$location.path('/student');
		}else {
			alert('Template Not Available');
		}
		
	},function(errorResponse){
		alert('Sorry! username password doesnot match');
	});
	
	};

	$scope.doLogin = function(){
		console.log("hi");
		$scope.authHeader = "Basic " + btoa([$scope.login.email, $scope.login.password].join(':'));
		$cookies.put('Auth',$scope.authHeader);
		$scope.doLoginAttempt();
	}

	$scope.logout = function(){
			$cookies.put('Auth',null);
			$location.path('/');
	}

});

