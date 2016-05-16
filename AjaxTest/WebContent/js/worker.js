/**
 *
 */

addEventListener("message", function(e) {

	var count = e.data;
	var total = 0;

	for (var i = 0; i < count; i++) {
		total += i;
	}

	postMessage(total);
})