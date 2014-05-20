angular
	.module('app')
	.controller('listpageCtrl', ['$scope', 'techs', '$http',  function($scope, techs, $http) {
		$scope.title = "List Page";
		$scope.techs = techs;
		$scope.isHome = true;
		
		$scope.save = function() {
			$http.post('/api/techs.json', techs)	
		};	
	}]);