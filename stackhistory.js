browsingHistoryList = []

if browsingHistoryList == 0
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        browsingHistoryList.push(tabs[0].url);
    });

if browsingHistoryList.length !== 0
    if chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    }); 

    !== 
