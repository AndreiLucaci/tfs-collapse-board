chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		var elems = document.querySelectorAll("tr.taskboard-row.taskboard-content-row[id^='taskboard-row-'] div.minimize");
		for (var i in elems) {
			elems[i].click();
		}
	}
})