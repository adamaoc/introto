angular
	.module('app')
	.controller('planCtrl', ['$scope', function($scope) {
		$scope.title = "Planning";
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.isHome = false;
	}]);