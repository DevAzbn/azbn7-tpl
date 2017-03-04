"use strict";function __fecss_ScreenJS(){var t=this;t.screen={w:0,h:0,type:"xs",orientation:"portrait"},t.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},t.isXS=function(){return t.screen.w<768},t.isSM=function(){return t.screen.w<992&&t.screen.w>767},t.isMD=function(){return t.screen.w<1200&&t.screen.w>991},t.isLG=function(){return t.screen.w>1199},t.screenIs=function(){var n="noname";return t.isXS()?n="xs":t.isSM()?n="sm":t.isMD()?n="md":t.isLG()&&(n="lg"),n},t.isPortrait=function(){return t.screen.h>t.screen.w},t.isLandscape=function(){return t.screen.w>t.screen.h},t.orientationIs=function(){var n="noname";return t.isPortrait()?n="portrait":t.isLandscape()&&(n="landscape"),n},t.is=function(n){return n==t.screenIs()||n==t.orientationIs()},t.onResize=function(n,e){if(n.type){var a=t.__resizefunctions[n.type];n.orientation?a[n.orientation].push(e):a.default.push(e)}},t.resizeCall=function(n){if(n.type){if(t.__resizefunctions[n.type].default)for(var e=0;e<t.__resizefunctions[n.type].default.length;e++){var a=t.__resizefunctions[n.type].default[e];a(n)}if(t.__resizefunctions[n.type][n.orientation])for(var e=0;e<t.__resizefunctions[n.type][n.orientation].length;e++){var a=t.__resizefunctions[n.type][n.orientation][e];a(n)}}},t.setScreen=function(){return t.screen.w=$(window).outerWidth(!0),t.screen.h=$(window).outerHeight(!0),t.screen.type=t.screenIs(),t.screen.orientation=t.orientationIs(),t.resizeCall(t.screen),console.log(t.screen),t.screen}}window.onerror=function(t,n,e,a,r){console.log("Error FECSS: "+n+":"+e+":"+a+": "+JSON.stringify(t)+"\n"+JSON.stringify(r))};var screenJS=new __fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(t){var n=jQuery.fn.addClass,e=jQuery.fn.removeClass,a=jQuery.fn.toggleClass;t.fn.addClass=function(){var e=n.apply(this,arguments);return t(this).trigger("changeClass",["add"]),e},t.fn.removeClass=function(){var n=e.apply(this,arguments);return t(this).trigger("changeClass",["remove"]),n},t.fn.toggleClass=function(){var n=a.apply(this,arguments);return t(this).trigger("changeClass",["toggle"]),n}}(jQuery),$(function(){$(document.body).on("azbn7.init",null,{},function(t){$(document.body).attr("data-created_at",(new Date).getTime())}),$(document.body).on("changeClass",null,{},function(t,n){}),!function(){var t="noname-browser",n=navigator.userAgent.toLowerCase();n.indexOf("msie")!=-1&&(t="msie"),n.indexOf("trident")!=-1&&(t="msie"),n.indexOf("konqueror")!=-1&&(t="konqueror"),n.indexOf("firefox")!=-1&&(t="firefox"),n.indexOf("safari")!=-1&&(t="safari"),n.indexOf("chrome")!=-1&&(t="chrome"),n.indexOf("chromium")!=-1&&(t="chromium"),n.indexOf("opera")!=-1&&(t="opera"),n.indexOf("yabrowser")!=-1&&(t="yabrowser"),$("html").eq(0).addClass(t)}(),!function(){$.Azbn7&&($.Azbn7.mdl("fnc").include("/js/azbn7/mdl/api.mdl.js",function(){$.Azbn7.mdl("API").setConfig(JSON.parse($.Azbn7.body.attr("data-azbn7__mdl__api")||"{}"))}),$.Azbn7.mdl("fnc").include("/js/azbn7/mdl/codecache.mdl.js",function(){$.Azbn7.mdl("CodeCache").doUpdate(1e4)}),$.Azbn7.mdl("fnc").include("/js/azbn7/mdl/domtree.mdl.js",function(){$.Azbn7.mdl("DOMTree").startSpy($.Azbn7.body,{attributes:!0,childList:!0,characterData:!0},function(t){console.log(t)})}),$.Azbn7.mdl("fnc").include("/js/azbn7/mdl/cart.mdl.js",function(){$.Azbn7.body.find(".azbn7-cart").trigger("azbn7.mdl.cart.calculation")}))}(),!function(){$.Azbn7.body.on("azbn7.mdl.cart.calculation",".azbn7-cart",{},function(t,n,e){t.preventDefault();var a=$(this);$.Azbn7.mdl("Cart").calculation();var r="";n&&(r=r+'[data-cart-id="'+n+'"]'),e&&(r=r+'[data-cart-variant="'+e+'"]'),a.find(".items .item"+r).each(function(t){var n=$(this),e=n.attr("data-cart-id"),a=n.attr("data-cart-variant");if($.Azbn7.mdl("Cart").data.cart[e]&&$.Azbn7.mdl("Cart").data.cart[e][a]){var r=$.Azbn7.mdl("Cart").data.cart[e][a];n.find(".cart-qty.item-qty").html(parseFloat(r.qty))}else n.find(".cart-qty.item-qty").html(0)}),a.find(".cart-calculation-to_pay").html($.Azbn7.mdl("Cart").data.calculation.to_pay)}),$.Azbn7.body.on("click.azbn7.mdl.cart.add",".cart-btn.item-add",{},function(t){t.preventDefault();var n=$(this),e=n.closest(".item"),a=e.attr("data-cart-id"),r=e.attr("data-cart-variant");$.Azbn7.mdl("Cart").add(a,r,n.attr("data-cart-qty"),e.attr("data-cart-price"),e.attr("data-cart-discount")),e.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[a,r])}),$.Azbn7.body.on("click.azbn7.mdl.cart.remove",".cart-btn.item-remove",{},function(t){t.preventDefault();var n=$(this),e=n.closest(".item"),a=e.attr("data-cart-id"),r=e.attr("data-cart-variant");$.Azbn7.mdl("Cart").remove(a,r,n.attr("data-cart-qty"),e.attr("data-cart-price"),e.attr("data-cart-discount")),e.closest(".azbn7-cart").trigger("azbn7.mdl.cart.calculation",[a,r])})}(),$(window).on("resize",function(t){}).trigger("resize"),$(window).on("scroll",function(t){}).trigger("scroll"),window.onbeforeunload=function(t){$("body").trigger("azbn7.window.unload",[t])},$(document.body).trigger("azbn7.init")});