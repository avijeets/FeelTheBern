document.addEventListener('DOMContentLoaded', function() {
  setTimeout(
	function() {
	  chrome.tabs.update({ url: 'http://berniesanders.com'});
	},
  1000);	
});
