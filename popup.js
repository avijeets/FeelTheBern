chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // only runs if trump msg is found
    if (request.msg === 'trump') {
        var dataQuery = {
            active: true,
            currentWindow: true
        };

        //calls transition page after condition passes
        chrome.tabs.query(dataQuery, function(tabs) {
            var dataUrl = tabs[0].url; // grabs current url
            chrome.tabs.update({  url: 'transition.html'   }); // moves to transition file
        });
    }
});
