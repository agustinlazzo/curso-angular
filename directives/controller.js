/**
*  Module
*
* Description
*/
angular.module('CustomDirective', [])
.directive('backImg', function(){
	return function($scope, element, attrs) {
		attrs.$observe('backImg', function(value){
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position": "center",
			});
		});
	}
})
.controller('AppController', ['$scope','$http',function(s,h){
	h.get("https://api.github.com/users/mar10errob/repos")
	.success(function(data){
		s.repos = data;
	})
	.error(function(error){
		console.log(error);
	})
}]);