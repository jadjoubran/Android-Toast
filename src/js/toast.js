/*
Toast.js
(c) 2013 Jad Joubran, Nader Dagher
toast.js may be freely distributed under the MIT license.
*/

;(function(){

	function Android_Toast( options ){

		this.timeout_id = null;
		this.duration = 3000;
		this.content = '';
		this.position = 'bottom';

		if ( options && typeof options == "object" ){
			if ( options.duration ){
				this.duration = parseInt(options.duration);
			}
			if ( options.content ){
				this.content = options.content;
			}
			if ( options.position ){
				position = options.position.toLowerCase();
				switch ( position ){
					case "top":
					case "bottom":
					this.position = position;
					break;

					default:
					this.position = 'bottom';
					break;
				}
			}
		}
		this.show();
	}


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

		toast_container.className += ' android_toast_fadeout';

		toast_container.addEventListener('webkitAnimationEnd', function(){
			toast_container.parentNode.removeChild( toast_container );
		});
		return true;
	};

	//expose the Android_Toast object to Window
	window.Android_Toast = Android_Toast;

})();