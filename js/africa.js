// JavaScript Document
var content = angular.module("myApp", []);

content.controller("navControl", function ($scope, $filter) {
    $scope.showContent = function (content) {
        var referClick = content.currentTarget;
        var navigation = referClick.innerHTML;
        $scope.contentArray = $filter('filter')(myData, { name: navigation });
    }

    $scope.contentArray = $filter('filter')(myData, { name: 'Pakistan' });

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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
                }

            },

            {
                pName: "Mnemba Island",
                imgSrc: "../images/africa/tanzania/Mnemba-Island/edited/Mnemba-Island.jpg",
                rating: "4.7",
                smallDescrip: "Mnemba Island is a popular scuba diving site, with a wide variety of corals and associated species, as well as occasional sightings of larger species such as turtles and dolphins.",
                wiki: "https://en.wikipedia.org/wiki/Mnemba_Island",

                moreDetails: {

                    images: [
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
                }

            },

            {
                pName: "Ngorongoro Conservation Area",
                imgSrc: "../images/africa/tanzania/Ngorongoro-Conservation-Area/edited/Ngorongoro-Conservation-Area.jpg",
                rating: "4.4",
                smallDescrip: "The Ngorongoro Conservation Area west of Arusha in the Crater Highlands area of Tanzania",
                wiki: "https://en.wikipedia.org/wiki/Ngorongoro_Conservation_Area",

                moreDetails: {

                    images: [
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
                }

            },

            {
                pName: "Lion's head",
                imgSrc: "../images/africa/South-Africa/Lion's-head/edited/Lion's-head-e.jpg",
                rating: "4.5",
                smallDescrip: "Bunaken is an island of 8 km², part of the Bunaken National Marine Park. Bunaken is located at the northern tip of the island of Sulawesi, Indonesia. It belongs administratively to the municipality of Manado.",

                moreDetails: {

                    images: [
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
                }

            },

            {
                pName: "Table Mountain",
              imgSrc: "../images/africa/South-Africa/Table-Mountain/edited/Table-Mountain-e",
                rating: "4.8",
                smallDescrip: " Flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa. It is a significant tourist attraction",

                moreDetails: {

                    images: [
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
                }

            } 
        ]

    }
	
	
	
	
];