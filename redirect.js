document.addEventListener('DOMContentLoaded', function() {
	setTimeout( // waits for a second before finally going to desired URL
		function() {
			chrome.tabs.update({ url: 'http://berniesanders.com'});
		},
  	1000);	
});
