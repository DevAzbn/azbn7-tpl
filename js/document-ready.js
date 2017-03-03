"use strict";function __fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w<992&&e.screen.w>767},e.isMD=function(){return e.screen.w<1200&&e.screen.w>991},e.isLG=function(){return e.screen.w>1199},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isLG()&&(n="lg"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}window.onerror=function(e,n,r,t,i){console.log("Error FECSS: "+n+":"+r+":"+t+": "+JSON.stringify(e)+"\n"+JSON.stringify(i))};var screenJS=new __fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery),$(function(){$(document.body).on("azbn7.init",null,{},function(e){$(document.body).attr("data-created_at",(new Date).getTime())}),$(document.body).on("changeClass",null,{},function(e,n){}),!function(){$.Azbn7&&($.Azbn7.mdl("fnc").include("/js/azbn7/mdl/api.mdl.js",function(){$.Azbn7.mdl("API").setConfig(JSON.parse($.Azbn7.body.attr("data-azbn7__mdl__api")||"{}"))}),$.Azbn7.mdl("fnc").include("/js/azbn7/mdl/codecache.mdl.js",function(){$.Azbn7.mdl("CodeCache").doUpdate(1e4)}))}(),!function(){var e="noname-browser",n=navigator.userAgent.toLowerCase();n.indexOf("msie")!=-1&&(e="msie"),n.indexOf("trident")!=-1&&(e="msie"),n.indexOf("konqueror")!=-1&&(e="konqueror"),n.indexOf("firefox")!=-1&&(e="firefox"),n.indexOf("safari")!=-1&&(e="safari"),n.indexOf("chrome")!=-1&&(e="chrome"),n.indexOf("chromium")!=-1&&(e="chromium"),n.indexOf("opera")!=-1&&(e="opera"),n.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}(),$(window).on("resize",function(e){}).trigger("resize"),$(window).on("scroll",function(e){}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("azbn7.window.unload",[e])},$(document.body).trigger("azbn7.init")});