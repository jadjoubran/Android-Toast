/*
Toast.js
(c) 2013 Jad Joubran, Nader Dagher
toast.js may be freely distributed under the MIT license.
*/



function Android_Toast(){

	this.timeout_id = null;
	this.duration = 3000;
	this.content = '';
	this.position = 'bottom';
}

Android_Toast.prototype.set_duration = function( duration ){
	this.duration = parseInt( duration );
};

Android_Toast.prototype.set_content = function( content ){
	this.content = content;
};

Android_Toast.prototype.set_position = function( position ){
	position = position.toLowerCase();
	switch ( position ){
		case "top":
		case "bottom":
		this.position = position;
		break;

		default:
		this.position = 'bottom';
		break;
	}
};

Android_Toast.prototype.show = function(){
	if ( ! this.content ){
		return false;
	}
	clearTimeout( this.timeout_id );

	var body = document.getElementsByTagName('body')[0];

	var previous_toast = document.getElementById("android_toast_container");
	if ( previous_toast ){
		body.removeChild( previous_toast );
	}

	var toast_container = document.createElement("div");
	toast_container.setAttribute('id', 'android_toast_container');
	toast_container.setAttribute('class', 'android_toast_fadein');
	if ( this.position == 'top' ){
		toast_container.setAttribute('class', 'android_toast_fadein android_toast_top')
	}
	body.appendChild( toast_container );

	var toast = document.createElement("div");
	toast.setAttribute('id', 'android_toast');
	toast.innerHTML = this.content;
	toast_container.appendChild( toast );


	this.timeout_id = setTimeout( this.hide, this.duration );
	return true;
};

Android_Toast.prototype.hide = function(){
	var toast_container = document.getElementById('android_toast_container');

	if ( ! toast_container ){
		return false;
	}

	clearTimeout( this.timeout_id );

	//add androidd_toast_fadeout
	toast_container.className += ' android_toast_fadeout';

	toast_container.addEventListener('webkitAnimationEnd', function(){
		toast_container.parentNode.removeChild( toast_container );
	});
	return true;
};


//TODO:
/*
JavaScript API Documentation in readme.md
Fix javascript error
Fix flickering when calling toast.show() before it was hidden?
*/