var socket = new WebSocket("ws://localhost:8080");
window.onload = function() {

	//サーバから｣メッセージを受け取った際のイベント
	socket.onmessage = function(event) {
		document.forms[0].messages.value += "\r\n" + event.data;
	}
}

//サーバにメッセージを送信
function sendMessage() {
	socket.send(JSON.stringify({"text":document.forms[0].messageText.value,
								"author":document.forms[0].authorName.value}));
}