// JavaScript Document

function success(entries){
	var i ;
	var dirHtml = "";
	var dir = document.getElementById("dirView");
	
	for ( i =0;i < entries.length ; i++) {
		
		if (entries[i].isFile) {
			alert(entries[i].name);
			dirHtml += "&nbsp;&nbsp;&nbsp;&nbsp;<img src=\"./img/Document-icon.png\" />" + entries[i].name + "<br>";
		}else{

			dirHtml += "<img src=\"./img/Folder-Dark-Blue-icon.png\" />" + entries[i].name + "<br>";
		}
	}
	
	dir.innerHTML=dirHtml;
}

function fail(error){
	alert('code:' + error.code + '\n' +
			'message : ' + error.message + '\n');
}

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady(){
		window.requestFileSystem(LocalFileSystem.PERSISTENT,0,onFileSystemSuccess,fail);
}

function onFileSystemSuccess(fileSystem){
	var dirEntry = fileSystem.root;
	//dirEntry.getDirectory("myfolder",{create:true,exclusive :false},alert(dirEntry.name),fail);
	var directoryReader = dirEntry.createReader();
	directoryReader.readEntries(success,fail);
}
