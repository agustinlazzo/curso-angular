/**
*  Module
*
* Description
*/
var app = angular.module('MyFirstApp', []);
app.controller('FirstController', ['$scope',function(m){
	m.nombre = "Mario";
	m.nuevoComentario = {};
	m.comentarios = [
		{
			comentario: "Buen Tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malisimo tutorial",
			username: "otroUsuario"
		}
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	};
}]);