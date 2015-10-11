var hciRoomApp = angular.module('hciRoomApp', ['ngSanitize']);

hciRoomApp.controller('RoomCtrl', ['$scope', 'AJAX', '$sce', function($scope, AJAX, $sce) {	
	function GetURLParameter(sParam){
    	var sPageURL = window.location.search.substring(1);
    	var sURLVariables = sPageURL.split('&');
    	for (var i=0; i < sURLVariables.length; i++){
    		var sParameterName = sURLVariables[i].split('=');
    		if (sParameterName[0] == sParam) {
    			return sParameterName[1];
    		}
    	}
    }

    function toHtml (html_code) {
	    return $sce.trustAsHtml(html_code);
	}

	function getDiffLength (a,b){
		var diff = new Date(b).getTime() - new Date(a).getTime();
		diff = diff / 1000 / 60 / 60 / 24;
		return diff;
	}

    // Variables
    $scope.searchData = {
    	arrivalDate: '',
    	departureDate: '',
    	numOfGuests: 2
    };
	$scope.loading = true;
	$scope.rooms = [];
	$scope.finished = false;


	// Grab URL Params
	$scope.searchData.arrivalDate = GetURLParameter("arrivalDate");
	$scope.searchData.departureDate = GetURLParameter("departureDate");
	$scope.searchData.numOfGuests = GetURLParameter("numOfGuests");
	$scope.searchData.affiliateId = GetURLParameter("affiliateId");

	$scope.tripLength = getDiffLength($scope.searchData.arrivalDate, $scope.searchData.departureDate);

	AJAX.getRooms($scope.searchData).then(function(data){
		$scope.rooms = data;

		angular.forEach($scope.rooms, function(room, key) {			
			$scope.rooms[key].desc = toHtml(room.desc);
		});

		$scope.finished = true;
	});

}]);


hciRoomApp.factory('AJAX', ['$http', function($http){
	return {
		getRooms: function(searchData){

			var response = $http({
				url: ajaxurl,
				method: "POST",
				params: {
					'action': 'getRoomsAngular',
			        'affiliateId': setting_affiliateId,
			        'hotelId': hotel_id,
			        'searchData': searchData
				}
			}).then(function(response){
				return response.data;
			});

			return response;
		}
	}
}]);


