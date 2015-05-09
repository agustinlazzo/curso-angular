/**
*  Module
*
* Description
*/
angular.module('CustomDirective', [])
.directive("myAutocomplete", function(){
	function link(scope, element, attrs){
		$(element).autocomplete({
			source: scope.$eval(attrs.myAutocomplete),
			select: function(ev, ui){
				ev.preventDefault();
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev, ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	}
})
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
}]);