"use strict";!function(n){n(function(){var e=null,t=null,a=function(){if(!e)for(var n in window)n.toLowerCase().indexOf("yacounter")>-1&&(e=window[n]);t||"undefined"!=typeof ga&&(t=ga)};a();var o=function(n,a){if(e&&"function"==typeof e.reachGoal&&e.reachGoal(n,a||{}),t){var o=n.split(".");t("send",{hitType:"event",eventCategory:o[0],eventAction:o[1],eventLabel:o[2],eventValue:o[3]})}console.debug("Azbn7 Marketing target: "+n)};n(document.body).on({"submit.azbn7":function(e){var t=n(this),i=t.attr("data-marketing-target")||"form.submit.default";a(),o(i)}},"form",null)})}(jQuery);