var hash = '';
if(window.location.hash) {
		//Puts hash in variable, and removes the # character
		hash = window.location.hash.substring(1);
	}
var addr = "http://localhost:8000/";
var eve = "api/events/"; //event var taken
var mediaItems = ['video', 'image', 'audio'];

var gardenmain = function() {

	var currently = {};

	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function getData() {
		$.ajax({
			url: addr + eve,
			success: function(res) {
				spit(res)
			}
		})
		//spit out data
		function spit(resp){
			for (var i = 0; i < resp.length; i++) {
				if (resp[i].id == hash) {
					currently = resp[i];
					break;
				}
			}
			//empty the elements
			$('#title').empty();
			$('#short').empty();
			$('#description').empty();
			$('#tags').empty();

			//fill the elements
			$('#title').append(currently.title);
			$('#short').append(currently.location);
			$('#description').append(currently.content);
			function tagup() {
				var tagArr = currently.tags;
				var tagHtml = '';
				for (var i = 0; i < tagArr.length; i++){
					tagHtml += '<li class="text purplefont"> #' + tagArr[i] + ' </li>';
					if (!tagArr[i + 1] == null){
						tagHtml += '<li class="text purplefont"> | </li>';
					}
				}
				$('#tags').append(tagHtml);
			}
			tagup();
			//for now cycle through single media inputs
			for (var i = 0; i < currently.media.length; i++) {
				var cursor = currently.media[i];
				var total = '';
				if ( !(cursor == null || cursor == '') ) {
					if (i == 0){
						total += '<div id=' + i + ' class="slide">'	
					} else {
						total += '<div id=' + i + ' class="slide" style="display: none;">'
					}
					
					switch (cursor.type) {
						case 'video':
							var video = '';
							if (cursor.file != null){
								video += '<video controls width="100%%">';
								video += '<source src="' + cursor.file + '" type="video/mp4">';
								video += '</video>';
							} else {
								video += cursor.link
								// var vid;
								// if (cursor.link.substring(12, 13) == 'y'){
								// 	vid = cursor.link.substring(32, 43);
								// 	//console.log(vid);
								// 	video += '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + vid + '" frameborder="0" allowfullscreen></iframe>';
								// } else {
								// 	vid = cursor.link.substring(19);
								// 	video += '<iframe width="100%" height="100%" src="https://player.vimeo.com/video/' + vid + '?color=ffffff" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
								// }
							}
							total += video;
							break;
						case 'audio':
							var audio = '';
							if (cursor.file != null){
								audio += '<audio controls>';
								audio += '<source src="' + cursor.file + '" type="audio/mpeg">'
								audio += '</audio>';
							}	else {
								audio += cursor.link;
							}
							total += audio;
							break;
						case 'image':
							var image = '';
							if (cursor.file != null){
								image += '<img width="100%" src="' + cursor.file + '">';
							} else {
								image += '<img width="100%" src="' + cursor.link + '">';
							}
							total += image;
							break;
						default:
							break;
					}
					total += '</div>';
					$('#media').append(total);
				}
			}
		}
	}
	getData();

	$('#dirleft').click(function(){
		var csp = $('#media').children(':visible');
		var nsp = csp.prev();
		if (nsp.length == 0) {
			nsp = $('#media').children().last();
		}
		csp.hide();
		nsp.show();
	});

	$('#dirright').click(function(){
		var csp = $('#media').children(':visible');
		var nsp = csp.next();
		if (nsp.length == 0) {
			nsp = $('#media').children().first();
		}
		csp.hide();
		nsp.show();
	});
}

$(document).ready(gardenmain);

// $(window).load(function() {
// 	if(window.location.hash) {
// 		//Puts hash in variable, and removes the # character
// 		hash = window.location.hash.substring(1);
// 	}
// });