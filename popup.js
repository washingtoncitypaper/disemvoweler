function init() {
	chrome.tabs.executeScript(null, { file: "jquery.min.js" }, function() {
	    chrome.tabs.executeScript(null, { file: "disemvowel.js" });
	});
}

document.getElementById('clickme').addEventListener('click', init);