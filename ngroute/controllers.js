/**
*  Module
*
* Description
*/
angular.module('CustomDirective')
.controller('ReposController', ['$scope','$http',function(s,h){
	s.repos = [];
	h.get("https://api.github.com/users/google/repos")
	.success(function(data){
		s.posts = data;
		for (var i = data.length - 1; i >= 0; i--) {
			var repo = data[i];
			s.repos.push(repo.name);
		};
	})
	.error(function(error){
		console.log(error);
	});
	s.optionSelected = function(data){
		s.$apply(function(){
			s.main_repo = data;
		});
	}
}])
.controller('RepoController', ['$scope','$http','$routeParams', function(s,h,p){
	s.repo = {};
	h.get("https://api.github.com/repos/google/"+p.name)
	.success(function(data){
		s.repo = data;
	})
	.error(function(error){
		console.log(error);
	});
}]);