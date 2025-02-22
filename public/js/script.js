// nav bar

// nav bar ends 

//Search suggestion started
const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions-box');
const suggestionsList = document.getElementById('suggestions-list');

// Replace with your actual data source (e.g., an array or fetch from an API)
const allSuggestions = [
    "CS2",
    "Delta Force",
    "Fortnight",
    "Valorant",

];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase(); // Make the search case-insensitive

    if (query) {
        // Filter the suggestions based on the query
        const filteredSuggestions = allSuggestions.filter(suggestion =>
            suggestion.toLowerCase().startsWith(query)
        );

        suggestionsList.innerHTML = ''; // Clear previous suggestions

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
            suggestionsBox.style.display = 'none'; // Hide if no matching suggestions
        }
    } else {
        suggestionsBox.style.display = 'none'; // Hide if the input is empty
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-bar')) {
        suggestionsBox.style.display = 'none';
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
//Search suggestion End

// Registration button

const registrationLink = document.getElementById("registration-link");

registrationLink.addEventListener("click", function(event) {
    event.preventDefault();

    registrationLink.classList.add("registration-animation");

    setTimeout(function() {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScOIY7SgAUQpdpZ16ZacbiFyq1VVk2evw9-KvgUFC_PdE76_Q/viewform?usp=sharing", "_blank");
        registrationLink.classList.remove("registration-animation");
    }, 1000); // Increased to 1000ms for a more elaborate animation
});
// Registration button End

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
    title: "CS2: Counter Strike 2",
    description: "Counter-Strike 2, powered by Source 2, delivers a major technical upgrade. Expect realistic visuals, advanced networking, and enhanced community tools, modernizing the classic competitive shooter.",
    thumbnail: "https://i.pinimg.com/736x/fc/8b/92/fc8b9209e84d5bd0d17ca199281666aa.jpg",
    videoId: "c80dVYcL69E",
    genre: "First-Person Shooter",
    ageRating: "17" // Added age rating
  },
  {
    title: "PUBG Battlegrounds",
    description: "Play PUBG: BATTLEGROUNDS for free! Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.",
    thumbnail: "https://i.pinimg.com/736x/29/71/f0/2971f06b44b097ca00d2f3f88024cf73.jpg",
    videoId: "u1oqfdh4xBY",
    genre: "Shooter, Survival, Multiplayer",
    ageRating: "12" // Added age rating
  },
  {
    title: "Shatterline",
    description: "Get ready for the apocalypse! Shatterline is an intense FPS with roguelike co-op PVE and PVP modes. Pick a unique operator, customize your look and weapons, and combat the alien plague!",
    thumbnail: "https://i.pinimg.com/736x/b9/78/80/b978804674045321b0c10df97750bb43.jpg",
    videoId: "mlFiQJpndqg",
    genre: "Shooter, First Person, Multiplayer, Competitive",
    ageRating: "12" // Added age rating
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
    title: "Destiny 2",
    description: "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. you and your friends can join anytime, anywhere.",
    thumbnail: "https://i.pinimg.com/736x/37/04/8c/37048c17cb9fb0d5618c473891fd68cb.jpg",
    videoId: "dZrxWFrd1zQ",
    genre: "Adventure,Shooter,Action",
    ageRating: "16" // Added age rating
  },
  {
    title: "Fortnite : all editions",
    description: "Fortnite offers Battle Royale, Zero Build, live events, and millions of creator-made games. Race, parkour, survive—find your adventure. Age ratings ensure safe fun for everyone. Explore endless possibilities.",
    thumbnail: "https://i.pinimg.com/736x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
    videoId: "dQw4w9WgXcQ",
    genre: "Battle Royale",
    ageRating: "17" // Added age rating
  },
  {
    title: "Asphalt 8 - Car Racing Game",
    description: "Experience multiplayer races with fast cars and motorcycles. Explore stunning scenarios and landscapes, ranging from the scorching Nevada Desert to the bustling streets of Tokyo.",
    thumbnail: "https://i.pinimg.com/736x/ea/dd/b3/eaddb3ad14f395368963eb85f72d3b6f.jpg",
    videoId: "jpSGZsgga_I",
    genre: "Racing",
    ageRating: "7" 
  },
  {
    title: "Metalstorm",
    description: "the ultimate team-based multiplayer air combat experience! A truly free-to-play game. Engage in live 5v5 air combat with friends against real players around the world.",
    thumbnail: "https://i.pinimg.com/736x/db/93/3a/db933a430d90fe8bc8d140d5b111a984.jpg",
    videoId: "xVG5lSfbciM",
    genre: "Action, Multiplayer",
    ageRating: "3" 
  },
  
  {
    title: "Dauntless",
    description: "Dauntless: Become a Slayer and protect the Shattered Isles from formidable Behemoths in the ultimate free-to-slay monster-hunting co-op action game.",
    thumbnail: "https://i.pinimg.com/736x/b8/0a/39/b80a39c3f01d878909e55994cd12aa67.jpg",
    videoId: "A95pYf5fyG8",
    genre: "Action, RPG, Multiplayer",
    ageRating: "12" 
  },
  {
    title: "Paladins",
    description: "The free-to-play fantasy team-based shooter sensation. Wield guns and magic as a legendary Champion of the Realm, customizing your core set of abilities to play exactly how you want to play.",
    thumbnail: "https://i.pinimg.com/736x/7a/d1/93/7ad1937ab56c633c83cafb0bf33d6ac8.jpg",
    videoId: "g4WHiMVq1-8",
    genre: "Shooter, Competitive, Multiplayer",
    ageRating: "16" 
  },
  {
    title: "Rocket Racing",
    description: "Rocket Racing: a high-speed arcade racer. Drift, fly, and boost through dynamic tracks with friends in this supersonic, ever-evolving experience.",
    thumbnail: "https://i.pinimg.com/236x/50/7a/4e/507a4ee8bcc54cadce24a16bf2b10637.jpg",
    videoId: "NIhbK4-ZdKA",
    genre: "Racing",
    ageRating: "12" 
  },
  {
    title: "Rocket League",
    description: "Rocket League: car soccer chaos! Drive, fly, score. Physics-based mayhem, easy to learn, hard to master. Intense matches, endless car customization.",
    thumbnail: "https://i.pinimg.com/736x/df/53/67/df536730950101114c8834a575d362ac.jpg",
    videoId: "SgSX3gOrj60",
    genre: "Racing",
    ageRating: "12" 
  },
  {
    title: "Apex Legends",
    description: "Apex Legends: Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier.",
    thumbnail: "https://i.pinimg.com/736x/8e/fa/d7/8efad7b53c142eee1bea125db3993866.jpg",
    videoId: "UMJb_mkqynU",
    genre: "Action",
    ageRating: "12" 
  },
  {
    title: "Genshin Impact",
    description: "Explore Teyvat, find your sibling. Team up with diverse characters, master elemental powers, and uncover the mysteries of this vibrant, open world.",
    thumbnail: "https://i.pinimg.com/736x/f7/b5/3e/f7b53e11d0f66157b0153d6a815de990.jpg",
    videoId: "HLUY1nICQRY",
    genre: "Open World",
    ageRating: "12" 
  },
  {
    title: "World War Z: Aftermath",
    description: "Zombie survival. Battle massive hordes in new, global locations. Intense story episodes, upgraded gameplay, and visceral action for 15 million players.",
    thumbnail: "https://i.pinimg.com/736x/39/7d/c4/397dc4777e4190bd6b2459e414565614.jpg",
    videoId: "EYQk3eDa-V8",
    genre: "Survival",
    ageRating: "18" 
  },
  {
    title: "Fall Guys",
    description: "Fall Guys: Fun Game, Stumble through wacky obstacle courses, compete with friends, or create your own wild levels. Multiplayer mayhem!",
    thumbnail: "https://i.pinimg.com/736x/63/6b/6f/636b6fb101da5efa2e69fa197114c47c.jpg",
    videoId: "Wj3dUvGLjNQ",
    genre: "Multiplayer, Competitive",
    ageRating: "12" 
  },
  {
    title: "Marvel Rivals",
    description: "Marvel Rivals: Team-based superhero shooter.squads, combine powers for unique skills, and battle in dynamic, destructible arenas.",
    thumbnail: "https://i.pinimg.com/736x/1b/fc/50/1bfc50dddefe8eb95d3c8634f114313c.jpg",
    videoId: "-b0veB7q9P4",
    genre: "Action, Shooter, Multiplayer, Competitive",
    ageRating: "12" 
  },

