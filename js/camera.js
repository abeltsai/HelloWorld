// JavaScript Document

var picsource = new Array();  //catch image URI.
var picCount = 0;

var pictureSource ;
var destinationType ;

document.addEventListener("deviceready",onDeviceReady,false);


function onDeviceReady(){
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}

function onPhotoDataSuccess(imageData){
	
	var samllImage = document.getElementById("samllImage");
	
	picsource[picCount] = imageData;
	picCount += 1;
	
	smallImage.style.display="block";
	
	samllImage.src="data:image/jpeg;base64," + imageData;
	
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess,onFail,{quality : 50 ,destinationType : destinationType.DATA_URL});	
}