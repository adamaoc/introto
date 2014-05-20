angular
	.module('app')
	.controller('contactCtrl', ['$scope', function($scope) {
		$scope.title = "Contact Template";
		$scope.items = ['item1', 'item2', 'item3'];
	}]);