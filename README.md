# Android-Toast

An HTML5 replication of the Native Android Toast http://developer.android.com/guide/topics/ui/notifiers/toasts.html

Can be used for PhoneGap applications.

To use Android toast, simply include src/css/toast.css and src/js/toast.js to your project and call the android_toast javascript function (does not require jQuery or any external DOM manipulation library)

	<script>
		var toast1 = new Android_Toast({content: 'Please check your connection and try again.'});<br />
	</script>

You can also customize the position and the duration:

	<script>
		var toast2 = new Android_Toast({content: 'Connected to Wi-Fi network <em>Router Name</em>', duration: 4000, position: 'top'});<br />
	</script>



## JavaScript API

The constructor function accepts 3 options:

**content** sets the text to be displayed. `<em></em>` text will be highlighted in blue.

**duration** accepts an integer. The toast will disappear after the set duration. Defaults to 3000 (milliseconds).

**position** Either `top` or `bottom`. Determines the position of the toast. Defaults to `bottom`.


## License

Check the MIT-LICENSE.txt file


## Contributor

http://www.eTobb.com 's first Open Source contribution.

Developed by Jad Joubran [@JoubranJad](https://twitter.com/joubranjad)