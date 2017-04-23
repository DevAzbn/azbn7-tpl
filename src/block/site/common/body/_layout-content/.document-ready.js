
	
	$(document.body).on('click.azbn7.layout-content.content-menu-toggle', '.layout-content .content-menu-toggle', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var cont = btn.closest('.layout-content');
		var menu = cont.find('.content-menu');
		
		btn.toggleClass('_active');
		menu.toggleClass('_in-screen');
		
	});
	
