var addr = "http://localhost:8000/";
var products = "api/products/"; //event var taken
var hash = '';
var categories = {
	'all': 'all',
	'tops': '2',
	'bottoms': '3',
	'tops': '5',
	'bottoms': '6',
	'dresses': '7',
	'jumpsuits': '8' 
}

var reverseCat = {
	'all': 'all',
	'2': 'tops',
	'3': 'bottoms',
	'5': 'tops',
	'6': 'bottoms',
	'7': 'dresses',
	'8': 'jumpsuits'
}

var marketmain = function() {
	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function getData() {
		$.ajax({
			url: (addr + products),
			success: function(res){ spit(res) }
		})
		//spit out data
		function spit(resp){
			if ( !(hash == 'all' || hash == null || hash == '')){
				if (hash == 'm'){
					$(this).children().children('.subtext').text('men');
					$('#c2').click();
				} else {
					$(this).children().children('.subtext').text('women');
					$('#c1').click();
				}
			}
			for (var i = 0; i < resp.length; i++){
				var curItem = resp[i];
				console.log(curItem);
				var curPage;
				var newArticle;
				var html = '';
				var gender = resp[i];

				//populate #viewshow
				if ( !(hash == 'all' || hash == null || hash == '') ){
					if (hash == 'm'){
						if (resp[i].category < 6){
							html += ('<div class="article m">');
						}else {
							html += ('<div class="article w" style="display:none;">')
						}
					} else if (hash == 'w' ) {
						if (resp[i].category >= 6){
							html += ('<div class="article w">');
						}else {
							html += ('<div class="article m" style="display:none;">')
						}
					}
				} else {
					if (resp[i].category >= 6){
						html += ('<div class="article w">');
					}else {
						html += ('<div class="article m" style="display:none;">')
					}
				}
				html += ('<div class="creditbox commonborder">');
				html += ('<div class="catImg">');
				html += ('<img src="/static/img/icons/e_market/' + reverseCat[curItem.category] + '.svg">')
				html += ('</div>');
				html += ('<div class="txtHold">');
				html += ('<center>');
				html += ('<h1 class="mediumtext">' + curItem.name + '</h1>');
				html += ('<h4 class="text">$' + curItem.price + '</h4>');
				html += ('<input class="subber" name="subber" type="hidden" value="' + curItem.category + '">');
				html += ('</center>');
				html += ('</div>');
				html += ('</div>');
				html += ('<div class="contentbox bottomborder">');
				html += ('<center>');
				html += ('<img class="prodimage" src="' + curItem.images[0].image.url + '" >');
				html += ('<div class="text contenttext">' + curItem.short_description);
				html += ('</div>');
				html += ('<p><a href="/mobile/emarket/individual/#' + curItem.id +'">read more -></a></p>');
				html += ('</div>');
				html += ('</center>');
				html += ('</div>');

				$('#products').append(html);

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
			var cateWord = $(this).children('.thold').children().children('.droptext').text();
    		var cate = categories[$(this).children('.thold').children().children('.droptext').text()];
			console.log(cate + 'from list');
			$('#currentdrop').text($(this).text());
			$('#imageDrop').empty();
			if (cate == 'all') {
				$('#imageDrop').append('<img width="50em" class="" src="/static/img/icons/head_white.png">')
			} else {
				$('#imageDrop').append('<img id="readimg" class="" src="/static/img/icons/e_market/' + cateWord + '_s.svg">')
			}
			$('.article').filter(function() {
				var curCate = $(this).children('.creditbox').children('.txtHold').children().children('.subber').val()
				console.log(curCate + 'from article');
				if (cate == 'all') { 
					$(this).show();
				} else if ( !(curCate == cate )){
					// console.log(cate)
					// console.log( curCate + ' vs ' + cate);
					$(this).hide();
				} else {
					$(this).show();
				}
			})
			$('#rain').click();
		});
	});
	/** scrollsub functionality **/
	$('.ico2').click(function() {
		var gen = $(this).children().children('.subtext').text();
		//make dom changes
		$('#currenttext').text(gen);
		if (gen == 'women'){
			$('#womenimg').removeClass('hidden');
			$('#c1').addClass('hidden');
			$('.w').show();

			$('#menimg').addClass('hidden');
			$('#c2').removeClass('hidden');
			$('.m').hide();
		} else {
			$('#womenimg').addClass('hidden');
			$('#c1').removeClass('hidden');
			$('.w').hide();

			$('#menimg').removeClass('hidden');
			$('#c2').addClass('hidden');
			$('.m').show();
		}
	})
}

$(document).ready(marketmain);

$(window).load(function() {
	if(window.location.hash) {
        hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        //alert (hash);
        // hash found
        console.log(hash);
      	if ( !(hash == null) ){
      		$('#m' + hash).click();
      	}
	}
})