// From Steam Free games

{
  title: "Call of Duty®: Warzone™",
  description: "Welcome to Call of Duty®: Warzone™, the massive free-to-play combat arena. Experience thrilling modes & new gameplay features in Area 99, Urzikstan and Rebirth Island.",
  thumbnail: "https://i.pinimg.com/736x/ec/63/30/ec63301f24e5456516c9cd2754b53166.jpg",
  videoId: "0E44DClsX5Q",
  genre: "FPS, Multiplayer, Competitive, Battle Royale",
  ageRating: "18" 
},


{
  title: "Dota 2",
  description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
  thumbnail: "",
  videoId: "",
  genre: "MOBA, Strategy, Multiplayer",
  ageRating: "12" 
},
{
  title: "Overwatch® 2",
  description: "Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today.",
  thumbnail: "",
  videoId: "",
  genre: "Hero Shooter, Multiplayer, FPS",
  ageRating: "12" 
},
{
  title: "Once Human",
  description: "Once Human is a multiplayer open-world survival game set in a strange, post-apocalyptic future. Unite with friends to fight monstrous enemies, uncover secret plots, compete for resources, and build your own territory. Once, you were merely human. Now, you have the power to remake the world.",
  thumbnail: "",
  videoId: "",
  genre: "Multiplayer, Open World, Survival",
  ageRating: "18" 
},
{
  title: "Warframe",
  description: "Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game",
  thumbnail: "",
  videoId: "",
  genre: "Action RPG, Action, Looter Shooter",
  ageRating: "18" 
},
{
  title: "War Thunder",
  description: "War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea.",
  thumbnail: "",
  videoId: "",
  genre: "Simulation, VR",
  ageRating: "12" 
},
{
  title: "eFootball™",
  description: "The feverish football game with a worldwide total of 750 million downloads is waiting for you! Play eFootball™ with users around the world!",
  thumbnail: "",
  videoId: "",
  genre: "Football, Sports",
  ageRating: "12" 
},
{
  title: "The First Descendant",
  description: "The First Descendant is a third-person looter shooter powered by Unreal Engine 5. Become a Descendant. Fight for the survival of humanity. Descendants have unique abilities to tackle both solo and co-op missions. Up to 4 players use varied mechanics to defeat giant bosses. BE THE FIRST DESCENDANT!",
  thumbnail: "",
  videoId: "",
  genre: "Looter shooter, PvE",
  ageRating: "18" 
},
{
  title: "Star Trek Online",
  description: "In Star Trek Online, the Star Trek universe appears for the first time on a truly massive scale. Players take the captain's chair as they command their own starship and crew. Explore strange new worlds, seek out new life and new civilizations, and boldly go where no one has gone before.",
  thumbnail: "",
  videoId: "",
  genre: "Sci-fi,MMO, Space, Multiplayer",
  ageRating: "12" 
},
{
  title: "Asphalt Legends Unite",
  description: "Spark your competitive soul with Asphalt Legends UNITE and feel the collective heartbeat of the road! Join forces with other players to speed through intense arcade races, perform jaw-dropping stunts, and charge towards victory while driving the finest hypercars!",
  thumbnail: "",
  videoId: "",
  genre: "Racing",
  ageRating: "12" 
},
{
  title: "Halo Infinite",
  description: "From one of gaming's most iconic sagas, Halo is bigger than ever. Featuring an expansive open-world campaign and a dynamic free to play multiplayer experience.",
  thumbnail: "",
  videoId: "",
  genre: "FPS, Multiplayer, Singleplayer",
  ageRating: "16" 
},
{
  title: "Blood Strike",
  description: "Gather your friends and dive into the action-packed Battle Royale, Squad Fight, or Hot Zone like there's no tomorrow! Blood Strike offers a wide range of playable Strikers, each with a unique active and passive ability letting you deploy drones, shield walls and everything in between.",
  thumbnail: "",
  videoId: "",
  genre: "Battle Royale, Shooter, Adventure, Multiplyer",
  ageRating: "12" 
},
{
  title: "Sky: Children of the Light",
  description: "Sky: Children of the Light is a peaceful, award-winning MMO from the creators of Journey. Explore a beautifully-animated kingdom across seven realms and create enriching memories with other players in this delightful puzzle-adventure game",
  thumbnail: "",
  videoId: "",
  genre: "MMO, Multiplayer, Adventure",
  ageRating: "12" 
},




];

