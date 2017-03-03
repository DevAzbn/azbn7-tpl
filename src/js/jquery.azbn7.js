'use strict';

if(jQuery) {
	
	(function($){
		
		var body = $(document.body);
		var defaults = {};
		
		var Azbn7Constructor = function(cfg) {
			
			var ctrl = this;
			
			ctrl.name = 'Azbn7 jQuery Framework';
			
			ctrl.body = body;
			
			ctrl.__mdl = {};
			ctrl.__argv = {};
			ctrl.__param = {};
			
			
			
			
			if(typeof cfg != 'object') {
				cfg = new Object();
			}
			
			ctrl.config = $.extend({}, {
				is_dev : true,
				prefix : 'azbn7',
				path : {
					root : '',
					js : '',
					css : '',
					img : '',
					fonts : '',
				}
			}, cfg);
			
			
			
			
			/* ---------- служебные ---------- */
			
			ctrl.randstr = function() {
				return (Math.random().toString(36).split('.'))[1];
			};
			
			ctrl.now = function() {
				return new Date().getTime();
			};
			
			ctrl.now_sec = function() {
				return Math.floor(ctrl.now() / 1000);
			};
			
			ctrl.ls = {
				set : function(id,value) {localStorage.setItem(ctrl.config.prefix + '.' + id,value);},
				get : function(id) {var item = localStorage.getItem(ctrl.config.prefix + '.' + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
				remove : function(id) {localStorage.removeItem(ctrl.config.prefix + '.' + id);},
				clear : function() {localStorage.clear();},
				obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
				s2obj : function(id) {var item = this.get(id);if(typeof item !== 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
			};
			
			ctrl.ss = {
				set : function(id,value) {sessionStorage.setItem(ctrl.config.prefix + '.' + id,value);},
				get : function(id) {var item = sessionStorage.getItem(ctrl.config.prefix + '.' + id);if(typeof item !== 'undefined' && item != null) {return item;} else {return null;}},
				remove : function(id) {sessionStorage.removeItem(ctrl.config.prefix + '.' + id);},
				clear : function() {sessionStorage.clear();},
				obj2s : function(id,obj2save) {this.set(id, JSON.stringify(obj2save));},
				s2obj : function(id) {var item = this.get(id);if(typeof item !== 'undefined' && item != null) {return JSON.parse(item);} else {return null;}},
			};
			
			ctrl.len = function(arr) {
				if(this.is_def(arr) && !this.is_null(arr)) {
					return arr.length;
				} else {
					return 0;
				}
			};
			
			ctrl.echo = function(text, prefix) {
				prefix = prefix || ctrl.name;
				console.log(prefix + ': ' + text);
			}
			
			ctrl.warn = function(text, prefix) {
				prefix = prefix || ctrl.name;
				console.warn(prefix + ': ' + text);
			}
			
			ctrl.is_def = function(v) {
				if(v == undefined || typeof v == "undefined") {
					return false;
				} else {
					return true;
				}
			};
			
			ctrl.is_null = function(v) {
				if(v == null) {
					return true;
				} else {
					return false;
				}
			};
			
			ctrl.is_func = function(functionToCheck) {
				var getType = {};
				return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
			};
			
			ctrl.sleep = function(milliSeconds) {
				milliSeconds = milliSeconds || 1;
				
				var startTime = this.now();
				while (this.now() < startTime + milliSeconds);
			};
			
			ctrl.needReload = function(need) {
				if(need) {
					window.location.reload();
				}
			};
			
			/* ---------- /служебные ---------- */
			
			
			/* --------- Параметры командной строки --------- */
			ctrl.parseArgv = function(prms, sym) {
				for (var i = 0; i < prms.length; i++) {
					var arr = prms[i].split(sym||"=");
					ctrl.__argv[arr[0]] = arr[1];
				}
			},
			
			ctrl.getArgv = function(name) {
				return ctrl.__argv[name];
			},
			/* --------- /Параметры командной строки --------- */
			
			
			
			/* --------- Модули --------- */
			ctrl.load = function(uid, mdl) {
				ctrl.__mdl[uid] = mdl;
				return ctrl;
			};
			
			ctrl.unload = function(name) {
				ctrl.__mdl[name] = null;
				delete ctrl.__mdl[name];
				return ctrl.is_def(ctrl.__mdl[name]);
			};
			
			ctrl.mdl = function(name) {
				return ctrl.__mdl[name];
			};
			/* --------- /Модули --------- */
			
			
			
			ctrl.load('fnc', {
				
				byTag : function(tag) {
					return document.getElementsByTagName(tag);
				},
				
				byId : function(id) {
					return document.getElementById(id);
				},
				
				include : function(url, cb){
					
					var script;
					
					script = document.createElement('script');
					
					if(cb) {
						script.onload = cb;
					}
					
					script.language = 'javascript';
					script.type = 'text/javascript';
					//script.setAttribute('data-url', url);
					script.setAttribute('class', 'azbn7__mdl__fnc__include');
					
					if(url.indexOf('http://') < 0 && url.indexOf('https://') < 0 && url.indexOf('//') != 0) {
						url = ctrl.config.path.root + url;
					}
					
					script.src = url;
					
					document.documentElement.appendChild(script);
					//document.createTextNode('azbn7 test');
				},
				
				script2head : function(url, cb){
					
					var head = document.getElementsByTagName('head')[0];
					
					if(!head) {
						//return;
					} else {
						
						var script = document.createElement('script');
						
						if(cb) {
							script.onload = cb;
						}
						
						script.language = 'javascript';
						script.type = 'text/javascript';
						//script.setAttribute('data-url', url);
						script.setAttribute('class', 'azbn7__mdl__fnc__script2head');
						script.src = url;
						
						head.appendChild(script);
						
					}
				},
				
				nl2br : function(str) {
					
					return str.replace(/([^>])\n/g, '$1<br/>');
					
				},
				
				tpl : function(str, tpls){
					
					var _str = str;
					
					for(var key in tpls) {
						_str = _str.replace(key, tpls[key]);
					}
					
					return _str;
					
				},
				
				stripTags : function(str){
					
					return str.replace(/<\/?[^>]+>/gi, '');
					
				},
				
				obj2param : function(obj){
					
					var param_str = '';
					
					for(var key in obj) {
						param_str = param_str+'&'+key+'='+obj[key];
					}
					
					return param_str;
					
				},
			});
			
			
			return ctrl;
			
		};
		
		
		var methods = {
			
			init : function(params){
				
				var options = $.extend({}, defaults, params);
				
				console.log(options);
				
				//return this;
			},
			
			widget : function(params){
				
				var el = $(this);
				
				var wgt_uid = $.Azbn7.randstr();
				var __class = $.Azbn7.config.prefix + '-widget-' + wgt_uid;
				
				el
					.addClass(__class)
				;
				
				body.on($.Azbn7.config.prefix + '.widget.getData', '.' + __class, {}, function(event, req_data, cb){
					event.preventDefault();
					
					$.Azbn7.api(req_data, cb);
					
				});
				
			},
			
		};
		
		
		$.fn.Azbn7 = function(method){
			
			/*
			if(typeof this === 'function') {
				// запущено для jQuery
			} else if(typeof this === 'object') {
				// запущено для объекта
			}
			*/
			
			if(methods[method]) {
				
				return methods[method].apply(this, Array.prototype.slice.call(arguments,1));
				
			} else if(typeof method === 'object' || !method) {
				
				return methods.init.apply(this, arguments);
				
			} else if(typeof method === 'function') {
				
				return method(this);
				
			} else {
				
				$.error('Метод ' + method + ' в плагине не найден!');
				
			}
			
		};
		
		
		
		$.Azbn7 = new Azbn7Constructor(JSON.parse(body.attr('data-azbn7') || '{}'));
		
		
	})(jQuery);
	
}