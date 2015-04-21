/**
*  Module
*
* Description
*/
var app = angular.module('MyFirstApp', []);
app.controller('FirstController', function($scope){
	$scope.nombre = "Mario";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Buen Tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malisimo tutorial",
			username: "otroUsuario"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	};
});