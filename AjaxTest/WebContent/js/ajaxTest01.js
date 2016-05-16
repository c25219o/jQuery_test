/**
 *
 */

/** テキストファイルの読み込み */
var request = new XMLHttpRequest();

request.onreadystatechange = function() {
	if (request.readyState == 4 && request.status ==200) {
		alert(request.responseText);
	}
};

// GET通信の場合
//request.open('GET', '/AjaxTest/txt/test.txt', true);
//request.send(null);

// POST通信の場合
request.open("POST", '/AjaxTest/txt/test.txt', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send('param1=1234&param2=abcd');

