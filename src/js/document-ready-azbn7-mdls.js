'use strict';

//jQuery(function(){
	
	(function($){
		
		if($.Azbn7) {
			
			/*
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/screen.mdl.js', function(){
				
				$.Azbn7.mdl('Screen').setScreen();
				
			});
			*/
			
			/*
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/api.mdl.js', function(){
				
				$.Azbn7.mdl('API').setConfig(JSON.parse($.Azbn7.body.attr('data-azbn7__mdl__api') || '{}'));
				
			});
			*/
			
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/codecache.mdl.js', function(){
				
				$.Azbn7.mdl('CodeCache').doUpdate(10 * 1000);
				
			});
			
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/jqeact.mdl.js', function(){
				
				$.Azbn7.mdl('jQeact').loadtemplates([
					'/json/azbn7/jqeact/tpl0001.json',
					'/json/azbn7/jqeact/tpl0001.svg.json',
				], function(){
					
					$.Azbn7.mdl('jQeact').parseLayout($.Azbn7.body);
					
				});
				
			});
			
		}
		
	})(jQuery);
	
//});
