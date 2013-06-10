/*
     toast.js
     (c) 2013 Jad Joubran, Nader Dagher
     toast.js may be freely distributed under the MIT license.
*/

function android_toast( message ){
	if ( ! message ){
		return false;
	}
	$("#android_toast").remove();
	$("body").append("<div id='android_toast' class='android_toast_fadein'>" + message + "</div>");
	$("#android_toast").css({
		'margin-left': -parseInt(( $(window).width() * 0.8 / 2))	//fix center positionning. Cannot use a fix width in order to support small devices
	});
	setTimeout( android_toast_remove, 3000 );
}

function android_toast_remove(){
	$("#android_toast").removeClass('android_toast_fadein').addClass('android_toast_fadeout').on('webkitAnimationEnd', function(){
		$("#android_toast").remove();
	});
}