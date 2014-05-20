angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'techs', '$http',  function($scope, techs, $http) {
		$scope.title = "Home";
		$scope.techs = techs;
		$scope.isHome = true;
		
		$scope.save = function() {
			$http.post('/api/techs.json', techs)	
		};	
	}]);