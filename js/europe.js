// JavaScript Document
var content = angular.module("myApp", []);

content.controller("navControl", function ($scope, $filter) {
    $scope.showContent = function (content) {
        var referClick = content.currentTarget;
        var navigation = referClick.innerHTML;
        $scope.contentArray = $filter('filter')(myData, { name: navigation });
    }
 
	
	$scope.showSubContent = function (event) {
        var clickedRefer = event.currentTarget;
        var subCat = clickedRefer.innerHTML;

        var mainCat = clickedRefer.parentElement.parentElement.getElementsByTagName("h4")[0].innerHTML;
		
        $scope.contentArray = $filter('filter')(myData, { name: mainCat });

        $scope.subContentArray = $filter('filter')($scope.contentArray[0].places, { pName: subCat });
    };
	
	
    $scope.contentArray = $filter('filter')(myData, { name: 'East-Europe' });

});



var myData = [
    {
        name: "East-Europe",

        places: [


            {
                pName: "Uyuni-Blovia",
                imgSrc: "../images/europ/bolivia/Uyuni/edited/u1.jpg",
                rating: "4.7",
                smallDescrip: "Uyuni a small town situated in the middle of nowhere. It originally blossomed as a railroad junction.",
                wiki: "https://wikitravel.org/en/Uyuni",
              moreDetails: {

                    images: [
                        "../images/europ/c-edit/u1.jpg",
  			            "../images/europ/c-edit/u3.jpg",
                         "../images/europ/c-edit/u2.jpg"
                       
                    ],
                     cd:"35.8800° N, 76.5151° E",
                    largeDescription: "K2 is known as the Savage Mountain due to the extreme difficulty of ascent. It has the second-highest fatality rate among the eight thousanders, with around 300 successful summits and 77 fatalities; about one person dies on the mountain for every four who reach the summit.[5] It is more difficult and hazardous to reach the peak of K2 from the Chinese side, so it is usually climbed from the Pakistani side.The name K2 is derived from the notation used by the Great Trigonometric Survey of British India. T"
                }

            },

            {
                pName: "Patagonia Chile",
                imgSrc: "../images/europ/chile/patagonia-chile/edit/c1.jpg",
                rating: "5.0",
                smallDescrip: "The Colorado and Barrancas rivers, which run from the Andes to the Atlantic..",
                wiki: "https://en.wikipedia.org/wiki/Patagonia",

                moreDetails: {
                   
                    images: [
                        "../images/europ/c-edit/pt-1.jpg",
  			            "../images/europ/c-edit/pt-2.jpg",
                         "../images/europ/c-edit/pt-3.jpg"
                    ],
                      cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Plitvice-Crotia",
               imgSrc: "../images/europ/crotia/plitvice/edit/p1.jpg",
                rating: "4.8",
                smallDescrip: "The protected area extends over 296.85 square kilometres (73,350 acres). About 90% of this area is part of Lika-Senj Countym. ",
                wiki: "https://en.wikipedia.org/wiki/Plitvice_Lakes_National_Park",

                moreDetails: {

                    images: [
                        "../images/europ/c-edit/pl-C.jpg",
  			            "../images/europ/c-edit/pl-C-2.jpg",
                         "../images/europ/c-edit/pl-C-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            }

        ]

    },

    {
        name: "Greece",

        places: [

            {
                pName: "Balos Beach",
                imgSrc: "../images/europ/Greec/edit/b1.jpg",
                rating: "5.0",
                smallDescrip: "There is a lagoon, named the Balos lagoon, between the island and the coast of Crete.",
                wiki: "https://en.wikipedia.org/wiki/Gramvousa",

                moreDetails: {

                    images: [ 
						"../images/europ/c-edit/bb-Gr-1.jpg",
  			            "../images/europ/c-edit/bb-Gr-2.jpg",
                         "../images/europ/c-edit/bb-Gr-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Imerovigli",
                 imgSrc: "../images/europ/Greec/edit/i1.jpg",
                rating: "4.7",
                smallDescrip: "Imerovigli is a village on the island of Santorini, Greece, adjacent to the north of the island capital Fira. ",
                wiki: "https://wikitravel.org/en/Imerovigli",

                moreDetails: {

                    images: [
                         "../images/europ/c-edit/im-Gr-1.jpg",
  			            "../images/europ/c-edit/im-Gr-2.jpg",
                         "../images/europ/c-edit/im-Gr-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Melissani Cave",
                 imgSrc: "../images/europ/Greec/edit/m1.jpg",
                rating: "4.9",
                smallDescrip: " Melissani Cave or Melissani Lake, also Melisani is a cave located on the island of Kefalonia",
                wiki: "https://en.wikipedia.org/wiki/Melissani_Cave",

                moreDetails: {

                    images: [
                        "../images/europ/c-edit/mc-Gr-1.jpg",
  			            "../images/europ/c-edit/mc-Gr-2.jpg",
                         "../images/europ/c-edit/mc-Gr-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            }

        ]

    },


    {
        name: "West-Europe",

        places: [

            {
                pName: "Kirkjufell-Iceland",
                imgSrc: "../images/europ/iceland/edit/ki-1.jpg",
                rating: "4.9",
                smallDescrip: "There were many photographers taking long exposure photographs with the milkyway, the northern lights ",
                 wiki: "https://en.wikipedia.org/wiki/Kirkjufell",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/k-IL-1.jpg",
  			            "../images/europ/c-edit/k-IL-2.jpg",
                         "../images/europ/c-edit/k-IL-3.jpg"
                    ],
   cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Aillwee Cave-Ireland",
                imgSrc: "../images/europ/ireland/edit/a-1.jpg",
                rating: "4.7",
                smallDescrip: "Aillwee Cave is a cave system in the karst landscape of the Burren in County Clare, Ireland",
                wiki: "https://en.wikipedia.org/wiki/Aillwee_Cave",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/ac-I-1.jpg",
  			            "../images/europ/c-edit/ac-I-2.jpg",
                         "../images/europ/c-edit/ac-I-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "cliffs of Moher-Ireland",
                imgSrc: "../images/europ/ireland/edit/cl-1.jpg",
                rating: "4.4",
                smallDescrip: "The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren ",
                wiki: "https://en.wikipedia.org/wiki/Cliffs_of_Moher",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/cm-I-1.jpg",
  			            "../images/europ/c-edit/cm-I-2.jpg",
                         "../images/europ/c-edit/cm-I-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Sintra-Portugal",
                imgSrc: "../images/europ/Portugal/S1.jpg",
                rating: "4.7",
                smallDescrip: "Sintra is a resort town in the foothills of Portugal’s Sintra Mountains, near the capital, Lisbon.",
                wiki: "https://wikitravel.org/en/Sintra",

                moreDetails: {

                    images: [
                       
                          "../images/europ/c-edit/s-P-1.jpg",
  			            "../images/europ/c-edit/s-P-2.jpg",
                         "../images/europ/c-edit/s-P-3.jpg"                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            }



        ]

    },


    {
        name: "Middle-Europe",

        places: [

            {
                pName: "River Thames-England",
                imgSrc: "../images/europ/england/edit/r-1.jpg",
                rating: "3.5",
                smallDescrip: "The River Thames, known alternatively in parts as the Isis, is a river that flows through southern England  .",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/rt-E-1.jpg",
  			            "../images/europ/c-edit/rt-E-2.jpg",
                         "../images/europ/c-edit/rt-E-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Cotswolds-England",
                 imgSrc: "../images/europ/england/edit/c1.jpg",
                rating: "4.5",
                smallDescrip: "The Cotswolds is a rural area of south central England covering parts of 6 counties, notably Gloucestershire and Oxfordshire.",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/cw-E-1.jpg",
  			            "../images/europ/c-edit/cw-E-2.jpg",
                         "../images/europ/c-edit/cw-E-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Neuschwanstein-Castle",
              imgSrc: "../images/europ/germany/edit/ca1.jpg",
                rating: "4.8",
                smallDescrip: " Neuschwanstein Castle is a 19th-century Romanesque Revival palace on a rugged hill above the village",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/nc-G-1.jpg",
  			            "../images/europ/c-edit/nc-G-2.jpg",
                         "../images/europ/c-edit/nc-G-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },
			    {
                pName: "Rhine-Gorge",
              imgSrc: "../images/europ/germany/edit/g1.jpg",
                rating: "4.8",
                smallDescrip: " The Rhine Gorge is a popular name for the Upper Middle Rhine Valley, a 65 km section of the Rhine",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/rg-G-1.jpg",
  			            "../images/europ/c-edit/rg-G-2.jpg",
                         "../images/europ/c-edit/rg-G-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Patagonia is a region encompassing the vast southernmost tip of South America, shared by Argentina and Chile, with the Andes Mountains as its dividing line. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            } 
			
			
        ]

    }	
];


function dataHide(){
	var mainPage= document.getElementsByClassName('main-page')[0];
	mainPage.style.display="none";
	var discPage= document.getElementsByClassName('sub-page')[0];
	discPage.style.display="block";
}

function mainCat(){
	var mainPage= document.getElementsByClassName('main-page')[0];
	mainPage.style.display="block";
	var discPage= document.getElementsByClassName('sub-page')[0];
	discPage.style.display="none";
}



