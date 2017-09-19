chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'var elems = document.querySelectorAll("tr[id^=\'taskboard-row-\'] div.minimize"); for (var i in elems) { elems[i].click(); }'
    });
  });

  chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      var elems = document.querySelectorAll("tr[id^='taskboard-row-'] div.minimize");
       for (var i in elems) { 
         elems[i].click(); 
        }
    }
  })