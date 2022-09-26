


const CONTEXT_MENU_ID = "octopart_search";

function octoSearch(info,tab) {
  if (info.menuItemId !== CONTEXT_MENU_ID) {
    return;
  }
  var selection = info.selectionText;
		console.log("Selected text for search: \""+ selection + "\"" )

        var newURL = "https://octopart.com/search?q=" + selection;
		console.log("Opening new octopart at "+ newURL + "\"" )
        chrome.tabs.create({ url: newURL });
}

chrome.contextMenus.create({
  title: "Octopart search: %s", 
  contexts:["selection"], 
  id: CONTEXT_MENU_ID
});
chrome.contextMenus.onClicked.addListener(octoSearch)