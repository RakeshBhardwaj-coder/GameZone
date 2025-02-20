   
// day/night button
 

const checkbox = document.querySelector('.switch input'); // Select the checkbox
const body = document.body;
const aTag = document.getElementById('menu').querySelectorAll('a'); 

 // Or a specific element you want to apply dark mode to

checkbox.addEventListener('change', function() {
  body.classList.toggle('night-mode');
  if (this.checked) {
    document.body.style.backgroundColor = "black"
    body.classList.add('dark-mode'); // Add dark mode class
    this.textContent = "Night Mode";
    aTag.forEach(aTag => {
      aTag.style.color = 'gray'; 
    });

    
  } else {
    
    body.classList.remove('dark-mode'); // Remove dark mode class
    this.textContent = "Light Mode";
    document.body.style.backgroundColor = "white"
    // aTag.forEach(aTag => {
    //   aTag.style.color = 'white'; 
    // }); 
    
  

  }
});

// day/night button End!
    
//mobile mode slider start
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const searchButton = document.getElementById('search-btn');

if (searchButton) { // Check if the element exists
  searchButton.addEventListener('click', function() {
    console.log('Button clicked!'); // This should print to the console
    // ... your other code ...
  });
} else {
  console.log("Search button element not found!"); // Check if the element exists
}

//mobile mode slider end


