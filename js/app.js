angular.module('app', [
	'ui.router'
])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl',
			resolve: {
				techs: ['$http', function($http) {
					return $http.get('/api/techs.json').then(function(response) {
						return response.data;
					})
				}]
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
		.state('preperation', {
			url: '/preperation',
			templateUrl: 'templates/preperation.html',
			controller: 'prepCtrl'
		})
		.state('planning', {
			url: '/planning',
			templateUrl: 'templates/planning.html',
			controller: 'planCtrl'
		})
		.state('perform', {
			url: '/perform',
			templateUrl: 'templates/perform.html',
			controller: 'perfCtrl'
		})
		.state('perfect', {
			url: '/perfect',
			templateUrl: 'templates/perfect.html',
			controller: 'perfectCtrl'
		})
		.state('listpage', {
			url: '/listpage',
			templateUrl: 'templates/listpage.html',
			controller: 'listpageCtrl',
			resolve: {
				techs: ['$http', function($http) {
					return $http.get('/api/techs.json').then(function(response) {
						return response.data;
					})
				}]
			}
		})
}])
