/* HCI AngularJS Booking Engine [Services]
 * ===================================
 * These are the Booking Engine services. These will manipulate and gather data, but not place it into a view.
 */
angular.module('hciServices', ['ngSanitize'])
	.factory( 'hciService', [ '$sce', function($sce){

		var getURLParameter = function(sParam){
	    	var sPageURL = window.location.search.substring(1);
	    	var sURLVariables = sPageURL.split('&');
	    	for (var i=0; i < sURLVariables.length; i++){
	    		var sParameterName = sURLVariables[i].split('=');
	    		if (sParameterName[0] == sParam) {
	    			return sParameterName[1];
	    		}
	    	}
	    	return false;
	    }

		return {
			getURLParameter: getURLParameter
		};

}] );
