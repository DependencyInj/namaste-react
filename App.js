
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/header/Header';
import RestaurentCard from './src/components/Card/Card';

const resList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "489586",
            "name": "Hotel Aryas",
            "uuid": "f47dbf53-bfdd-4636-99cc-37e9d8714ba0",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "tnivu7by8qjbmbcrbtov",
            "cuisines": [
                "South Indian",
                "Chinese",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "slaString": "25 MINS",
            "lastMileTravel": 2.299999952316284,
            "slugs": {
                "restaurant": "hotel-aryas-edapally-edapally",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "31/302 Pulikillam West Road, Chembumukku Junction, Ernakulam - 682030",
            "locality": "Pulikillam West Road",
            "parentId": 98138,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6501763~p=1~eid=00000187-87ae-438b-15af-63ce00b10139",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "489586",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "lastMileTravel": 2.299999952316284,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "53380",
            "name": "The Ice Cream Factory",
            "uuid": "2ab80db0-7f5b-4bb6-870c-f891798f9330",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "k9drb9ymyxttftkv9u4g",
            "cuisines": [
                "Ice Cream",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
                "restaurant": "the-icecream-factory-and-sandiwchwalas-infopark-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Carnival Infopark - Phase 3, Ground Floor",
            "locality": "3rd Phase",
            "parentId": 209959,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "53380",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "lastMileTravel": 2.9000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "55641",
            "name": "Sandwich Walas",
            "uuid": "ba2e3f77-9c49-4839-97a9-0aa1dab44fc3",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "a1zwjsdczhjhtybtep6p",
            "cuisines": [
                "Continental",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 2.9000000953674316,
            "slugs": {
                "restaurant": "sandwichwallas-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Carnival Infopark - Phase 3, Ground Floor",
            "locality": "3rd Phase",
            "parentId": 20900,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.9 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "55641",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 2.9000000953674316,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "66419",
            "name": "Hotel Anandaas",
            "uuid": "d42aff76-131c-4054-8717-4a1a86b745cf",
            "city": "13",
            "area": "Palarivattom",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "p0nmvyeaeofyxdef9t9l",
            "cuisines": [
                "South Indian",
                "Chinese",
                "North Indian"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "hotel-anandaas-pipeline-edapally",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Alinchuvadu Junction, Civil Line Road,Padivattom,Edappally",
            "locality": "Alinchuvadu Junction",
            "parentId": 20850,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6501791~p=4~eid=00000187-87ae-438b-15af-63cf00b1040d",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "66419",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "221435",
            "name": "Khyber Fast Food",
            "uuid": "39a61057-66aa-4e76-a313-7b617ceb8316",
            "city": "13",
            "area": "Edappally",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "z0ct50ztx6jznexhffvi",
            "cuisines": [
                "Beverages",
                "Chinese",
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "khyber-fast-food-edapally-edapally",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "NH-17,Lulu western entrance, Nethaji Nagar, Edappally, Ernakulam, Kerala 682024",
            "locality": "Nethaji Nagar",
            "parentId": 20372,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "25% off",
                "shortDescriptionList": [
                    {
                        "meta": "25% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "25% off up to ₹65 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "25% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "25% off up to ₹65 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "221435",
                "deliveryTime": 23,
                "minDeliveryTime": 23,
                "maxDeliveryTime": 23,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 5000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "52179",
            "name": "Expresso",
            "uuid": "5ebbdb36-41d0-4668-a312-b27cd1cc7e8c",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "vmksaa43vbtrc4ahwkgk",
            "cuisines": [
                "Continental",
                "Beverages",
                "Desserts",
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "expresso-infopark-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Carnival Infopark - Phase 4, Ground Floor, Kakkanad",
            "locality": "Sector 4",
            "parentId": 20921,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "20% off",
                "shortDescriptionList": [
                    {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "52179",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.8",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "666186",
            "name": "Annamali Aryas Chappathi Corner",
            "uuid": "ee465260-5d0f-46b3-be79-8ffdc5769d89",
            "city": "13",
            "area": "Kaloor",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "c8e6c8b32a3e78742905021e1026bfe2",
            "cuisines": [
                "Indian",
                "South Indian"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "annamali-aryas-chappathi-corner-kaloor-kaloor",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "44/1415,SAMSKARA JUNCTION,PALARIVATTOM,THRIKKAKARA CIRCLE,ERNAKULAM,KERALA-682025",
            "locality": "Samskara junction",
            "parentId": 399640,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4400",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "666186",
                "deliveryTime": 35,
                "minDeliveryTime": 35,
                "maxDeliveryTime": 35,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "692348",
            "name": "HOMECRAVES",
            "uuid": "c3ba93bf-506e-4ce6-b49f-3793c25a7ffe",
            "city": "13",
            "area": "Kaloor",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "b5ab678cdf337753a7b578b014093811",
            "cuisines": [
                "Snacks"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "slaString": "39 MINS",
            "lastMileTravel": 6.099999904632568,
            "slugs": {
                "restaurant": "homecraves-kaloor-kaloor",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "GALAXY HOUSE,SIUP SCHOOL ROAD,  KALOOR, Eranakulam Circle, Ernakulam,  Kerala - 682017",
            "locality": "Siup school road",
            "parentId": 414688,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "692348",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "lastMileTravel": 6.099999904632568,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "611049",
            "name": "DREAMS CAKE",
            "uuid": "9777319a-b084-41d9-be50-e21e6c58caf4",
            "city": "13",
            "area": "Edappally",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "tlgor2pllyjo69jp9uvo",
            "cuisines": [
                "Bakery"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 46,
            "minDeliveryTime": 46,
            "maxDeliveryTime": 46,
            "slaString": "46 MINS",
            "lastMileTravel": 6.5,
            "slugs": {
                "restaurant": "dreams-cake-edapally-edapally",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "RAYRAS APARTMENT, 1ST FLOOR, ROOM NO.103 PANIKKAVEETIL RESIDENCY, JAWAN CROSS ROAD,PONEKKARA,WARD NO.37,ERNAKULAM DISTRICT,ERNAKULAM CIRCLE,ERNAKULAM,KERLA-682041",
            "locality": "Jawan Cross Road",
            "parentId": 364524,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                    {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "10% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4900",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "6.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "611049",
                "deliveryTime": 46,
                "minDeliveryTime": 46,
                "maxDeliveryTime": 46,
                "lastMileTravel": 6.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.9",
            "totalRatings": 50,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "669454",
            "name": "Jaseela Kitchen",
            "uuid": "d6f4383d-1785-4295-81cf-b562a1f1f25f",
            "city": "13",
            "area": "Kaloor",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "71aa2a5bd4dd8df8a5104637ddae4468",
            "cuisines": [
                "Indian"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 51,
            "minDeliveryTime": 51,
            "maxDeliveryTime": 51,
            "slaString": "51 MINS",
            "lastMileTravel": 8.199999809265137,
            "slugs": {
                "restaurant": "jaseela-kitchen-kaloor-kaloor",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "69/367 VADAKKEDATH ROAD NEAR  AYYAPPANKAVU TEMPLE ERNAKULAM  NORTH 682018, Eranakulam Circle,  Ernakulam, Kerala - 682018",
            "locality": "Vadakkedath Road",
            "parentId": 401342,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 6200,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 6200,
                "message": "",
                "title": "Delivery Charge",
                "amount": "6200",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 1,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "8.1 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "669454",
                "deliveryTime": 51,
                "minDeliveryTime": 51,
                "maxDeliveryTime": 51,
                "lastMileTravel": 8.199999809265137,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "IT_IS_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "52083",
            "name": "Palaaram",
            "uuid": "f59dc53f-d3b7-4d7e-9154-8920c3f3bdbb",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "zchpuqit7k4pdndgse4t",
            "cuisines": [
                "Kerala",
                "Biryani",
                "North Indian",
                "Arabian",
                "Chinese"
            ],
            "tags": [],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 2.5999999046325684,
            "slugs": {
                "restaurant": "palaaram-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Vallathol Junction, Thrikkakara, Kakkanad, Kochi",
            "locality": "Thrikkakara",
            "parentId": 18945,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "30% off",
                "shortDescriptionList": [
                    {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "30% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": false,
                "nextOpenMessage": "Opens next at 8:10 am, today",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "52083",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 2.5999999046325684,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "56658",
            "name": "Subway",
            "uuid": "d9250feb-70d2-4de8-b503-e6c4a4c1d6a4",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 0.20000000298023224,
            "slugs": {
                "restaurant": "subway-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "N's building, First Floor, Navakeralapuri, Civil Line Road, Kakkanad",
            "locality": "Navakeralapuri",
            "parentId": 2,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": false,
                "nextOpenMessage": "Opens next at 10 am, today",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "56658",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 0.20000000298023224,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "627368",
            "name": "The Taapioca",
            "uuid": "c078289a-29bd-4989-bfd1-d044223b3b1d",
            "city": "13",
            "area": "Kaloor",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "slt2ux8qqept2qnrryjj",
            "cuisines": [
                "Indian",
                "Beverages",
                "Burgers"
            ],
            "tags": [],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "slaString": "39 MINS",
            "lastMileTravel": 7.400000095367432,
            "slugs": {
                "restaurant": "the-taapioca-kaloor-kaloor",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "The Taapioca Restaurant Goshree Chathiyath Road, Mylaady Chambers, Pottakuzhy Rd, Mamangalam, Kaloor, Kochi, Kerala 682017, India",
            "locality": "Mamangalam",
            "parentId": 372998,
            "unserviceable": true,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 5400,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 5400,
                "message": "",
                "title": "Delivery Charge",
                "amount": "5400",
                "icon": ""
            },
            "availability": {
                "opened": false,
                "nextOpenMessage": "Opens next at 11:30 am, today",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "7.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "627368",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "lastMileTravel": 7.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE_WITH_BANNER",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "559535",
            "name": "Chinese Hub",
            "uuid": "cb2f92c0-3f1b-42a7-8a1e-f2b656747d73",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "ydwiyhxzno5rwbynoik3",
            "cuisines": [
                "Chinese",
                "South Indian",
                "Juices"
            ],
            "tags": [],
            "costForTwo": 900,
            "costForTwoString": "₹9 FOR TWO",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "slaString": "36 MINS",
            "lastMileTravel": 2.299999952316284,
            "slugs": {
                "restaurant": "chinese-hub-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Palachuvad thrikkakara kakkanad kochi",
            "locality": "Palachuvad",
            "parentId": 16394,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "20% off",
                "shortDescriptionList": [
                    {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": false,
                "nextOpenMessage": "Opens next at 11:30 am, tomorrow",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "2.2 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "559535",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "lastMileTravel": 2.299999952316284,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.0",
            "totalRatings": 100,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "468859",
            "name": "Neer Kombucha",
            "uuid": "b8990aa7-91c0-418f-aea6-ec02b4399412",
            "city": "13",
            "area": "Kakkanad",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "k42iaqrmeieu2fwxhibe",
            "cuisines": [
                "Beverages"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 0.30000001192092896,
            "slugs": {
                "restaurant": "neer-kombucha-kakkanad-kakkanad",
                "city": "kochi"
            },
            "cityState": "13",
            "address": "Hotel Aryaas, seaport airport road, Padamugal, Kakkanad, Kochi-682030",
            "locality": "Padamugal",
            "parentId": 281617,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
                "header": "20% off",
                "shortDescriptionList": [
                    {
                        "meta": "20% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "20% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2900,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2900,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2900",
                "icon": ""
            },
            "availability": {
                "opened": false,
                "nextOpenMessage": "Opens next at 8 am, today",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
            },
            "lastMileTravelString": "0.3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "468859",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "lastMileTravel": 0.30000001192092896,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "--",
            "totalRatings": 0,
            "new": false
        },
        "subtype": "basic"
    }
]



const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resList.map(res => <RestaurentCard key={res.data.id} resData={res} />)
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);