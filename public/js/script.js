   
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
      title: "God of War Ragnarök",
      description: "From Santa Monica Studio comes the sequel to the critically acclaimed God of War (2018). Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go. Go on this mythic journey for answers before Ragnarök arrives.",
      thumbnail: "https://i.pinimg.com/736x/a1/73/f2/a173f2b0e94d297c63a35cf06f269d65.jpg",
      videoId: "mZb1IHPvxYw"
  },
  {
      title: "Game Title 2",
      description: "DAFSF APSDF M[OJ].",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/480px-Sample_User_Icon.png",
      videoId: "dQw4w9WgXcQ"
  },
  {
      title: "Game Title 3",
      description: "Description of game 3.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/480px-Sample_User_Icon.png",
      videoId: "dQw4w9WgXcQ"
  },
  {
      title: "Game Title 4",
      description: "Description of game 4.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/480px-Sample_User_Icon.png",
      videoId: "dQw4w9WgXcQ"
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
      controls: 0, // Show controls
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