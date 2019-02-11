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
	
    $scope.contentArray = $filter('filter')(myData, { name: 'Egypt' });

});



var myData = [
    {
        name: "Egypt",

        places: [


            {
                pName: "Giza-Necropolis",
                imgSrc: "../images/africa/egypt/Giza-Necropolis.jpg",
                rating: "4.7",
                smallDescrip: "The pyramids, which have historically been common as emblems of ancient Egypt in the Western imagination,were popularised in Hellenistic times.",
                wiki: "https://en.wikipedia.org/wiki/Giza_pyramid_complex",

                moreDetails: {

                    images: [
                        "../images/africa/c-edit/n-1.jpg",
  						"../images/africa/c-edit/n-2.jpg",
                         "../images/africa/c-edit/n-3.jpg"
                       
                    ],
                     cd:"29°58′34″N 31°7′58″E",
                    largeDescription: "The Pyramids of Giza consist of the Great Pyramid of Giza (also known as the Pyramid of Cheops or Khufu and constructed c. 2580 – c. 2560 BC), the somewhat smaller Pyramid of Khafre (or Chephren) a few hundred meters to the south-west, and the relatively modest-sized Pyramid of Menkaure (or Mykerinos) a few hundred meters farther south-west. The Great Sphinx lies on the east side of the complex. Current consensus among Egyptologists is that the head of the Great Sphinx is that of Khafre. Along with these major monuments are a number of smaller satellite edifices, known as queens pyramids, causeways and valley pyramids."
                }

            },

            {
                pName: "Giza-Sphinx",
                imgSrc: "../images/africa/egypt/sphinx.jpg",
                rating: "5.0",
                smallDescrip: "The Great Sphinx is one of the world's largest and oldest statues,when it was built, by whom and for what purpose.",
                wiki: "https://en.wikipedia.org/wiki/Great_Sphinx_of_Giza",

                moreDetails: {

                    images: [
                            "../images/africa/c-edit/sp-1.jpg",
  					     	"../images/africa/c-edit/sp-4.jpg",
                           "../images/africa/c-edit/sp-3.jpg"
                    ],
                     cd:"29°58′31″N 31°08′16″E",
                    largeDescription: "The Sphinx is a monolith carved into the bedrock of the plateau, which also served as the quarry for the pyramids and other monuments in the area.[5] The nummulitic limestone of the area consists of layers which offer differing resistance to erosion (mostly caused by wind and windblown sand), leading to the uneven degradation apparent in the Sphinx's body.[5][6] The lowest part of the body, including the legs, is solid rock.[1] The body of the lion up to its neck is fashioned from softer layers that have suffered considerable disintegration.[7] The layer in which the head was sculpted is much harder.[7][8]"
                }

            },

            {
                pName: "Blue-Hole",
               imgSrc: "../images/africa/egypt/blue-hole.jpg",
                rating: "4.8",
                smallDescrip: "Blue holes are roughly circular, deep waters of their depths and the lighter blue of the shallows around them. ",
                wiki: "https://en.wikipedia.org/wiki/Blue_hole",

                moreDetails: {

                    images: [
                       "../images/africa/c-edit/bh-1.jpg",
  					     	"../images/africa/c-edit/bh-2.jpg",
                           "../images/africa/c-edit/bh-3.jpg"
                    ],
                    cd:"17.3160° N, 87.5351° W",
                    largeDescription: "Blue holes are roughly circular, steep-walled depressions, and so named for the dramatic contrast between the dark blue, deep waters of their depths and the lighter blue of the shallows around them. Their water circulation is poor, and they are commonly anoxic below a certain depth; this environment is unfavorable for most sea life, but nonetheless can support large numbers of bacteria. The deep blue color is caused by the high transparency of water and bright white carbonate sand. Blue light is the most enduring part of the spectrum; other parts of the spectrum—red, yellow, and finally green—are absorbed during their path through water, but blue light manages to reach the white sand and return upon reflection."
                }

            }

        ]

    },

    {
        name: "East-Africa",

        places: [

            {
                pName: "Mauritius Island",
                imgSrc: "../images/africa/East-Africa/mauritius/edited/Mauritius-e.jpg",
                rating: "5.0",
                smallDescrip: "TGrants Villa Mauritius, Grants Beach Front Villa Mauritius, ... accommodation at the very best beach front locations around the amazing Mauritius Island.",
                wiki: "https://wikitravel.org/en/Mauritius",

                moreDetails: {

                    images: [
                        "../images/africa/East-Africa/e-edit/mr-1.jpg",
                         "../images/africa/East-Africa/e-edit/mr-2.jpg",
                         "../images/africa/East-Africa/e-edit/mr-3.jpg"
                    ],
                    cd:"20.3000° S, 57.5833° E",
                    largeDescription: "The people of Mauritius are multiethnic, multicultural and multilingual. The island's government is closely modelled on the Westminster parliamentary system, and Mauritius is highly ranked for democracy and for economic and political freedom. The Human Development Index of Mauritius is one of the highest in Africa. Mauritius is ranked as the most competitive and one of the most developed economies in the African region.[13] The country has no exploitable natural resources, Mauritius is a welfare state, the government provides free universal health care, free education up to tertiary level and free public transport for students, senior citizens and the disabled"
                }

            },

            {
                pName: "Mount-Kilimanjaro",
                imgSrc: "../images/africa/East-Africa/Mount-Kilimanjaro/edited/Mount-Kilimanjaro-e.jpg",
                rating: "4.7",
                smallDescrip: "Mount Kilimanjaro is a currently inactive strato-volcano in northern Tanzania, near the border with Kenya. At 5,895 metres (19,340 feet) above sea level.",
                wiki: "https://wikitravel.org/en/Mount_Kilimanjaro",

                moreDetails: {

                    images: [
                       "../images/africa/East-Africa/e-edit/m-1.jpg",
                         "../images/africa/East-Africa/e-edit/m-2.jpg",
                         "../images/africa/East-Africa/e-edit/m-3.jpg"
                    ],
                    cd:"3.0674° S, 37.3556° E",
                    largeDescription: "The interior of the volcanic edifice is poorly known, given the lack of large scale erosion that could have exposed the interiors of the volcano.[12]Eruptive activity at the Shira centre commenced about 2.5 million years ago, with the last important phase occurring about 1.9 million years ago, just before the northern part of the edifice collapsed.[10] Shira is topped by a broad plateau at 3,800 metres (12,500 ft), which may be a filled caldera. The remnant caldera rim has been degraded deeply by erosion. Before the caldera formed and erosion began, Shira might have been between 4,900 m (16,000 ft) and 5,200 m (17,000 ft) high. It is mostly composed of basic lavas with some pyroclastics."
                }

            },

            {
                pName: "Victorial-Falls",
                imgSrc: "../images/africa/East-Africa/victoria-falls/Edited/victoria-falls.jpg",
                rating: "4.9",
                smallDescrip: " The greatest volume of water, they have the largest sheet of water for any fall in the world and are a sight not to be missed..",
                wiki: "https://wikitravel.org/en/Victoria_Falls",

                moreDetails: {

                    images: [
                         "../images/africa/East-Africa/e-edit/vf-1.jpg",
                         "../images/africa/East-Africa/e-edit/vf-2.jpg",
                         "../images/africa/East-Africa/e-edit/vf-3.jpg"
                    ],
                     cd:"17.9243° S, 25.8572° E",
                    largeDescription: "The entire volume of the Zambezi River pours through the First Gorge's 110 metres (360 ft) wide exit for a distance of about 150 metres (490 ft), then enters a zigzagging series of gorges designated by the order in which the river reaches them. Water entering the Second Gorge makes a sharp right turn and has carved out a deep pool there called the Boiling Pot. Reached via a steep footpath from the Zambian side, it is about 150 metres (500 ft) across. Its surface is smooth at low water, but at high water is marked by enormous, slow swirls and heavy boiling turbulence."
                }

            }

        ]

    },


    {
        name: "Tanzania",

        places: [

            {
                pName: "Arusha National Park",
                imgSrc: "../images/africa/tanzania/Arusha-National-Park/edited/Arusha-National-Park.jpg",
                rating: "4.9",
                smallDescrip: "Day Tour and Canoeing Forest walks, numerous picnic sites three- or four-day Mt Meru climb good acclimatization for Kilimanjaro.",
                 wiki: "https://wikitravel.org/en/Arusha_National_Park",

                moreDetails: {

                    images: [
                        "../images/africa/tanzania/T-edit/ap-1.jpg",
                         "../images/africa/tanzania/T-edit/ap-2.jpg",
                        "../images/africa/tanzania/T-edit/ap-3.jpg"
                    ],
                    cd:"3.2500° S, 36.7500° E",
                    largeDescription: "Arusha National Park covers Mount Meru, a prominent volcano with an elevation of 4566 m, in the Arusha Region of north eastern Tanzania. The park is small but varied with spectacular landscapes in three distinct areas. In the west, the Meru Crater funnels the Jekukumia River; the peak of Mount Meru lies on its rim.Arusha National Park has a rich variety of wildlife, but visitors shouldn't expect the same game-viewing experience they find in other national parks of Tanzania's northern circuit. "
                }

            },

            {
                pName: "Mnemba Island",
                imgSrc: "../images/africa/tanzania/Mnemba-Island/edited/Mnemba-Island.jpg",
                rating: "4.7",
                smallDescrip: "Mnemba Island is a popular scuba diving site, with a wide variety of corals and associated species..",
                wiki: "https://en.wikipedia.org/wiki/Mnemba_Island",

                moreDetails: {

                    images: [
                         "../images/africa/tanzania/T-edit/ms-1.jpg",
                         "../images/africa/tanzania/T-edit/ms-2.jpg",
                        "../images/africa/tanzania/T-edit/ms-3.jpg"
                    ],
                    cd:"5.8205° S, 39.3835° E",
                    largeDescription: "Mnemba Island is a single small island located about 3 km off the northeast coast of Unguja, the largest island of the Zanzibar Archipelago, Tanzania, opposite Muyuni Beach. It is roughly triangular in shape, about 500 metres in diameter and about 1.5 kilometres in circumference.Mnemba Island Lodge is situated on an exclusive island just 4.5 kilometres off the north-eastern coast of Zanzibar in the azure Indian Ocean. Surrounded by an atoll of breathtaking coral reefs, it boasts some of Africa’s most wonderful dive sites. "
                }

            },

            {
                pName: "Ngorongoro",
                imgSrc: "../images/africa/tanzania/Ngorongoro-Conservation-Area/edited/Ngorongoro-Conservation-Area.jpg",
                rating: "4.4",
                smallDescrip: "The Ngorongoro Conservation Area west of Arusha in the Crater Highlands area of Tanzania",
                wiki: "https://en.wikipedia.org/wiki/Ngorongoro_Conservation_Area",

                moreDetails: {

                    images: [
                          "../images/africa/tanzania/T-edit/ng-1.jpg",
                         "../images/africa/tanzania/T-edit/ng-2.jpg",
                        "../images/africa/tanzania/T-edit/ng-3.jpg"
                    ],
                    cd:"3.2262° S, 35.4467° E",
                    largeDescription: "Ngorongoro Conservation Area is in northern Tanzania. It’s home to the vast, volcanic Ngorongoro Crater and “big 5” game (elephant, lion, leopard, buffalo, rhino). Huge herds of wildebeests and zebras traverse its plains during their annual migration. Livestock belonging to the semi-nomadic Maasai tribe graze alongside wild animals. Hominin fossils found in the Olduvai Gorge date back millions of years."
                }

            },

            {
                pName: "Serengeti",
                imgSrc: "../images/africa/tanzania/Serengeti/edited/Serengeti.jpg",
                rating: "4.7",
                smallDescrip: "The Serengeti National Park is a Tanzanian national park in the Serengeti ecosystem in the Mara and Simiyu regions.[2][3] It is famous for its annual migration",
                wiki: "https://en.wikipedia.org/wiki/Serengeti_National_Park",

                moreDetails: {

                    images: [
                     "../images/africa/tanzania/T-edit/se-1.jpg",
                         "../images/africa/tanzania/T-edit/se-2.jpg",
                        "../images/africa/tanzania/T-edit/se-3.jpg"
                    ],
                     cd:"2.1540° S, 34.6857° E",
                    largeDescription: "The Serengeti hosts the second largest terrestrial mammal migration in the world, which helps secure it as one of the Seven Natural Wonders of Africa,[1] and as one of the ten natural travel wonders of the world.[2] The Serengeti is also renowned for its large lion population and is one of the best places to observe prides in their natural environment.[3] The region contains the Serengeti National Park in Tanzania and several game reserves.Approximately 70 large mammal and 500 bird species are found there. This high diversity is a function of diverse habitats, including riverine forests, swamps, kopjes, grasslands, and woodlands.[4] Blue wildebeests, gazelles, zebras, and buffalos are some of the commonly found large mammals in the region."
                }

            }



        ]

    },


    {
        name: "South-Africa",

        places: [

            {
                pName: "Kirstenbosch Gardan",
                imgSrc: "../images/africa/South-Africa/Kirstenbosch-National-Botanical-Garden/edited/Kirstenbosch-National-Botanical-Garden.jpg",
                rating: "3.5",
                smallDescrip: "Kirstenbosch is an important botanical garden nestled at the eastern foot of Table Mountain in Cape Town. The garden is one of ten National Botanical Gardens .",

                moreDetails: {

                    images: [
                        "../images/africa/South-Africa/s-edit/k-1.jpg",
                         "../images/africa/South-Africa/s-edit/k-2.jpg",
                        "../images/africa/South-Africa/s-edit/k-3.jpg"
                    ],
                    cd:"33.9875° S, 18.4327° E",
                    largeDescription: "Kirstenbosch is an important botanical garden nestled at the eastern foot of Table Mountain in Cape Town. The garden is one of ten National Botanical Gardens covering five of South Africa's six different biomes and administered by the South African National Biodiversity Institute (SANBI). Prior to 1 September 2004, the institute was known as the National Botanical Institute.Kirstenbosch places a strong emphasis on the cultivation of indigenous plants. When Kirstenbosch was founded in 1913 to preserve the flora native to the South Africa’s territory, it was the first botanical garden in the world with this ethos, at a time when invasive species were not considered an ecological and environmental problem."
                }

            },

            {
                pName: "Lion's head",
                imgSrc: "../images/africa/South-Africa/Lion's-head/edited/Lion's-head-e.jpg",
                rating: "4.5",
                smallDescrip: "Bunaken is an island of 8 km², part of the Bunaken National Marine Park. Bunaken is located at the northern tip of the island of Sulawesi, Indonesia.",

                moreDetails: {

                    images: [
                        "../images/africa/South-Africa/s-edit/l-1.jpg",
                         "../images/africa/South-Africa/s-edit/l-2.jpg",
                        "../images/africa/South-Africa/s-edit/l-3.jpg"
                    ],
                    cd:"33.9350° S, 18.3890° E",
                    largeDescription: "The suburbs of the city surround the peak and Signal Hill on almost all sides, but strict management by city authorities has kept development of housing off the higher ground. The area is significant to the Cape Malay community, who historically lived in the Bo-Kaap quarter close to Lion's Head.There are a number of historic graves and shrines (kramats) of Malay leaders on the lower slopes and on Signal Hill.In the 17th century the peak was known as Leeuwen Kop (Lion's Head) by the Dutch, and Signal Hill was known as Leeuwen Staart (Lion's Tail), as the shape resembles a crouching lion or a sphinx. The English in the 17th Century called the peak Sugar Loaf."
                }

            },

            {
                pName: "Table Mountain",
              imgSrc: "../images/africa/South-Africa/Table-Mountain/edited/Table-Mountain-e.jpg",
                rating: "4.8",
                smallDescrip: " Flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa. It is a significant tourist attraction",

                moreDetails: {

                    images: [
                        "../images/africa/South-Africa/s-edit/t-1.jpg",
                         "../images/africa/South-Africa/s-edit/t-3.jpg",
                        "../images/africa/South-Africa/s-edit/t-2.jpg"
                    ],
                     cd:"33.9628° S, 18.4098° E",
                    largeDescription: "Table Mountain National Park consists of the greater Table Mountain chain on the peninsula, stretching from the well known Table Mountain behind Cape Town south to Cape Point. In incorporates Table Mountain, Tokai Forest, Silvermine, a large area around Cape Point as well as a number of marine protected areas.The park is busy with ongoing restructuring and development. New areas are constantly being added to the park in an effort to link the separated portions and expand the park. It is useful to know for orientation that the park is not a continuos landmass, but consists of various patches across the cape peninsula."
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




