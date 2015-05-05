/**
*  Module
*
* Description
*/
var app = angular.module('AppModule', []);
app.controller('EjemploController', ['$scope','$http',function(s,h){
	h.get("https://api.github.com/users/mar10errob/repos")
	.success(function(data){
		s.repos = data;
	})
	.error(function(error){
		console.log(error);
	})
}]);