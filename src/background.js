chrome.omnibox.onInputEntered.addListener(function (text) {
  // Create the URL to search for the game on HLTB
  let searchUrl = `https://howlongtobeat.com/?q=${encodeURIComponent(text)}`;

  // Open the search URL in a new tab
  chrome.tabs.create({ url: searchUrl });

  // Save the search term to localStorage
  chrome.storage.local.get({ searchHistory: [] }, function (result) {
    let searchHistory = result.searchHistory;
    searchHistory.unshift(text);
    if (searchHistory.length > 5) {
      searchHistory.pop();
    }
    chrome.storage.local.set({ searchHistory: searchHistory });
  });
});
