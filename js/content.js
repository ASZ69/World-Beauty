// JavaScript Document
var content=angular.module("content",[]);

content.controller("navControl",function($scope,$filter){
	$scope.showContent=function(content){
		var referClick=content.currentTarget;
		var navigation= referClick.innerHTML;
		$scope.contentArray = $filter('filter')(navList,{name:'7Wonders'});
	}
});
var navList = [{name:'7Wonders'},
			  pageContent:[
			   {imgScr:'../images/africa/payramids-round.jpg',
			   moreDetails:{
			       wikipedia:'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',
			       images:[
			          '../images/africa/payramids-round.jpg',
			          '../images/africa/payramids-round.jpg']
			   
			  info:'some information about pyramids as fuck as possible' }},
			  {imgScr:'../images/africa/payramids-round.jpg',
			   moreDetails:{
			       wikipedia:'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',
			       images:[
			          '../images/africa/payramids-round.jpg',
			          '../images/africa/payramids-round.jpg']
			   
			  info:'some information about pyramids as fuck as possible' }},
                    {imgScr:'../images/africa/payramids-round.jpg',
			   moreDetails:{
			       wikipedia:'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',
			       images:[
			          '../images/africa/payramids-round.jpg',
			          '../images/africa/payramids-round.jpg']
			   
			  info:'some information about pyramids as fuck as possible' }}
			 ]
		  ]