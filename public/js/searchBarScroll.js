// Auto-scroll functionality for the search bar
document.getElementById('search-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
  
    // Assuming HomeButtonClicked is defined in another part of your code
    if (typeof HomeButtonClicked === 'function') {
      HomeButtonClicked();
    }
  
    const imageElement = document.getElementById('gameContainer');
  
    if (imageElement) {
      imageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });