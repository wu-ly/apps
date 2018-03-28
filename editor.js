function setFontSize(size){
	document.execCommand('fontSize', false, size);
}

function setFontColor(color){
	document.execCommand("foreColor",false,color);
}

function setJustifyLeft(){
	document.execCommand("justifyLeft",false,null);
}

function setJustifyCenter(){
	document.execCommand("justifyCenter",false,null);
}

function setJustifyRight(){
	document.execCommand("justifyRight",false,null);
}

function insertImage(){
	document.execCommand('insertImage', false, 'http://192.168.4.102/upload/Tulips.jpg');
}
