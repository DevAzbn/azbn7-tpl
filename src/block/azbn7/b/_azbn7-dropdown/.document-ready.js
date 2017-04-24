
(function(){
	
	var block = $.Azbn7.body.find('.azbn7-dropdown');
	
	if(block.length) {
		
		$.Azbn7.body.on('click.azbn7.dropdown.toggle', '.azbn7-dropdown .azbn7-dropdown__toggle', {}, function(event){
			event.preventDefault();
			
			$(this).closest('.azbn7-dropdown').toggleClass('_active');
			
		});
		
	}
	
})();
