// // Called when the user clicks on the browser action
// // eslint-disable-next-line no-undef
// chrcdome.browserAction.onClicked.addListener(function(tab) {
//     // Send a message to the active tab
//     // eslint-disable-next-line no-undef
//     chrome.tabs.query({active: true, currentWindow:true},function(tabs) {
//         var activeTab = tabs[0];
//
//         console.log("opened extension");
//         // eslint-disable-next-line no-undef
//         chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//     });
// });