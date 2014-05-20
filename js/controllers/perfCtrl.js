angular
	.module('app')
	.controller('perfCtrl', ['$scope', function($scope) {
		$scope.title = "Perform";
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.isHome = false;
	}]);