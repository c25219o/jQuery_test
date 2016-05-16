
/** JSONファイルの読み込み */
var request = new window.XMLHttpRequest();
request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status ==200) {
		var msgInfos = JSON.parse(request.responseText);
		for (var i = 0; i < msgInfos.length; i++) {
			document.write(msgInfos[i].message + '<br>');
		}
	}
}

request.open('GET', '/AjaxTest/json/test.json', true);
request.send(null);