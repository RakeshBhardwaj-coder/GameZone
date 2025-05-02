// Search suggestion functionality
const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');
const suggestionsBox = document.getElementById('suggestions-box');
const suggestionsList = document.getElementById('suggestions-list');

// Replace with your actual data source
const allSuggestions = [
  "Valorant",
  "CS2: Counter Strike 2",
  "PUBG Battlegrounds",
  "Shatterline",
  "Delta Force",
  "Destiny 2",
  "Fortnite",
  "Asphalt 8",
  "Metalstorm",
  "Dauntless",
  "Paladins",
  "Rocket Racing",
  "Rocket League",
  "Apex Legends",
  "Genshin Impact",
  "World War Z: Aftermath",
  "Fall Guys",
  "Marvel Rivals",
  "Call of Duty®: Warzone™",
  "Dota 2",
  "Overwatch® 2",
  "Once Human",
  "Warframe",
  "War Thunder",
  "eFootball™",
  "The First Descendant",
  "Star Trek Online",
  "Asphalt Legends Unite",
  "Halo Infinite",
  "Blood Strike",
  "Sky: Children of the Light"
];

searchInput.addEventListener('input', () => {
  if (this.value) {
    clearButton.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
  }
  const query = searchInput.value.trim().toLowerCase();

  if (query) {
    const filteredSuggestions = allSuggestions.filter(suggestion =>
      suggestion.toLowerCase().startsWith(query)
    );

    suggestionsList.innerHTML = '';

    if (filteredSuggestions.length > 0) {
      filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
          searchInput.value = suggestion;
          suggestionsBox.style.display = 'none';
        });
        suggestionsList.appendChild(li);
      });
      suggestionsBox.style.display = 'block';
    } else {
      suggestionsBox.style.display = 'none';
    }
  } else {
    suggestionsBox.style.display = 'none';
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-bar')) {
    suggestionsBox.style.display = 'none';
  }
});

clearButton.addEventListener('click', function () {
  searchInput.value = '';
  searchInput.focus();
  clearButton.style.display = 'none';
});

searchInput.addEventListener('focusout', function () {
  if (!this.value) {
    clearButton.style.display = 'none';
  }
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    suggestionsBox.style.display = 'none';
  }
});

document.getElementById('search-btn').addEventListener('click', () => {
  suggestionsBox.style.display = 'none';
});