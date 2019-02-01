// JavaScript Document
var content=angular.module("content",[]);

content.controller("navControl",function($scope,$filter){
	$scope.showContent=function(content){
		var referClick=content.currentTarget;
		var navigation= referClick.innerHTML;
		$scope.contentArray = $filter('filter')(navList,{name:'7Wonders'});
	}
});
