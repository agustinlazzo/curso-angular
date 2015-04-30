/**
*  Module
*
* Description
*/
angular.module("ToDoList", ["LocalStorageModule"])
	.controller("ToDoController", function($scope, localStorageService){
		if(localStorageService.get("todolist")){
			$scope.todo = localStorageService.get("todolist");
		}else{
			$scope.todo = [];
		}

		$scope.$watchCollection("todo",function(newValue, oldValue) {
			localStorageService.set("todolist",$scope.todo);
		});

		$scope.addActv = function(){
			$scope.todo.push($scope.newActv);
			$scope.newActv = {};
		}
	});