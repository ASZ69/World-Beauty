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
                        "images/gand.jpg",
                        "images/gand.jpg",
                        "images/gand.jpg",
                        "images/gand.jpg"
                    ],

                    largeText: "",
                    smallText: "",
                    specialImg: "",
                    cordinates: ""

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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
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
                pName: "Saif-ul-Malook",
                imgSrc: "../images/asia/pakistan/content-edit/saif-ul-malook.jpg",
                heading: "Kaghan",
                rating: "5",
                smallDescrip: "The best time to visit Kaghan Valley is during the Summer season (May to September). Because In Winter, the glaciers blocks the roads leading to Kaghan Valley",
                wiki: "https://en.wikipedia.org/wiki/Kaghan_Valley",

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
                pName: "Nalter-Valley",
                imgSrc: "../images/asia/pakistan/content-edit/Nalter-valley.jpg",
                heading: "Nalter-Valley",
                rating: "3.9",
                smallDescrip: "Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan. Naltar is 40 km (25 mi) from Gilgit and can be reached by jeeps",
                wiki: "https://en.wikipedia.org/wiki/Naltar_Valley",

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
                pName: "Neelum-Valley",
                imgSrc: "../images/asia/pakistan/content-edit/Neelam.jpg",
                heading: "Neelum-Valley",
                rating: "4.7",
                smallDescrip: "Neelam is accessible by Neelam road from Muzaffarabad. A rest house of Tourism and Archeology Department located there for tourists stay. A small market is also there.",
                wiki: "https://en.wikipedia.org/wiki/Neelam_(village)",

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
                pName: "Tirah-Valley",
                imgSrc: "../images/asia/pakistan/content-edit/Teerah.jpg",
                heading: "Nalter-Valley",
                rating: "4.0",
                smallDescrip: "Naltar is a valley near Gilgit, Hunza and Nomal, Gilgit Baltistan in the Gilgit–Baltistan province of Pakistan. Naltar is 40 km (25 mi) from Gilgit and can be reached by jeeps",
                wiki: "https://en.wikipedia.org/wiki/Naltar_Valley",

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
                pName: "Nanga-Parbat",
                imgSrc: "../images/asia/pakistan/content-edit/Nanga-parbat.jpg",
                heading: "Nalter-Valley",
                rating: "4.8",
                smallDescrip: "Nanga Parbat is one of the eight-thousanders.. Numerous mountaineering deaths lent it the nickname ''Killer Mountain''.”",
                wiki: "https://en.wikipedia.org/wiki/Nanga_Parbat",

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
        name: "India",

        places: [

            {
                pName: "Taj-Mahal",
                imgSrc: "../images/asia/india/edit-content/taj.jpg",
                rating: "5.0",
                smallDescrip: "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
                wiki: "https://en.wikipedia.org/wiki/Taj_Mahal",

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
                pName: "Havelock-Island",
                imgSrc: "../images/asia/india/edit-content/Have-lock.jpg",
                rating: "4.7",
                smallDescrip: "Havelock Island, officially Swaraj Island, is the one of the largest islands that comprise a chain of islands to the east of Great Andaman in the Andaman Islands.",
                wiki: "https://en.wikipedia.org/wiki/Havelock_Island",

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
                pName: "Hawa-Mahal",
                imgSrc: "../images/asia/india/edit-content/hawa-mahal.jpg",
                rating: "4.4",
                smallDescrip: "The structure was built in 1799 by Maharaja Sawai Pratap Singh. He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.",
                wiki: "https://en.wikipedia.org/wiki/Hawa_Mahal",

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
                pName: "Kaziranga National Park",
                imgSrc: "../images/asia/india/edit-content/kaziranga.jpg",
                rating: "4.4",
                smallDescrip: "Kaziranga is a vast expanse of tall elephant grass, marshland, and dense tropical moist broadleaf forests, criss-crossed by four major rivers, including the Brahmaputra, and the park includes numerous small bodies of water. .",
                wiki: "https://en.wikipedia.org/wiki/Hawa_Mahal",

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
                        "images/j.jpg",
                        "images/j.jpg",
                        "images/j.jpg"
                    ],

                    largeDescription: "jkshfkash"
                }

            },

            {
                pName: "Jiuzhai-Valley",
                imgSrc: "../images/asia/china/jiuzhai-Valley.jpg",
                rating: "4.7",
                smallDescrip: "he Jiuzhaigou valley is part of the Min Mountains on the edge of the Tibetan Plateau. It is known for its many multi-level waterfalls, colorful lakes, and snow-capped peaks",
                wiki: "https://en.wikipedia.org/wiki/Jiuzhaigou",

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
                pName: "Lee-River",
                imgSrc: "../images/asia/china/lee-river.jpg",
                rating: "4.4",
                smallDescrip: "The 437-kilometre (272 mi) course of the Li and Gui Rivers is flanked by green hills. Cormorant fishing is often associated with the Lijiang",
                wiki: "https://en.wikipedia.org/wiki/Li_River",

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
                pName: "Zhangjiajie-Forest",
                imgSrc: "../images/asia/china/lee-river.jpg",
                rating: "4.3",
                smallDescrip: "The most notable geographic features of the park are the pillar-like formations that are seen throughout the park. Although resembling karst terrain.",
                wiki: "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park",

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
        name: "Indonesia",

        places: [

            {
                pName: "Bali-Resort",
                imgSrc: "../images/asia/maldives/edit/Bali-Resort.jpg",
                rating: "5.0",
                smallDescrip: "Bali is Indonesia's main tourist destination, which has seen a significant rise in tourists since the 1980s. Tourism-related business makes up 80% of its economy. It is renowned for its highly developed arts.",

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
                pName: "Bunaken",
                imgSrc: "../images/asia/maldives/edit/bunaken.jpg",
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
                pName: "Gili-Lankanfushi",
              imgSrc: "../images/asia/maldives/edit/Gili-Lankanfushi.jpg",
                rating: "4.8",
                smallDescrip: "Soneva, formerly Soneva Resorts and Residences, is a resort chain founded by Sonu ... 2011: Sale of private residences at Soneva Fushi begins; 2012: Split and sale of Six Senses, Evason, and Soneva Gili (now known as Gili Lankanfushi)",

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
                pName: "Olhuveli",
                imgSrc: "../images/asia/maldives/edit/olhuveli.jpg",
                rating: "4.9",
                smallDescrip: "It is mostly rimmed by barrier reefs, the broadest of which are topped by islands. There are many islands along its eastern and southern boundaries.",
                wiki: "https://en.wikipedia.org/wiki/Laamu_Atoll",

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
                pName: "Tanah-Lot",
                imgSrc: "../images/asia/maldives/edit/Tanah-Lot.jpg",
                rating: "4.8",
                smallDescrip: "Tanah Lot is a rock formation off the Indonesian island of Bali. It is home to the ancient Hindu pilgrimage temple Pura Tanah Lot (literally Tanah Lot temple), a popular tourist and cultural icon for photography.",
                wiki: "https://en.wikipedia.org/wiki/Tanah_Lot",

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