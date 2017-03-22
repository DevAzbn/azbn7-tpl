
$(document.body).on('azbn7.init', null, {}, function(event) {
	
	$(document.body).attr('data-created_at', new Date().getTime());
	
});

/*
$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
	
	var diff = (-event.originalEvent.deltaY) || event.originalEvent.detail || event.originalEvent.wheelDelta;
	
});
*/