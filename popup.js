chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.msg === 'trump') {
    var dataQuery = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(dataQuery, function(tabs) {
      var dataUrl = tabs[0].url;
      chrome.tabs.update({ url: 'transition.html'});
      
    });
  }

});
