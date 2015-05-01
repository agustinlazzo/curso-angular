/**
*  Module
*
* Description
*/
var app = angular.module('MyFirstApp', []);
app.controller('FirstController', ['$scope','$http',function(s,h){
	s.posts = [];
	s.load = true;
	h.get("http://jsonplaceholder.typicode.com/posts")
	.success(function (data) {
		console.log(data);
		s.posts = data;
		s.load = false;
	})
	.error(function (err) {
		console.log(err);
		s.load = false;
	});
}]);