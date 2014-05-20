angular
	.module('app')
	.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.title = "About Template";
		$scope.items = ['item1', 'item2', 'item3'];
	}]);