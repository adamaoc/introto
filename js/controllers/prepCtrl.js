angular
	.module('app')
	.controller('prepCtrl', ['$scope', function($scope) {
		$scope.title = "Preperation";
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.isHome = false;
	}]);