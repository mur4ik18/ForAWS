var mainmaster = function () {

	$('#ham').click(function(){
		if ($('#menu').hasClass('open')){
			$('#menu').animate({
				left: "-350px"
			}, 250)
		} else {
			$('#menu').animate({
				left: "0px"
			}, 250)
		}
		$(this).toggleClass('open');
	})

	$('#closer').click(function() {
		$('#menu').animate({
			left: "-350px"
		}, 250)
	})

	$('.ico').click(function(){
		var current;
		var curCircle = $('#scrollbar').children('.hidden');
		var nexCircle = $(this);
		var nexText = nexCircle.children().children().children('.maru').text();
		var nexSubText = nexCircle.children().children().children('.subtext2').text();
		var slideNum = nexText;
		//iter through forms and find current slide
		$('#slideshow').children('#forms').children().each(function( index ){
			if (!$(this).hasClass('hidden')) {
				current = $(this);
			}
		});
		//hide elements
		current.addClass('hidden');
		nexCircle.addClass('hidden');
		//assign new values
		$('#current').text(nexText + ' ' + nexSubText);
		curCircle.removeClass('hidden');
		$('#' + slideNum).removeClass('hidden');

	});

	//custom dropdown functionality
	var currentDrop;
	$('#drop').click(function(){
		$('#options').show();
	})

	$('.selectable').click(function() {
		if (!currentDrop == undefined){
			currentDrop.show();
		}
		var name = $(this).children('.name').text();
		$('.curname').text(name);
		currentDrop = $(this);
		$(this).hide();
		$('#drop').hide();
	})
};

$(document).ready(mainmaster);