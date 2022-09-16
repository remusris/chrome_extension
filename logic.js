const millisecondsPerWeek = 1000 * 60 * 60 *24 * 7;
const oneWeekAgo = (new Date) .getTime() - millisecondsPerWeek;

browsingHistoryList = []

chrome.history.search({
    text: '',
    startTime: oneWeekAgo,
    maxResults: 30
},  function (data) {
        data. forEach(function (page) {
            console.log(page.url);
            browsingHistoryList.push(page);
    });
});

// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     // tab will either be a `tabs.Tab` instance or undefined
//     let [tab] = await chrome.tabs.query (queryOptions);
//     return tab;
// }

// chrome.tabs. query({
//     active: true,
//     lastFocusedwindow: true
// }, function(tabs) {
//     var tab = tabs[0];
//     console.log(tab.url);
//     browsingHistoryList.push(tab);
// });