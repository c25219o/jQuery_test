/**
 *
 */

const empty = '';

$(function() {

	$('#name').blur(function() {
		if ($(this).val() == null || $(this).val() =='') {
			$(this).addClass('invalid');
			$('#alert_name').text('名前を入力してください');
		} else {
			$(this).removeClass('invalid');
			$('#alert_name').text(empty);
		}
	});
});

$(function() {

	$('input[type=text]').focus(function() {
		$(this).addClass('focus');
	}).blur(function(){
		$(this).removeClass('focus');
	});
});

$(function() {

	$('#message').blur(function() {
		if($(this).val().length > 10) {
			$(this).addClass('invalid');
			$('#alert_message').text('メッセージは10文字以内にしてください');
		} else {
			$(this).removeClass('invalid');
			$('#alert_message').text(empty);
		}
	})
});
