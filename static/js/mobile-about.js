var addr = 'http://localhost:8000/api/pages/?name=about'

var aboutmain = function() {
	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function getData() {
		$.ajax({
			url: (addr),
			success: function(res){ spit(res) }
		})
		//spit out data
		function spit(resp){
			$('#content').append(resp[0].content);
		}
	}
	getData();
}

$(document).ready(aboutmain);