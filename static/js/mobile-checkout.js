var addr = 'http://localhost:8000/'
var orderUrl = 'api/orders/'
var itemUrl = 'items/'
var curUrl = 'current/'
var userUrl = 'api/users/auth/'
var submittingUrl = 'submit/?id='
var orderID = '';
var checkoutmain = function() {
	var csrf = $('#csrf').val();

	function getCookie() {
		var name = 'csrftoken';
	    if (document.cookie.length > 0) {
	        c_start = document.cookie.indexOf(name + "=");
	        if (c_start != -1) {
	            c_start = c_start + name.length + 1;
	            c_end = document.cookie.indexOf(";", c_start);
	            if (c_end == -1) c_end = document.cookie.length;
	            return unescape(document.cookie.substring(c_start,c_end));
	        }
	    }
	    return "";
	 }

	 if (getCookie() != '') {
	 	csrf = getCookie();
	 }

	$(function () {
	    $.ajaxSetup({
	        headers: { "X-CSRFToken": csrf }
	    });
	});
	function getData() {
		$.ajax({
			url: addr + orderUrl + curUrl,
			success: function(res) {
				spit(res);
			}
		})
		//spit out data
		function spit(resp){
			//example response
			// {
			//     "id": 256,
			//     "user": 11,
			//     "submitted": false,
			//     "submit_date": null,
			//     "items": [],
			//     "subtotal": 0.0,
			//     "total": 0.0,
			//     "voucher": null,
			//     "discount": 0,
			//     "tax": 0.0,
			//     "shipping": 0.0,
			//     "shipping_full_name": "first last",
			//     "shipping_address": "place",
			//     "shipping_city": "someplace",
			//     "shipping_state": "someplace",
			//     "shipping_zip": "33188",
			//     "shipping_country": "33188",
			//     "shipping_method": "USPS Ground Shipping : FREE",
			//     "bill_as_shipping": false,
			//     "billing_full_name": "first last",
			//     "billing_address": "place",
			//     "billing_city": "someplace",
			//     "billing_state": "someplace",
			//     "billing_zip": "33188",
			//     "billing_country": "33188",
			//     "updated": "2016-06-15T13:45:48",
			//     "created": "2016-06-15T12:36:43"
			// }
			orderID = resp.id;
			$('#txt_name').val(resp.shipping_full_name);
			$('#txt_address').val(resp.shipping_address);
			$('#txt_city').val(resp.shipping_city);
			$('#txt_state').val(resp.shipping_state);
			$('#txt_zip').val(resp.shipping_zip);
			$('#txt_country').val(resp.shipping_country);
			$('#drp_shipping').val(resp.shipping_method);
			$('#txt_cardname').val(resp.billing_full_name);
			$('#txt_cardaddress').val(resp.billing_address);
			$('#txt_cardcity').val(resp.billing_city);
			$('#txt_cardstate').val(resp.billing_state);
			$('#txt_cardzip').val(resp.billing_zip);
			$('#txt_country').val(resp.billing_country);
			$('#total').text(resp.total);
			$('#tax').text(resp.tax);
			$('#shipping').text(resp.shipping_method);
			//populate images
			function popCartView(){
				var currentItem = '';
				var chkHtml = '';
				var cartTotal = 0;
				if (resp.items.length > 0){
					for (var i = 0; i < resp.items.length; i++){
						currentItem = resp.items[i];
						cartTotal += parseInt(currentItem.price);
						if (i == 0){
							chkHtml += '<div id="v' + i + '" class="cartViewPanel">'
						} else {
							chkHtml += '<div id="v' + i + '" style="display:none;" class="cartViewPanel">'
						}
						chkHtml += '<div class="chkImageHold" style="float:left;" class="viewimage">' +
						'<img class="checkimage" height="250px" src="' + currentItem.stock.image.url + '">' +
						'</div>' +
						'<div style="float:right;" class="viewinfo">' +
						'<h3 id="itemName">' + currentItem.product.name + '</h3>' +
						'<h3 id="itemColor">color: var:color</h3>' +
						'<h3 id="itemQnty">qty: ' + currentItem.quantity + '</h3>' +
						'<h3 id="itemPrice">' + currentItem.price + '</h3>'+
						'<h2 class="rmItem">remove item</h2>' +
						'</div>' +
						'<input class="itemId" type="hidden" value="' + currentItem.id + '">' +
						'<br>' +
						'</div>';
					}
					$('#cartViewer').empty();
					$('#cartViewer').append(chkHtml);
				}
				$('#total').text(cartTotal);
			}
			popCartView();
		}
	}

	$('.rn').click(function(){
		$(this).addClass('selected');
	})

	//submit billing info
	function login() {
		var supersuc = false;
		var loginData;
		if ($('#ret').hasClass('selected')) {
			loginData = {
				email: $('#txt_email').val(),
				password: $('#txt_password').val()
			}
		} else if ($('#new').hasClass('selected')) {
			loginData = {
			    email: "",
			    phone: "",
			    password: "",
			    is_active: false,
			    shipping_full_name: "",
			    shipping_address: "",
			    shipping_city: "",
			    shipping_state: "",
			    shipping_zip: "",
			    shipping_country: "",
			    billing_full_name: "",
			    billing_address: "",
			    billing_city: "",
			    billing_state: "",
			    billing_zip: "",
			    billing_country: ""
			}
		}
		$(function () {
		    $.ajaxSetup({
		        headers: { "X-CSRFToken": csrf }
		    });
		});
		if (loginData != undefined){
			$.ajax({
				method: 'POST',
				url: addr + userUrl,
				data: loginData,
				success: function(){
					getData();
					var curSlide = $('#1');
					var nexSlide = curSlide.next();
					var curCircle = $('#scrollbar').children('.hidden')
					var nexCircle = curCircle.next();
					
					if (nexSlide.length > 0) {
						if (!curSlide.hasClass('hidden')){
							curSlide.addClass('hidden');
						}
						curCircle.removeClass('hidden');
						$('#current').text(nexCircle.children().children().children('.maru').text() + ' ' + nexCircle.children().children().children('.subtext2').text());
						nexCircle.addClass('hidden');
						nexSlide.removeClass('hidden');
						nexSlide.addClass('shown');
					}
				}
			})
			.fail(function() {
				supersuc = false;
			})
		} else {
			alert('Please select if you are returning or new, in order to checkout!');
		}
	}
	$('#cont1').click(function(){
		login();
	});
	// checkout scroller functionality
	$('.continue').click(function() {
		var curSlide = $(this).parent();
		var nexSlide = curSlide.next();
		var curCircle = $('#scrollbar').children('.hidden')
		var nexCircle = curCircle.next();
		
		if (nexSlide.length > 0) {
			if (!curSlide.hasClass('hidden')){
				curSlide.addClass('hidden');
			}
			curCircle.removeClass('hidden');
			$('#current').text(nexCircle.children().children().children('.maru').text() + ' ' + nexCircle.children().children().children('.subtext2').text());
			nexCircle.addClass('hidden');
			nexSlide.removeClass('hidden');
			nexSlide.addClass('shown');
		}
	});

	function submitData(){
		var formattedData = {
			shipping_full_name: $('#txt_name').val(),
			shipping_address: $('#txt_address').val(),
			shipping_city: $('#txt_city').val(),
			shipping_state: $('#txt_state').val(),
			shipping_zip: $('#txt_zip').val(),
			shipping_country: $('#txt_country').val(),
			shipping_method: $('#drp_shipping').val(),
			bill_as_shipping: $("#isAgeSelected").is(':checked'),
			billing_full_name: $('#txt_cardname').val(),
			billing_address: $('#txt_cadaddress').val(),
			billing_city: $('#txt_cardcity').val(),
			billing_state: $('#txt_cardstate').val(),
			billing_zip: $('#txt_cardzip').val(),
			billing_country: $('#txt_cardcountry').val(),
			card_month: $('#txt_cardmonth').val(),
			card_year: $('#txt_cardyear').val(),
			card_number: $('#txt_cardnumber').val(),
			card_cvv: $('#txt_cardcvv').val()
		}
		$(function () {
			if (getCookie() != '') {
	 			csrf = getCookie();
	 		}
		    $.ajaxSetup({
		        headers: { "X-CSRFToken": csrf }
		    });
		});
		$.ajax({
			method: 'POST',
			data: formattedData,
			url: addr + orderUrl + submittingUrl + orderID,
			success: function(res) {
				takeOver();
			}
		})
			.done(function(){
				takeOver();
			})
		//redirect users if order is complete
		function takeOver(){
			window.location.href = "/mobile/thankyou/";
		}
	}

	$('#chk_same_addr').click(function() {
	  	if ($(this).is(':checked')) {
	    	$('#txt_cardaddress').val($('#txt_address').val());
	    	$('#txt_cardcity').val($('#txt_city').val());
	    	$('#txt_cardstate').val($('#txt_state').val());
	    	$('#txt_cardzip').val($('#txt_zip').val());
	    	$('#txt_cardcountry').val($('#txt_country').val());
		} else {
			$('#txt_cardaddress').val('');
			$('#txt_cardcity').val('');
			$('#txt_cardstate').val('');
			$('#txt_cardzip').val('');
			$('#txt_cardcountry').val('');
		}
	});

	$('#checkoutbtn').click(function(){
		submitData();
	})

	$('.arrow').click(function(){
		if ($(this).attr('id') == 'upArrow'){
			if ($('#cartViewer').children(':visible').prev().length > 0){
				curPanel = $('#cartViewer').children(':visible');
				nexPanel = $('#cartViewer').children(':visible').prev();
				curPanel.hide();
				nexPanel.show();
			}
		} else {
			if ($('#cartViewer').children(':visible').next().length > 0){
				curPanel = $('#cartViewer').children(':visible');
				nexPanel = $('#cartViewer').children(':visible').next();
				curPanel.hide();
				nexPanel.show();
			}
		}
	})
	$('#cartViewer').on('click', '.rmItem', function(){
		var toDelPanel = $(this).parent().parent()
		var toDel = toDelPanel.children('.itemId').val();
		function delItem(){
			if ($('#cartViewer').children(':visible').prev().length > 0){
				curPanel = $('#cartViewer').children(':visible');
				nexPanel = $('#cartViewer').children(':visible').prev();
				curPanel.hide();
				nexPanel.show();
			} else if ($('#cartViewer').children(':visible').next().length > 0){
				curPanel = $('#cartViewer').children(':visible');
				nexPanel = $('#cartViewer').children(':visible').next();
				curPanel.hide();
				nexPanel.show();
			} else {
				$('#cartViewer').append('<p>Nothing in cart</p>')
			}
			$('#total').text(parseInt($('#total').text()) - parseInt(toDelPanel.children('.viewinfo').children('#itemPrice')));
			toDelPanel.remove();
		}
		$(function () {
			if (getCookie() != '') {
	 			csrf = getCookie();
	 		}
		    $.ajaxSetup({
		        headers: { "X-CSRFToken": csrf }
		    });
		});
		$.ajax({
			method: 'DELETE',
			url: addr + orderUrl + itemUrl + toDel + '/',
			success: function(res) {
				delItem();
			}
		})
	})
	/** water dropdown **/
	$('#rainCountry').click(function(){
		if ($('#pondCtry:visible').length == 0){
			$('#pondCtry').slideDown(600);
		} else {
			$('#pondCtry').slideUp(600);
		}
		$('#ctryResidents').on('click', 'tr', function(){
    		$('#ctrycurrentdrop').text($(this).children('.thold').children().children().text())
    		$('#txt_country').val($('#ctrycurrentdrop').text());

			$('#rainCountry').click();
		});
	});

	$('#rainShip').click(function(){
		if ($('#pondShip:visible').length == 0){
			$('#pondShip').slideDown(600);
		} else {
			$('#pondShip').slideUp(600);
		}
		$('#shipResidents').on('click', 'tr', function(){
    		$('#shipcurrentdrop').text($(this).children('.thold').children().children().text())
    		$('#drp_shipping').val($('#shipcurrentdrop').text());

			$('#rainShip').click();
		});
	});
}

$(document).ready(checkoutmain);