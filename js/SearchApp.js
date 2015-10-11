var hciSearchApp = angular.module('hciSearchApp', ['ngSanitize']);

// Main Actions
hciSearchApp.controller('SearchCtrl', ['$scope', 'AJAX', '$sce', function($scope, AJAX, $sce) {	
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
    	numOfGuests: 2,
    	affiliateId: setting_affiliateId
    };
	$scope.loading = true;
	$scope.finished = false;
	$scope.results = [];
	$scope.Math = window.Math;


	// Grab URL Params
	$scope.searchData.arrivalDate = GetURLParameter("arrivalDate");
	$scope.searchData.departureDate = GetURLParameter("departureDate");
	$scope.searchData.numOfGuests = GetURLParameter("numOfGuests");

	$scope.tripLength = getDiffLength($scope.searchData.arrivalDate, $scope.searchData.departureDate);

	if($scope.searchData.arrivalDate){
		AJAX.getResults($scope.searchData).then(function(data){
			$scope.results = data;

			angular.forEach($scope.results, function(result, key) {	
				// Prices
				$scope.results[key].prices.unhookedPerNight = Math.ceil( parseInt( result.prices.unhookedPerNight ) );
				$scope.results[key].prices.unhookedTotal = Math.ceil( parseInt( result.prices.unhookedTotal ) );
				$scope.results[key].prices.hookedPerNight = Math.ceil( parseInt( result.prices.hookedPerNight ) );
				$scope.results[key].prices.hookedTotal = Math.ceil( parseInt( result.prices.hookedTotal ) );

				$scope.results[key].starRating = parseInt( result.starRating );

			});

			$scope.finished = true;
		});
	}else{
		$scope.results = [];
		$scope.finished = true;
	}

}]);



// Filters
hciSearchApp.filter('range', function() {
  	return function(input, total) {
    	total = parseInt(total);
		for (var i=0; i<total; i++)
			input.push(i);
		return input;
	};
});


// AJAX Building
hciSearchApp.factory('AJAX', ['$http', function($http){
	return {
		getResults: function(searchData){

			var response = $http({
				url: ajaxurl,
				method: "POST",
				params: {
					'action': 'getHotelsAngular',
			        'searchData': searchData
				}
			}).then(function(response){
				return response.data;
			});

			return response;
		}
	}
}]);


