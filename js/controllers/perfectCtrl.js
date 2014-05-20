angular
	.module('app')
	.controller('perfectCtrl', ['$scope', function($scope) {
		$scope.title = "Perfect";
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.isHome = true;
	}]);