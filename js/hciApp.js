/* HCI AngularJS Booking Engine
 * ===================================
 * The contructor of the entire project
 */


var hciApp = angular.module('hciApp', [ 'hciAJAX', 'hciServices', 'ui.bootstrap' ]);

hciApp.controller( 'hciSearchResults', [ '$scope', 'getHotels', 'hciService',  function($scope, getHotels, hciService){

	/* VARIABLES
	 * =================================
	 */	this.activeHotel = false;
		this.hotelTags = [];
		this.hotelNeighborhood = [];
		$scope.map;
		$scope.markers = [];
		$scope.attractionMarkers = [];

		this.searchObj = {
			arrivalDate: '',
			departureDate: '',
			numOfGuests: ''
		};

		$scope.hotels = getHotels;


	/* FUNCTIONS
	 * =================================
	 */	this.test = function(){
			console.log($scope.hotels);
		}

		$scope.testFunction = function(){
			console.log("Test Function Ran");
		}

		// Creates a Google Maps Marker and places it on the map.


		// Run Hotel Collapse Check
		// ..This will either open or close selected hotel's collapse
		this.selectHotel = function($event, obj){
			obj.isCollapsed = !obj.isCollapsed;

			if(this.activeHotel && this.activeHotel.name != obj.name){
				this.activeHotel.isCollapsed = false;
			}

			this.activeHotel = obj;
			$event.preventDefault();
		}

		// Given a TAG string, this function will either add or remove the given item to the hotelTags[].
		this.toggleTag = function(tag){
			this.hotelTags = this.indexFind( this.hotelTags , tag );
		};

		// Given a NEIGHBORHOOD string, this function will either add or remove the given item to the hotelNeighborhood[].
		this.toggleNeighborhood = function(neighborhood){
			this.hotelNeighborhood = this.indexFind( this.hotelNeighborhood , neighborhood );
		};

		// Find the index of a string in an Array.
		// [IF] item is found, remove it from the array
		// [ELSE] add item to given array
		this.indexFind = function( array, item ){
			var idx = array.indexOf(item);

	      	if (idx > -1) {
	      		// is currently selected
	        	array.splice(idx, 1);
	      	} else {
	      		// Newly Selected
	        	array.push(item);
	      	}

			return array;
		}

/* GOOGLE MAPS FUNCTIONALITY
 * =====================================================================================
 * =====================================================================================
 */		// Initialize Google MAP
		function initialize() {
			$scope.map = new google.maps.Map(document.getElementById('map-canvas'), {
		    	zoom: 10,
		    	center: {lat: 28.430932, lng: -81.481380},
			});

			angular.forEach($scope.hotels, function(hotel, key){
	  			// Google LAT/LONG Object
	  			var hotelLatLong = new google.maps.LatLng( hotel.geo.lat, hotel.geo.long );
	  			var marker = new google.maps.Marker({
	  				map: $scope.map,
	  				position: hotelLatLong,
	  				title: hotel.name
	  			});

	  			$scope.markers[key] = marker;
				hotel.markerIndex = key;

				// console.log("Marker Created for:", hotel.marker);
	  		});

		  	console.log( 'Google Maps Initialized' );
		}

		// Initalizes Google MAP on window 'load'
		google.maps.event.addDomListener(window, 'load', initialize);


/* WATCH
 * =================================
 */		// When a change is made to filteredHotels array, turn off all Hotel Pins and repin the filteredHotels Array
 		$scope.$watch( 'filteredHotels', function(newValue, oldValue){
			 for (key in $scope.markers) {
				 $scope.markers[key].setMap(null);
			 }

			 if ($scope.markers.length > 0) {
				 for (key in $scope.filteredHotels){
					 var index = $scope.filteredHotels[key].markerIndex;
					 $scope.markers[index].setMap($scope.map);
				 }
			 }

 		}, true);
}] );
// [END] - Controller


/* FILTERS
 * ================================= */
 hciApp.filter( 'neighborhood', function() {
	 return function( input, optional1 ){  // Input is required and typically the object you want to modify. Optional1 is anything that you MAY need to help properly filter a given object/array
		var output = [];

		if(optional1.length == 0){
 			output = input;
		}else{

 			angular.forEach( input, function(hotel, key){

 				var index = optional1.indexOf(hotel.area);

 				if( index > -1 ){
 					output.push(hotel);
 				}
 			} );
 		}

 		return output;
 	}
} );

// - - - - - -

hciApp.filter('tag', function() {
	return function( hotels, tags ) {

		return hotels.filter(function(hotel) {


			if(tags.length == 0){
				return true;
			}else{

				var showHotel = true;

				angular.forEach(tags, function(term, key) {
					var index = hotel.terms.indexOf(term);

					if(index == -1){
						// console.log( 'Term Index', index, term );
						showHotel = false;
					}
				});

				return showHotel;
			}
        });
	};
});
