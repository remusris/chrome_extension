const millisecondsPerWeek = 1000 * 60 * 60 *24 * 7;
const oneWeekAgo = (new Date).getTime() - millisecondsPerWeek;

browsingHistoryList = []

chrome.history.search({
    text: '',
    startTime: oneWeekAgo,
    maxResults: 10
},  function(data) {
        data.forEach(function(page) {
            console.log(page.url);
            browsingHistoryList.push(page);
    });
});

// var historyVisits = function(visits) {

//     var ul = document.createElement('ul');

//     for (visits in browsingHistoryList) {

//     }
// }

var ul = document.createElement('ul');

for (i = 0, i <= browsingHistoryList.length - 1, i++) {
    var li = document.createElement('li');
    li.innerHTML = browsingHistoryList[i];

    ul.appendChild(li);
}

// const myCallBack = (details) => console.log(JSON.stringify(details.transitionQualifiers));

const myFilters = 
chrome.webNavigation.onHistoryStateUpdated.addListener(
    myCallBack
    // function(details) {console.log(JSON.stringify(details.transitionQualifiers))}
//    function(details) {
//         // console.log(details.transitionQualifier)
//         // print(JSON.stringify(details.transitionType))
        
//     }
);












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