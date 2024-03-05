function announce_close() {
    console.log("closing all matching tabs");
    chrome.tabs.query({currentWindow: true }, function (tabs) {
        var closeable = [];
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (activeTabs) {
            let urlObject = new URL(activeTabs[0].url);
            let domain = urlObject.hostname;
            console.log(domain);

            for (var i = 0; i < tabs.length; ++i) {
                console.log(tabs[i]);
                if (new URL(tabs[i].url).hostname === domain) {
                    closeable.push(tabs[i].id);
                }
            }

            chrome.tabs.remove(closeable);
        });
    });
}

chrome.browserAction.onClicked.addListener(function (tab) {
    announce_close();
});