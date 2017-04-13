(function($){
	
	if($.Azbn7) {
		
		(function(){
			
			var _ = function() {
				
				var ctrl = this;
				
				ctrl.screen = {
					w : 0,
					h : 0,
					type : 'xs',//sm,md,dl,lg
					orientation : 'portrait',//landscape
				};
				
				ctrl.__resizefunctions = {
					'xs' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'sm' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'md' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'dl' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
					'lg' : {
						'default' : [],
						'portrait' : [],
						'landscape' : [],
					},
				};
				
				ctrl.isXS = function() {
					return (ctrl.screen.w < 768);
				};
				
				ctrl.isSM = function() {
					return (ctrl.screen.w < 992 && ctrl.screen.w > 767);
				};
				
				ctrl.isMD = function() {
					return (ctrl.screen.w < 1200 && ctrl.screen.w > 991);
				};
				
				ctrl.isDL = function() {
					return (ctrl.screen.w < 1441 && ctrl.screen.w > 1199);
				};
				
				ctrl.isLG = function() {
					return (ctrl.screen.w > 1440);
				};
				
				ctrl.isMax = function(w) {
					return ctrl.screen.w > w ? false : true;
				}
				
				ctrl.isMin = function(w) {
					//console.log(ctrl.screen.w);
					return ctrl.screen.w < w ? false : true;
				}
				
				ctrl.screenIs = function() {
					var result = 'noname';
					if(ctrl.isXS()) {
						result = 'xs';
					} else
					if(ctrl.isSM()) {
						result = 'sm';
					} else
					if(ctrl.isMD()) {
						result = 'md';
					} else
					if(ctrl.isDL()) {
						result = 'dl';
					} else
					if(ctrl.isLG()) {
						result = 'lg';
					}
					return result;
				};
				
				
				
				ctrl.isPortrait = function() {
					return (ctrl.screen.h > ctrl.screen.w);
				};
				
				ctrl.isLandscape = function() {
					return (ctrl.screen.w > ctrl.screen.h);
				};
				
				ctrl.orientationIs = function() {
					var result = 'noname';
					if(ctrl.isPortrait()) {
						result = 'portrait';
					} else
					if(ctrl.isLandscape()) {
						result = 'landscape';
					}
					return result;
				};
				
				ctrl.is = function(str) {
					return (str == ctrl.screenIs() || str == ctrl.orientationIs());
				};
				
				ctrl.onResize = function(scr, fnc) {
					if(scr.type) {
						var type = ctrl.__resizefunctions[scr.type];
						
						if(scr.orientation) {
							type[scr.orientation].push(fnc);
						} else {
							type.default.push(fnc);
						}
					}
				}
				
				ctrl.resizeCall = function(scr) {
					if(scr.type) {
						if(ctrl.__resizefunctions[scr.type].default) {
							for(var i = 0; i < ctrl.__resizefunctions[scr.type].default.length; i++) {
								var fnc = ctrl.__resizefunctions[scr.type].default[i];
								fnc(scr);
							}
						}
						if(ctrl.__resizefunctions[scr.type][scr.orientation]) {
							for(var i = 0; i < ctrl.__resizefunctions[scr.type][scr.orientation].length; i++) {
								var fnc = ctrl.__resizefunctions[scr.type][scr.orientation][i];
								fnc(scr);
							}
						}
					}
				}
				
				ctrl.setScreen = function() {
					var w = window,
						d = document,
						e = d.documentElement,
						g = d.getElementsByTagName('body')[0],
						x = w.innerWidth || e.clientWidth || g.clientWidth,
						y = w.innerHeight|| e.clientHeight|| g.clientHeight;
					
					ctrl.screen.w = x;
					ctrl.screen.h = y;
					
					//ctrl.screen.w = $(window).outerWidth(true);
					//ctrl.screen.h = $(window).outerHeight(true);
					ctrl.screen.type = ctrl.screenIs();
					ctrl.screen.orientation = ctrl.orientationIs();
					
					ctrl.resizeCall(ctrl.screen);
					console.log(ctrl.screen);
					
					return ctrl.screen;
				};
				
				return ctrl;
				
			};
			
			$.Azbn7.load('Screen', new _());
			
			$(window).on('resize', function(){
				$.Azbn7.mdl('Screen').setScreen();
			});
			
		})();
		
	}
	
})(jQuery);