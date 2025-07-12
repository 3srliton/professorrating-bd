// Basic JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Teacher Rating BD loaded successfully!');
    
    // Add search functionality later
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                alert('Search functionality coming soon! You searched for: ' + query);
            }
        });
    }
});
