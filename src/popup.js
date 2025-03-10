document.addEventListener("DOMContentLoaded", function () {
  // Retrieve search history from local storage
  chrome.storage.local.get({ searchHistory: [] }, function (result) {
    const historyList = document.getElementById("history");
    result.searchHistory.forEach(function (item) {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `https://howlongtobeat.com/?q=${encodeURIComponent(item)}`;
      link.textContent = item;
      link.target = "_blank";
      listItem.appendChild(link);
      historyList.appendChild(listItem);
    });
  });

  // Add event listener to clear history button
  document
    .getElementById("clear-history")
    .addEventListener("click", function () {
      chrome.storage.local.set({ searchHistory: [] }, function () {
        const historyList = document.getElementById("history");
        while (historyList.firstChild) {
          historyList.removeChild(historyList.firstChild);
        }
      });
    });
});
