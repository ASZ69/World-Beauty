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
	
	$scope.viewCard = function (event) {
        var clickedRefer = event.currentTarget;
        var subCat = clickedRefer.parentElement.getElementsByTagName("h2")[0].innerHTML;
		
		$scope.subContentArray = $filter('filter')($scope.contentArray[0].places, { pName:subCat });
    };
	
	var myUrl=window.location.href;	
	var sCat=myUrl.split("?")[1];
	if(sCat != null){
		var get=sCat.split("=")[2];
		var subCat=get.replace("%20"," ");
		var mainCat=sCat.split("&")[0];
		var mainCatFinal=mainCat.split("=")[1];

		$scope.contentArray = $filter('filter')(myData, { name: mainCatFinal });
		$scope.subContentArray = $filter('filter')($scope.contentArray[0].places, { pName: subCat });
		$(".main-page").css("display", "none");
		$(".sub-page").css("display", "block");
	}
	
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
                smallDescrip: "Uyuni a small town situated in the middle of nowhere. It originally blossomed as a railroad junction.ith around 300 successful summits and 77 fatalities",
                wiki: "https://wikitravel.org/en/Uyuni",
              moreDetails: {

                    images: [
                        "../images/europ/c-edit/u1.jpg",
  			            "../images/europ/c-edit/u3.jpg",
                         "../images/europ/c-edit/u2.jpg"
                       
                    ],
                     cd:"20.4604° S, 66.8261° W",
                    largeDescription: "Uyuni is a city in the southwest of Bolivia. There is little agriculture in the area because water supplies are scarce and somewhat saline. Uyuni primarily serves as a gateway for tourists visiting the world's largest salt flats, the nearby Uyuni salt flat.Uyuni is asouthwest of Bolivia. There is little agriculture in the area because water supplies are scarce and somewhat saline. Uyuni primarily serves as a gateway for tourists visiting the world's largest salt flats, the nearby Uyuni salt flat. "
                }

            },

            {
                pName: "Patagonia Chile",
                imgSrc: "../images/europ/chile/patagonia-chile/edit/c1.jpg",
                rating: "5.0",
                smallDescrip: "The Colorado and Barrancas rivers, which run from the Andes to the Atlantic.ile the Chilean has glacial fjords and temperate rainforest.",
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

                       cd:"44.8654° N, 15.5820° E",
                    largeDescription: "Plitviče Lakes National Park is a 295-sq.-km forest reserve in central Croatia. It's known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon. Walkways and hiking trails wind around and across the water, and an electric boat links the 12 upper and 4 lower lakes. The latter are the site of Veliki Slap, a 78m-high waterfall."
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
                smallDescrip: "There is a lagoon, named the Balos lagoon, between the island and the coast of Crete.The Argentine side features arid steppes, grasslands and deserts",
                wiki: "https://en.wikipedia.org/wiki/Gramvousa",

                moreDetails: {

                    images: [ 
						"../images/europ/c-edit/bb-Gr-1.jpg",
  			            "../images/europ/c-edit/bb-Gr-2.jpg",
                         "../images/europ/c-edit/bb-Gr-3.jpg"
                    ],

                       cd:"35.5793° N, 23.5887° E",
                    largeDescription: "The fort at Imeri Gramvousa was built between 1579 and 1584 during Venetian rule over Crete to defend the island from the Ottoman Turks. The fort remained in Venetian hands throughout the prolonged Cretan War, and in the treaty of 16 September 1669, which surrendered Crete to the Ottomans, Gramvousa, along with the fortresses of Souda and Spinalonga, was retained by Venice. These three forts defended Venetian trade routes and were also strategic bases in the event of a new Ottoman–Venetian war for Crete."
                }

            },

            {
                pName: "Imerovigli",
                 imgSrc: "../images/europ/Greec/edit/i1.jpg",
                rating: "4.7",
                smallDescrip: "Imerovigli is a village on the island of Santorini, Greece, adjacent to the north of the island capital Fira. rgentina’s famed RN-40 highway.",
                wiki: "https://wikitravel.org/en/Imerovigli",

                moreDetails: {

                    images: [
                         "../images/europ/c-edit/im-Gr-1.jpg",
  			            "../images/europ/c-edit/im-Gr-2.jpg",
                         "../images/europ/c-edit/im-Gr-3.jpg"
                    ],

                       cd:"36.4328° N, 25.4228° E",
                    largeDescription: "Imerovigli is a village on the island of Santorini, Greece, adjacent to the north of the island capital Fira. Imerovigli is mostly famous for its beautiful sunset, that it is called balcony to the Aegean. Its houses are built amphitheatrically around the caldera and it is crossed by narrow, paved paths."
                }

            },

            {
                pName: "Melissani Cave",
                 imgSrc: "../images/europ/Greec/edit/m1.jpg",
                rating: "4.9",
                smallDescrip: " Melissani Cave or Melissani Lake, also Melisani is a cave located on the island of Kefalonia.hile the Chilean has glacial fjords and temperate rainforest.",
                wiki: "https://en.wikipedia.org/wiki/Melissani_Cave",

                moreDetails: {

                    images: [
                        "../images/europ/c-edit/mc-Gr-1.jpg",
  			            "../images/europ/c-edit/mc-Gr-2.jpg",
                         "../images/europ/c-edit/mc-Gr-3.jpg"
                    ],

                       cd:"38.2570° N, 20.6235° E",
                    largeDescription: "Melissani Cave or Melissani Lake, also Melisani is a cave located on the island of Kefalonia, northwest of Sami, about 5 km SE of Agia Effimia, NE of Argostoli and NW of Poros. The Ionian Sea lies to the east with the Strait of Ithaca. Forests surround the cave and the mountain slope is to the west.Nymphs in Greek and Latin mythology are a sort of female spirit,typically associated with a particular location or landform such as Melissani Lake."
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
                smallDescrip: "There were many photographers taking long exposure photographs with the milkyway, the northern lights.Scenes from Game of Thrones Season 6 and 7 were filmed near Kirkjufell. ",
                 wiki: "https://en.wikipedia.org/wiki/Kirkjufell",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/k-IL-1.jpg",
  			            "../images/europ/c-edit/k-IL-2.jpg",
                         "../images/europ/c-edit/k-IL-3.jpg"
                    ],
                    cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Kirkjufell is a 463 m high mountain on the north coast of Iceland's Snæfellsnes peninsula, near the town of Grundarfjörður. It is claimed to be the most photographed mountain in the country. The Argentine side features arid steppes, grasslands and deserts, while the Chilean has glacial fjords and temperate rainforest. Argentina’s famed RN-40 highway passes the pinnacles of Monte Fitz Roy and Perito Moreno Glacier in Los Glaciares National Park."
                }

            },

            {
                pName: "Aillwee Cave-Ireland",
                imgSrc: "../images/europ/ireland/edit/a-1.jpg",
                rating: "4.7",
                smallDescrip: "Aillwee Cave is a cave system in the karst landscape of the Burren in County Clare, Ireland.it forms part of the Aillwee Cave and Birds of Prey Centre attraction.",
                wiki: "https://en.wikipedia.org/wiki/Aillwee_Cave",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/ac-I-1.jpg",
  			            "../images/europ/c-edit/ac-I-2.jpg",
                         "../images/europ/c-edit/ac-I-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "Aillwee Cave is a cave system in the karst landscape of the Burren in County Clare, Ireland. The name Aillwee is derived from the Irish Aill Bhuí which means yellow cliff. Privately owned, it forms part of the Aillwee Cave and Birds of Prey Centre attraction. "
                }

            },

            {
                pName: "Moher-Ireland",
                imgSrc: "../images/europ/ireland/edit/cl-1.jpg",
                rating: "4.4",
                smallDescrip: "The Cliffs of Moher are sea cliffs located at the southwestern edge of the Burren.they have formed a part of the Burren and Cliffs of Moher Geopark. ",
                wiki: "https://en.wikipedia.org/wiki/Cliffs_of_Moher",

                moreDetails: {

                    images: [
                          "../images/europ/c-edit/cm-I-1.jpg",
  			            "../images/europ/c-edit/cm-I-2.jpg",
                         "../images/europ/c-edit/cm-I-3.jpg"
                    ],

                       cd:"49°55′S 73°32′W 49°55′S 73°32′W",
                    largeDescription: "The cliffs are one of the most popular tourist destinations in Ireland and topped a list of attractions in 2006 by drawing almost one million visitors (at the official visitor centre, with additional visitors accessing other locales); the total visit number is now around 1.5 million per annum.[10] Since 2011, they have formed a part of the Burren and Cliffs of Moher Geopark, one of a family of geotourism destinations throughout Europe that are members of the European Geoparks Network[11] and also recognized by UNESCO. The cliffs are also a signature point on the official Wild Atlantic Way tourist trail."
                }

            },

            {
                pName: "Sintra-Portugal",
                imgSrc: "../images/europ/Portugal/S1.jpg",
                rating: "4.7",
                smallDescrip: "Sintra is a resort town in the foothills of Portugal’s Sintra Mountains, near the capital, Lisbon.dramatic twin chimneys and elaborate tilework.",
                wiki: "https://wikitravel.org/en/Sintra",

                moreDetails: {

                    images: [
                       
                          "../images/europ/c-edit/s-P-1.jpg",
  			            "../images/europ/c-edit/s-P-2.jpg",
                         "../images/europ/c-edit/s-P-3.jpg"                    ],

                       cd:"38.8029° N, 9.3816° W",
                    largeDescription: "Sintra is a resort town in the foothills of Portugal’s Sintra Mountains, near the capital, Lisbon. A longtime royal sanctuary, its forested terrain is studded with pastel-colored villas and palaces. The Moorish- and Manueline-style Sintra National Palace is distinguished by dramatic twin chimneys and elaborate tilework. The hilltop 19th-century Pena National Palace is known for a whimsical design and sweeping views.."
                }

            }



        ]

    },


    {
        name: "Middle-Europe",

        places: [

            {
                pName: "River Thames",
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
                pName: "Neuschwanstein",
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



