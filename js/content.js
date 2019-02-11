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
		$scope.subContentArray = $filter('filter')($scope.contentArray[0].places, { pName:subCat });
    };
	
	

    $scope.contentArray = $filter('filter')(myData, { name: 'Pakistan' });

});



var myData = [
  {
        name: "Pakistan",

        places: [

            {
                pName: "Karakorams 2",
                imgSrc: "../images/asia/pakistan/content-edit/k2-c.jpg",
                rating: "4.9",
                smallDescrip: "K2 is known as the Savage Mountain due to the extreme difficulty of ascent. It has the second-highest fatality rate among the eight thousanders.",
                wiki: "https://en.wikipedia.org/wiki/K2",

                     moreDetails: {

                    images: [
                        "../images/asia/edit/k2-3.jpg",
  						"../images/asia/edit/k2-2.jpg",
                         "../images/asia/edit/k2-1.jpg"
                       
                    ],
                     cd:"35.8800° N, 76.5151° E",
                    largeDescription: "K2 is known as the Savage Mountain due to the extreme difficulty of ascent. It has the second-highest fatality rate among the eight thousanders, with around 300 successful summits and 77 fatalities; about one person dies on the mountain for every four who reach the summit.[5] It is more difficult and hazardous to reach the peak of K2 from the Chinese side, so it is usually climbed from the Pakistani side.The name K2 is derived from the notation used by the Great Trigonometric Survey of British India. T"
                }
            },

            {
                pName: "Khewra-Mines",
                imgSrc: "../images/asia/pakistan/content-edit/khewra-mines.jpg",
                heading: "Khewra-Mines",
                rating: "4.5",
                smallDescrip: "The mine is famous for its production of pink Himalayan salt, and is a major tourist attraction, Its history dates back to its discovery by Alexander's troops in 320 BC",
                wiki: "https://en.wikipedia.org/wiki/Khewra_Salt_Mine",

                moreDetails: {

                    images: [
                        "../images/asia/edit/kh-1.jpg",
                        "../images/asia/edit/kh-2.jpg",
                        "../images/asia/edit/kh-1.jpg"
                      
                    ],
                    cd:"32.6305° N, 73.0110° E",
                    largeDescription: "The Khewra Salt Mine is located in Khewra, north of Pind Dadan Khan, an administrative subdivision of Jhelum District, Punjab Region, Pakistan. The mine is located in the Salt Range, an outer range of the Himalaya Mountains which rises from the Indo-Gangetic Plain. A portion of Khewra salt mine has been converted into tourist spot by the PMDC, wherein visitors have an opportunity to visit a portion of tunnel, developed in 1914 at level 06"
                }

            },

            {
                pName: "Kaghan",
                imgSrc: "../images/asia/pakistan/content-edit/kaghan.jpg",
                heading: "Kaghan",
                rating: "5",
                smallDescrip: "The best time to visit Kaghan Valley is during the Summer season (May to September). Because In Winter, the glaciers blocks the roads leading to Kaghan Valley",
                wiki: "https://en.wikipedia.org/wiki/Kaghan_Valley",

                moreDetails: {

                    images: [
                        "../images/asia/edit/kg-1.jpg",
                       "../images/asia/edit/kg-2.jpg",
                       "../images/asia/edit/kg-1.jpg"
                        ],
					cd:"34.7794° N, 73.5270° E",
                    largeDescription: "Kaghan Valley is an alpine-climate valley in Mansehra District of the Khyber Pakhtunkhwa Province of Pakistan. The tourists from across the country come to visit this place. The valley extends 155 kilometres, rising from an elevation of 2,134 feet to its highest point, the Babusar Pass, at 13,690 feet."
                }

            },



            {
                pName: "Saif-ul-Malook",
                imgSrc: "../images/asia/pakistan/content-edit/saif-ul-malook.jpg",
                heading: "Kaghan",
                rating: "5",
                smallDescrip: "The best time to visit Kaghan Valley is during the Summer season (May to September). Because In Winter, the glaciers blocks the roads leading to Kaghan Valley",
                wiki: "https://en.wikipedia.org/wiki/Kaghan_Valley",

                moreDetails: {

                    images: [
                        "../images/asia/edit/kg-2.jpg",
                      "../images/asia/edit/sa-1.jpg",
                       "../images/asia/edit/kg-2.jpg"
						
                       
                    ],
                    cd:"34.8762° N, 73.6934° E",
                    largeDescription: "Saiful Muluk is a mountainous lake located at the northern end of the Kaghan Valley, near the town of Naran in the Saiful Muluk National Park. The lake is a source of the Kunhar river. At an elevation of 3,224 m above sea level, the lake is located above the tree line, and is one of the highest lakes in Pakistan"
                }

            },

            {
                pName: "Nalter-Valley",
                imgSrc: "../images/asia/pakistan/content-edit/Nalter-valley.jpg",
                heading: "Nalter-Valley",
                rating: "3.9",
                smallDescrip: "Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan.",
                wiki: "https://en.wikipedia.org/wiki/Naltar_Valley",

                moreDetails: {

                    images: [
                     "../images/asia/edit/nv-1.jpg",
                        "../images/asia/edit/nv-1.jpg",
                        "../images/asia/edit/nv-1.jpg"
					],
					cd:"34.8762° N, 73.6934° E",
 
                    largeDescription: "Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan. Naltar is 40 km from Gilgit and can be reached by jeeps. Naltar is a forested region known for its dramatic mountain scenery. Ski competitions are held at Naltar ski resort."
                }

            },

            {
                pName: "Neelum-Valley",
                imgSrc: "../images/asia/pakistan/content-edit/Neelam.jpg",
                heading: "Neelum-Valley",
                rating: "4.7",
                smallDescrip: "Neelam is accessible by Neelam road from Muzaffarabad. A rest house of Tourism and Archeology Department located there for tourists stay.",
                wiki: "https://en.wikipedia.org/wiki/Neelam_(village)",

                moreDetails: {

                    images: [
                        "../images/asia/edit/nee-1.jpg",
                        "../images/asia/edit/nee-1.jpg",
                        "../images/asia/edit/nee-1.jpg"
                        
                        
                    ],
					cd:"37.8762° N, 75.6934° E",
                    largeDescription: "Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan. Naltar is 40 km from Gilgit and can be reached by jeeps. Naltar is a forested region known for its dramatic mountain scenery. Ski competitions are held at Naltar ski resort."
                }

            },

            {
                pName: "Tirah-Valley",
                imgSrc: "../images/asia/pakistan/content-edit/Teerah.jpg",
                heading: "Nalter-Valley",
                rating: "4.0",
                smallDescrip: "Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan.",
                wiki: "https://en.wikipedia.org/wiki/Naltar_Valley",

                moreDetails: {

                    images: [
                         "../images/asia/edit/tee-1.jpg",
                         "../images/asia/edit/tee-1.jpg",
                         "../images/asia/edit/tee-1.jpg"
     
                    ],
					cd:"32.4762° N, 76.6974° E",
                    largeDescription: "The Tirah also spells as Terah, Tira, Tera (Pashto: تیراہ‎) region, also called the Tirah Valley (Pashto: وادی تیراہ‎), is located in Khyber, Kurram and Orakzai agencies in the Khyber Pakhtunkhwa province of Pakistan (33.73N 71.01E), while its smaller part straddles the border to the north lying in Nangarhar Province, Afghanistan. Tirah lies between the Khyber Pass and the Khanki Valley. It is inhabited by the Afridi, Orakzai and Shinwari tribes of Pashtuns."
                }

            },

            {
                pName: "Nanga-Parbat",
                imgSrc: "../images/asia/pakistan/content-edit/Nanga-parbat.jpg",
                heading: "Nalter-Valley",
                rating: "4.8",
                smallDescrip: "Nanga Parbat is one of the eight-thousanders.. Numerous mountaineering deaths lent it the nickname ''Killer Mountain''.”",
                wiki: "https://en.wikipedia.org/wiki/Nanga_Parbat",

                moreDetails: {

                    images: [
                         "../images/asia/edit/n-1.jpg",
                         "../images/asia/edit/n-1.jpg",
                         "../images/asia/edit/n-1.jpg"
                    ],
					cd:" 35.2358 N 74.5868 E",
                    largeDescription: "The core of Nanga Parbat is a long ridge trending southwest–northeast. The ridge is an enormous bulk of ice and rock. It has three faces, Diamir face, Rakhiot, and Rupal. The southwestern portion of this main ridge is known as the Mazeno Wall, and has a number of subsidiary peaks. In the other direction, the main ridge arcs northeast at Rakhiot Peak (7,070 m / 23,196 ft). "
                }

            }

        ]

    },

    {
        name: "India",

        places: [

            {
                pName: "Taj-Mahal",
                imgSrc: "../images/asia/india/edit-content/taj.jpg",
                rating: "5.0",
                smallDescrip: "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being the jewel of Muslim art in India.",
                wiki: "https://en.wikipedia.org/wiki/Taj_Mahal",

                moreDetails: {

                    images: [
                        "../images/asia/edit/taj-1.jpg",
						 "../images/asia/edit/taj-2.jpg",
						 "../images/asia/edit/taj-1.jpg",
                    ],

                    largeDescription: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan, the builder. and one of the universally admired masterpieces of the world's heritage "
                }

            },

            {
                pName: "Havelock-Island",
                imgSrc: "../images/asia/india/edit-content/Have-lock.jpg",
                rating: "4.7",
                smallDescrip: "Havelock Island, officially Swaraj Island, is the one of the largest islands that comprise a chain of islands to the east of Great Andaman in the Andaman Islands.",
                wiki: "https://en.wikipedia.org/wiki/Havelock_Island",

                moreDetails: {

                    images: [
                        "../images/asia/edit/hl-1.jpg",
						 "../images/asia/edit/hl-1.jpg",
						 "../images/asia/edit/hl-1.jpg",
                    ],
					cd:"11.9761° N, 92.9876° E",
                    largeDescription: "Havelock Island is part of Ritchie’s Archipelago, in India’s Andaman Islands. It’s known for its dive sites and beaches, like Elephant Beach, with its coral reefs. Crescent-shaped Radhanagar Beach is a popular spot for watching the sunset. On the island’s east side, rocky sections mark long, tree-lined Vijaynagar Beach. The island's forested interior is home to birdlife such as white-headed mynas and woodpeckers."
                }

            },

            {
                pName: "Hawa-Mahal",
                imgSrc: "../images/asia/india/edit-content/hawa-mahal.jpg",
                rating: "4.4",
                smallDescrip: "The structure was built in 1799 by Maharaja Sawai Pratap Singh. He was so inspired by the unique structure of Khetri Mahal.",
                wiki: "https://en.wikipedia.org/wiki/Hawa_Mahal",

                moreDetails: {

                    images: [  "../images/asia/edit/hm-1.jpg",
						 "../images/asia/edit/hm-1.jpg",
						 "../images/asia/edit/hm-1.jpg"
                    ],
					cd:"26.9239° N, 75.8267° E",
                    largeDescription: "Hawa Mahal is a palace in Jaipur, India. It is constructed of red and pink sandstone. The palace sits on the edge of the City Palace, Jaipur, and extends to the zenana, or women's chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh. that he built this grand and historical palace."
                }

            },

            {
                pName: "Kaziranga National Park",
                imgSrc: "../images/asia/india/edit-content/kaziranga.jpg",
                rating: "4.4",
                smallDescrip: "Kaziranga is a vast expanse of tall elephant grass, marshland, and dense tropical moist broadleaf forests, criss-crossed by four major rivers .",
                wiki: "https://en.wikipedia.org/wiki/Hawa_Mahal",

                moreDetails: {

                    images: [
                         "../images/asia/edit/kn-1.jpg",
						 "../images/asia/edit/kn-1.jpg",
						 "../images/asia/edit/kn-1.jpg"
                    ],
					cd:"26.5775° N, 93.1711° E",
                    largeDescription: "Kaziranga National Park is a protected area in the northeast Indian state of Assam. Spread across the floodplains of the Brahmaputra River, its forests, wetlands and grasslands are home to tigers, elephants and the world’s largest population of Indian one-horned rhinoceroses., including the Brahmaputra, and the park includes numerous small bodies of water. "
                }

            }



        ]

    },


    {
        name: "China",

        places: [

            {
                pName: "China-Wall",
                imgSrc: "../images/asia/china/china-wall-edit.jpg",
                rating: "5.0",
                smallDescrip: "The Great Wall of China is , generally built along an east-to-                  west line across the historical northern borders of China",
                 wiki: "https://en.wikipedia.org/wiki/Great_Wall_of_China",

                moreDetails: {

                    images: [
                         "../images/asia/edit/cw-1.jpg",
						 "../images/asia/edit/cw-1.jpg",
						 "../images/asia/edit/cw-1.jpg"
                    ],
					cd:"40.4319° N, 116.5704° E",
                    largeDescription: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line.The forces of nature and destruction at the hand of mankind are bringing about the gradual reduction of its extent with the result that less than 30% remains in good condition."
                }

            },

            {
                pName: "Jiuzhai-Valley",
                imgSrc: "../images/asia/china/jiuzhai-Valley.jpg",
                rating: "4.7",
                smallDescrip: "he Jiuzhaigou valley is part of the Min Mountains on the edge of the Tibetan Plateau. It is known for its many multi-level waterfalls.",
                wiki: "https://en.wikipedia.org/wiki/Jiuzhaigou",

                moreDetails: {
					cd:"33.2600° N, 103.9186° E",
                    images: [
                        "../images/asia/edit/Cjv-1.jpg",
						 "../images/asia/edit/Cjv-1.jpg",
						 "../images/asia/edit/Cjv-1.jpg"
                    ],

                    largeDescription: "Jiuzhaigou National Park is a network of valleys in China’s Sichuan province. In the northern Shuzheng Valley, Nuorilang Waterfall cascades from the edge of a large tree-fringed lake. The Zharu Monastery is a place of worship for the park’s Tibetan villages. In the south, Rize Valley’s mountains are covered with ancient forests. Fallen trees are scattered on the bottom of the striking, multicolored Five Flower Lake."
                }

            },

            {
                pName: "Lee-River",
                imgSrc: "../images/asia/china/lee-river.jpg",
                rating: "4.4",
                smallDescrip: "The 437-kilometre (272 mi) course of the Li and Gui Rivers is flanked by green hills. Cormorant fishing is often associated with the Lijiang",
                wiki: "https://en.wikipedia.org/wiki/Li_River",

                moreDetails: {

                    images: [
                        "../images/asia/edit/Clee-1.jpg",
						 "../images/asia/edit/Clee-1.jpg",
						 "../images/asia/edit/Clee-1.jpg"
                    ],
					cd:"50.2919° N, 95.8723° W",
                    largeDescription: "The River Lee (Irish: An Laoi[3]) is a river in Ireland. It rises in the Shehy Mountains on the western border of County Cork and flows eastwards through Cork, where it splits in two for a short distance, creating an island on which Cork's city centre is built, and empties into the Celtic Sea at Cork Harbour on the south coast."
                }

            },

            {
                pName: "Zhangjiajie-Forest",
                imgSrc: "../images/asia/china/lee-river.jpg",
                rating: "4.3",
                smallDescrip: "The most notable geographic features of the park are the pillar-like formations that are seen throughout the park. ",
                wiki: "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park",

                moreDetails: {

                    images: [
                        
                        "../images/asia/edit/C-zf-1.jpg",
						 "../images/asia/edit/C-zf-1.jpg",
						 "../images/asia/edit/C-zf-1.jpg"
					],
					cd:"29.3153° N, 110.4348° E",
                    largeDescription: "The Zhangjiajie National Forest Park is a unique national forest park located in Zhangjiajie City in Hunan Province in the People's Republic of China. It is one of several national parks within the Wulingyuan Scenic Area. Zhangjiajie National Forest Park, set up in 1982, is the first authorized national forest park in China"
                }

            }



        ]

    },


    {
        name: "Indonesia",

        places: [

            {
                pName: "Bali-Resort",
                imgSrc: "../images/asia/maldives/edit/Bali-Resort.jpg",
                rating: "5.0",
                smallDescrip: "Bali is Indonesia's main tourist destination, which has seen a significant rise in tourists since the 1980s. Tourism-related business makes up 80% of its economy. It is renowned for its highly developed arts.",

                moreDetails: {

                    images: [
                         "../images/asia/edit/I-b-1.jpg",
						 "../images/asia/edit/I-b-1.jpg",
						 "../images/asia/edit/I-b-1.jpg"
                    ],
					cd:"29.3153° N, 110.4348° E",
                    largeDescription: "Bali is Indonesia's main tourist destination, which has seen a significant rise in tourists since the 1980s.[6] Tourism-related business makes up 80% of its economy.[7] It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music. The Indonesian International Film Festival is held every year in Bali."
                }

            },

            {
                pName: "Bunaken",
                imgSrc: "../images/asia/maldives/edit/bunaken.jpg",
                rating: "4.5",
                smallDescrip: "Bunaken is an island of 8 km², part of the Bunaken National Marine Park. Bunaken is located at the northern tip of the island of Sulawesi, Indonesia. It belongs administratively to the municipality of Manado.",

                moreDetails: {

                    images: [
                         "../images/asia/edit/I-bu-1.jpg",
						 "../images/asia/edit/I-bu-1.jpg",
						 "../images/asia/edit/I-bu-1.jpg"
                    ],
					cd:"1.6235° N, 124.7603° E",
                    largeDescription: "Bunaken is an island of 8 km², part of the Bunaken National Marine Park. Bunaken is located at the northern tip of the island of Sulawesi, Indonesia. It belongs administratively to the municipality of Manado. Scuba diving attracts many visitors to the island"
                }

            },

            {
                pName: "Gili-Lankanfushi",
              imgSrc: "../images/asia/maldives/edit/Gili-Lankanfushi.jpg",
                rating: "4.8",
                smallDescrip: "Soneva, formerly Soneva Resorts and Residences, is a resort chain founded by Sonu ... 2011: Sale of private residences at Soneva Fushi begins; 2012: Split and sale of Six Senses, Evason, and Soneva Gili (now known as Gili Lankanfushi)",

                moreDetails: {

                    images: [
                       "../images/asia/edit/B-gili-1.jpg",
						 "../images/asia/edit/B-gili-1.jpg",
						 "../images/asia/edit/B-gili-1.jpg"
                    ],
					cd:"4.2949° N, 73.5581° E",
                    largeDescription: "Soneva, formerly Soneva Resorts and Residences, is a resort chain founded by Sonu Shivdasani and his wife, Eva Malmström Shivdasani in 1995.[1] The company currently owns and manages Soneva Fushi, located in the Baa Atoll, Soneva Jani,[2] located in the Noonu Atoll, both in the Maldives and Soneva Kiri in Koh Kood, Thailand. It also owns and manages a two bedroom luxury yacht, Soneva in Aqua."
                }

            },

            {
                pName: "Olhuveli",
                imgSrc: "../images/asia/maldives/edit/olhuveli.jpg",
                rating: "4.9",
                smallDescrip: "It is mostly rimmed by barrier reefs, the broadest of which are topped by islands. There are many islands along its eastern and southern boundaries.",
                wiki: "https://en.wikipedia.org/wiki/Laamu_Atoll",

                moreDetails: {

                    images: [
                      "../images/asia/edit/B-ol-1.jpg",
						 "../images/asia/edit/B-ol-1.jpg",
						 "../images/asia/edit/B-ol-1.jpg"
                    ],
					cd:"4.5549° N, 72.5415° E",
                    largeDescription: "It is mostly rimmed by barrier reefs, the broadest of which are topped by islands. There are many islands along its eastern and southern boundaries.This atoll is quite regular excepting for the projection of the reef at its NE corner (Isdhū Muli). It closely resembles Kolhumadulhu, its neighbour further north. Owing to its typical atoll shape, it differs in no respect from atolls in the Pacific Ocean, save for its greater size."
                }

            },

            {
                pName: "Tanah-Lot",
                imgSrc: "../images/asia/maldives/edit/Tanah-Lot.jpg",
                rating: "4.8",
                smallDescrip: "Tanah Lot is a rock formation off the Indonesian island of Bali. It is home to the ancient Hindu pilgrimage temple Pura Tanah Lot (literally Tanah Lot temple), a popular tourist and cultural icon for photography.",
                wiki: "https://en.wikipedia.org/wiki/Tanah_Lot",

                moreDetails: {

                    images: [
                         "../images/asia/edit/I-gili-1.jpg",
						 "../images/asia/edit/I-gili-1.jpg",
						 "../images/asia/edit/I-gili-1.jpg"
                    ],
					cd:"8.6212° S, 115.0868° E",
                    largeDescription: "Tanah Lot is a rock formation off the Indonesian island of Bali. It is home to the ancient Hindu pilgrimage temple Pura Tanah Lot, a popular tourist and cultural icon for photography. During the ritual in Tanah Lot temple, Balinese people would come to pray and even some of them also come from several regions in Indonesia."
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



