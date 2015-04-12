/*
    Makes an Android looking toast message that fades out after 4 seconds
    Requires JQuery
    Usage:
    makeToast('Something Happened!!');
    jq writes div with style inline
*/
"use strict";


/* for Mozilla/Opera9 */
if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
  document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
  var script = document.getElementById("__ie_onload");
  script.onreadystatechange = function() {
    if (this.readyState == "complete") {
      init(); // call the onload handler
    }
  };
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
  var _timer = setInterval(function() {
    if (/loaded|complete/.test(document.readyState)) {
      init(); // call the onload handler
    }
  }, 10);
}

/* for other browsers */
window.onload = init;
function init(){
    var toastHTML = '<div class="toast" style="display:none;cursor:pointer; min-width:200px; max-width:500px; height:20px; height:auto; position:fixed; left: 0; right: 0; margin:auto; bottom:10px; background-color: #383838; color: #F0F0F0; font-family: Calibri; font-size: 20px; padding:10px; text-align:center; border-radius: 4px; opacity: 0.8; filter: Alpha(opacity=80); /* IE8 and earlier */ -webkit-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1), 0px 0px 24px 10px rgba(200, 200, 200, 0.8); -moz-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1), 0px 0px 24px 10px rgba(200, 200, 200, 0.8); box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1), 0px 0px 24px 10px rgba(200, 200, 200, 0.8);"></div>';
    $('body').append(toastHTML);
    $('.toast').click(function(){
        $(this).stop().fadeOut(100);
    });
});

function fadeIn( elem, ms )
{
  if( ! elem ){
    return;
  }
  if( ! ms ){
    ms = 400;
  }

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "inline-block";
  elem.style.visibility = "visible";

  var opacity = 0;
  var timer = setInterval( function() {
    opacity += 50 / ms;
    if( opacity >= 1 )
    {
      clearInterval(timer);
      opacity = 1;
    }
    elem.style.opacity = opacity;
    elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
  }, 50 );
}

function fadeOut( elem, ms )
{
  if( ! elem ){
    return;
  }
  if( ! ms ){
    ms = 400;
  }

  var opacity = 1;
  var timer = setInterval( function() {
    opacity -= 50 / ms;
    if( opacity <= 0 )
    {
      clearInterval(timer);
      opacity = 0;
      elem.style.display = "none";
      elem.style.visibility = "hidden";
    }
    elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );

}

function makeToast(text, level, delay){
    if(!delay){
        delay = 4000;
    }
    $('.toast')
        .stop()
        .hide()
        .text(text)
        .fadeIn(400)
        .delay(delay)
        .fadeOut(400);
}
