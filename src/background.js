chrome.omnibox.onInputEntered.addListener(function (text) {
  // Create the URL to search for the game on HLTB
  let searchUrl = `https://howlongtobeat.com/?q=${encodeURIComponent(text)}`;

  // Open the search URL in a new tab
  chrome.tabs.create({ url: searchUrl });
});
