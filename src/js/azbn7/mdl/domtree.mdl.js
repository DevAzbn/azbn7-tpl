(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.observer_config = {
					attributes : true,
					childList : true,
					characterData: true,
				};
				
				ctrl.__observers = {};
				
				ctrl.observe = function(element, cb){
					
					//var el = element.get(0);
					
					var uid = $.Azbn7.randstr();
					
					var observer = new MutationObserver(function(mutations) {
						mutations.forEach(cb /*function(mutation) {//console.log(mutation.type);}*/ );
					});
					
					observer.observe(element, ctrl.observer_config);
					
					ctrl.__observers[uid] = observer;
					
					return uid;
					
				};
				
				return ctrl;
				
			};
			
			$.Azbn7.load('DOMTree', new _());
			
		})();
		
	}
	
})(jQuery);