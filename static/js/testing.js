var main = function () {
	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});
	
	var req = function () {
		$.post( "http://localhost:8000/api/articles/?category=read", function( data ) {
  			alert(data);
		});
	}
	$('#tester').click(req);
}
$(document).ready(main);