
(function(){
	
	if($.Azbn7) {
		
		$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/api.mdl.js', function(){
			
			
			
			$.Azbn7.mdl('API').setConfig(JSON.parse($.Azbn7.body.attr('data-azbn7__mdl__api') || '{}'));
			
			
			/*
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/profile.mdl.js', function(){
				
				//$.Azbn7.mdl('Profile').is(function(data){console.log(data);});
				
			});
			
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/user.mdl.js', function(){
				
				//$.Azbn7.mdl('Profile').is(function(data){console.log(data);});
				
			});
			*/
			
			
			$.Azbn7.mdl('fnc').include('/js/azbn7/mdl/codecache.mdl.js', function(){
				
				$.Azbn7.mdl('CodeCache').doUpdate(10 * 1000);
				
				$.Azbn7.mdl('CodeCache').load({
					tag : 'script',
					uid : 'codecache.js.test',
					url : '/js/azbn7/test.js',
					expires_in : 900,
				}, function(element){
					element
						.appendTo($.Azbn7.body)
						//.empty()
						//.remove()
					;
				});
				
			});
			
			
			
		});
		
	}
	
})();
