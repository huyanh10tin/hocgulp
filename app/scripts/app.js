'use strict';
angular.module('confusionApp',['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
	//route for the home
	.when('/contactus',{
		templateUrl :'contactus.html',
		controller :'ContactController'
	})
	//route for the menu
	.when('/menu',{
		templateUrl :'menu.html',
		controller :'MenuController'
	})
	//route for the dish detail id
	.when('/menu/:id',{
		templateUrl: 'dishdetail.html',
		controller: 'DishDetailController'
	})
	.otherwise('/contactus');
});
