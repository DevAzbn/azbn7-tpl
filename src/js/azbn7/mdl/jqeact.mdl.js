(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function(){
				
				var ctrl = this;
				
				ctrl.name = 'jqeact';
				ctrl.uid = 'azbn7__mdl__jqeact';
				
				ctrl.templates = {};
				
				ctrl.loadtemplates = function(tpl_arr, cb) {
					
					if(tpl_arr.length) {
						
						tpl_arr.forEach(function(item, i, arr) {
							
							$.getJSON(item, function(data){
								
								ctrl.templates = $.extend({}, ctrl.templates, data);
								
								if((i == (tpl_arr.length - 1)) && cb && typeof cb == 'function') {
									cb();
								}
								
							});
							
						});
						
					}
					
				};
				
				ctrl.createFromObject = function(obj) {
					
					var el = $('<' + obj.tagName + '/>', obj.attrs);
					
					el
						.addClass(ctrl.uid + '__element')
					;
					
					if(obj.children && obj.children.length) {
						
						
						obj.children.forEach(function(item, i, arr) {
							/*
							var child_el = ctrl.createFromObject(ctrl.templates[item]);
							child_el.appendTo(el);
							*/
							
							var uid = item.uid || '';
							var attrs = item.attrs || {};
							var child_el = ctrl.createFromObject(ctrl.templates[uid]);
							for(var attr_k in attrs) {
								child_el.attr(attr_k, attrs[attr_k]);
							}
							child_el.appendTo(el);
							
						});
						
					}
					
					return el;
					
				};
				
				ctrl.create = function(tpl) {
					
					var res = null;
					
					if(ctrl.templates[tpl]) {
						res = ctrl.createFromObject(ctrl.templates[tpl]);
					}
					
					return res;
					
				};
				
				ctrl.render = function(cont, data, tpl_uid, clear) {
					
					if(cont.length) {
						
						cont
							.addClass(ctrl.uid + '__container')
						;
						
						if(clear) {
							cont.empty();
						}
						
						if(ctrl.templates[tpl_uid]) {
							
							var pre_el = ctrl.createFromObject(ctrl.templates[tpl_uid]);
							
							pre_el.appendTo(cont);
							
						}
						
					}
					
					return cont;
					
				};
				
				ctrl.parseLayout = function(cont) {
					
					cont.find('[data-' + ctrl.uid + '-root]').each(function(index){
						
						var el = $(this);
						var tpl_uid = el.attr('data-' + ctrl.uid + '-root') || '';
						
						ctrl.render(el, {}, tpl_uid, true);
						
					});
					
				}
				
				return ctrl;
				
			};
			
			$.Azbn7.load('jQeact', new _());
			
		})();
		
	}
	
})(jQuery);