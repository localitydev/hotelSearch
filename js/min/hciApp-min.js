var hciApp=angular.module("hciApp",["hciAJAX","hciServices","ui.bootstrap"]);hciApp.controller("hciSearchResults",["$scope","getHotels","hciService",function(e,t,o){function i(){e.map=new google.maps.Map(document.getElementById("map-canvas"),{zoom:10,center:{lat:28.430932,lng:-81.48138}}),angular.forEach(e.hotels,function(t,o){var i=new google.maps.LatLng(t.geo.lat,t.geo["long"]),n=new google.maps.Marker({map:e.map,position:i,title:t.name});e.markers[o]=n,t.markerIndex=o}),console.log("Google Maps Initialized")}this.activeHotel=!1,this.hotelTags=[],this.hotelNeighborhood=[],e.map,e.markers=[],e.attractionMarkers=[],this.searchObj={arrivalDate:"",departureDate:"",numOfGuests:""},e.hotels=t,this.test=function(){console.log(e.hotels)},e.testFunction=function(){console.log("Test Function Ran")},this.selectHotel=function(e,t){t.isCollapsed=!t.isCollapsed,this.activeHotel&&this.activeHotel.name!=t.name&&(this.activeHotel.isCollapsed=!1),this.activeHotel=t,e.preventDefault()},this.toggleTag=function(e){this.hotelTags=this.indexFind(this.hotelTags,e)},this.toggleNeighborhood=function(e){this.hotelNeighborhood=this.indexFind(this.hotelNeighborhood,e)},this.indexFind=function(e,t){var o=e.indexOf(t);return o>-1?e.splice(o,1):e.push(t),e},google.maps.event.addDomListener(window,"load",i),e.$watch("filteredHotels",function(t,o){for(key in e.markers)e.markers[key].setMap(null);if(e.markers.length>0)for(key in e.filteredHotels){var i=e.filteredHotels[key].markerIndex;e.markers[i].setMap(e.map)}},!0)}]),hciApp.filter("neighborhood",function(){return function(e,t){var o=[];return 0==t.length?o=e:angular.forEach(e,function(e,i){var n=t.indexOf(e.area);n>-1&&o.push(e)}),o}}),hciApp.filter("tag",function(){return function(e,t){return e.filter(function(e){if(0==t.length)return!0;var o=!0;return angular.forEach(t,function(t,i){var n=e.terms.indexOf(t);-1==n&&(o=!1)}),o})}});