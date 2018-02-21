
function setHeight(className ,contents) { 
	var elements = document.getElementsByClassName(className);
	var height = 0;
	for(var i = 0; elements.length > i; i++) {
		console.log(elements[i].scrollHeight);
		height += elements[i].scrollHeight;
	}
	console.log('result:'+height);
	//CSSノード追加
	var newStyle = document.createElement('style');
	newStyle.type = "text/css";
	newStyle.innerHTML = '#baseContents '+contents+ ' input:checked ~ .detail {height: '+(height+180)+'px;}';
	document.getElementsByTagName('head').item(0).appendChild(newStyle);
}

