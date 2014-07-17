
(function (window, undefined) {

	var loaded = false,
		loading = false;

	// Facebook settings
	window.fbAsyncInit = function () {
	    FB.init({
	        xfbml: false  // prevent automatic widget activation
	    });
	};

	// starting on DOM ready, change to another event as needed
	// eg: myApp.on('ajax-page-loaded', ...);
	$(function () {

		// prevent multiple requests for the same content
		if (loading) return;

		// if the script has already been loaded, it won't load again
		if (loaded)
		{
			init();
			return;
		}

		console.log('Fetching Facebook scripts...');

		// get the script using AJAX
		loading = true;

		$.getScript('//connect.facebook.net/en_US/all.js', function () {
			// script loaded
			loading = false;
			loaded = true;
			init();
		});

	});

	function init()
	{
		console.log('Initializing Facebook widgets...');

		try	{
			FB.XFBML.parse();
		} catch (ex) {
			console.log('Error while trying to initialize Facebook widgets: ' + ex.message);
		}
	}

})(window);