// Game Available 
const gameData = [
  {
    title: "Valorant",
    description: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
    thumbnail: "https://i.pinimg.com/736x/5a/59/cb/5a59cbcd013100462fd70a73b67ce9cf.jpg",
    videoId: "e_E9W2vsRbQ",
    genre: "Tactical Shooter",
    ageRating: "13" // Added age rating
  },
  {
    title: "CS2",
    description: "Counter-Strike 2, powered by Source 2, delivers a major technical upgrade. Expect realistic visuals, advanced networking, and enhanced community tools, modernizing the classic competitive shooter.",
    thumbnail: "https://i.pinimg.com/736x/fc/8b/92/fc8b9209e84d5bd0d17ca199281666aa.jpg",
    videoId: "c80dVYcL69E",
    genre: "First-Person Shooter",
    ageRating: "17" // Added age rating
  },
  {
    title: "Delta Force",
    description: "This iconic series returns free-to-play, offering tactical shooting across three modes: massive PvP battles, high-stakes extraction gameplay, and a revamped Black Hawk Down campaign. Dive into diverse, intense combat experiences.",
    thumbnail: "https://i.pinimg.com/736x/a1/73/f2/a173f2b0e94d297c63a35cf06f269d65.jpg",
    videoId: "4I_QrwFd__o",
    genre: "Tactical Shooter",
    ageRating: "17" // Added age rating
  },
  {
    title: "Fortnite",
    description: "Fortnite offers Battle Royale, Zero Build, live events, and millions of creator-made games. Race, parkour, survive—find your adventure. Age ratings ensure safe fun for everyone. Explore endless possibilities.",
    thumbnail: "https://i.pinimg.com/736x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
    videoId: "dQw4w9WgXcQ",
    genre: "Battle Royale",
    ageRating: "19" // Added age rating
  },
  {
    title: "Fortnite",
    description: "Fortnite offers Battle Royale, Zero Build, live events, and millions of creator-made games. Race, parkour, survive—find your adventure. Age ratings ensure safe fun for everyone. Explore endless possibilities.",
    thumbnail: "https://i.pinimg.com/736x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
    videoId: "dQw4w9WgXcQ",
    genre: "Battle Royale",
    ageRating: "15" // Added age rating
  }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('search-btn');
const ageFilter = document.getElementById('ageFilter');
const gameContainer = document.getElementById('gameContainer');
const videoPopup = document.getElementById('video-popup');
const closeButton = document.getElementById('close-button');
let player;


function createGameCards(games) {
    gameContainer.innerHTML = '';
    games.forEach(game => { // Use the passed 'games' array
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <div class="game-card-content">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            </div>
        `;

        const image = gameCard.querySelector('img');
        image.addEventListener('click', () => {
            openPopup(game.videoId);
        });

        gameContainer.appendChild(gameCard);
    });
}

function filterGames(selectedAge, searchTerm = '') {
  let filteredGames = gameData;

  if (searchTerm) {
      filteredGames = filteredGames.filter(game =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }
  if (selectedAge !== 'all') {
      const selectedAgeNum = parseInt(selectedAge, 10);
      if (selectedAgeNum === 18) {
          filteredGames = filteredGames.filter(game => parseInt(game.ageRating, 10) >= selectedAgeNum);
      } else {
          filteredGames = filteredGames.filter(game => parseInt(game.ageRating, 10) <= selectedAgeNum);
      }
  }

  if (filteredGames.length === 0) {
      createNoGamesMessage();
  } else {
      createGameCards(filteredGames);
  }
}

// Event listener for search button click
searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  filterGames(ageFilter.value, searchTerm);
});

// Event listener for search input enter key.
searchInput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
      const searchTerm = searchInput.value;
      filterGames(ageFilter.value, searchTerm);
  }
});
//Optional: Event listener for input changes (live search)
searchInput.addEventListener('input', ()=>{
  const searchTerm = searchInput.value;
  filterGames(ageFilter.value, searchTerm);
});


function createNoGamesMessage() {
  const gameContainer = document.getElementById('gameContainer');
  if (gameContainer) {
      gameContainer.innerHTML = `
          <div style="text-align: center; padding: 20px;">
              <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2N0OHM1dGw5NHRwb3Bvemx5djhhMHJ3ajhncG42bDkxM3V6aTBiMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ch67rqHED7Ue8mKupV/giphy.gif" alt="No Games Available. Thank you!" style="max-width: 200px; margin-bottom: 10px;">
              <p>No games available, Sorry!!!.</p>
          </div>
      `;
  } else {
      console.error("gameContainer element not found");
  }
}

// Initial display of all games
filterGames('all');

// Event listener for the dropdown
ageFilter.addEventListener('change', () => {
    filterGames(ageFilter.value);
});


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api"; // Corrected URL
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() { // Make it a global function
  player = new YT.Player('player', {
    height: isMobile() ? window.innerWidth * (9 / 16) : 250, // Responsive height based on device
    width: isMobile() ? window.innerWidth : 450, // Responsive width based on device
    videoId: '', // Initialize without a video
    playerVars: {
      playersinline: 1,
      autoplay: 0, // Don't autoplay initially
      controls: 1, // Show controls
      rel: 0, // Don't show related videos
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
    }
  });
};

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function onPlayerReady(event) {
  event.target.setVolume(50);
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && isMobile()) {
    // Fullscreen landscape on mobile when playing
    var requestFullScreen = player.getIframe().requestFullscreen || player.getIframe().mozRequestFullScreen || player.getIframe().webkitRequestFullscreen;
    if (requestFullScreen) {
      requestFullScreen.call(player.getIframe());
    }
    screen.orientation.lock("landscape");
  } else if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.CUED) {
    if(isMobile()){
      screen.orientation.unlock();
    }
  }
}
// Add event listeners for visibility changes
document.addEventListener('visibilitychange', function() {
  if (document.hidden && isMobile() && player && player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  }
});

// Add event listener for blur (window loses focus)
window.addEventListener('blur', function() {
    if(isMobile() && player && player.getPlayerState() === YT.PlayerState.PLAYING){
      player.pauseVideo();
    }
});

// Sort the gameData array by ageRating (ascending)
// gameData.sort((a, b) => {
//   const ageA = parseInt(a.ageRating);
//   const ageB = parseInt(b.ageRating);

//   if (isNaN(ageA)) return 1; // Put games with invalid age ratings at the end
//   if (isNaN(ageB)) return -1;

//   return ageB - ageA;
// });
function openPopup(videoId) {
  player.loadVideoById(videoId);
  videoPopup.style.display = 'flex'; // Use flex for centering
}

closeButton.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  player.stopVideo();
});

//createGameCards();
//Game Available End