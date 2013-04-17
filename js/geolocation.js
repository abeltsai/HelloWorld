// JavaScript Document



document.addEventListener("deviceready",onDeviceReady,false);

function getGeoLocaion(){
	alert('start get location..');
	var options = { timeout : 60000 } // one minutes.
	navigator.geolocation.watchPosition(onSuccess,onError,options);	
}

function onSuccess(position){
	document.getElementById("longitxt").value=position.coords.longitude;
	document.getElementById("latitxt").value=position.coords.latitude;
}

function onError(error){
	document.getElementById("err").setAttribute('style', 'display:none;');

	alert('code:' + error.code + '\n' +
			'message : ' + error.message + '\n');
}