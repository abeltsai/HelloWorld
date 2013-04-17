// JavaScript Document


document.addEventListener("deviceready",onDeviceReady,false);

var db;

function onDeviceReady(){
	db = window.openDatabase("geolocationRec","1.0","Myfoot",200000);
	db.transaction(populateDb,errorCB,successCB);
}

function populateDb(tx){
	
}

function insertData(x,data){
	
}