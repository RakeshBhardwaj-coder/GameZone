   
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
    ageRating: "Teen" // Added age rating
  },
  {
    title: "CS2",
    description: "Counter-Strike 2, powered by Source 2, delivers a major technical upgrade. Expect realistic visuals, advanced networking, and enhanced community tools, modernizing the classic competitive shooter.",
    thumbnail: "https://i.pinimg.com/736x/fc/8b/92/fc8b9209e84d5bd0d17ca199281666aa.jpg",
    videoId: "c80dVYcL69E",
    genre: "First-Person Shooter",
    ageRating: "Mature" // Added age rating
  },
  {
    title: "Delta Force",
    description: "This iconic series returns free-to-play, offering tactical shooting across three modes: massive PvP battles, high-stakes extraction gameplay, and a revamped Black Hawk Down campaign. Dive into diverse, intense combat experiences.",
    thumbnail: "https://i.pinimg.com/736x/a1/73/f2/a173f2b0e94d297c63a35cf06f269d65.jpg",
    videoId: "4I_QrwFd__o",
    genre: "Tactical Shooter",
    ageRating: "Mature" // Added age rating
  },
  {
    title: "Fortnite",
    description: "Fortnite offers Battle Royale, Zero Build, live events, and millions of creator-made games. Race, parkour, survive—find your adventure. Age ratings ensure safe fun for everyone. Explore endless possibilities.",
    thumbnail: "https://i.pinimg.com/736x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
    videoId: "dQw4w9WgXcQ",
    genre: "Battle Royale",
    ageRating: "Teen" // Added age rating
  }
];
const gameContainer = document.getElementById('gameContainer');
const videoPopup = document.getElementById('video-popup');
const closeButton = document.getElementById('close-button');
let player;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api"; // Corrected URL
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function() { // Make it a global function
player = new YT.Player('player', {
  height: 500, // Make player responsive
  width: 900,  // Make player responsive
  videoId: '',  // Initialize without a video
  playerVars: {
      playersinline: 1,
      autoplay: 0, // Don't autoplay initially
      controls: 1, // Show controls
      rel: 0, // Don't show related videos
  },
  events: {
      'onReady': onPlayerReady
  }
});
};

function onPlayerReady(event) {
  event.target.setVolume(50);
}



function createGameCards(){
  gameData.forEach(game => {
  const gameCard = document.createElement('div');
  gameCard.classList.add('game-card');

  gameCard.innerHTML = `
      <img src="${game.thumbnail}" alt="${game.title}">
      <div class="game-card-content">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
      </div>
  `;
 

  const image = gameCard.querySelector('img');  // Get the image element
      image.addEventListener('click', () => {
          openPopup(game.videoId);
      });

      gameContainer.appendChild(gameCard);
  });

}
function openPopup(videoId) {
  player.loadVideoById(videoId);
  videoPopup.style.display = 'flex'; // Use flex for centering
}

closeButton.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  player.stopVideo();
});

createGameCards();
//Game Available End