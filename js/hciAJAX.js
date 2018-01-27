/* HCI AngularJS AJAX Cals
 * ===================================
 * These are the AJAX calls made to Wordpress to pull hotel information as well as availability
 */
angular.module('hciAJAX', [])
	.factory( 'getHotels', [ '$http', function(){

		var receivedFeed = [
            {
                "post_id":488,
                "sams_id":1878,
                "name":"Ramada Gateway",
                "address":"7470 W. Irlo Bronson Memorial Hwy (us 192), Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>Experience the &#8220;Magical Difference&#8221; during your next stay in Orlando at the Ramada Gateway, a Disney Good Neighbor Hotel that lies just 1 mile from the main entrance to Walt Disney World\u00ae Resort.\u00a0At the Ramada Gateway, guests\u00a0enjoy all the comforts and amenities of a family resort that is easily accessible to the world&#8217;s most popular family attractions. Guests of the Ramada Gateway enjoy complimentary scheduled transportation to the Walt Disney World\u00ae Resort, as well as Universal Orlando\u00ae Resort and SeaWorld\u00ae Orlando. Pets are welcome; fee and deposit may apply.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Picnic area"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Area shuttle (complimentary)"
                    },
                    {
                        "amenity":"Airport shuttle (surcharge)"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"7 floors"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"24-hour fitness facilities"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"2 outdoor pools"
                    },
                    {
                        "amenity":"Designated smoking areas"
                    },
                    {
                        "amenity":"Garden"
                    },
                    {
                        "amenity":"Shopping on site"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Complimentary reception"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando",
                        "poi_distance":"13"
                    },
                    {
                        "poi_name":"Universal\u00ae Orlando Resort ",
                        "poi_distance":"15"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets are allowed; fee and deposit may apply.<\/p>\n<p>&nbsp;<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"40.00",
                    "unhookedTotal":"120.00",
                    "hookedPerNight":"20.00",
                    "hookedTotal":"60.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Airport shuttle",
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Laundry facilities",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pet-Friendly",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3369512",
                    "long":"-81.5930578"
                }
            },
            {
                "post_id":538,
                "sams_id":3516,
                "name":"Days Inn Kissimmee",
                "address":"2930 Polynesian Isle Blvd, Kissimmee, Fl 34746",
                "starRating":"2",
                "summary":"<p>The recently renovated Days Inn Kissimmee is located just off Interstate 4 and provides easy access to area attractions. Guests of the Days Inn Kissimmee enjoy an outdoor pool, kiddie pool, laundry facilities, free parking and 24-hour front desk, as well as a complimentary Daybreak Breakfast. Each of the 118 spacious guestrooms at the Days Inn Kissimmee features a mini refrigerator, microwave, flat-screen TV, coffee maker, free local calls, iron\/ironing board, alarm clock radio and hairdryer, as well as complimentary wireless high-speed Internet access.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Complimentary Breakfast"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Complimentary RV, bus, truck parking"
                    },
                    {
                        "amenity":"4 buildings"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"2 outdoor pools"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Television in lobby"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"5"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"8"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Sorry, no pets are allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"45.00",
                    "unhookedTotal":"135.00",
                    "hookedPerNight":"25.00",
                    "hookedTotal":"75.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Mini-refrigerator",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.334516",
                    "long":"-81.496728"
                }
            },
            {
                "post_id":504,
                "sams_id":2613,
                "name":"Howard Johnson Express Inn &#038; Suites Lakefront Park",
                "address":"4836 W Irlo Bronson Memorial Hwy, Kissimmee, Fl 34746",
                "starRating":"2",
                "summary":"<p>A perfect Central Florida getaway awaits at the Howard Johnson Express, which is located along the shores of beautiful Lake Cecile and just 5.5 miles from Walt Disney World Resort. Onsite amenities at the Howard Johnson Express include a complimentary Rise and Dine continental breakfast each morning, heated outdoor pool, hot tub and kiddie pool, as well as barbecue grills\/picnic area, game room and free scheduled shuttle service to Walt Disney World Resort, Universal Orlando Resort and SeaWorld Orlando.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"BBQ grill"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Arcade"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"International Drive ",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Sorry, no pets are allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"34.00",
                    "unhookedTotal":"102.00",
                    "hookedPerNight":"14.00",
                    "hookedTotal":"42.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3315014",
                    "long":"-81.4766504"
                }
            },
            {
                "post_id":531,
                "sams_id":3440,
                "name":"Maingate Lakeside Resort",
                "address":"7769 W Irlo Bronson Hwy, Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>The Mediterranean-style Maingate Lakeside Resort is ideally located less than 2 miles from Walt Disney World Resort. The Mediterranean-style Maingate Lakeside Resort is ideally located less than 2 miles from Walt Disney World Resort. Onsite amenities at the Maingate Lakeside Resort include swimming pools, children&#8217;s wading pools, playgrounds, game room, fitness center, Greenhouse Restaurant, Hurricane Sam&#8217;s Bar and Grill, The General Store, the Deli and Pizza Hut Express, as well as poolside Cabana Bars. The Maingate Lakeside Resort also boasts 3,200 square feet of meeting and event space.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"3 outdoor pools"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Picnic area"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Shopping center shuttle (complimentary)"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Area shuttle (complimentary)"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Smoke-free property"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"12"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 12 PM. Pets are not allowed. There is a resort fee of $10 a day which is subject to change at anytime at the hotels discretion.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"52.00",
                    "unhookedTotal":"156.00",
                    "hookedPerNight":"32.00",
                    "hookedTotal":"96.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Area shuttle",
                    "Bar\/lounge",
                    "Business facilities",
                    "Fitness facilities",
                    "Laundry facilities",
                    "Meeting space",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3408478",
                    "long":"-81.596068"
                }
            },
            {
                "post_id":506,
                "sams_id":2928,
                "name":"Quality Inn &#038; Suites East Gate",
                "address":"4960 W Irlo Bronson Memorial Hwy, Kissimmee, Fl 34746",
                "starRating":"3",
                "summary":"<p>Ideally located just 3 miles from Walt Disney World Resort, the Quality Inn &amp; Suites Eastgate also lies just 6 miles from SeaWorld Orlando and less than 10 miles from Universal Orlando Resort. Onsite amenities at the Quality Inn &amp; Suites Eastgate include an outdoor pool, hot tub, sundeck, game room, picnic area, gift shop, complimentary deluxe continental breakfast, complimentary weekday newspaper, guest laundry facilities and complimentary wireless Internet access in public areas.<\/p>\n<p>&nbsp;<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"3 towers"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Outdoor pool"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00aeResort ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"Universal\u00ae Orlando Resort ",
                        "poi_distance":"10"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Sorry, no pets are allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"36.00",
                    "unhookedTotal":"108.00",
                    "hookedPerNight":"16.00",
                    "hookedTotal":"48.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool"
                ],
                "geo":{
                    "lat":"28.3318765",
                    "long":"-81.4817285"
                }
            },
            {
                "post_id":496,
                "sams_id":1785,
                "name":"Travelodge Suites East Gate Orange",
                "address":"5399 W Irlo Bronson Memorial Hwy, Kissimmee, Fl 34746",
                "starRating":"2",
                "summary":"<p>A Central Florida travel adventure awaits at the Travelodge Suites East Gate Orange, which lies just 3 miles from Walt Disney World Resort and less than 0.5 mile from the bustling Old Town entertainment complex. Guests of the Travelodge Suites East Gate Orange enjoy an outdoor pool, hot tub, children\u2019s wading pool, game room, playground, 24-hour coffee service and complimentary Bear Bites continental breakfast, as well as a complimentary theme park shuttle service.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Multilingual staff"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Old Town Entertainment Complex ",
                        "poi_distance":"1"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Sorry, no pets are allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"34.00",
                    "unhookedTotal":"102.00",
                    "hookedPerNight":"14.00",
                    "hookedTotal":"42.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3341774",
                    "long":"-81.4996488"
                }
            },
            {
                "post_id":335,
                "sams_id":3290,
                "name":"Clarion Inn &#038; Suites",
                "address":"9956 Hawaiian Court, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p>Ideally located in the heart of Orlando and just off world-famous International Drive, the Clarion Inn &amp; Suites neighbors\u00a0the Orange County Convention Center. A Walt Disney World Resort Good Neighbor Hotel, the beautifully landscaped Clarion Inn &amp; Suites features spacious guestrooms that feature such amenities as flat-screen TVs, private balconies and complimentary high-speed Internet access. Guests of the Clarion Inn &amp; Suites enjoy a complimentary continental breakfast served daily, complimentary shuttle services to the theme parks (Walt Disney World Resort, Universal Orlando Resort and SeaWorld Orlando),\u00a0and the Scene Caf\u00e9 &amp; Lounge.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Pool umbrellas"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Complimentary Wi-FI"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary theme park shuttle"
                    },
                    {
                        "amenity":"Billiards\/pool table"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"9"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae Resort ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Wet \u2018n\u2019 Wild Water Park ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Orlando Premium Outlets ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Festival Bay Mall ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"WonderWorks ",
                        "poi_distance":"1"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets not allowed.<\/p>\n<p>&nbsp;<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":{
                            "id":2315,
                            "alt":"",
                            "title":"wallhaven-74639",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746393.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746393-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746393-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746393-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746393-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746393-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2316,
                            "alt":"",
                            "title":"wallhaven-172906",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729063.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729063-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729063-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729063-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729063-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729063-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2317,
                            "alt":"",
                            "title":"wallhaven-176659",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766593.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766593-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766593-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766593-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766593-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766593-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2318,
                            "alt":"",
                            "title":"wallhaven-170453",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704533.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704533-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704533-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704533-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704533-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704533-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2319,
                            "alt":"",
                            "title":"wallhaven-101342",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013423.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013423-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013423-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013423-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013423-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013423-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2320,
                            "alt":"",
                            "title":"wallhaven-133941",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339413.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339413-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339413-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339413-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339413-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339413-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    }
                ],
                "prices":{
                    "unhookedPerNight":"70.00",
                    "unhookedTotal":"210.00",
                    "hookedPerNight":"50.00",
                    "hookedTotal":"150.00"
                },
                "area":"Convention Center Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Meeting space",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4224462",
                    "long":"-81.4624165"
                }
            },
            {
                "post_id":373,
                "sams_id":3550,
                "name":"Coco Key Hotel &#038; Water Park",
                "address":"7400 International Dr, Orlando, Fl 32819",
                "starRating":"3",
                "summary":"<p>CoCo Key Hotel &amp; Water Resort is ideally located on world-famous International Drive and just 2 miles from Universal Orlando Resort. Guests of CoCo Key Hotel &amp; Water Resort enjoy the 54,000-square-foot, canopy-covered waterpark, which features 14 waterslides, Minnows Lagoon toddler pool, Coral Reef teen pool, Parrot\u00bfs Perch interactive play area, 6,500-square-foot Key Quest Arcade and Wet Rooster Tiki Bar. Onsite amenities at CoCo Key Hotel &amp; Water Resort include a heated outdoor pool, hot tub, four restaurants, fitness center, business center, convenience store, local attraction concierge desk, convenience store and daily resort activities, as well as complimentary scheduled shuttle service to Universal Orlando Resort, SeaWorld Orlando, Wet `n Wild and Aquatica.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Water park access (surcharge)"
                    },
                    {
                        "amenity":"Supervised childcare\/activities (surcharge)"
                    },
                    {
                        "amenity":"Arcade\/game room"
                    },
                    {
                        "amenity":"Concierge services"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Theme park shuttle (surcharge)"
                    },
                    {
                        "amenity":"Waterslides"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"5 floors"
                    },
                    {
                        "amenity":"Pool cabanas (complimentary)"
                    },
                    {
                        "amenity":"Area shuttle (complimentary)"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Designated smoking area"
                    },
                    {
                        "amenity":"Billiards\/pool table"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Airport transportation (surcharge)"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"24-hour fitness facilities"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Dry cleaning\/ laundry service"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"3 restaurants"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Spa tub"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets not allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":{
                            "id":2821,
                            "alt":"",
                            "title":"quote_87",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/quote_87.jpg",
                            "width":960,
                            "height":360,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/quote_87-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/quote_87-300x113.jpg",
                                "medium-width":300,
                                "medium-height":113,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/quote_87.jpg",
                                "large-width":960,
                                "large-height":360,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/quote_87-667x250.jpg",
                                "slider-mobile-alt-width":667,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/quote_87.jpg",
                                "slider-desktop-alt-width":960,
                                "slider-desktop-alt-height":360
                            }
                        }
                    }
                ],
                "prices":{
                    "unhookedPerNight":"63.60",
                    "unhookedTotal":"190.80",
                    "hookedPerNight":"43.60",
                    "hookedTotal":"130.80"
                },
                "area":"International Drive",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Area shuttle",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free parking",
                    "Free Wi-Fi",
                    "On-site dining",
                    "Pool"
                ],
                "geo":{
                    "lat":"28.4542426",
                    "long":"-81.4712594"
                }
            },
            {
                "post_id":325,
                "sams_id":2046,
                "name":"Comfort Suites Orlando &#8211; Major Blvd",
                "address":"5617 Major Blvd, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p>The Comfort Suites Universal Studios Area is ideally located less than one mile from the main entrance to Universal Orlando\u00ae Resort. All of the spacious, beautifully decorated suites at the Comfort Suites provide separate sleeping and living areas, as well as sofa beds, mini-refrigerators and microwaves. Get a great start to each morning with a complimentary hot breakfast and enjoy scheduled transportation to Universal Orlando\u00ae Resort, SeaWorld\u00ae Orlando, Wet &#8216;n&#8217; Wild\u00ae Water Park and Aquatica.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"24-hour fitness center"
                    },
                    {
                        "amenity":"4 floors"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Area shuttle (complimentary)"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Meeting room"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Television in lobby"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"10"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. No pets allowed. Minimum age to check-in is 21.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"99.00",
                    "unhookedTotal":"297.00",
                    "hookedPerNight":"79.00",
                    "hookedTotal":"237.00"
                },
                "area":"Universal Orlando Resort Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Area shuttle",
                    "Business facilities",
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool"
                ],
                "geo":{
                    "lat":"28.4814287",
                    "long":"-81.4530291"
                }
            },
            {
                "post_id":353,
                "sams_id":3367,
                "name":"Country Inn &#038; Suites Orlando",
                "address":"7701 Universal Boulevard, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p>Country Inn &amp; Suites is a brand-new hotel located in the heart of world-famous International Drive. Complimentary shuttle transportation to Walt Disney World Resort, Universal Orlando Resort and SeaWorld Orlando is available for guests. Guests also enjoy a complimentary deluxe hot continental breakfast daily, complimentary local phone calls and complimentary outdoor parking. The Country Inn &amp; Suites provides all the necessary ingredients for a successful vacation, business trip or weekend getaway such as value, quality, a friendly staff and an ideal location.<\/p>\n<p>&nbsp;<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Shopping on site"
                    },
                    {
                        "amenity":"Concierge services"
                    },
                    {
                        "amenity":"Area shuttle (complimentary)"
                    },
                    {
                        "amenity":"5 floors"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Fireplace in lobby"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Outdoor pool"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Universal Orlando\u00ae ",
                        "poi_distance":"0.3"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Wet 'n' Wild\u00ae Water Park ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Orange County Convention Center",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"International Drive ",
                        "poi_distance":"1"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 12 PM. Sorry, no pets are allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"71.47",
                    "unhookedTotal":"214.41",
                    "hookedPerNight":"51.47",
                    "hookedTotal":"154.41"
                },
                "area":"Universal Orlando Resort Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Pool"
                ],
                "geo":{
                    "lat":"28.4524886",
                    "long":"-81.4645229"
                }
            },
            {
                "post_id":516,
                "sams_id":3365,
                "name":"Doubletree By Hilton Orlando At Seaworld",
                "address":"10100 International Drive, Orlando, Fl 32821",
                "starRating":"3",
                "summary":"<p>An official onsite SeaWorld partner hotel, the Doubletree by Hilton Orlando at SeaWorld lies adjacent to SeaWorld Orlando, 4.5 miles from Universal Orlando Resort and 6.5 miles from Walt Disney World Resort. Guests enjoy complimentary transportation to SeaWorld Orlando, Universal Orlando Resort and Walt Disney World Resort (reservations are suggested).<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Outdoor seasonal pool"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Full-service spa"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Shopping on site"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Wired (high-speed) Internet access (surcharge)"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Self parking (surcharge)"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Health club"
                    },
                    {
                        "amenity":"Wireless Internet access (surcharge)"
                    },
                    {
                        "amenity":"Spa treatment room(s)"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Sauna"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Valet parking (surcharge)"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"3 outdoor pools"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Children's club"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Supervised childcare"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"6.5"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae Resort ",
                        "poi_distance":"4.5"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Pets are allowed (fee and deposit apply).<\/p>\n",
                "thumbnail":false,
                "images":[

                ],
                "prices":{
                    "unhookedPerNight":"85.88",
                    "unhookedTotal":"257.64",
                    "hookedPerNight":"65.88",
                    "hookedTotal":"197.64"
                },
                "area":"Convention Center Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Meeting space",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Spa services"
                ],
                "geo":{
                    "lat":"28.4182151",
                    "long":"-81.4629025"
                }
            },
            {
                "post_id":701,
                "sams_id":2294,
                "name":"Doubletree Hotel &#8211; Universal",
                "address":"5780 Major Boulevard, Orlando, Fl 32819",
                "starRating":"4",
                "summary":"<p>The 17-acre Doubletree Hotel Universal at the entrance to Universal Orlando\u00ae offers uncompromising excellence and hospitality. Guests enjoy complimentary transportation to Universal&#8217;s theme parks, as well as SeaWorld\u00ae Orlando and Wet &#8216;n Wild\u00ae Water Park. An ideal location, exceptional accommodations and superb amenities that include 60,000 square feet of meeting space are just a few of the reasons to make the Doubletree Hotel Universal your hotel of choice on your next visit to Orlando.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Valet parking (surcharge)"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Dry cleaning\/ laundry service"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"2 on site restaurants"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Self parking (surcharge)"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"18 floors"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Porter\/ bellhop"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Shopping on site"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Children's pool"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Wet N' Wild",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. No pets allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"80.64",
                    "unhookedTotal":"241.92",
                    "hookedPerNight":"60.64",
                    "hookedTotal":"181.92"
                },
                "area":"Universal Orlando Resort Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Fitness facilities",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4790221",
                    "long":"-81.4570157"
                }
            },
            {
                "post_id":540,
                "sams_id":3551,
                "name":"Fairfield Inn &#038; Suites Marriott",
                "address":"12191 S Apopka Vineland Rd, Orlando, Fl 32836",
                "starRating":"3",
                "summary":"<p>An Official Walt Disney World Good Neighbor Hotel, the Fairfield Inn &amp; Suites Lake Buena Vista lies just 1.5 miles from Downtown Disney. Guests of the Fairfield Inn &amp; Suites Lake Buena Vista enjoy complimentary scheduled shuttle service to and from Walt Disney World theme parks, complimentary daily hot breakfast, heated outdoor pool, hot tub, fitness center, game room, wireless Internet access throughout the hotel, complimentary coffee in the lobby, attraction tickets desk, concierge services, complimentary weekday newspapers in the lobby, laundry facilities and 24-hour front desk.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Theme park shuttle (surcharge)"
                    },
                    {
                        "amenity":"Concierge service"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Fitness facility"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 12 PM. Pets not allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"102.00",
                    "unhookedTotal":"306.00",
                    "hookedPerNight":"82.00",
                    "hookedTotal":"246.00"
                },
                "area":"Downtown Disney Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3878212",
                    "long":"-81.5051728"
                }
            },
            {
                "post_id":515,
                "sams_id":3363,
                "name":"Flamingo Waterpark Resort",
                "address":"2261 East Irlo Bronson Memorial Highway, Kissimmee, Fl 34744",
                "starRating":"3",
                "summary":"<p>With a state-of-the-art waterpark that features waterslides, lazy river and interactive water play area, the full-service Flamingo Waterpark Resort provides the ideal destination for a family vacation getaway. Guests of the Flamingo Waterpark \u00a0Resort enjoy complimentary scheduled transportation to Walt Disney World Resort (transportation to Universal Orlando Resort and SeaWorld Orlando is available at an additional charge), outdoor pool, game room and fitness center, as well as a 24-hour business center and gift shop. Enjoy the convenience of onsite dining at the Flamingo Waterpark Resort\u2019s restaurant, which offers breakfast and lunch daily, while the full-service lounge is the perfect place to unwind with your favorite cocktail. The poolside tiki bar also serves cocktails and a variety of hot and cold food items. The Flamingo Waterpark Resort also features a state-of-the-art conference center. In addition, the Flamingo Waterpark Resort lies adjacent to the Lake Toho Fishing Area.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Airport transportation (surcharge)"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Theme park shuttle (surcharge)"
                    },
                    {
                        "amenity":"Computer station"
                    },
                    {
                        "amenity":"Lazy river"
                    },
                    {
                        "amenity":"Pool umbrellas"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Rooftop terrace"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Area shuttle (surcharge)"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"4 meeting rooms"
                    },
                    {
                        "amenity":"Poolside cabanas (surcharge)"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Supervised childcare\/activities "
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"3 floors"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Shopping center shuttle (surcharge)"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Water park access (surcharge)"
                    },
                    {
                        "amenity":"Waterslide"
                    },
                    {
                        "amenity":"Billiards\/ pool table"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"RV, bus. truck parking"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Free self parking"
                    },
                    {
                        "amenity":"Pool sun loungers"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Television in lobby"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort",
                        "poi_distance":"15"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando",
                        "poi_distance":"17"
                    },
                    {
                        "poi_name":"Universal\u00ae Orlando Resort",
                        "poi_distance":"19"
                    },
                    {
                        "poi_name":"The Florida Mall",
                        "poi_distance":"13"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets are allowed (fee and deposit apply).<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"46.83",
                    "unhookedTotal":"140.49",
                    "hookedPerNight":"26.83",
                    "hookedTotal":"80.49"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Fitness facilities",
                    "Free parking",
                    "Free Wi-Fi",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.286824",
                    "long":"-81.350354"
                }
            },
            {
                "post_id":500,
                "sams_id":2168,
                "name":"Floridian Express",
                "address":"6323 International Drive, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p>The Floridian Express, which offers 218 spacious guestrooms on world-famous International Drive, is conveniently located less than 1 mile from Universal Orlando\u00ae Resort and across the street from Wet &#8216;n&#8217; Wild\u00ae Water Park. Enjoy the abundance of shops, restaurants and entertainment within 1 mile of the Floridian\u00a0Express, as well as daily scheduled shuttle service to Walt Disney World\u00ae Resort and Universal Orlando\u00ae Resort theme parks.<\/p>\n<p>&nbsp;<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Area shuttle (complimentary)"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Snack bar\/deli"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"8"
                    },
                    {
                        "poi_name":"Universal\u00ae Orlando Resort",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Wet 'n' Wild\u00ae Water Park ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Old Town Entertainment Complex",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Sorry, no pets are allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"56.92",
                    "unhookedTotal":"170.76",
                    "hookedPerNight":"36.92",
                    "hookedTotal":"110.76"
                },
                "area":"International Drive",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Area shuttle",
                    "Bar\/lounge",
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4612449",
                    "long":"-81.4681135"
                }
            },
            {
                "post_id":494,
                "sams_id":1701,
                "name":"Four Points By Sheraton Studio City",
                "address":"5905 International Drive, Orlando, Fl 32819",
                "starRating":"3",
                "summary":"<p>Ideally located along world-famous International Drive and across the street from Wet &#8216;n Wild\u00ae Water Park, the Four Points by Sheraton Orlando Studio City also lies just 1 mile from Universal Orlando\u00ae, 2.5 miles away from SeaWorld\u00ae Orlando and 6 miles away from Walt Disney World\u00ae Resort. Onsite amenities at the Four Points by Sheraton Orlando Studio City include a full-service restaurant and lounge, heated and tropically landscaped outdoor pool, children\u2019s wading pool, game room and 24-hour fitness facility.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Free Wi-Fi"
                    },
                    {
                        "amenity":"6 meeting rooms"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"21 floors"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Complimentary wired internet access"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae Resort  ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Wet 'n Wild\u00ae Water Park ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Festival Bay Mall ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Pointe*Orlando Entertainment Complex ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Orange County Convention Center ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Downtown Orlando ",
                        "poi_distance":"10"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. No pets allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"77.48",
                    "unhookedTotal":"232.44",
                    "hookedPerNight":"57.48",
                    "hookedTotal":"172.44"
                },
                "area":"International Drive",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Bar\/lounge",
                    "Business facilities",
                    "Fitness facilities",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Meeting space",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4631572",
                    "long":"-81.4613589"
                }
            },
            {
                "post_id":520,
                "sams_id":3352,
                "name":"Heritage Park Inn",
                "address":"2050 East Irlo Bronson Highway, Kissimmee, Fl 34744",
                "starRating":"2",
                "summary":"<p>Ideally located less than one block from Osceola Heritage Park and the Silver Spurs Arena (the Spring Training home of the Houston Astros), the Heritage Park Inn features spacious and comfortable accommodations. Onsite amenities include a free hot breakfast daily (7 AM \u2013 10 AM), large outdoor pool and business center with high-speed Internet access. Each of the 152 oversized guestrooms at the Heritage Park Inn offers all the comforts of home such as cable TV, complimentary high-speed Internet access and a coffee maker. In addition, the Heritage Park Inn contains 5,800 square feet of banquet and meeting space.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"4 towers"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Business center"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Osceola Heritage Park ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Silver Spurs Arena ",
                        "poi_distance":"2"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Pets are allowed (fee and deposit apply).<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"73.94",
                    "unhookedTotal":"221.82",
                    "hookedPerNight":"53.94",
                    "hookedTotal":"161.82"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Business facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pet-Friendly",
                    "Pool"
                ],
                "geo":{
                    "lat":"28.290059",
                    "long":"-81.361948"
                }
            },
            {
                "post_id":492,
                "sams_id":1381,
                "name":"Hilton Orlando Lake Buena Vista",
                "address":"1751 Hotel Plaza Blvd, Lake Buena Vista, Fl 32830",
                "starRating":"4",
                "summary":"<p>The Hilton Orlando Lake Buena Vista overlooks Downtown Disney\u00ae and lies approximately 7 miles away from Disney&#8217;s Magic Kingdom\u00ae. Guests of the Hilton Orlando Lake Buena Vista enjoy complimentary scheduled transportation to Walt Disney World\u00ae Resort theme parks, golf tee times, full-service restaurants, two outdoor pools, hot tubs, kiddie pool, 24-hour fitness center, ATM, gift ship, guest activity desk, car rental desk, 76,000 square feet of meeting space and a full business center.<\/p>\n<p>&nbsp;<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"10 floors"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Valet parking (surcharge)"
                    },
                    {
                        "amenity":"24-hours fitness facilities"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"3 restaurants"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Supervised childcare\/activities"
                    },
                    {
                        "amenity":"Grocery\/convenience store"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Coffee ship"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Childcare"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"24-hour business  center"
                    },
                    {
                        "amenity":"Self parking (surcharge)"
                    },
                    {
                        "amenity":"2 outdoor pools"
                    },
                    {
                        "amenity":"Shopping on site"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. No pets allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"141.49",
                    "unhookedTotal":"424.47",
                    "hookedPerNight":"121.49",
                    "hookedTotal":"364.47"
                },
                "area":"Downtown Disney Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Meeting space",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3726467",
                    "long":"-81.5108929"
                }
            },
            {
                "post_id":517,
                "sams_id":3366,
                "name":"Holiday Inn Express &#038; Suites Orlando",
                "address":"7276 International Drive, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p>Centrally located in the heart of world-famous International Drive, the Holiday Inn Express &amp; Suites lies just 3 miles from Universal Orlando Resort and 4 miles from SeaWorld Orlando. The Holiday Inn Express &amp; Suites is centrally located in the heart of world-famous International Drive and just 3 miles from Universal Orlando Resort and 4 miles from SeaWorld Orlando. Guests of the Holiday Inn Express &amp; Suites enjoy complimentary shuttle service to Universal Orlando Resort and Walt Disney World Resort. Onsite amenities include an outdoor pool, hot tub and state-of-the-art fitness center.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"24-hour fitness facilities"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"6 floors"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Outdoor pool"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Wet N' Wild",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"8"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. No pets allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"107.69",
                    "unhookedTotal":"323.07",
                    "hookedPerNight":"87.69",
                    "hookedTotal":"263.07"
                },
                "area":"International Drive",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Business facilities",
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4556349",
                    "long":"-81.4731631"
                }
            },
            {
                "post_id":518,
                "sams_id":3292,
                "name":"Holiday Inn Express Hotel &#038; Suites Universal Orlando",
                "address":"5605 Major Blvd, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p style=\"tab-stops: 6.5in;\"><span style=\"font-size: 10.0pt;\">The Holiday Inn Express boasts 156 spacious and comfortably furnished guestrooms within a towering 10-story hotel, unsurpassed hospitality and an outstanding location directly across the street from the main entrance to Universal Orlando\u00ae Resort!\u00a0<\/span>The Holiday Inn Express is located just 1\/4 mile from Universal Orlando\u00ae and within 2 miles of fine dining, entertainment and shopping along world-famous International Drive. Guests of the Holiday Inn Express enjoy outstanding amenities such as a free deluxe continental breakfast buffet, large sparkling blue outdoor pool, 24-hour complimentary coffee in our lobby, fitness room and business services, including fax, copier and overnight delivery service.<\/p>\n<p>&nbsp;<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"10 floors"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"24-hour fitness facilities"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Designated smoking areas"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    }
                ],
                "location":[
                    {
                        "poi_name":" Universal Orlando\u00ae Resort ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Disney\u2019s Hollywood Studios\u00ae ",
                        "poi_distance":"11"
                    },
                    {
                        "poi_name":"Epcot\u00ae",
                        "poi_distance":"10"
                    },
                    {
                        "poi_name":"Disney's Animal Kingdom\u00ae ",
                        "poi_distance":"10"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"5"
                    },
                    {
                        "poi_name":"Florida Mall ",
                        "poi_distance":"6"
                    }
                ],
                "policies":"<p><span style=\"font-size: 10.0pt;\">Check-in time is 3 PM. Check-out time is 11 AM. Pets allowed; fee and deposit may apply.<\/span><\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"84.00",
                    "unhookedTotal":"252.00",
                    "hookedPerNight":"64.00",
                    "hookedTotal":"192.00"
                },
                "area":"Universal Orlando Resort Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Business facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool"
                ],
                "geo":{
                    "lat":"28.4820668",
                    "long":"-81.454655"
                }
            },
            {
                "post_id":502,
                "sams_id":2229,
                "name":"Hyatt Regency Grand Cypress",
                "address":"One Grand Cypress Blvd, Orlando, Fl 32836",
                "starRating":"4",
                "summary":"<p>Discover your own private paradise at the exclusive 1,500-acre Hyatt Regency Grand Cypress, where beautiful waterfalls cascade along canyon grottos into a sparkling pool. World-class golf and tennis, golden beaches, sailing on a secluded lake and nearby theme parks such as the adjacent Walt Disney World\u00ae Resort await you. Experience a destination like no other, where the cares of the world disappear at one of Central Florida&#8217;s most spectacular hotels. Golfers of all skill levels will find challenges on the 45-hole championship golf course designed by the legendary Jack Nicklaus. The resort\u2019s magnificent 800,000-gallon outdoor pool contains a total of 12 waterfalls, two waterslides and a sun deck. Exercise enthusiasts will love the high-tech fitness center. In addition, the Grand Cypress provides an unsurpassed combination of meeting facilities and tropical resort amenities for your Orlando conferences and meetings. The more than 65,000 square feet of function space includes 25 meeting rooms and the magnificent Grand Cypress Ballroom.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Spa services on site"
                    },
                    {
                        "amenity":"Hair salon"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Golf course on site"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"Marina on site"
                    },
                    {
                        "amenity":"Meeting rooms"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Self parking (surcharge)"
                    },
                    {
                        "amenity":"Beach towels"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Garden"
                    },
                    {
                        "amenity":"Tennis courts"
                    },
                    {
                        "amenity":"Shopping on site"
                    },
                    {
                        "amenity":"Private beach"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Health club"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Supervised childcare"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"18 floors"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Spa treatment rooms"
                    },
                    {
                        "amenity":"5 restaurants"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Snack bar\/deli"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"8"
                    },
                    {
                        "poi_name":"Disney's Typhoon Lagoon\u00ae Water Park ",
                        "poi_distance":"8"
                    },
                    {
                        "poi_name":"Disney's Blizzard Beach\u00ae Water Park ",
                        "poi_distance":"10"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Orlando\/Orange County Convention Center ",
                        "poi_distance":"6"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. No pets allowed.<\/p>\n<p>&nbsp;<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"273.03",
                    "unhookedTotal":"819.09",
                    "hookedPerNight":"253.03",
                    "hookedTotal":"759.09"
                },
                "area":"Downtown Disney Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Area shuttle",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Spa services",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3819454",
                    "long":"-81.510327"
                }
            },
            {
                "post_id":2831,
                "sams_id":3582,
                "name":"International Palms Resort Orlando",
                "address":"6515 International Dr, Orlando, Fl 32819",
                "starRating":"3",
                "summary":"<p>Ideally located directly on world-famous International drive, the full-service, family-friendly International Palms Resort &amp; Conference Center provides easy access to a multitude of attractions, family-friendly restaurants and shopping opportunities. Onsite amenities at the International Palms include an outdoor pool, children&#8217;s pool, hot tub, fitness center, Pool Hut Bar, Coral Key Bar &amp; Grill and Front Street Caf\u00e9, as well as 24-hour business center, meeting\/conference room, ATM and 24-hour front desk. Each of the guestrooms at the International Palms features cable TV with premium channels, complimentary wireless Internet access, microwave and refrigerator.<\/p>\n",
                "review":"",
                "amenities":[

                ],
                "location":[

                ],
                "policies":"<p>Check in time is 4PM. Check out time is 11AM. Pets are allowed in some rooms which required a non-refundable deposit of $75.<\/p>\n",
                "thumbnail":false,
                "images":[

                ],
                "prices":{
                    "unhookedPerNight":"60.00",
                    "unhookedTotal":"180.00",
                    "hookedPerNight":"40.00",
                    "hookedTotal":"120.00"
                },
                "area":null,
                "enableSuper":false,
                "featured":false,
                "terms":[

                ],
                "geo":{
                    "lat":"28.4587878",
                    "long":"-81.4705217"
                }
            },
            {
                "post_id":499,
                "sams_id":2155,
                "name":"Leisure Resorts",
                "address":"6950 Villa De Costa Drive, Orlando, Fl 32821",
                "starRating":"3",
                "summary":"<p><b>Leisure Resorts Orlando<\/b> is located right at the center of all local attractions, just 15 minutes from Walt Disney World\u00ae Resort, Universal Orlando\u00ae and SeaWorld\u00ae Orlando. The resort&#8217;s spacious 2 bedroom\/2 bathroom suites feature a fully equipped kitchen, comfortable living area, separate master bedroom and cable TV. Heated outdoor pools, a Jacuzzi, beautiful ponds and a fountain surround this delightful resort. Amenities at <b>Leisure Resorts Orlando<\/b> include an exercise room, volleyball court and a game room.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"3 floors"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Picnic area"
                    }
                ],
                "location":[
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"6"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 10 AM. No pets allowed. No rollaway beds are available.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"119.00",
                    "unhookedTotal":"357.00",
                    "hookedPerNight":"99.00",
                    "hookedTotal":"297.00"
                },
                "area":"Seaworld Orlando Area",
                "enableSuper":false,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Fitness facilities",
                    "Kitchen\/kitchenette",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.392336",
                    "long":"-81.4736379"
                }
            },
            {
                "post_id":2783,
                "sams_id":2367,
                "name":"Magical Memories",
                "address":"2801 North Poinciana Boulevard, Kissimmee, Fl 34746",
                "starRating":"3",
                "summary":"<p>At Magical Memories Villas, choose from family-sized 2, 3 and 4 bedroom villas and condos, which are all ideally located in the heart of Orlando&#8217;s attractions area. Take pleasure in the use of a beautifully furnished vacation villa, condo or private home that includes a fully equipped kitchen, spacious living and dining areas, master bedroom with in-suite bath, 2 cable TVs and a VCR. Plus, all accommodations include an in-unit washer and dryer, and a complete set of linens and towels.<\/p>\n<p>At Magical Memories, choose from private vacation homes that are all ideally located in the heart of Orlando&#8217;s attractions area. Take pleasure in the use of a private home that includes a fully equipped kitchen, spacious living and dining areas, master bedroom and cable TV. Plus, all vacation homes include a washer and dryer, and a complete set of linens and towels. Choose from exceptional accommodations that include spacious villas, as well as condos and private pool homes within 5 to 8 miles from Walt Disney World\u00ae Resort.<\/p>\n<p>Each of the spacious villas, condos and homes features a fully equipped kitchen, living and dining area, master bedroom with in-suite bath, washer\/dryer and cable TV.<\/p>\n<p>Choose from exceptional accommodations that provide exceptional value and comfort to vacationing families and groups, including vacation homes within 10 miles from Walt Disney World\u00ae Resort.<\/p>\n<p>Each of the spacious vacation homes features a fully equipped kitchen, living and dining area, master bedroom, washer\/dryer and cable TV.<\/p>\n",
                "review":"",
                "amenities":[

                ],
                "location":[

                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 10 AM. Pets not allowed. Office hours are 8 AM to 8 PM daily (may vary according to season). Guests planning to arrive after hours must contact the office at least 48 hours prior to arrival to receive information about late check-in.<\/p>\n<p>Check-in time is 4 PM. Check-out time is 10 AM. Pets are not allowed. Vacation homes require a minimum 5-night stay. Pool heating is additional &#8211; $35 per day or $210 per week \u00bf and must be for entire length of stay (pool heating is recommended between November \u00bf April). Office hours are 8 AM to 8 PM daily (may vary according to season). Guests planning to arrive after hours must contact the office at least 48 hours prior to arrival to receive information about late check-in.<\/p>\n",
                "thumbnail":false,
                "images":[

                ],
                "prices":{
                    "unhookedPerNight":"115.00",
                    "unhookedTotal":"345.00",
                    "hookedPerNight":"95.00",
                    "hookedTotal":"285.00"
                },
                "area":"Disney Vicinity",
                "enableSuper":false,
                "featured":false,
                "terms":[

                ],
                "geo":{
                    "lat":"28.3296607",
                    "long":"-81.4890143"
                }
            },
            {
                "post_id":534,
                "sams_id":3493,
                "name":"Magnuson Grand Hotel",
                "address":"7491 W Irlo Bronson Memorial Hwy, Kissimmee, Fl 34746",
                "starRating":"3",
                "summary":"<p>Ideally located just 1 mile from the main entrance to Walt Disney World Resort, the Magnuson Grand Hotel features a heated indoor pool, exercise room, heated outdoor pool, hot tub, pool bar and game room, as well as Tradewinds Family Buffet Restaurant, Veranda Food Court and Brass Monkey Lounge. In addition, guests enjoy free scheduled shuttle service to Walt Disney World Resort, Universal Orlando Resort, SeaWorld Orlando and Wet `n Wild water park. Each of the comfortable and spacious guestrooms at the Magnuson Grand Hotel offers a mini refrigerator, coffee maker, cable TV and complimentary high-speed Internet access.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"4 floors"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry services"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Shopping center shuttle (complimentary)"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Complimentary self parking "
                    },
                    {
                        "amenity":"Complimentary RV, Bus, Truck parking"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Indoor pool"
                    }
                ],
                "location":[

                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 12 PM. Pets are allowed (fee and deposit apply).<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":{
                            "id":2307,
                            "alt":"",
                            "title":"wallhaven-74639",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746392.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746392-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746392-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746392-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746392-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-746392-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2308,
                            "alt":"",
                            "title":"wallhaven-172906",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729062.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729062-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729062-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729062-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729062-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1729062-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2309,
                            "alt":"",
                            "title":"wallhaven-176659",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766592.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766592-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766592-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766592-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766592-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1766592-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2310,
                            "alt":"",
                            "title":"wallhaven-170453",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704532.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704532-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704532-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704532-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704532-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1704532-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2311,
                            "alt":"",
                            "title":"wallhaven-101342",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013422.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013422-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013422-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013422-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013422-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1013422-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":{
                            "id":2312,
                            "alt":"",
                            "title":"wallhaven-133941",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339412.jpg",
                            "width":1036,
                            "height":600,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339412-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339412-300x174.jpg",
                                "medium-width":300,
                                "medium-height":174,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339412-1024x593.jpg",
                                "large-width":1024,
                                "large-height":593,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339412-432x250.jpg",
                                "slider-mobile-alt-width":432,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-1339412-777x450.jpg",
                                "slider-desktop-alt-width":777,
                                "slider-desktop-alt-height":450
                            }
                        }
                    }
                ],
                "prices":{
                    "unhookedPerNight":"35.00",
                    "unhookedTotal":"105.00",
                    "hookedPerNight":"15.00",
                    "hookedTotal":"45.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Area shuttle",
                    "Bar\/lounge",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Meeting space",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pet-Friendly",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.333937",
                    "long":"-81.5872624"
                }
            },
            {
                "post_id":536,
                "sams_id":3552,
                "name":"Maingate Resort And Spa",
                "address":"7300 W Irlo Bronson Memorial Hwy, Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>Nestled within 22 beautifully landscaped acres in the heart of the Orlando-Kissimmee area, the Maingate Resort and Spa is ideally located just 0.5 mile from Walt Disney World Resort. Guests of the Maingate Resort and Spa enjoy complimentary scheduled shuttle service to Walt Disney World Resort, as well as a full-service restaurant (Angel&#8217;s Rock `n&#8217;\u00a0Roll Caf\u00e9), complimentary business center, three pools, hot tub, fitness center, guest service desk, guest laundry facilities, gift shop and free parking.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Complimentary parking"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Theme park shuttles (complimentary)"
                    },
                    {
                        "amenity":"Designated smoking areas"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"On-site restaurant"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"3"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"9"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"12"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Pets not allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"50.00",
                    "unhookedTotal":"150.00",
                    "hookedPerNight":"30.00",
                    "hookedTotal":"90.00"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Fitness facilities",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Meeting space",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3318229",
                    "long":"-81.5833672"
                }
            },
            {
                "post_id":521,
                "sams_id":3357,
                "name":"Nickelodeon Suites Resort",
                "address":"14500 Continental Gateway, Orlando, Fl 32821",
                "starRating":"3",
                "summary":"<p>Have the \u201cSLIME of your life\u201d at Nickelodeon Suites Resort, which provides fun for all ages! Billed as \u201cthe wildest, wackiest family vacation destination in Orlando,\u201d Nickelodeon Suites Resort lies on 24 beautifully landscaped acres and features two interactive water parks, poolside activities, private cabanas, live Nickelodeon entertainment, meet and greets with Nickelodeon characters, multiple dining options, daily Character Breakfast, miniature golf course, basketball court, 4-D Experience, video arcade and Kid\u2019s Spa.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Childcare"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Conference center"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Computer station"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"6 floors"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Snack bar\/deli"
                    },
                    {
                        "amenity":"2 restaurants"
                    },
                    {
                        "amenity":"Shopping on site"
                    },
                    {
                        "amenity":"Spa services on site"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Pool table"
                    },
                    {
                        "amenity":"Ticket assistance"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Downtown Disney\u00ae Area ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"8"
                    },
                    {
                        "poi_name":"Universal\u00ae Orlando Resort ",
                        "poi_distance":"12"
                    },
                    {
                        "poi_name":"Orange County Convention Center ",
                        "poi_distance":"7"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets not allowed.\u00a0There is a resort fee of $35 plus tax charged per suite, per night.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"121.33",
                    "unhookedTotal":"363.99",
                    "hookedPerNight":"101.33",
                    "hookedTotal":"303.99"
                },
                "area":"Lake Buena Vista",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free Wi-Fi",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool",
                    "Spa services",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3568902",
                    "long":"-81.510019"
                }
            },
            {
                "post_id":495,
                "sams_id":1772,
                "name":"Quality Suites Lake Buena Vista",
                "address":"8200 Palm Parkway, Orlando, Fl 32836",
                "starRating":"3",
                "summary":"<p>The Quality Suites Lake Buena Vista features complimentary scheduled shuttle service to Walt Disney World\u00ae theme parks and a complimentary hot breakfast buffet each morning. Guests of the Quality Suites Lake Buena Vista enjoy easy access to Orlando area theme parks and attractions such as Walt Disney World\u00ae Resort (2 miles), SeaWorld\u00ae Orlando (2 miles) and Universal Orlando\u00ae (6 miles). Onsite amenities at Quality Suites Lake Buena Vista include an outdoor pool, hot tub, fitness center, jogging trail and game room, as well as a 24-hour business center and complimentary high-speed Internet access.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"4 floors"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Meeting room"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Smoke free property"
                    },
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Spa tub"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Downtown Disney",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae Resort ",
                        "poi_distance":"6"
                    }
                ],
                "policies":"<p>Check-in time is 3 PM. Check-out time is 11 AM. Pets not allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"122.00",
                    "unhookedTotal":"366.00",
                    "hookedPerNight":"102.00",
                    "hookedTotal":"306.00"
                },
                "area":"Lake Buena Vista",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Business facilities",
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3892262",
                    "long":"-81.4966331"
                }
            },
            {
                "post_id":511,
                "sams_id":3333,
                "name":"Quality Suites Universal  South",
                "address":"9350 Turkey Lake Rd, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p style=\"tab-stops: 6.5in;\"><span style=\"font-size: 10.0pt;\">Quality Suites Universal South is an all-suites hotel conveniently located just 1.5 miles from both Universal Orlando\u00ae Resort and SeaWorld\u00ae Orlando, and 6 miles from Walt Disney World\u00ae Resort.\u00a0<\/span>Guests of the Quality Suites Universal South enjoy a complimentary deluxe continental breakfast, as well as complimentary scheduled transportation to Universal Orlando\u00ae Resort, SeaWorld\u00ae Orlando, Walt Disney World\u00ae Resort and the Orange County Convention Center. Relax in the Quality Suites Universal South\u2019s tropically landscaped courtyard complete with a heated outdoor pool, kiddie pool, hot tub and playground, as well as poolside bar and grill.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Complimentary breakfast"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"3 floors"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry services"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Smoke-free property"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Florida Mall",
                        "poi_distance":"6"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets allowed; fee and deposit may apply.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"70.69",
                    "unhookedTotal":"212.07",
                    "hookedPerNight":"50.69",
                    "hookedTotal":"152.07"
                },
                "area":"Universal Orlando Resort Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Business facilities",
                    "Fitness facilities",
                    "Free Breakfast",
                    "Free parking",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pet-Friendly",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.430798",
                    "long":"-81.4762453"
                }
            },
            {
                "post_id":525,
                "sams_id":3353,
                "name":"Radisson Resort Orlando",
                "address":"2900 Parkway Boulevard, Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>The eight-story, 718-room Radisson Resort Orlando-Celebration is ideally located just 1.5 miles from Walt Disney World\u00ae Resort. Guests of the Radisson Resort Orlando-Celebration enjoy scheduled shuttle transportation to Walt Disney World\u00ae Resort and Downtown Disney Area. This luxurious resort encompasses 20 acres of beautiful tropically landscaped grounds that features three pools with waterfalls, two whirlpools and a 40-foot waterslide, as well as a brand-new exercise room.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Complimentary newspapers in lobby"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Meeting rooms"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Express check-in"
                    },
                    {
                        "amenity":"8 floors"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"2 outdoor pools"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"2 outdoor tennis courts"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Airport transportation (surcharge)"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Health club"
                    },
                    {
                        "amenity":"2 spa tubs"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"7"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae Resort ",
                        "poi_distance":"7"
                    },
                    {
                        "poi_name":"Old Town Entertainment Complex",
                        "poi_distance":"3"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 11 AM. Pets not allowed.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"61.03",
                    "unhookedTotal":"183.09",
                    "hookedPerNight":"41.03",
                    "hookedTotal":"123.09"
                },
                "area":"Kissimmee",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Area shuttle",
                    "Bar\/lounge",
                    "Business facilities",
                    "Fitness facilities",
                    "Laundry facilities",
                    "Meeting space",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3359386",
                    "long":"-81.5353541"
                }
            },
            {
                "post_id":519,
                "sams_id":3346,
                "name":"Rosen Inn At Pointe Orlando",
                "address":"9000 International Drive, Orlando, Fl 32819",
                "starRating":"2",
                "summary":"<p>Conveniently located in the heart of world-famous International Drive, the Rosen Inn at Pointe Orlando features three beautifully landscaped pool areas, family buffet restaurant, sports bar, game room, 24-hour deli, playground, self-service laundry facilities, 24-hour security, business center, gift shop, coin-operated laundry facilities and guest services desk. In addition, guests enjoy complimentary scheduled shuttle service to Universal Orlando Resort, SeaWorld Orlando and Wet \u2018n Wild water park (reservations required).<\/p>\n<p>&nbsp;<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Coffee\/tea in lobby"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Snack bar\/deli"
                    },
                    {
                        "amenity":"Garden"
                    },
                    {
                        "amenity":"Airport transportation (surcharge)"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Designated smoking areas"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Business center"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"3 outdoor pools"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Use of nearby fitness center (complimentary)"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World\u00ae Resort ",
                        "poi_distance":"8"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Universal Orlando\u00ae",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Wet 'n Wild\u00ae Water Park",
                        "poi_distance":"2"
                    },
                    {
                        "poi_name":"Orange County Convention Center ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Pointe*Orlando ",
                        "poi_distance":"0"
                    }
                ],
                "policies":"<p><span style=\"font-size: 10.0pt;\">Check-in time is 4 PM. Check-out time is 11 AM. Pets are welcome; fee and deposit may apply.<\/span><\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"55.89",
                    "unhookedTotal":"167.67",
                    "hookedPerNight":"35.89",
                    "hookedTotal":"107.67"
                },
                "area":"Convention Center Area",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Fitness facilities",
                    "Free Wi-Fi",
                    "Laundry facilities",
                    "Meeting space",
                    "On-site dining",
                    "Pet-Friendly",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4338192",
                    "long":"-81.4727546"
                }
            },
            {
                "post_id":487,
                "sams_id":247,
                "name":"Westgate Blue Tree",
                "address":"12007 Cypress Run Road, Orlando, Fl 32836",
                "starRating":"3",
                "summary":"<p><b>Westgate Blue Tree Resort<\/b> is conveniently located just 3 miles from Walt Disney World\u00ae Resort. <b>Westgate Blue Tree Resort&#8217;s<\/b> spacious 1 and 2 bedroom villas, which offer a variety of amenities, are perfect for families, couples and business travelers looking for the ultimate in serenity and comfort. Complimentary Wi-Fi service is available exclusively for Westgate Resort Owners. Wi-Fi fees apply for non-owners. Nestled on 16 lushly landscaped acres, <b>Westgate Blue Tree Resort<\/b> affords our guests all the comforts of a fully furnished home.<\/p>\n",
                "review":"",
                "amenities":[

                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando ",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"8"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 10 AM. No pets allowed. No roll away beds are available.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"97.30",
                    "unhookedTotal":"291.90",
                    "hookedPerNight":"77.30",
                    "hookedTotal":"231.90"
                },
                "area":"Downtown Disney Area",
                "enableSuper":false,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Business facilities",
                    "Fitness facilities",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pet-Friendly",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3887822",
                    "long":"-81.5026852"
                }
            },
            {
                "post_id":482,
                "sams_id":204,
                "name":"Westgate Lakes Resort &#038; Spa",
                "address":"10000 Turkey Lake Road, Orlando, Fl 32819",
                "starRating":"3",
                "summary":"<p>Westgate Lakes Resort &amp; Spa in Orlando is a lush tropical paradise that sits on picturesque lakefront property. Westgate Lakes is just 6 miles from the Walt Disney World Resort, 2 miles from Universal Orlando Resort and 2 miles from SeaWorld Orlando. Guests at Westgate Lakes enjoy a luxurious vacation experience, from the lavishly appointed villas to the dazzling lakefront sunsets.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Limo or Town Car services available"
                    },
                    {
                        "amenity":"Bellhop"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"Hair salon"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Conference Space"
                    },
                    {
                        "amenity":"Full-service spa"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Billiards or pool table"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Library"
                    },
                    {
                        "amenity":"Spa treatment rooms"
                    },
                    {
                        "amenity":"Outdoor tennis courts"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Sauna"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Childcare"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Picnic area"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Cafe"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Shopping center shuttle (complimentary)"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Marina"
                    },
                    {
                        "amenity":"Smoke-free property"
                    }
                ],
                "location":[
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"4"
                    },
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"4"
                    }
                ],
                "policies":"<p>Check-in: 4:00PM \/ Check-out: 10AM. A valid photo ID, such as a driver&#8217;s license or passport is required at check-in. Your major credit card will be pre-authorized for a security deposit for any incidental charges (varies per hotel). Room taxes are also due upon check-in. If you do not have a major credit card, some properties will accept a cash deposit. Special requests such as a rollaway or cribs are subject to availability and additional fees. Taxes, gratuities, transportation or meals are NOT included in this offer. Accommodations based upon availability and provided by Westgate Resorts and affiliated hotels. Depending on the hotel policy, extra person charges and fees for hotel amenities may apply. Holiday travel requires a minimum of a three-night stay. Any travel date cancellation\/change within 7 days, will result in a $25 service fee. Any travel date cancellation\/change made within 72 hours of arrival is subject to a service fee of $25 plus the first night&#8217;s room rate at the non-promotional rate. No refunds will be made for No Shows or early check-outs. Pet Policies One cat\/dog up to 60 lbs $75 Refundable Deposit $80 Cleaning Fee<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":{
                            "id":1581,
                            "alt":"",
                            "title":"imgur-345",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/png",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-345.png",
                            "width":1920,
                            "height":1200,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-345-150x150.png",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-345-300x188.png",
                                "medium-width":300,
                                "medium-height":188,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-345-1024x640.png",
                                "large-width":1024,
                                "large-height":640,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-345-400x250.png",
                                "slider-mobile-alt-width":400,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-345-720x450.png",
                                "slider-desktop-alt-width":720,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":{
                            "id":1578,
                            "alt":"",
                            "title":"imgur-334",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-334.jpg",
                            "width":2048,
                            "height":1024,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-334-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-334-300x150.jpg",
                                "medium-width":300,
                                "medium-height":150,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-334-1024x512.jpg",
                                "large-width":1024,
                                "large-height":512,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-334-500x250.jpg",
                                "slider-mobile-alt-width":500,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-334-900x450.jpg",
                                "slider-desktop-alt-width":900,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":{
                            "id":1580,
                            "alt":"",
                            "title":"imgur-342",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-342.jpg",
                            "width":1680,
                            "height":1050,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-342-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-342-300x188.jpg",
                                "medium-width":300,
                                "medium-height":188,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-342-1024x640.jpg",
                                "large-width":1024,
                                "large-height":640,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-342-400x250.jpg",
                                "slider-mobile-alt-width":400,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/imgur-342-720x450.jpg",
                                "slider-desktop-alt-width":720,
                                "slider-desktop-alt-height":450
                            }
                        }
                    }
                ],
                "prices":{
                    "unhookedPerNight":"99.00",
                    "unhookedTotal":"297.00",
                    "hookedPerNight":"79.00",
                    "hookedTotal":"237.00"
                },
                "area":"Seaworld Orlando Area",
                "enableSuper":false,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free parking",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pet-Friendly",
                    "Pool",
                    "Spa services",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.4280449",
                    "long":"-81.4756422"
                }
            },
            {
                "post_id":484,
                "sams_id":209,
                "name":"Westgate Towers North",
                "address":"7600  W. Irlo Bronson Memorial Hwy (us 192), Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>Conveniently located less than a mile from the main entrance to the Walt Disney World\u00ae Resort, <b>Westgate Towers<\/b> is the perfect spot for your next family vacation. Luxury one- and two-bedroom poolside and garden villas sleep four and eight people respectively, and most feature a fully equipped gourmet kitchen, whirlpool tub, color TV with VCR, private terrace and washer\/dryer. The resort&#8217;s prime location in the heart of the Kissimmee vacation corridor offers guests a variety of dining, entertainment and shopping opportunities, all within a 3-mile radius.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Outdoor pool"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary"
                    },
                    {
                        "amenity":"Spa tub"
                    },
                    {
                        "amenity":"Picnic area"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Wireless internet access (surcharge)"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in time is 4 PM. Check-out time is 10 AM. No pets allowed. No rollaway beds are available.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"90.30",
                    "unhookedTotal":"270.90",
                    "hookedPerNight":"70.30",
                    "hookedTotal":"210.90"
                },
                "area":"Walt Disney World Resort Area",
                "enableSuper":false,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Fitness facilities",
                    "Free parking",
                    "Laundry facilities",
                    "Microwave",
                    "Mini-refrigerator",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3338545",
                    "long":"-81.5914525"
                }
            },
            {
                "post_id":485,
                "sams_id":210,
                "name":"Westgate Town Center",
                "address":"7700 N Old Lake Wilson Rd, Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>Experience the vacation you&#8217;ve always dreamed about at Westgate Town Center, which is located just 1 mile from Walt Disney World\u00ae Resort! Westgate Town Center offers luxurious accommodations that include 2-bedroom villas with full kitchens, separate master bedrooms and large-screen TVs, as well as spacious studios with kitchenettes. Overlooking beautiful Lake Wilson, Westgate Town Center offers a variety of onsite amenities, including numerous swimming pools, a fully equipped weight room, activity center\/arcade and basketball, tennis and volleyball courts.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-Hour front desk"
                    },
                    {
                        "amenity":"8 floors"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Concierge services"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"14 Outdoor pools"
                    },
                    {
                        "amenity":"Convenience store"
                    },
                    {
                        "amenity":"Wi-Fi available (surcharge)"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Limo or Town Car service available"
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"Picnic area"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Complimentary self parking"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Tennis courts"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Cafe"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry services"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"13 spa tubs"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Children's club"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Marina"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Conference center"
                    },
                    {
                        "amenity":"Deli"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"TV in lobby"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando ",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in: 4:00PM \/ Check-out: 10AM. A valid photo ID, such as a driver&#8217;s license or passport is required at check-in. Your major credit card will be pre-authorized for a security deposit for any incidental charges (varies per hotel). Room taxes are also due upon check-in. If you do not have a major credit card, some properties will accept a cash deposit. Special requests such as a rollaway or cribs are subject to availability and additional fees. Taxes, gratuities, transportation or meals are NOT included in this offer. Accommodations based upon availability and provided by Westgate Resorts and affiliated hotels. Depending on the hotel policy, extra person charges and fees for hotel amenities may apply. Holiday travel requires a minimum of a three-night stay. Any travel date cancellation\/change within 7 days, will result in a $25 service fee. Any travel date cancellation\/change made within 72 hours of arrival is subject to a service fee of $25 plus the first night&#8217;s room rate at the non-promotional rate. No refunds will be made for No Shows or early check-outs. Pet Policies &#8211; One cat\/dog up to 60 lbs. $75 Refundable Deposit and $80 Cleaning Fee.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":{
                            "id":1616,
                            "alt":"",
                            "title":"logo",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/png",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2015\/01\/logo.png",
                            "width":312,
                            "height":69,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2015\/01\/logo-150x69.png",
                                "thumbnail-width":150,
                                "thumbnail-height":69,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2015\/01\/logo-300x66.png",
                                "medium-width":300,
                                "medium-height":66,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2015\/01\/logo.png",
                                "large-width":312,
                                "large-height":69,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2015\/01\/logo.png",
                                "slider-mobile-alt-width":312,
                                "slider-mobile-alt-height":69,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2015\/01\/logo.png",
                                "slider-desktop-alt-width":312,
                                "slider-desktop-alt-height":69
                            }
                        }
                    }
                ],
                "prices":{
                    "unhookedPerNight":"106.60",
                    "unhookedTotal":"319.80",
                    "hookedPerNight":"86.60",
                    "hookedTotal":"259.80"
                },
                "area":"Walt Disney World Resort Area",
                "enableSuper":false,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free parking",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pet-Friendly",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3094147",
                    "long":"-81.5904562"
                }
            },
            {
                "post_id":486,
                "sams_id":211,
                "name":"Westgate Vacation Villas",
                "address":"7700 Westgate Blvd, Kissimmee, Fl 34747",
                "starRating":"3",
                "summary":"<p>Guests at Westgate Vacation Villas enjoy the finest in luxury accommodations. The main entrance to the Walt Disney World\u00ae Resort lies just 1 mile from Westgate Vacation Villas. Wesgate Vacation Villas features 1,184 luxury villas, ranging in size from efficiencies to four-bedroom suites.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"24-hour front desk"
                    },
                    {
                        "amenity":"2 floors"
                    },
                    {
                        "amenity":"Tennis on site"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Conference space"
                    },
                    {
                        "amenity":"Express check-out"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"14 Outdoor pools"
                    },
                    {
                        "amenity":"Ticket assistance"
                    },
                    {
                        "amenity":"Children's club"
                    },
                    {
                        "amenity":"Limo or Town Car services available"
                    },
                    {
                        "amenity":"Meeting rooms"
                    },
                    {
                        "amenity":"Picnic area"
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Safe-deposit box at front desk"
                    },
                    {
                        "amenity":"7 Meeting rooms"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"BBQ grills"
                    },
                    {
                        "amenity":"Cafe"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service"
                    },
                    {
                        "amenity":"Elevator"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"13 Spa tubs"
                    },
                    {
                        "amenity":"Wi-Fi available"
                    },
                    {
                        "amenity":"Marina"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"24-hour business center"
                    },
                    {
                        "amenity":"Smoke-free property"
                    },
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Deli"
                    },
                    {
                        "amenity":"Multilingual staff"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Walt Disney World Resort",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"SeaWorld Orlando",
                        "poi_distance":"6"
                    },
                    {
                        "poi_name":"Universal Orlando Resort",
                        "poi_distance":"9"
                    }
                ],
                "policies":"<p>Check-in-out-policy Check-in: 4:00PM \/ Check-out: 10AM. A valid photo ID, such as a driver&#8217;s license or passport is required at check-in. Your major credit card will be pre-authorized for a security deposit for any incidental charges (varies per hotel). Room taxes are also due upon check-in. If you do not have a major credit card, some properties will accept a cash deposit. Special requests such as a rollaway or cribs are subject to availability and additional fees. Taxes, gratuities, transportation or meals are NOT included in this offer. Accommodations based upon availability and provided by Westgate Resorts and affiliated hotels. Depending on the hotel policy, extra person charges and fees for hotel amenities may apply. Holiday travel requires a minimum of a three-night stay. Any travel date cancellation\/change within 7 days, will result in a $25 service fee. Any travel date cancellation\/change made within 72 hours of arrival is subject to a service fee of $25 plus the first night&#8217;s room rate at the non-promotional rate. No refunds will be made for No Shows or early check-outs. Pet Policies &#8211; One cat\/dog up to 60 lbs $75 Refundable Deposit and $80 Cleaning Fee.<\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":{
                            "id":1632,
                            "alt":"",
                            "title":"wallhaven-139284",
                            "caption":"",
                            "description":"",
                            "mime_type":"image\/jpeg",
                            "url":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-139284.jpg",
                            "width":1920,
                            "height":1080,
                            "sizes":{
                                "thumbnail":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-139284-150x150.jpg",
                                "thumbnail-width":150,
                                "thumbnail-height":150,
                                "medium":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-139284-300x169.jpg",
                                "medium-width":300,
                                "medium-height":169,
                                "large":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-139284-1024x576.jpg",
                                "large-width":1024,
                                "large-height":576,
                                "slider-mobile-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-139284-444x250.jpg",
                                "slider-mobile-alt-width":444,
                                "slider-mobile-alt-height":250,
                                "slider-desktop-alt":"http:\/\/10.1.16.13\/bookingengine2\/wp-content\/uploads\/2014\/12\/wallhaven-139284-800x450.jpg",
                                "slider-desktop-alt-width":800,
                                "slider-desktop-alt-height":450
                            }
                        }
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"90.30",
                    "unhookedTotal":"270.90",
                    "hookedPerNight":"70.30",
                    "hookedTotal":"210.90"
                },
                "area":"Walt Disney World Resort Area",
                "enableSuper":false,
                "featured":false,
                "terms":[
                    "Arcade",
                    "Bar\/lounge",
                    "Business facilities",
                    "Childcare services",
                    "Fitness facilities",
                    "Free parking",
                    "Kitchen\/kitchenette",
                    "Laundry facilities",
                    "Meeting space",
                    "Microwave",
                    "Mini-refrigerator",
                    "On-site dining",
                    "Pet-Friendly",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3295065",
                    "long":"-81.5977362"
                }
            },
            {
                "post_id":523,
                "sams_id":3345,
                "name":"Wyndham Lake Buena Vista Resort",
                "address":"1850 Hotel Plaza Boulevard, Lake Buena Vista, Fl 32830",
                "starRating":"3",
                "summary":"<p>A Walt Disney World Good Neighbor Hotel, the full-service Wyndham Lake Buena Vista Resort is ideally located across the street from Downtown Disney Area, a world-class shopping, dining and entertainment district.<\/p>\n<p>The Wyndham Lake Buena Vista Resort features complimentary shuttle service to Walt Disney World Resort theme parks.<\/p>\n",
                "review":"",
                "amenities":[
                    {
                        "amenity":"Theme park shuttle (complimentary)"
                    },
                    {
                        "amenity":"Fitness facilities"
                    },
                    {
                        "amenity":"Breakfast available (surcharge)"
                    },
                    {
                        "amenity":"Coffee shop"
                    },
                    {
                        "amenity":"Meeting space"
                    },
                    {
                        "amenity":"24-hour front desk "
                    },
                    {
                        "amenity":"Multilingual staff"
                    },
                    {
                        "amenity":"ATM"
                    },
                    {
                        "amenity":"Laundry facilities"
                    },
                    {
                        "amenity":"Childcare"
                    },
                    {
                        "amenity":"Arcade"
                    },
                    {
                        "amenity":"Tennis"
                    },
                    {
                        "amenity":"Complimentary newspaper in lobby "
                    },
                    {
                        "amenity":"Computer station"
                    },
                    {
                        "amenity":"Ticket assistance "
                    },
                    {
                        "amenity":"Luggage storage"
                    },
                    {
                        "amenity":"Tennis courts"
                    },
                    {
                        "amenity":"Spa tub "
                    },
                    {
                        "amenity":"Poolside bar"
                    },
                    {
                        "amenity":"Children's pool"
                    },
                    {
                        "amenity":"Bar\/lounge"
                    },
                    {
                        "amenity":"Restaurant"
                    },
                    {
                        "amenity":"Limo or Town Car service available "
                    },
                    {
                        "amenity":"Porter\/bellhop"
                    },
                    {
                        "amenity":"Safe deposit box at front desk"
                    },
                    {
                        "amenity":"Newsstand"
                    },
                    {
                        "amenity":"Dry cleaning\/laundry service "
                    },
                    {
                        "amenity":"Television in lobby"
                    },
                    {
                        "amenity":"Elevator "
                    },
                    {
                        "amenity":"Valet parking (surcharge)"
                    },
                    {
                        "amenity":"Wedding services"
                    },
                    {
                        "amenity":"Shopping center shuttle (complimentary)"
                    },
                    {
                        "amenity":"2 Outdoor pools"
                    },
                    {
                        "amenity":"Complimentary Wi-Fi"
                    },
                    {
                        "amenity":"Concierge"
                    },
                    {
                        "amenity":"Self parking (surcharge)"
                    },
                    {
                        "amenity":"24-hour business center"
                    }
                ],
                "location":[
                    {
                        "poi_name":"Downtown Disney ",
                        "poi_distance":"1"
                    },
                    {
                        "poi_name":"Walt Disney World\u00ae Resort Theme Parks ",
                        "poi_distance":"8"
                    },
                    {
                        "poi_name":"SeaWorld\u00ae Orlando ",
                        "poi_distance":"10"
                    },
                    {
                        "poi_name":"Universal\u00ae Orlando Resort ",
                        "poi_distance":"10"
                    }
                ],
                "policies":"<p><span style=\"font-size: 10.0pt;\">Check-in time is 4 PM. Check-out time is 11 AM. No pets allowed.<\/span><\/p>\n",
                "thumbnail":false,
                "images":[
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    },
                    {
                        "hotel_image":false
                    }
                ],
                "prices":{
                    "unhookedPerNight":"103.57",
                    "unhookedTotal":"310.71",
                    "hookedPerNight":"83.57",
                    "hookedTotal":"250.71"
                },
                "area":"Lake Buena Vista",
                "enableSuper":true,
                "featured":false,
                "terms":[
                    "Bar\/lounge",
                    "Business facilities",
                    "Fitness facilities",
                    "Laundry facilities",
                    "Meeting space",
                    "On-site dining",
                    "Pool",
                    "Theme park shuttle"
                ],
                "geo":{
                    "lat":"28.3749975",
                    "long":"-81.5116997"
                }
            }
        ];

		return receivedFeed;
	}] );
