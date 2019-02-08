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
		 
		 {pName:"Karakorams 2",
		  imgSrc:"../images/asia/pakistan/content-edit/k2-c.jpg",
		  heading:"Karakorams 2",
		  rating:"4.9",
		  smallDescrip:"K2 is known as the Savage Mountain due to the extreme difficulty of ascent. It has the second-highest fatality rate among the eight thousanders.",
		  wiki:"https://en.wikipedia.org/wiki/K2",
		  
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
		 
		 {pName:"Khewra-Mines",
		  imgSrc:"../images/asia/pakistan/content-edit/khewra-mines.jpg",
		  heading:"Khewra-Mines",
		  rating:"4.5",
		  smallDescrip:"The mine is famous for its production of pink Himalayan salt, and is a major tourist attraction, Its history dates back to its discovery by Alexander's troops in 320 BC",
		  wiki:"https://en.wikipedia.org/wiki/Khewra_Salt_Mine",
		  
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
		 
		 {pName:"Kaghan",
		  imgSrc:"../images/asia/pakistan/content-edit/kaghan.jpg",
		  heading:"Kaghan",
		  rating:"5",
		  smallDescrip:"The best time to visit Kaghan Valley is during the Summer season (May to September). Because In Winter, the glaciers blocks the roads leading to Kaghan Valley",
		  wiki:"https://en.wikipedia.org/wiki/Kaghan_Valley",
		  
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
		 	
		 
		 
		 {pName:"Saif-ul-Malook",
		  imgSrc:"../images/asia/pakistan/content-edit/saif-ul-malook.jpg",
		  heading:"Kaghan",
		  rating:"5",
		  smallDescrip:"The best time to visit Kaghan Valley is during the Summer season (May to September). Because In Winter, the glaciers blocks the roads leading to Kaghan Valley",
		  wiki:"https://en.wikipedia.org/wiki/Kaghan_Valley",
		  
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
		 
		 {pName:"Nalter-Valley",
		  imgSrc:"../images/asia/pakistan/content-edit/Nalter-valley.jpg",
		  heading:"Nalter-Valley",
		  rating:"3.9",
		  smallDescrip:"Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan. Naltar is 40 km (25 mi) from Gilgit and can be reached by jeeps",
		  wiki:"https://en.wikipedia.org/wiki/Naltar_Valley",
		  
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
		 
		 {pName:"Neelum-Valley",
		  imgSrc:"../images/asia/pakistan/content-edit/Neelam.jpg",
		  heading:"Neelum-Valley",
		  rating:"4.7",
		  smallDescrip:"Neelam is accessible by Neelam road from Muzaffarabad. A rest house of Tourism and Archeology Department located there for tourists stay. A small market is also there.",
		  wiki:"https://en.wikipedia.org/wiki/Neelam_(village)",
		  
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
		 
		 {pName:"Tirah-Valley",
		  imgSrc:"../images/asia/pakistan/content-edit/Teerah.jpg",
		  heading:"Nalter-Valley",
		  rating:"4.0",
		  smallDescrip:"Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan. Naltar is 40 km (25 mi) from Gilgit and can be reached by jeeps",
		  wiki:"https://en.wikipedia.org/wiki/Naltar_Valley",
		  
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
		 
		 {pName:"Nanga-Parbat",
		  imgSrc:"../images/asia/pakistan/content-edit/Nanga-parbat.jpg",
		  heading:"Nalter-Valley",
		  rating:"4.8",
		  smallDescrip:"Nanga Parbat is one of the eight-thousanders.. Numerous mountaineering deaths lent it the nickname ''Killer Mountain''.”",
		  wiki:"https://en.wikipedia.org/wiki/Nanga_Parbat",
		  
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