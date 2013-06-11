/*
Toast.js
(c) 2013 Jad Joubran, Nader Dagher
toast.js may be freely distributed under the MIT license.
*/

var android_toast_timeout_id = null;

function android_toast( message ){
	if ( ! message ){
		return false;
	}

	var body = document.getElementsByTagName('body')[0];

	var previous_toast = document.getElementById("android_toast");
	clearTimeout( android_toast_timeout_id );
	if ( previous_toast ){
		body.removeChild( previous_toast );
	}

	var toast = document.createElement("div");
	toast.setAttribute('class', 'android_toast_fadein');
	toast.setAttribute('id', 'android_toast');
	toast.innerHTML = message;
	//fix center positionning. Cannot use a fixed width in order to support small devices
	toast.style.marginLeft = -parseInt(( get_window_width() * 0.8 / 2));
	body.appendChild( toast );

	android_toast_timeout_id = setTimeout( android_toast_remove, 3000 );
}

function android_toast_remove(){

	var toast = document.getElementById('android_toast');

	//remove android_toast_fadein and add androidd_toast_fadeout
	toast.className = 'android_toast_fadeout';

	toast.addEventListener('webkitAnimationEnd', function(){
		toast.parentNode.removeChild( toast );
	});
}


//from http://stackoverflow.com/questions/1038727/how-to-get-browser-width-using-javascript-code
function get_window_width() {
	if (self.innerWidth) {
		return self.innerWidth;
	}
	else if (document.documentElement && document.documentElement.clientHeight){
		return document.documentElement.clientWidth;
	}
	else if (document.body) {
		return document.body.clientWidth;
	}
	return 0;
}