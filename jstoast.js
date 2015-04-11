/*
    Makes an Android looking toast message that fades out after 4 seconds
    Requires JQuery
    Usage:
    makeToast('Something Happened!!');
    jq writes div with style inline
*/
"use strict";
$(function(){
    var toastHTML = '<div class="toast" style="display:none;cursor:pointer; min-width:200px; max-width:500px; height:20px; height:auto; position:fixed; left: 0; right: 0; margin:auto; bottom:10px; background-color: #383838; color: #F0F0F0; font-family: Calibri; font-size: 20px; padding:10px; text-align:center; border-radius: 4px; opacity: 0.8; filter: Alpha(opacity=80); /* IE8 and earlier */ -webkit-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1), 0px 0px 24px 10px rgba(200, 200, 200, 0.8); -moz-box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1), 0px 0px 24px 10px rgba(200, 200, 200, 0.8); box-shadow: 0px 0px 24px -1px rgba(56, 56, 56, 1), 0px 0px 24px 10px rgba(200, 200, 200, 0.8);"></div>';
    $('body').append(toastHTML);
    $('.toast').click(function(){
        $(this).stop().fadeOut(100);
    });
});

function makeToast(text, delay){
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
