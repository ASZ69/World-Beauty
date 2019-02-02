// JavaScript Document
var content = angular.module("myApp",[]);

content.controller("navControl",function($scope,$filter){
	$scope.showContent=function(content){
		var referClick=content.currentTarget;
		var navigation= referClick.innerHTML;
		$scope.contentArray = $filter('filter')(myData,{name:navigation});
	}
	
	$scope.contentArray = $filter('filter')(myData, {name: 'Pakistan'});
	
});



var myData = [
	{name:"Pakistan",
	 
	 places:[
		 
		 {pName:"K2",
		  imgSrc:"../images/africa/vic_falls_feat_Safrica.jpg",
		  heading:"My K2",
		  rating:"1.1",
		  smallDescrip:"DescriptionMauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs.",
		  wiki:"https://www.en.wikipedia.com/",
		  
		  moreDetails:{
			  
			  images:[
				  {imgSrc:"images/j.jpg",
				   imgText:"",
				  rating:"1.5"},
				  {imgSrc:"images/j.jpg",
				   imgText:"",
				  rating:"1.5"},
				  {imgSrc:"images/j.jpg",
				   imgText:"",
				  rating:"1.5"}
			  ],
			  
			  speacialText:""
			  
		  }
		  
		 },
		 
		 {pName:"L2",
		  imgSrc:"../images/africa/cape-town.jpg",
		  heading:"My L2",
		  rating:"9.0",
		  smallDescrip:"charh kh test kr lo",
		  wiki:"https://www.en.wikipedia.com/l2",
		  
		  moreDetails:{
			  
			  images:[
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg"
			  ],
			  
			  largeDescription:"jkshfkash"
		  }
		  
		 },
		 
		 {pName:"G2",
		  imgSrc:"../images/africa/cape-town.jpg",
		  heading:"My L2",
		  rating:"9.0",
		  smallDescrip:"charh kh test kr lo",
		  wiki:"https://www.en.wikipedia.com/l2",
		  
		  moreDetails:{
			  
			  images:[
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg"
			  ],
			  
			  largeDescription:"jkshfkash"
		  }
		  
		 }
		 
	 ]
	
	},
	
	{name:"India",
	 
	 places:[
		 
		 {pName:"K2",
		  imgSrc:"../images/africa/cape-town.jpg",
		  heading:"My K2",
		  rating:"1.1",
		  smallDescrip:"alaw jaga hai",
		  wiki:"https://www.en.wikipedia.com/",
		  
		  moreDetails:{
			  
			  images:[
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg"
			  ],
			  
			  largeDescription:"jkshfkash"
		  }
		  
		 },
		 
		 {pName:"L2",
		  imgSrc:"../images/africa/cape-town.jpg",
		  heading:"My L2",
		  rating:"9.0",
		  smallDescrip:"charh kh test kr lo",
		  wiki:"https://www.en.wikipedia.com/l2",
		  
		  moreDetails:{
			  
			  images:[
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg",
				  "images/j.jpg"
			  ],
			  
			  largeDescription:"jkshfkash"
		  }
		  
		 }
		 
	 ]
	
	}

];