
(function(){
	
	var block = $.Azbn7.body.find('.layout-content');
	
	if(block.length) {
		
		var _header = $('.layout-header');
		var _footer = $('.layout-footer');
		
		block.css({
			'min-height' : ($(window).outerHeight(true) - _header.outerHeight(true) - _footer.outerHeight(true)) + 'px',
		})
		
	}
	
})();
