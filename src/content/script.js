document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[type="text"]'); // Adjust the selector based on the actual search input element

    if (searchInput) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query.startsWith('@hltb ')) {
                    const gameTitle = query.slice(6); // Remove '@hltb ' from the query
                    const url = `https://howlongtobeat.com/search_results?page=1&q=${encodeURIComponent(gameTitle)}`;
                    window.location.href = url; // Redirect to the How Long to Beat search results
                }
            }
        });
    }
});