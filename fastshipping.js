var FastShipping = {}
  , EndPoint  = 'https://fastshipping.ciawn.com.br/v1/'
  ;

FastShipping = {
	getOptionsShipping: function(listProducts, token) {
		FastShipping.requestHttp();
	},
	getTrackingByCode: function(code, token) {
		FastShipping.requestHttp('tracking', token, code);
	},
	requestHttp: function(method, token, code) {
	    var xmlhttp;

	    if (window.XMLHttpRequest) {
	        xmlhttp = new XMLHttpRequest();
	    } else {
	        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }

	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ){
	        	console.log(xmlhttp.responseText);
	        }
	    }

    	xmlhttp.open("GET", EndPoint + method + '/' + code + '?token=' + token, true);
	    xmlhttp.send();
	}
};