const searchButton = document.getElementById('search-btn'); 
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
function filterGames(selectedAge) {
  let filteredGames = gameData;
  if (selectedAge !== 'all') {
      const selectedAgeNum = parseInt(selectedAge, 10);
      if (selectedAgeNum === 18) {
          filteredGames = gameData.filter(game => parseInt(game.ageRating, 10) >= selectedAgeNum);
      } else {
          filteredGames = gameData.filter(game => parseInt(game.ageRating, 10) <= selectedAgeNum);
      }
  }

  if (filteredGames.length === 0) {
      // Display "No games available" message
      createNoGamesMessage(); // Call a function to display the message
  } else {
      createGameCards(filteredGames); // Pass the filtered array to createGameCards
  }
}

// Search Functionality
// Search Functionality
function searchGames(searchTerm) {
  if (!searchTerm) {
      // If search term is empty, display all games or the currently filtered games
      filterGames(document.getElementById('age-filter').value); // Assuming you have an age filter dropdown
      return;
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  const searchedGames = gameData.filter(game =>
      game.title.toLowerCase().includes(lowerSearchTerm)
  );

  if (searchedGames.length === 0) {
      createNoGamesMessage();
  } else {
      createGameCards(searchedGames); // Display only the matched games
  }
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  searchGames(searchTerm);
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
    height: isMobile() ? window.innerWidth * (9 / 16) : 230, // Responsive height based on device
    width: isMobile() ? window.innerWidth : 400, // Responsive width based on device
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