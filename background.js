function announce_close(){
	console.log("closing all matching tabs")
	chrome.tabs.query({}, function(tabs) {
		var closeable=[];
		chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
	    let url = tabs[0].url;
		});
		var domain = url.substring(0, url.indexOf("/")).length
		for (var i=0; i<tabs.length; ++i) {
			console.log(tabs[i]);
			if(tabs[i].url.includes(domain)) {	
				closeable.push(tabs[i].id)
			}
		}
		chrome.tabs.remove(closeable);
	});
}
chrome.browserAction.onClicked.addListener(function(tab){announce_close()});
