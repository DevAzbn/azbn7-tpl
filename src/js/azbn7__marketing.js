'use strict';

(function($){
	
	$(function(){
		
		var	_
			, yandex = null
			, google = null
		;
		
		var loadCounters = function() {
			
			if(!yandex || false) {
				
				for(var i in window) {
					if(i.toLowerCase().indexOf('yacounter') > -1) {
						yandex = window[i];
					}
				}
				
			}
			
			if(!google) {
				
				if(typeof ga != 'undefined') {
					google = ga;
				}
				
			}
			
		};
		
		loadCounters();
		
		var callTarget = function(uid, prm) {
			
			if(yandex && typeof yandex.reachGoal == 'function') {
				
				yandex.reachGoal(uid, (prm || {}));
				
			}
			
			if(google) {
				
				var uid_arr = uid.split('.');
				
				/*
				google('send', {
					'hitType': 'event',
					'eventCategory': uid_arr[0],
					'eventAction': uid_arr[1],
					'eventLabel': uid_arr[2],
					'eventValue': uid_arr[3] || prm || null,
				});
				*/
				
				google('send', 'event', uid_arr[0], uid_arr[1], uid_arr[2]);
				
			}
			
			console.debug('Azbn7 Marketing target: ' + uid);
			
		}
		
		$(document.body).on({
			
			'submit.azbn7' : function(event){
				//event.preventDefault();
				//event.stopPropagation();
				//event.stopImmediatePropagation()
				//event.target реальный источник события
				//event.delegateTarget = body
				//event.currentTarget = this
				//event.originalEvent js-событие
				//event.type тип события
				//event.pageX, event.pageY
				
				var element = $(this);
				var target = element.attr('data-marketing-target') || 'form.submit.default';
				
				loadCounters();
				
				callTarget(target);
				
			},
			
		}, 'form', null/*as event.data*/);
		
		/*
		
		*/
		
	})
	
})(jQuery);