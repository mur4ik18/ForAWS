var hash = '';

var indimain = function() {
	var addr = "http://localhost:8000/";
	var item = "api/products/";

	var currently = '';
	var imgcycle = [];

	var stocks = [];
	var colorHtml = '';
	var sizeHtml = '';

	var csrf = $('#csrf').val();

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});

	function getData() {
		$.ajax({
			url: addr + item,
			success: function(res) {
				spit(res)
			}
		})
		//spit out data
		function spit(resp){
			var others = [];
			for (var i = 0; i < resp.length; i++) {
				if (resp[i].id == hash) {
					currently = resp[i];
					//console.log(currently);
				} else {
					if (others.length < 3) {
						others.push(resp[i]);
					}
				}
			}
			//empty the elements
			$('#title').empty();
			$('#short').empty();
			$('#media').empty();
			$('#description').empty();
			$('#tags').empty();
			$('.toEmpty').empty();

			//fill the elements
			$('#title').text(currently.name);
			$('#price').text('$' + currently.price);
			$('#short').text(currently.short_description);
			$('#media').append(currently.content);
			$('#description').append(currently.description);

			//fill essential data

			imgcycle = currently.images;
			stocks = currently.stocks;

			//fill the selector holders
			var colors = [];
			for (var i = 0; i < stocks.length; i++) {
				if (colors.indexOf(stocks[i].color.name) < 0){
					colors.push(stocks[i].color.name);
					colorHtml += '<li class="ico2">'+
						'<div class="maru2">'+
							'<center>' +
								'<h1 class="color">' + stocks[i].color.name + '</h1>' +
							'</center>'+
						'</div>' +
					'</li>';
					imgcycle.push(stocks[i]);
				}

				sizeHtml += '<li class="ico2">' +
					'<div class="maru2">' +
						'<h1 class="size">' + stocks[i].size.name + '</h1>' +
					'</div>' +
				'</li>';
			}
			$('#colorsholder').append(colorHtml);
			$('#sizesholder').append(sizeHtml);

			//populate immage slide
			$('#imgslider').append('<li><img id="0" class="curimg" img height="800" src="' + currently.images[0].image.url + '"></li>');
			for (var i = 1; i < imgcycle.length; i++){
				$('#imgslider').append('<li><img id="'+ i +'" height="800" style="display:none;" src="' + imgcycle[i].image.url + '"></li>');
			}

			function tagup() {
				var tagArr = currently.tags;
				var tagHtml = '';
				if ( !(tagArr == undefined)){
					for (var i = 0; i < tagArr.length; i++){
						tagHtml += '<li class="text purplefont"> #' + tagArr[i] + ' </li>';
						if (!tagArr[i + 1] == null){
							tagHtml += '<li class="text purplefont"> | </li>';
						}
					}
					$('#tags').append(tagHtml);
				}
			}
			tagup();

			//add other items
			function otherItems(){
				if (others.length > 0){
					var recentHtml = '';
					for (var i = 0; i < 3; i++){
						var cur = others[i];
						recentHtml += '<td>' +
						'<center>' +
							'<a class="goto" href="#' + cur.id + '">' +
								'<div class="imageholding recentitem">' +
									'<img width="300em" height="400em" src="' + cur.images[0].image.url + '">' +
									'<div class="recinfo gray-bg">' +
										'<h3 class="mediumtext bold">' + cur.name + '</h3>' +
										'<h4 class="mediumtext">' + cur.price + '</h4>' +
									'</div>' +
								'</div>' +
							'</a>' +
						'</center>' +
					'</td>'
					}
					$('#recentrow').append(recentHtml);
				}
			}
			otherItems();
		}
	}
	getData();

	//recent redirect
	$('#recentrow').on('click', 'a', function(){
		location.reload(false);
	});

	function sizeCheck(){
		if (imgcycle.length <= 0){
			return false;	
		}

		return true;
	}
	$('#dirright').click(function() {
		curid = $('.curimg').attr('id');
		if (sizeCheck()){
			$('.curimg').removeClass('curimg').hide();
			if ( curid < imgcycle.length - 1 ) {
				var newId = parseInt(curid) + 1;
				$('#' + newId).addClass('curimg')
				$('#' + newId).show();
			} else {
				$('#0').addClass('curimg')
				$('#0').show();
			}
		}
	})

	$('#dirleft').click(function() {
		curid = $('.curimg').attr('id');
		if (sizeCheck()){
			$('.curimg').removeClass('curimg').hide();
			if ( curid > 0 ) {
				var newId = parseInt(curid) - 1;
				$('#' + newId).addClass('curimg');
				$('#' + newId).show();
			} else {
				$('#' + (imgcycle.length - 1)).addClass('curimg');
				$('#' + (imgcycle.length - 1)).show();
			}
		}
	})

	var curIdea = {
		prodNum: '',
		stockNum: '',
		stock: 0,
		color: 'any',
		size: 'any'
	}

	function findStocks() {
		var amount = 0;
		for (var i = 0; i < stocks.length; i++){
			var curStock = stocks[i];
			if ((curIdea.color == 'any') && (curIdea.size == 'any')){
				amount += curStock.quantity;
			} else if (curIdea.color == 'any') {
				if (curStock.size.name == curIdea.size){
					amount += curStock.quantity;
					curIdea.stockNum = '';
				}
			} else if (curIdea.size == 'any') {
				if (curStock.color.name == curIdea.color) {
					amount += curStock.quantity;
					curIdea.stockNum = '';
				}
			} else {
				if ((curStock.color.name == curIdea.color) && (curStock.size.name == curIdea.size)){
					amount = curStock.quantity;
					curIdea.prodNum = hash;
					curIdea.stockNum = curStock.id;
				}
			}
		}
		curIdea.stock = amount;
	}

	// function setColorPicture(){
	// 	curid = $('.curimg').attr('id');
	// 	$('.curimg').removeClass('curimg').hide();
	// 	if ( curid > 0 ) {
	// 		var newId = parseInt(curid) - 1;
	// 		$('#' + newId).addClass('curimg');
	// 		$('#' + newId).show();
	// 	} else {
	// 		$('#' + (imgcycle.length - 1)).addClass('curimg');
	// 		$('#' + (imgcycle.length - 1)).show();
	// 	}
	// }

	$('#colorsholder').on('click', 'li', function(){
		$('#colorsholder').children().children('.sc').removeClass('sc');
		$(this).children().addClass('sc');
		curIdea.color = $(this).children().children().children().text();
		//setColorPicture();
		findStocks();
		setAmount();
		console.log(curIdea);
	})

	$('#sizesholder').on('click', 'li', function(){
		$('#sizesholder').children().children('.ss').removeClass('ss');
		$(this).children().addClass('ss');
		curIdea.size = $(this).children().children().text();
		findStocks();
		setAmount();
		console.log(curIdea);
	})

	function setAmount(){
		$('#max').text(curIdea.stock)
		if (parseInt($('#qtyamnt').text()) > curIdea.stock) {
			$('#qtyamnt').text(curIdea.stock);
		}
	}

	$('#up').click(function(){
		var curAmnt = parseInt($('#qtyamnt').text())
		if ( curAmnt < curIdea.stock ) {
			$('#qtyamnt').text(curAmnt + 1)
		}
	})

	$('#down').click(function(){
		var curAmnt = parseInt($('#qtyamnt').text())
		if ( curAmnt > 0 ) {
			$('#qtyamnt').text(curAmnt - 1)
		}
	})
	$('#cartadd').click(function(){
		var curAmnt = parseInt($('#qtyamnt').text())
		function valid(){		
			if (curIdea.stockNum == '' || curAmnt <= 0){
				$('#error').slideDown(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
				return false;
			}
			$('#error').slideUp(100);
			return true;
		}
		var prodObject = {
			product: curIdea.prodNum,
			quantity: curAmnt,
			stock: curIdea.stockNum
		}
		if (valid()){
			$.ajax({
				method: 'POST',
				url: addr + 'api/orders/items/add/',
				data: prodObject,
				success: function(res){
					$('#added').slideDown(300);
				}
			})
		}
	})
}

$(document).ready(indimain);

$(window).load(function() {
	if(window.location.hash) {
		//Puts hash in variable, and removes the # character
		hash = window.location.hash.substring(1);
	}
});