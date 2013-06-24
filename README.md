# Android-Toast

An HTML5 replication of the Native Android Toast http://developer.android.com/guide/topics/ui/notifiers/toasts.html

Can be used for PhoneGap applications.

To use Android toast, simply include src/css/toast.css and src/js/toast.js to your project and call the android_toast javascript function (does not require jQuery or any external DOM manipulation library)

	<script>
		var toast = new Android_Toast();
		toast.set_content('Please check your connection and try again.');
		toast.show();
	</script>

You can also customize the position and the duration:

	<script>
		var toast = new Android_Toast();
		toast.set_content('Connected to Wi-Fi network <em>Router Name</em>');
		toast.set_duration(4000);
		toast.set_position('top');
		toast.show();
	</script>



## JavaScript API

**set_content()** sets the text to be displayed. `<em></em>` text will be highlighted in blue.

**set_duration()** accepts a integer. The toast will disappear after the set duration. Defaults to 3000 (milliseconds).

**set_position()** Either `top` or `bottom`. Determines the position of the toast. Defaults to `bottom`.

**show()** Shows the Toast

**hide()** Hides and removes the Toast. It is called manually at the specified duration.


## License

Check the MIT-LICENSE.txt file


## Contributors

http://www.eTobb.com 's first Open Source contribution.

Developed by Jad Joubran [@JoubranJad](https://twitter.com/joubranjad)  
Design replicated by Nader Dagher  [@naderdagher](https://twitter.com/naderdagher)