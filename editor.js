var lastEditRange = null;
function getContentHtml(){
	var editor = document.getElementById("editor");
	//alert(editor.innerHTML);
	var file = new File([editor.innerHTML], "html.txt", { type: "text/plain;charset=utf-8" });
  	saveAs(file);
}

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

function insertImage(path){
	if(lastEditRange){
		restoreSelection(lastEditRange);
		var img = document.createElement("img");
		img.src = path;
		lastEditRange.insertNode(img);
	}
	//document.execCommand('insertImage', false, path);
}


// 保存光标位置
function saveSelection() {
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

// 恢复光标位置
function restoreSelection(range) {
    if (range) {
        if (window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.selection && range.select) {
            range.select();
        }
    }
}