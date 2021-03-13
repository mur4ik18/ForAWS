// http://54.210.117.37/
// /api/articles/?category=read

var addr = "http://localhost:8000/"
var article = "api/articles/"
var read = "?category=read/"
var watch = "?category=watch/"
var see = "?category=see/"
var listen = "?category=listen/"

var retriever = function(){
	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function get_data(category) {
		var type = '';

		switch (category){
			case 'read':
				type = read;
				break;

			case 'watch':
				type = watch;
				break;

			case 'see':
				type = see;
				break;

			case 'listen':
				type = listen;
				break;

			default:
				break;
		}
		$.ajax({
			url: addr + article + type

		})
		.done(function(resp){
			alert(resp);
		});

		return false;
	}
	$('.naver').click(function(){
		get_data($(this).attr('id'));
	})
}

$(document).ready(retriever);