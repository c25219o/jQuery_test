/**
 *
 */

/** テキストファイルの読み込み */
//var request = new XMLHttpRequest();
//
//request.onreadystatechange = function() {
//	if (request.readyState == 4 && request.status ==200) {
//		alert(request.responseText);
//	}
//};

// GET通信の場合
//request.open('GET', '/AjaxTest/txt/test.txt', true);
//request.send(null);

// POST通信の場合
//request.open("POST", '/AjaxTesttxt/test.txt', true);
//request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//request.send('param1=1234&param2=abcd');


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