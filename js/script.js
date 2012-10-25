
// On Dom ready,
$(function() {

	$('.closeAboutFull').click( function(){
		$('.aboutFull').toggleClass('collapsed');
		return false;
	});

	$('.expandCode a').click( function(){
		var tthis = $(this);
		var thePre = $(this).closest('p').prev('pre');
		if (thePre.hasClass('expanded')) {
			thePre.removeClass('expanded').width('auto').removeAttr('style');
			tthis.html('<i class="icon-caret-left"></i> expand <i class="icon-caret-right"></i>');
		} else {
			var windowWidth = $(window).width();
			var leftPos = thePre.position().left;
			thePre.addClass('expanded').width(windowWidth - 80).css('left', - leftPos + 20);
			tthis.html('<i class="icon-caret-right"></i> contract <i class="icon-caret-left"></i>');
		}
		return false;
	});

});


// On page load.
// $(window).load(function () {

// 	//js here

// });