function setFontSize(size){
	document.execCommand('fontSize', false, size);
}

function setFontColor(color){
	document.execCommand("foreColor",false,color);
}

function insertImage(){
	document.execCommand('insertImage', false, 'http://192.168.4.102/upload/Tulips.jpg');
}
