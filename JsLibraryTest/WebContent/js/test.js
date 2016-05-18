/**
 *
 */

const empty = '';

$(function() {

	$('#name').blur(function() {
		if ($(this).val() == null || $(this).val() =="") {
			$(this).addClass('invalid');
			$('#alert').text('名前を入力してください');
		} else {
			$(this).removeClass('invalid');
			$('#alert').text(empty);
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