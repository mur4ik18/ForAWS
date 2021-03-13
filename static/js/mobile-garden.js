var addr = "http://localhost:8000/";
var eve = "api/events/"; //event var taken
var months = ['all', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var hash;

var gardenmain = function() {	
	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function getData() {
		$.ajax({
			url: (addr + eve),
			success: function(res){ spit(res) }
		})
		//spit out data
		function spit(resp){
			for (var i = 0; i < resp.length; i++){
				var curItem = resp[i]
				var curPage;
				var newArticle;
				var html = '';
				var monthstr = new Date(curItem.datetime).getMonth();
				var monthNum = parseInt(monthstr) + 1;

				//populate #viewshow
				if ( !(hash == 'all' || hash == null) ){
					if (monthNum == hash){
						html += ('<div class="article">');
					} else {
						html += ('<div class="article" style="display:none;">')
					}
				} else {
					html += ('<div class="article">');
				}
				html += ('<div class="creditbox commonborder">');
				html += ('<div class="catImg">');
				html += ('<img src="/static/img/icons/events/' + months[monthNum].substring(0,3) + '.svg">')
				html += ('</div>');
				html += ('<div class="txtHold">');
				html += ('<center>');
				html += ('<h1 class="mediumtext">' + curItem.title + '</h1>');
				html += ('<h4 class="text">' + curItem.caption + '</h4>');
				html += ('<input class="subber" name="subber" type="hidden" value="' + months[monthNum] + '">');
				html += ('</center>');
				html += ('</div>');
				html += ('</div>');
				html += ('<div class="contentbox bottomborder">');
				html += ('<center>');
				html += ('<div class="contenttext">' + curItem.location);
				html += ('</div>');
				html += ('<p><a href="/mobile/garden/individual/#' + curItem.id +'">read more -></a><p>');
				html += ('</div>');
				html += ('</center>');
				html += ('</div>');

				$('#viewshow').append(html);

			}
		};

		return false;
	}
	//get data
	getData();

	/** water dropdown **/
	$('#rain').click(function(){
		if ($('#pond:visible').length == 0){
			$('#pond').slideDown(600);
		} else {
			$('#pond').slideUp(600);
		}
		$('#residents').on('click', 'tr', function(){
			var cate = $(this).children('.thold').children().children('.droptext').text();
			$('#currentdrop').text(cate);
			$('#currenttext').text(cate);
			$('#imagehold').empty();
			if (cate == 'all') {
				$('#imagehold').append('<img width="50em" id="readimg" class="" src="/static/img/icons/head.png">')
			} else {
				$('#imagehold').append('<img id="readimg" class="" src="/static/img/icons/events/' + cate.substring(0,3) + '.svg">')
			}
			$('.article').filter(function() {
				curCate = $(this).children('.creditbox').children('.txtHold').children().children('.subber').val();
				console.log(cate + ' -- ' + curCate);
				if (cate == 'all') { 
					$(this).show();
				} else if (curCate == cate ){
					//console.log( curCate + ' vs ' + cate);
					$(this).show();
				} else {
					$(this).hide();
				}
			})
			$('#rain').click();
		});
	});
}

$(document).ready(gardenmain);

$(window).load(function() {
	if(window.location.hash) {
        hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        //alert (hash);
        // hash found
        console.log(hash);
      	if ( !(hash == null) ){
      		$('#pond').slideDown(0);
      		$('#residents').on('click', 'li', function(){
	    		var cate = months.indexOf($(this).text());
				$('#currentdrop').text($(this).text());
				$('#currenttext').text($(this).text());
				$('#imagehold').empty();
				$('#imagehold').append('<img width="120px" id="readimg" class="" src="/static/img/icons/events/' + $(this).text().substring(0,3) + '.svg">')
				$('.article').filter(function() {
					curCate = $(this).children('.creditbox').children('.txtHold').children().children('.subber').val();
					console.log(cate);
					console.log(curCate);
					if (cate == 'all') { 
						$(this).show();
					} else if (curCate == cate){
						//console.log( curCate + ' vs ' + cate);
						$(this).show();
					} else {
						$(this).hide();
					}
				})
			});
      		$('#m' + hash).click();
      		$('#pond').slideUp(0);
      	}
	}
})