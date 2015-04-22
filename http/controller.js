/**
*  Module
*
* Description
*/
var app = angular.module('MyFirstApp', []);
app.controller('FirstController', ['$scope','$http',function(s,h){
	s.posts = [];
	s.newPost = [];
	h.get("http://jsonplaceholder.typicode.com/posts")
	.success(function (data) {
		console.log(data);
		s.posts = data;
	})
	.error(function (err) {
		console.log(err);
	});
	s.addPost = function(){
		h.post("http://jsonplaceholder.typicode.com/posts",{
			title: s.newPost.title,
			body: s.newPost.body,
			userId: 1
		})
		.success(function (data, status, headers, config){
			s.posts.push(data);
			s.newPost = [];
		})
		.error(function (data, status, headers, config){
			console.log(data);
		});
	}
}]);