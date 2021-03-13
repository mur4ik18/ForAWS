var addr = "http://localhost:8000/"
var article = "api/articles/"
var read = "?category=read/"
var watch = "?category=watch/"
var see = "?category=see/"
var listen = "?category=listen/"
var currentList = [];

var gallery = function() {
	var catList = [];
	var populated = false;

	/** Find current slide (hashtags)**/
	function findCurrent() {
		// body...
		return $('#scrollbar').children('.hidden').children().children('.subtext').text();
	}

	/** AJAX Whatnot **/
	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function getData() {
		var type = '';
		$.ajax({
			url: addr + article + type,
			success: function(res){ spit(res) }
		})
		//spit out data
		function spit(resp){
			for (var i = 0; i < resp.length; i++){
				var curItem = resp[i]
				var curPage;
				var newArticle;
				var html = '';
				var media = '';
				switch (resp[i].category) {
					case 'read':
						curPage = $('#read');
						html += ('<div class="article readarticle">');
						break;
					case 'watch':
						curPage = $('#watch');
						html += ('<div class="article watcharticle">');
						break;
					case 'see':
						curPage = $('#see');
						html += ('<div class="article seearticle">');
						break;
					case 'listen':
						curPage = $('#listen');
						html += ('<div class="article listenarticle">');
						break;
					default:
						break;
				}

				html += ('<div class="creditbox commonborder">');
				html += ('<div class="catImg">');
				html += ('<img src="/static/img/icons/galleries/' + curItem.subcategory + '.svg">')
				html += ('</div>');
				html += ('<div class="txtHold">');
				html += ('<center>');
				html += ('<h1 class="mediumtext">' + curItem.title + '</h1>');
				html += ('<h4 class="text">' + curItem.caption + '</h4>');
				html += ('<input class="subber" name="subber" type="hidden" value="' + curItem.subcategory + '">');
				html += ('</center>');
				html += ('</div>');
				html += ('</div>');
				html += ('<div class="contentbox bottomborder">');
				html += ('<center>');
				html += ('<div class="alttext contenttext">' + curItem.short_description);
				html += ('</div>');
				html += ('<a href="/mobile/gallery/individual/#' + curItem.id +'"><p class="smallertext">more ></p></a>');
				html += ('</div>');
				html += ('</center>');
				html += ('</div>');
				curPage.append(html);
			}
			// var curPage
			// $('#slideshow').children().each(function( index ){
			// 	if (!$(this).hasClass('hidden')) {
			// 		curPage = $(this);
			// 	}
			// });
			// try {
			// 	curPage.addClass('hidden');
			// } catch(err) {
			// 	console.log(err);
			// }

			currentList = resp;
			populate();

			// page.show():
		};

		return false;
	}
	//get data
	getData();

	/** Scrollbar Functionality **/
	$('.ico2').click(function(){
		var current;
		var active;
		var curCircle = $('#scrollbar').children('.hidden')
		var nexCircle = $(this);
		//iterations to find active and current circle
		$('#slideshow').children().each(function( index ){
			if (!$(this).hasClass('hidden')) {
				current = $(this);
			}
		});
		$('#imagehold').children().each(function( index) {
			if (!$(this).hasClass('hidden')) {
				active = $(this);
			}
		});
		//hide circles
		current.addClass('hidden');
		nexCircle.addClass('hidden');
		//get text from circles and current slide
		$('#currenttext').text(nexCircle.children().children('.subtext').text());
		var slideNum = $(this).children().children('.subtext').text();
		//get text from the next circle
		$('#' + nexCircle.children().children('.subtext').text() + 'img').removeClass('hidden');
		//show the new circles
		curCircle.removeClass('hidden');
		$('#' + slideNum).removeClass('hidden');
		active.addClass('hidden');
	});

	/** water dropdown **/
	$('#rain').click(function(){
		if ($('#pond:visible').length == 0){
			$('#pond').slideDown(600);
		} else {
			$('#pond').slideUp(600);
		}
		$('#residents').on('click', 'tr', function(){
    		var cate = $(this).children('.thold').children().children('.droptext').text();
			$('#currentdrop').text($(this).text());
			$('#imageDrop').empty();
			if (cate == 'all') {
				$('#imageDrop').append('<img width="50em" class="" src="/static/img/icons/head_white.png">')
			} else {
				$('#imageDrop').append('<img class="" src="/static/img/icons/galleries/' + cate + '.svg">')
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
		populate();
	});

	// $('.droplet').click(function(){
	// 	var cate = $(this).text();
	// 	$('#currentdrop').text($(this).text());
	// 	$('.article').filter(function() {
	// 		if ( !($(this).children().children().children('.subber').val() == cate )){
	// 			return false;
	// 		}
	// 	}).hide();
	// });

	//populate category drop

	var populate = function(){
		if (!populated){
			for (var i = 0; i < currentList.length; i++) {
				if (catList.indexOf(currentList[i].subcategory) < 0) {
					catList.push(currentList[i].subcategory);
				}
			}

			for (var i = 0; i < catList.length; i++) {
				$('#residents').append('<tr class="dropline">' +
					'<td class="droplet" width="30%">' +
						'<div id="dropcontainer">' +
							'<img src="/static/img/icons/galleries/'+ catList[i] + '.svg">' +
						'</div>' +
					'</td>' +
					'<td class="thold" width="30%">'+
						'<div id="dropcontainer">'+
							'<span id="droptext" class="droptext text">' + catList[i] + '</span>' +
						'</div>' +
					'</td>' +
					'<td width="30%">' +
					'</td>' +
				'</tr>');
			}
			populated = true;
		}
	}
};

$(document).ready(gallery);

$(window).load(function() {
	if(window.location.hash) {
      var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
      //alert (hash);
      // hash found
      	switch(hash){
      		case 'watch':
      			$('#c2').click();
      			break;
     		case 'see':
     			$('#c3').click();
     			break;
      		case 'listen':
      			$('#c4').click();
      			break;
      		default:
      			break;
		}
	}
})