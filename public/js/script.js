// start point / top 

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDMcJSbVSEebZ2mDCv1_A8wCDEhddefpBo",
  authDomain: "playgamezonegames.firebaseapp.com",
  projectId: "playgamezonegames",
  storageBucket: "playgamezonegames.firebasestorage.app",
  messagingSenderId: "168604180866",
  appId: "1:168604180866:web:4b4dfedfa115ec1e352f9b",
  measurementId: "G-NS89D5N201"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// music
var myAudio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteBtn");
const muteIcon = document.getElementById("muteIcon");
const unmuteIcon = document.getElementById("unmuteIcon");

const videoOnMute = document.getElementById('gameContainer');
const videoCloseUnMute = document.getElementById('close-button');
var isGlobalMuted = false;

muteButton.addEventListener('click', (event) => {
  event.preventDefault();
  isGlobalMuted = !isGlobalMuted; // Toggle the boolean value

  // Update button text or perform other actions based on isGlobalMuted
  const muteButton = document.getElementById('muteBtn'); // Assuming you have a button with id="muteButton"

  if (muteButton) { // Ensure the button exists
    if (isGlobalMuted) {
      myAudio.play();

      muteIcon.style.display = "none";
      unmuteIcon.style.display = "inline"; // Or any text indicating it's muted
    } else {
      myAudio.pause();
      muteIcon.style.display = "inline";
      unmuteIcon.style.display = "none"; // Or any text indicating it's unmuted
    }
  }
})

// general Code
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || !str) {
    return str; // Return the input if it's not a string or empty
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

// general code end

// go to top of the page btn 
document.getElementById("pageUpButton").addEventListener('click', function () {
  // Smooth scroll to the top of the page.
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});
// go to top of the page btn end


videoOnMute.addEventListener('click', () => {

  myAudio.pause();

  muteIcon.style.display = "inline";
  unmuteIcon.style.display = "none";

});

videoCloseUnMute.addEventListener('click', () => {
  if (isGlobalMuted) {
    myAudio.play();
    muteIcon.style.display = "none";
    unmuteIcon.style.display = "inline";
  }
});


// music end



// Logo Effect
const gamezoneLogo = document.querySelector('#gamezone-logo img');
const gamepadLogo = document.getElementById('gamepad-logo');
const logoLink = document.querySelector('.col-left a');

let isRotated = false;
const animationDuration = 200;

function rotateGamepad(rotate) {
  let rotation = rotate ? '10deg' : '0deg';
  gamepadLogo.style.transition = `transform ${animationDuration / 1000}s ease`;
  gamepadLogo.style.transform = `rotate(${rotation})`;
}

function handleLogoInteraction() {
  isRotated = !isRotated;
  rotateGamepad(isRotated);
}

gamezoneLogo.addEventListener('mouseenter', () => {
  if (!isRotated) {
    rotateGamepad(true);
  }
});

gamezoneLogo.addEventListener('mouseleave', () => {
  if (isRotated === false) {
    rotateGamepad(false);
  }
});

gamezoneLogo.addEventListener('click', (event) => {
  handleLogoInteraction();
  window.location.href = logoLink.getAttribute('href');
});

gamezoneLogo.addEventListener('touchstart', (event) => {
  event.preventDefault();
  handleLogoInteraction();
  setTimeout(() => {
    window.location.href = logoLink.getAttribute('href');
  }, animationDuration);
});
// Logo effect end

// scroll-up button 
// Scroll-up button
function topFunction() {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8); // Adjust the divisor for speed
    }
  };
  scrollToTop();
}





window.addEventListener('scroll', () => {
  const pageUpButton = document.getElementById('pageUpButton');
  if (window.scrollY > 300) { // Show after scrolling 300px
    pageUpButton.classList.remove('hidden');
    pageUpButton.classList.add('visible');
  } else {
    pageUpButton.classList.remove('visible');
    pageUpButton.classList.add('hidden');
  }
});

// Ensure the button is initially hidden
document.addEventListener('DOMContentLoaded', () => {
  const pageUpButton = document.getElementById('pageUpButton');
  pageUpButton.classList.add('hidden');
});
// scroll-up button end

//Search suggestion started
const searchInput = document.getElementById('search-input');
const clearButton = document.getElementById('clear-button');
const suggestionsBox = document.getElementById('suggestions-box');
const suggestionsList = document.getElementById('suggestions-list');

// Replace with your actual data source (e.g., an array or fetch from an API)
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
  if (searchInput.value) {
    clearButton.style.display = 'block';
  } else {
    clearButton.style.display = 'none';
  }
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

//auto-scroll by searchbar
document.getElementById('search-btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default anchor behavior

  HomeButtonClicked()
  const imageElement = document.getElementById('gameContainer');

  if (imageElement) {
    imageElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll and center the image
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-bar')) {
    suggestionsBox.style.display = 'none';
  }
});

clearButton.addEventListener('click', function () {
  searchInput.value = '';
  searchInput.focus(); // Keep focus in the input
  clearButton.style.display = 'none';
});

//Optional: clear button also hides on focus out if the search input is empty.
searchInput.addEventListener('focusout', function () {
  if (!this.value) {
    clearButton.style.display = 'none';
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


searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    suggestionsBox.style.display = 'none';
  }
});

document.getElementById('search-btn').addEventListener('click', () => {
  suggestionsBox.style.display = 'none';
});
//Search suggestion End


// day/night button
const checkbox = document.querySelector('.switch input'); // Select the checkbox
const body = document.body;
const aTag = document.getElementById('menu').querySelectorAll('a');

// Or a specific element you want to apply dark mode to

checkbox.addEventListener('change', function () {
  body.classList.toggle('night-mode');
  if (this.checked) {
    document.body.style.backgroundColor = "black"
    body.classList.add('dark-mode'); // Add dark mode class
    this.textContent = "Night Mode";
    aTag.forEach(aTag => {
      // aTag.style.color = 'gray'; 
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
const navLinksAnchors = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinksAnchors.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});


//mobile mode slider end

// showing Username & Email using firebase

const userName = document.querySelector('.user-name');
const userEmail = document.querySelector('.user-email');

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    userEmail.textContent = user.email;


    // Option 2: Get username from Firestore if displayName is null
    const userDocRef = doc(db, "users", uid);
    getDoc(userDocRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const usernameFromFirestore = docSnap.data().username;
          userName.textContent = usernameFromFirestore;
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
        userName.textContent = "User"; // Default on error
      });

  } else {
    userName.textContent = "User";
    userEmail.textContent = "example@gmail.com" // Default if no user is signed in
  }
});
// showing Username & Email using firebase end

// welcome Box animation
const centerText = document.querySelector('.center-text');
const sparkle = document.querySelector('.sparkle');
const trailPoints = [];
const cursor = document.querySelector('.cursor');
let isInside = false;

function handlePointerEnter() {
  centerText.classList.add('hovered');
  sparkle.style.opacity = '1';
  cursor.style.display = 'block';
  isInside = true;
}

function handlePointerLeave() {
  centerText.classList.remove('hovered');
  sparkle.style.opacity = '0';
  cursor.style.display = 'none';
  isInside = false;

  trailPoints.forEach(point => point.remove());
  trailPoints.length = 0;
}

function handlePointerMove(e) {
  let clientX, clientY;
  if (e.touches) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }

  const rect = centerText.getBoundingClientRect();

  if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
    handlePointerLeave();
    return;
  }

  if (!isInside) {
    handlePointerEnter();
  }

  sparkle.style.left = clientX + 'px';
  sparkle.style.top = clientY + 'px';
  cursor.style.left = clientX + 'px';
  cursor.style.top = clientY + 'px';

  const trailPoint = document.createElement('div');
  trailPoint.classList.add('trail');
  trailPoint.style.left = clientX + 'px';
  trailPoint.style.top = clientY + 'px';

  const trailSize = 5;
  trailPoint.style.width = trailSize + 'px';
  trailPoint.style.height = trailSize + 'px';
  document.body.appendChild(trailPoint);
  trailPoints.push(trailPoint);

  if (trailPoints.length > 20) {
    const removedPoint = trailPoints.shift();
    removedPoint.remove();
  }

  trailPoints.forEach((point, index) => {
    const size = trailSize * (1 + index / 5);
    point.style.width = Math.min(10, size) + 'px';
    point.style.height = Math.min(10, size) + 'px';
    point.style.opacity = 1 - index / 20;
  });
}

centerText.addEventListener('mouseenter', handlePointerEnter);
centerText.addEventListener('touchstart', handlePointerEnter);

centerText.addEventListener('mouseleave', handlePointerLeave);
centerText.addEventListener('touchend', handlePointerLeave);
centerText.addEventListener('touchcancel', handlePointerLeave);

centerText.addEventListener('mousemove', handlePointerMove);
centerText.addEventListener('touchmove', handlePointerMove);

sparkle.style.opacity = '0';
//welcome animation ends


document.getElementById('registrationBtn').addEventListener('click', function () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.scrollBy({
        top: 300,
        behavior: 'smooth'
      });

      // Register Page
      fetch('registerPage/plans.html')
        .then(response => response.text())
        .then(data => {

          ShowPlans(data);  //show only place-for-plans

          //  when home button click go to home
          HomeButtonClicked();

          // Back button functionality inside index.html
          document.getElementById('plans-to-home-btn').addEventListener('click', function () {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });

            HomeButtonClicked()
          });

          // Registering Form page
          const registerButtons = document.querySelectorAll('.open-reg-form-btn');
          let selectedPlan = null;

          registerButtons.forEach(button => {
            button.addEventListener('click', function (event) {
              event.preventDefault();

              const planElement = this.closest('.plan');
              if (planElement) {
                selectedPlan = planElement.getAttribute('data-plan-value');
                console.log("Selected plan:", selectedPlan);

              } else {
                console.error("Plan element not found.");
              }


              //  console.log("Selected plan:", selectedPlan);
              window.scrollBy({
                top: 300,
                behavior: 'smooth'
              });


              fetch('registerPage/registration-and-payment-form.html')
                .then(response => response.text())
                .then(data => {


                  ShowRegistraion_PaymentForm(data, selectedPlan);
                  // Set the selected plan in the form
                  const planSelection = document.getElementById('planSelection');

                  if (planSelection) {
                    planSelection.value = selectedPlan;
                    planSelection.dispatchEvent(new Event('change')); // Trigger change event
                  }
                  document.getElementById('reg-to-plans-btn').addEventListener("click", function (event) {
                    event.preventDefault();
                    document.getElementById('place-for-reg-and-pay-form').style.display = 'none';
                    document.getElementById('place-for-plans').style.display = 'block';

                  });
                  //   Add event listener for form submission
                  //   This code is running in index.html but it's from the RegisterForm content

                  document.getElementById('registrationFormfilling').addEventListener('submit', function (event) {
                    event.preventDefault(); // Prevent default form submission

                    processAdditionalUserData();
                  });

                  document.getElementById('payment-to-reg-form-btn').addEventListener('click', function () {
                    document.getElementById('paymentForm').style.display = 'none';
                    document.getElementById('registration-form').style.display = 'block';
                  });
                  // Function to update payment details based on selected plan
                  function updatePaymentDetails(selectedPlan) {
                    let paymentAmountDisplay = document.getElementById('pay-amount-show');
                    let totalHour = document.getElementById('totalHour');
                    let validity = document.getElementById('validity');
                    let gameplay = document.getElementById('gameplay');
                    let gamePackage = document.getElementById('package');
                    let cost = document.getElementById('cost');
                    let accessories = document.getElementById('accessories');
                    let steering = document.getElementById('steering');

                    let price = document.getElementById('price');
                    let planName = document.getElementById('planName');


                    if (selectedPlan === 'Bronze') {

                      planName.textContent = 'Bronze';
                      price.textContent = '150' + '₹';

                      paymentAmountDisplay.textContent = 'Bronze | Pay 150 Rs.';
                      validity.textContent = '10';
                      totalHour.textContent = "5";
                      gameplay.textContent = '5';
                      gamePackage.textContent = 'gamePackage (10 Card) for ₹150';
                      cost.textContent = '30 Minutes/vCard';
                      accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                      // steering.textContent = 'Steering Wheel: ₹10/session';
                      extra.textContent = 'N/A';
                    } else if (selectedPlan === 'Silver') {
                      planName.textContent = 'Silver';
                      price.textContent = '300' + '₹';

                      paymentAmountDisplay.textContent = 'Silver | Pay 300 Rs.';
                      validity.textContent = '15';
                      totalHour.textContent = '8';



                      gameplay.textContent = '8';
                      gamePackage.textContent = 'gamePackage (10 Card) for ₹300';
                      cost.textContent = '45 Minutes/vCard';
                      accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                      // steering.textContent = '';
                      extra.textContent = 'N/A';
                    } else if (selectedPlan === 'Gold') {

                      planName.textContent = 'Gold';
                      price.textContent = '400' + '₹';

                      paymentAmountDisplay.textContent = 'Gold | Pay 400 Rs.';
                      validity.textContent = '30';
                      totalHour.textContent = validity.textContent + " Hour";
                      price.textContent = '400' + '₹'



                      gameplay.textContent = '8';
                      gamePackage.textContent = 'gamePackage (10 Card) for ₹400';
                      cost.textContent = '45 Minutes/vCard';
                      accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                      // steering.textContent = 'Steering Wheel: ₹10/session';
                      extra.textContent = 'N/A';

                    } else if (selectedPlan === 'Birthdayspecial') {

                      planName.textContent = 'Birthdayspecial';
                      price.textContent = '150' + '₹';

                      paymentAmountDisplay.textContent = 'Birthdayspecial | Pay 100 Rs.';
                      validity.textContent = '1';
                      totalHour.textContent = validity.textContent + " Hr";
                      price.textContent = '100' + '₹'

                      gameplay.textContent = '0.5';
                      gamePackage.textContent = 'gamePackage (5 Card) for ₹100';
                      cost.textContent = '30 Minutes/vCard';
                      accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                      // steering.textContent = 'Steering Wheel: ₹10/session';
                      extra.textContent = 'N/A';

                    } else {
                      paymentAmountDisplay.textContent = '';
                    }
                  }
                  // Initial update based on selectedPlan
                  updatePaymentDetails(selectedPlan);

                  document.getElementById('planSelection').addEventListener('change', function () {
                    updatePaymentDetails(this.value);
                  });

                  //   This code is running in index.html but it's from the RegisterForm content End 




                });
            });
          });


          HomeButtonClicked();
          Top10ButtonClicked();

          // Registering Form page end 



          // Script for Registering in firestore



          async function processAdditionalUserData() {

            const user = auth.currentUser;
            if (!user) {
              console.log("User not logged in");
              return;
            }


            const loadingBar = document.querySelector(".loadingBar");
            loadingBar.style.display = "block"; // Show loadingbar form

            document.getElementById('registration-form').style.display = 'none'; // Hide registration form
            document.getElementById('paymentForm').style.display = 'none';

            const userId = user.uid;
            const dob = document.getElementById("dateOfBirth").value; // Get DOB from input field
            const gender = document.getElementById("gender").value; // Get gender from input field
            const plan = document.getElementById("planSelection").value; // Get plan from input field
            const startDate = document.getElementById("startDate").value;
            var planForDays;
            var paidAmount;
            var isPaid = false;
            if (plan == 'Bronze') {
              planForDays = 10;
              paidAmount = 150;
            }

            else if (plan == 'Silver') {
              planForDays = 15;
              paidAmount = 300;
            }
            else if (plan == 'Gold') {
              planForDays = 30;
              paidAmount = 400;
            }

            else if (plan == 'Birthdayspecial') {
              planForDays = 1;
              paidAmount = 50;
            }

            else {
              planForDays = 0
              paidAmount = 0;


            }

            await addAdditionalUserDataToFirestore(userId, dob, gender, plan, startDate, planForDays, paidAmount, isPaid);
          }

          async function addAdditionalUserDataToFirestore(userId, dob, gender, plan, startDate, planForDays, paidAmount, isPaid) {

            try {
              await updateDoc(doc(db, "users", userId), {
                dob: FormatDate(dob),
                gender: capitalizeFirstLetter(gender),
                plan: capitalizeFirstLetter(plan),
                startDate: FormatDate(startDate),
                planForDays: planForDays,
                paidAmount: paidAmount,
                isPaid: isPaid
              });
              const loadingBar = document.querySelector(".loadingBar");
              console.log("Additional user data added to Firestore.");
              document.getElementById('registration-form').style.display = 'none'; // Hide registration form
              document.getElementById('paymentForm').style.display = 'block';
              loadingBar.style.display = "none"; // hide loadingbar 
            } catch (error) {
              console.error("Error adding additional user data:", error);
              // Handle error (e.g., display an error message)
            }
          }
          // Script for Registering in firestore end


        })
        .catch(error => {
          console.error('Error loading page:', error);
          document.getElementById('place-for-reg-and-pay-form').innerHTML = "<p>Error loading content.</p>";
          document.getElementById('place-for-reg-and-pay-form').style.display = 'block';
        });
    } else {
      document.getElementById('userBtn').click();
    }
  });
});

// formating date in dd/MM/yyyy formate 
function FormatDate(date) {
  const newDate = new Date(date);
  const day = String(newDate.getDate()).padStart(2, '0');
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const year = newDate.getFullYear();
  return `${day}/${month}/${year}`;
}
// formating date in dd/MM/yyyy formate end

// logout btn
document.getElementById('logoutOption').addEventListener('click', function (event) {
  event.preventDefault();
  signOut(auth)
    .then(() => {
      // User signed out successfully!
      console.log("you're signed out!!!");
      // Optionally, redirect the user to the login page or update the UI
      window.location.href = "index.html"; // Example: Redirect to login page
    })
    .catch((error) => {
      // An error happened.
      console.error("Logout error:", error);
      alert("Failed to sign out.");
    });

});
// logout btn end
// Show only Button clicked options fun()

function hideAllPlaces() {
  const places = [
    'all-games-place',
    'place-for-plans',
    'place-for-user-signup',
    'place-for-user-login',
    'place-for-user-forgotPassword',
    'place-for-reg-and-pay-form',
    'place-for-user-profile',
  ];

  places.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
}

function ShowUserSignUp(data) {
  hideAllPlaces();
  document.getElementById('place-for-user-signup').innerHTML = data;
  document.getElementById('place-for-user-signup').style.display = 'block';
}

function ShowUserLogin(data) {
  hideAllPlaces();
  document.getElementById('place-for-user-login').innerHTML = data;
  document.getElementById('place-for-user-login').style.display = 'block';

}

function ShowUserForgetPassword(data) {
  hideAllPlaces();
  document.getElementById('place-for-user-forgotPassword').innerHTML = data;
  document.getElementById('place-for-user-forgotPassword').style.display = 'block';
}
function ShowUserProfile(data) {
  hideAllPlaces();
  document.getElementById('place-for-user-profile').innerHTML = data;
  document.getElementById('place-for-user-profile').style.display = 'block';
}

function ShowPlans(data) {
  hideAllPlaces();
  document.getElementById('place-for-plans').innerHTML = data;
  document.getElementById('place-for-plans').style.display = 'block';
}
function ShowRegistraion_PaymentForm(data, selectedPlan) {

  document.getElementById('place-for-reg-and-pay-form').innerHTML = data;

  //getting plans in registratoin page from plans.html
  document.getElementById('planSelection').value = selectedPlan;
  // Show the registration page

  document.getElementById('all-games-place').style.display = 'none';
  document.getElementById('place-for-reg-and-pay-form').style.display = 'block';
  document.getElementById('place-for-plans').style.display = 'none';
}

function HomeButtonClicked() {
  document.getElementById('home').addEventListener('click', function () {
    filterGames('all'); // Assuming filterGames is defined elsewhere
    hideAllPlaces();
    document.getElementById('all-games-place').style.display = 'block';
  });
}

function Top10ButtonClicked() {
  document.getElementById('top-10-games').addEventListener('click', function () {
    hideAllPlaces();
    document.getElementById('all-games-place').style.display = 'block';
    showTrendingGames(); // Assuming showTrendingGames is defined elsewhere
  });
}

// Show Only fun() end
// User Profile Page

document.getElementById('userProfile').addEventListener('click', function (event) {
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });

  event.preventDefault();
  fetch('account/userProfile.html')
    .then(response => response.text())
    .then(data => {

      ShowUserProfile(data);

      onAuthStateChanged(auth, (user) => {

        if (user) {

          const uid = user.uid;
          displayUserData(uid);

        }
      })
    });
})

// User Profile End


// user Profile Page Firebase Data Script 



async function displayUserData(userId) {
  // show extra details when hover on expiryDate




  // show extra details when hover on expiryDate end

  function setUserStatus(isOnline) {
    const dot = document.getElementById('dot');
    const activeText = document.getElementById('active');

    if (isOnline) {
      dot.style.backgroundColor = 'green';
      activeText.textContent = 'online';
    } else {
      dot.style.backgroundColor = 'red';
      activeText.textContent = 'offline';
    }
  }

  try {


    const userDocRef = doc(db, "users", userId); // Corrected: use doc() from firebase/firestore

    const docSnap = await getDoc(userDocRef); // Corrected: use getDoc()


    if (docSnap.exists()) {
      const userData = docSnap.data();
      console.log("User Data:", userData);

      // document.getElementById("userName").textContent = userData.name;
      document.getElementById("userName").textContent = userData.username || "Username";
      document.getElementById("email").innerHTML = `<strong>Email:</strong> ${userData.email}`;
      document.getElementById("gender").innerHTML = `<strong>Gender:</strong> ${userData.gender}`;
      document.getElementById("dob").innerHTML = `<strong>DOB:</strong> ${userData.dob}`;
      document.getElementById("age").innerHTML = `<strong>Age:</strong> ${CalculateAge(userData.dob)} yr` || ' N/A';
      document.getElementById("payingAmount").innerHTML = `<strong>Paying Amount:</strong> ${userData.paidAmount}₹`;

      document.getElementById("totalHour").innerHTML = ` ${userData.totalHour} Hr`;
      document.getElementById("expiryDate").innerHTML = `${calculateExpiryDate(userData.startDate, userData.planForDays)}`;
      document.getElementById("startDate").innerHTML = `<strong>Start Date:</strong> ${userData.startDate}`
      document.getElementById("planForDays").innerHTML = `<strong>Plan For Days:</strong> ${userData.planForDays}`
      document.getElementById("remainingDays").innerHTML = `<strong>Remaining Days:</strong> ${calculateRemainingDays(userData.startDate, userData.planForDays)}`

      document.getElementById("leftHour").innerHTML = `${userData.leftHour} Hr`;
      document.getElementById("usedHour").innerHTML = `${userData.usedHour} Hr`;
      document.getElementById("profilePlan").textContent = `Plan: ${userData.plan || "N/A"}`;
      let status = userData.isActive;
      setUserStatus(status) //show online & offline status



    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}



// calculating Age
function CalculateAge(dateString) {
  // Parse the date string.
  const dateParts = dateString.split("/");
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Month is 0-indexed
  const year = parseInt(dateParts[2], 10);
  const birthDate = new Date(year, month, day);


  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// calculating Age end

// Calculating Expiry Date
function calculateExpiryDate(startDateStr, planForDays) {
  // Split the start date string into day, month, and year
  const [day, month, year] = startDateStr.split('/').map(Number);

  // Create a new Date object (Note: JavaScript months are 0-indexed)
  const startDate = new Date(year, month - 1, day);

  // Calculate the expiry date in milliseconds
  const expiryDateMs = startDate.getTime() + (planForDays * 24 * 60 * 60 * 1000);

  // Create a new Date object for the expiry date
  const expiryDate = new Date(expiryDateMs);

  // Extract the day, month, and year from the expiry date
  const expiryDay = String(expiryDate.getDate()).padStart(2, '0');
  const expiryMonth = String(expiryDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
  const expiryYear = expiryDate.getFullYear();

  // Format the expiry date back into "dd/mm/yyyy" format
  return `${expiryDay}/${expiryMonth}/${expiryYear}`;
}

// Calculating Expiry Date end

// Calculate Remaining Date
function calculateRemainingDays(startDate, planforDays) {
  // Split the start date string into day, month, and year
  const [day, month, year] = startDate.split('/').map(Number);

  // Create a Date object from the start date (month is 0-indexed)
  const startDateObject = new Date(year, month - 1, day);

  // Calculate the end date by adding the planned number of days
  const endDateObject = new Date(startDateObject);
  endDateObject.setDate(startDateObject.getDate() + planforDays);

  // Get the current date
  const currentDateObject = new Date();

  // Calculate the difference between the end date and the current date in milliseconds
  const timeDifference = endDateObject.getTime() - currentDateObject.getTime();

  // Convert the time difference to days
  const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return remainingDays;
}


// Calculate Remaining Date end

// user Profile Page Firebase Data Script End

// user-login page

document.getElementById('userBtn').addEventListener('click', function (event) {


  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });
  event.preventDefault();
  // signup page 
  fetch('account/signup.html')
    .then(response => response.text())
    .then(data => {

      ShowUserSignUp(data);

      // handle forgot button in signupPage
      document.getElementById('forgotPageBtn').addEventListener('click', function (event) {
        event.preventDefault();
        fetch('account/forgotPassword.html')
          .then(response => response.text())
          .then(data => {
            ShowUserForgetPassword(data);

           // script for Forget Password handle
            const forgotPasswordForm = document.getElementById("resetPassBtn");
            forgotPasswordForm.addEventListener("click", (event) => {
              event.preventDefault();

              const email = document.getElementById("emailForForgotPass").value;
              const alertText = document.getElementById("alert-text");
              const loadingBar = document.querySelector(".loadingBar");
             

              sendPasswordResetEmail(auth, email)
                .then(() => {
                  // Show the loading bar
              loadingBar.style.display = "block";
                  alert("Password reset email sent. Check your inbox.");
                  alertText.textContent = "Password reset email sent. Check your inbox then Login!!!";
                  // Optionally, redirect to a confirmation page
                  window.location.href = "index.html"; // Redirect to login page
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error("Forgot password error:", errorCode, errorMessage);
                  alert("Failed to send reset email: " + errorMessage);
                });
            });
            // // script for forget Password handle end



            // handle backto-signup Page in forgot page to signup page
            // back to signup page 
            document.getElementById('backPageBtn').addEventListener('click', function () {
              document.getElementById('place-for-user-signup').style.display = 'block';
              document.getElementById('place-for-user-forgotPassword').style.display = 'none';


            });
            // back to login page end

          });

      });

      // handle login page in signup Page 

      document.getElementById('switchPageBtn').addEventListener('click', function (event) {
        window.scrollBy({
          top: 300,
          behavior: 'smooth'
        });
        event.preventDefault();
        fetch('account/login.html')
          .then(response => response.text())
          .then(data => {
            ShowUserLogin(data);

            // handle forgot page in login page by signup page
            document.getElementById('forgotPageBtn').addEventListener('click', function (event) {
              event.preventDefault();
              fetch('account/forgotPassword.html')
                .then(response => response.text())
                .then(data => {
                  ShowUserForgetPassword(data);
                  
           // script for Forget Password handle
            const forgotPasswordForm = document.getElementById("resetPassBtn");
            forgotPasswordForm.addEventListener("click", (event) => {
              event.preventDefault();

              const email = document.getElementById("emailForForgotPass").value;
              const alertText = document.getElementById("alert-text");
              const loadingBar = document.querySelector(".loadingBar");
              

              sendPasswordResetEmail(auth, email)
                .then(() => {
                  // Show the loading bar
              loadingBar.style.display = "block";
                  alert("Password reset email sent. Check your inbox.");
                  alertText.textContent = "Password reset email sent. Check your inbox then Login!!!";
                  // Optionally, redirect to a confirmation page
                  window.location.href = "index.html"; // Redirect to login page
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error("Forgot password error:", errorCode, errorMessage);
                  alert("Failed to send reset email: " + errorMessage);
                });
            });
            // // script for forget Password handle end


                  // handle back to login page in forgot page by signup page
                  document.getElementById('backPageBtn').addEventListener('click', function () {
                    document.getElementById('place-for-user-login').style.display = 'block';
                    document.getElementById('place-for-user-forgotPassword').style.display = 'none';
                  });
                });

            });


            // back to signup Page
            document.getElementById('switchPageBtn').addEventListener('click', function () {

              document.getElementById('place-for-user-login').style.display = 'none';
              document.getElementById('place-for-user-signup').style.display = 'block';
            });
            // back to signup page end




            // script for login
            const loginForm = document.getElementById("loginForm");
            const loginContainer = document.querySelector(".login-container");
            const alertText = document.getElementById("alert-text");
            const loadingBar = document.querySelector(".loadingBar");// Assuming you have a loading bar element

            // Function to check if the user is already logged in
            function checkIfLoggedIn() {
              auth.onAuthStateChanged((user) => {
                if (user) {
                  console.log("User is already logged in:", user);
                  alertText.textContent = "You are already logged in.";
                  alert("You are already logged in.");
                  loginContainer.style.display = "none";
                  loadingBar.style.display = "none";
                  window.location.href = "index.html";
                } else {
                  console.log("No user is currently logged in.");
                  loginContainer.style.display = "block"; // Ensure login form is visible if not logged in
                }
              });
            }

            // Call checkIfLoggedIn when the script loads
            checkIfLoggedIn();

            loginForm.addEventListener("submit", (event) => {
              event.preventDefault();
              const emailForLogin = document.getElementById("emailForLogin").value;
              const passwordForLogin = document.getElementById("passwordForLogin").value;
              loginContainer.style.display = "none";
              loadingBar.style.display = "block";
              alertText.textContent = "";


              signInWithEmailAndPassword(auth, emailForLogin, passwordForLogin)
                .then((userCredential) => {
                  const user = userCredential.user;
                  console.log("User logged in:", user);
                  // window.location.href = "index.html"; // Redirect after successful login

                  fetch('registerPage/plans.html')
                    .then(response => response.text())
                    .then(data => {
                      ShowPlans(data);
                    });
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error("Login error:", errorCode, errorMessage);

                  // Handle specific error codes for better user feedback
                  if (errorCode === "auth/invalid-credential") {
                    alertText.innerHTML = "Incorrect Email or password.<br> Please try again!";
                  } else {
                    alertText.textContent = "Login failed: " + errorMessage; // General error message
                  }
                })
                .finally(() => {
                  loadingBar.style.display = "none";
                  loginContainer.style.display = "block"; // Re-display the login form after error or success
                });

            });
            // script for login end

          });




      });
      // login page end


      // script for signup page button 

      // Verify and Sign up button Hide/Unhide fun 
      function updateButtonState(emailVerified) {
        const verifyEmailBtn = document.getElementById("verifyEmailBtn");
        const signUpBtn = document.getElementById("signUpBtn");

        if (emailVerified) {
          signUpBtn.classList.add('active-btn');
          signUpBtn.classList.remove('dull-btn');
          signUpBtn.disabled = false; // Enable the button

          verifyEmailBtn.classList.remove('active-btn');
          verifyEmailBtn.classList.add('dull-btn');
          verifyEmailBtn.disabled = true; // Disable the button




        } else {
          verifyEmailBtn.classList.add('active-btn');
          verifyEmailBtn.classList.remove('dull-btn');
          verifyEmailBtn.disabled = false; // Enable the button

          signUpBtn.classList.remove('active-btn');
          signUpBtn.classList.add('dull-btn');
          signUpBtn.disabled = true; // Diable the button

        }
      }

      // Verify and Sign up button Hide/Unhide fun end
      const verifyEmailBtn = document.getElementById("verifyEmailBtn");
      const signupForm = document.getElementById("signupForm");
      const signUpBtn = document.getElementById("signUpBtn");
      const loadingBar = document.querySelector(".loadingBar");
      const signupContainer = document.querySelector(".signup-container");
      const loginContainer = document.querySelector(".login-container");
      const alertText = document.getElementById("alert-text");
      let emailVerified = false; // Track email verification status
      let isTemp;
      verifyEmailBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value; // You might not need this here, but it's in your original code


        // Show loading indicator
        signupContainer.style.display = "none";
        loadingBar.style.display = "block";
        alertText.textContent = "";

        try {
          if (!email.endsWith("@gmail.com")) {
            isTemp = true;
            throw new Error("Temp Mail not allowed, Sorry!!!");
          } else {
            isTemp = false;
          }

          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User created:", user);
              return sendEmailVerification(user);
            })
            .then(() => {
              alertText.innerHTML = "Verification email sent.<br> Please check your inbox!";
              // Start polling for verification
              startVerificationPolling();
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error("Verification error:", errorCode, errorMessage);
              if (errorCode === "auth/email-already-in-use") {
                alertText.innerHTML = "Email already exists. Please log in.";
              } else {
                alertText.innerHTML = "Please Provide Valid Email Address!";
              }


              signupContainer.style.display = "block";
            })
            .finally(() => {
              // signupContainer.style.display = "block";
              loadingBar.style.display = "none";
            });
        } catch (error) {
          alertText.textContent = error.message;
          signupContainer.style.display = "block";
          loadingBar.style.display = "none";
        }




      });

      function startVerificationPolling() {
        let verificationCheckInterval = setInterval(() => {
          auth.currentUser.reload().then(() => {
            const user = auth.currentUser;
            if (user.emailVerified) {
              console.log("Email verified after polling!");
              alertText.innerHTML = "Email Verified!<br>You can now sign up.";
              emailVerified = true;
              updateButtonState(true);
              signupContainer.style.display = "block";

              signUpBtn.disabled = false; // Enable the Sign Up button
              clearInterval(verificationCheckInterval); // Stop polling
            }
          }).catch((error) => {
            console.error("Error reloading user during polling:", error);
            clearInterval(verificationCheckInterval); // Stop polling on error
          });
        }, 5000); // Check every 5 seconds (adjust as needed)

        // Set a timeout to stop polling after a long period
        setTimeout(() => {
          clearInterval(verificationCheckInterval);
          console.log("Verification polling stopped after timeout");
        }, 300000); // Stop polling after 5 minutes
      }

      signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("isTemp : " + isTemp);
        if (isTemp) {
          alertText.innerHTML = "Temp mail not allowed, Sorry!!!";
          signupContainer.style.display = "block";
          loadingBar.style.display = "none";
          return;

        }
        if (!emailVerified && !isTemp) {
          updateButtonState(false)
          alertText.innerHTML = "Please verify your email first!";
          return;
        }

        const username = document.getElementById("username").value;

        // Show loading indicator
        signupContainer.style.display = "none";
        loadingBar.style.display = "block";
        alertText.textContent = "";

        updateProfile(auth.currentUser, { displayName: username })
          .then(() => {
            console.log("Username updated");
            return saveUserDataToFirestore(auth.currentUser);
          })
          .then(() => {
            alertText.innerHTML = "Sign up successful! Now Login";

            fetch('account/login.html')
              .then(response => response.text())
              .then(data => {
                ShowUserLogin(data);
                // handle forgot page in login page after submit signup page
                document.getElementById('forgotPageBtn').addEventListener('click', function (event) {
                  event.preventDefault();
                  fetch('account/forgotPassword.html')
                    .then(response => response.text())
                    .then(data => {
                      ShowUserForgetPassword(data);


                     
           // script for Forget Password handle
            const forgotPasswordForm = document.getElementById("resetPassBtn");
            forgotPasswordForm.addEventListener("click", (event) => {
              event.preventDefault();

              const email = document.getElementById("emailForForgotPass").value;
              const alertText = document.getElementById("alert-text");
              const loadingBar = document.querySelector(".loadingBar");
              

              sendPasswordResetEmail(auth, email)
                .then(() => {
                  // Show the loading bar
              loadingBar.style.display = "block";
                  alert("Password reset email sent. Check your inbox.");
                  alertText.textContent = "Password reset email sent. Check your inbox then Login!!!";
                  // Optionally, redirect to a confirmation page
                  window.location.href = "index.html"; // Redirect to login page
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error("Forgot password error:", errorCode, errorMessage);
                  alert("Failed to send reset email: " + errorMessage);
                });
            });
            // // script for forget Password handle end



                      // handle back to login page in forgot page  after submit signup page
                      document.getElementById('backPageBtn').addEventListener('click', function () {
                        document.getElementById('place-for-user-login').style.display = 'block';
                        document.getElementById('place-for-user-forgotPassword').style.display = 'none';
                      });
                    });

                });


                // back to signup Page
                document.getElementById('switchPageBtn').addEventListener('click', function () {

                  document.getElementById('place-for-user-login').style.display = 'none';
                  document.getElementById('place-for-user-signup').style.display = 'block';
                });
                // back to signup page end

              });

            // open login page
            // window.location.href = "index.html"; // Redirect or show success message
          })
          .catch((error) => {
            console.error("Sign up error:", error);
            alertText.innerHTML = "Sign up failed: " + error.message;
          })
          .finally(() => {
            // signupContainer.style.display = "block";
            loadingBar.style.display = "none";
          });
      });


      // Function to save user data to Firestore
      async function saveUserDataToFirestore(user) {
        try {
          const username = document.getElementById("username").value;
          await setDoc(doc(db, "users", user.uid), {
            username: capitalizeFirstLetter(username),
            email: capitalizeFirstLetter(user.email),
            uid: user.uid,
          });
          console.log("User data saved to Firestore.");
        } catch (error) {
          console.error("Error saving user data:", error);
          alertText.textContent = "Error saving user data.";
        }
      }

      // script for signup page button end


    });



});




// user login page end

// Home Link Functionality
HomeButtonClicked();

// RegisterPage End



// Game Available 

const gameData = [

  {
    "title": "Valorant",
    "description": "VALORANT is a 5v5 tactical shooter. Character-based combat, a global stage. Use varied abilities, precise gunplay, and adaptive teamwork to outwit foes and fully dominate the competition.",
    "thumbnail": "https://i.pinimg.com/736x/5a/59/cb/5a59cbcd013100462fd70a73b67ce9cf.jpg",
    "videoId": "e_E9W2vsRbQ",
    "genre": "Tactical Shooter",
    "ageRating": "13",
    "trending": true
  },
  {
    "title": "CS2: Counter Strike 2",
    "description": "Counter-Strike 2, powered by Source 2, delivers a major technical upgrade. Expect realistic visuals, advanced networking, and enhanced community tools, modernizing the classic competitive shooter experience.",
    "thumbnail": "https://i.pinimg.com/736x/fc/8b/92/fc8b9209e84d5bd0d17ca199281666aa.jpg",
    "videoId": "c80dVYcL69E",
    "genre": "First-Person Shooter",
    "ageRating": "17",
    "trending": true
  },
  {
    "title": "PUBG Battlegrounds",
    "description": "Play PUBG: BATTLEGROUNDS for free! Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds in intense survival matches.",
    "thumbnail": "https://i.pinimg.com/736x/36/80/1c/36801c4624e4c5e136624bc45c120cc3.jpg",
    "videoId": "u1oqfdh4xBY",
    "genre": "Shooter, Survival, Multiplayer",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "Shatterline",
    "description": "Get ready for the apocalypse! Shatterline is an intense FPS with roguelike co-op PVE and PVP modes. Pick a unique operator, customize your look and weapons, and combat the alien plague that threatens humanity.",
    "thumbnail": "https://i.pinimg.com/736x/1b/f9/c0/1bf9c01eefcb1089f762d7b89feba79a.jpg",
    "videoId": "mlFiQJpndqg",
    "genre": "Shooter, First Person, Multiplayer, Competitive",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Delta Force",
    "description": "Delta force : tactical shooting across three modes: massive PvP battles, high-stakes extraction gameplay, and a revamped Black Hawk Down campaign. Dive into diverse, intense combat experiences.",
    "thumbnail": "https://i.pinimg.com/736x/a1/73/f2/a173f2b0e94d297c63a35cf06f269d65.jpg",
    "videoId": "4I_QrwFd__o",
    "genre": "Tactical Shooter",
    "ageRating": "17",
    "trending": true
  },
  {
    "title": "Destiny 2",
    "description": "Destiny 2 : the mysteries of the solar system and experience responsive first-person shooter combat you and your friends love to play together join them anytime, anywhere, to fight for humanity.",
    "thumbnail": "https://imgs.search.brave.com/qF1Rca7xoYUYRqaKpjKPO8iTALvPazJNDcZV4MieUZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWdkYi5jb20v/aWdkYi9pbWFnZS91/cGxvYWQvdF9jb3Zl/cl9iaWcvY28xbjZ4/LnBuZw",
    "videoId": "dZrxWFrd1zQ",
    "genre": "Adventure,Shooter,Action",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "Fortnite: All Editions",
    "description": "Fortnite offers Battle Royale, Zero Build, live events, and millions of creator-made games. Race, parkour, survive—find your adventure. Available:- Fortnite, Fortnite OG, Fortnite Blastic,  Fortnite Festival, Fortnite Reload.",
    "thumbnail": "https://i.pinimg.com/736x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
    "videoId": "KCxZ4njtiuw",
    "genre": "Battle Royale",
    "ageRating": "17",
    "trending": false
  },
  {
    "title": "Asphalt 8 - Car Racing Game",
    "description": "Experience multiplayer races with fast cars and motorcycles. Explore stunning scenarios and landscapes, ranging from the scorching Nevada Desert to the bustling streets of Tokyo, in high-octane racing action.",
    "thumbnail": "https://i.pinimg.com/736x/ea/dd/b3/eaddb3ad14f395368963eb85f72d3b6f.jpg",
    "videoId": "jpSGZsgga_I",
    "genre": "Racing",
    "ageRating": "7",
    "trending": false
  },
  {
    "title": "Metalstorm",
    "description": "The ultimate team-based multiplayer air combat experience! A truly free-to-play game. Engage in live 5v5 air combat with friends against real players around the world, piloting powerful warplanes.",
    "thumbnail": "https://play-lh.googleusercontent.com/JQNrDSNI-XKf_fFJgtfoZ8v0p2MmC8tgsDdr7tta2kvF7S5yOHr9kmcLBVoW4rQIAgg=w526-h296-rw",
    "videoId": "xVG5lSfbciM",
    "genre": "Action, Multiplayer",
    "ageRating": "3",
    "trending": false
  },
  {
    "title": "Dauntless",
    "description": "Dauntless: Become a Slayer and protect the Shattered Isles from formidable Behemoths in the ultimate free-to-slay monster-hunting co-op action game. Team up and take down massive creatures.",
    "thumbnail": "https://i.pinimg.com/736x/80/62/89/8062898629299f947bfa0a65b01553be.jpg",
    "videoId": "A95pYf5fyG8",
    "genre": "Action, RPG, Multiplayer",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Paladins",
    "description": "The Paladins: The fantasy team-based shooter sensation. Wield guns and magic as a legendary Champion of the Realm, customizing your core set of abilities to play exactly how you want to play.",
    "thumbnail": "https://i.pinimg.com/736x/7a/d1/93/7ad1937ab56c633c83cafb0bf33d6ac8.jpg",
    "videoId": "g4WHiMVq1-8",
    "genre": "Shooter, Competitive, Multiplayer",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "Rocket Racing",
    "description": "Rocket Racing: a high-speed arcade racer. Drift, fly, and boost through dynamic tracks with friends in this supersonic, get a great experience of racing with rocket racing this is for everyone.",
    "thumbnail": "https://4kwallpapers.com/images/walls/thumbs_3t/21079.jpg",
    "videoId": "NIhbK4-ZdKA",
    "genre": "Racing",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Rocket League",
    "description": "Rocket League: car soccer chaos! Drive, fly, score. Physics-based mayhem, easy to learn, hard to master. Intense matches, endless car customization. play with your friends and enjoy rocket league",
    "thumbnail": "https://i.pinimg.com/736x/df/53/67/df536730950101114c8834a575d362ac.jpg",
    "videoId": "SgSX3gOrj60",
    "genre": "Racing",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Apex Legends",
    "description": "Apex Legends: Hero shooter where legendary characters with powerful abilities team up to battle for fame & fortune on the fringes of the Frontier. this under the top10 list in Steam DB. play it now!",
    "thumbnail": "https://myhotposters.com/cdn/shop/products/mL4368_1024x1024.jpg?v=1589304033",
    "videoId": "UMJb_mkqynU",
    "genre": "Action",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "Genshin Impact",
    "description": "Explore Teyvat, find your sibling. Team up with diverse characters, master elemental powers, and uncover the mysteries of this vibrant, open world. most beautiful graphics loved it if you love anime!",
    "thumbnail": "https://i.pinimg.com/736x/f7/b5/3e/f7b53e11d0f66157b0153d6a815de990.jpg",
    "videoId": "HLUY1nICQRY",
    "genre": "Open World",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "World War Z: Aftermath",
    "description": "Zombie survival. Battle massive hordes in new, global locations. Intense story episodes, upgraded gameplay, and visceral action for 15 million players, Survival game for with epic story try at once!",
    "thumbnail": "https://i.pinimg.com/736x/39/7d/c4/397dc4777e4190bd6b2459e414565614.jpg",
    "videoId": "EYQk3eDa-V8",
    "genre": "Survival",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Fall Guys",
    "description": "Fall Guys: the most playable multiplayer game of YouTube, play this fun Game, Stumble through wacky obstacle courses, compete with friends, or create your own wild levels. Multiplayer mayhem!",
    "thumbnail": "https://i.pinimg.com/736x/63/6b/6f/636b6fb101da5efa2e69fa197114c47c.jpg",
    "videoId": "Wj3dUvGLjNQ",
    "genre": "Multiplayer, Competitive",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Marvel Rivals",
    "description": "Marvel Rivals: Team-based superhero shooter. squads, combine powers for unique skills, and battle in dynamic, destructible arenas. The best game under top 10 list in Steam DB, Play Now! everyone Loving it!",
    "thumbnail": "https://i.pinimg.com/736x/1b/fc/50/1bfc50dddefe8eb95d3c8634f114313c.jpg",
    "videoId": "-b0veB7q9P4",
    "genre": "Action, Shooter, Multiplayer, Competitive",
    "ageRating": "12",
    "trending": true
  },

  // From Steam Free games
  {
    "title": "Call of Duty®: Warzone™",
    "description": "Welcome to Call of Duty®: Warzone™, the massive combat arena. Experience thrilling modes & new gameplay with different maps and tournaments, Get the best experience of war zone, best for action lovers!",
    "thumbnail": "https://i.pinimg.com/736x/ec/63/30/ec63301f24e5456516c9cd2754b53166.jpg",
    "videoId": "0E44DClsX5Q",
    "genre": "FPS, Multiplayer, Competitive, Battle Royale",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Dota 2",
    "description": "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. there's always something new to discover, this is Action lovers game & this is under top 10 list of Steam DB.",
    "thumbnail": "https://i.redd.it/rjxu8q8u1ga91.jpg",
    "videoId": "-cSFPIwMEq4",
    "genre": "MOBA, Strategy, Multiplayer",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "Overwatch® 2",
    "description": "Overwatch 2: this is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today, play the game like heroes does!",
    "thumbnail": "https://i.pinimg.com/736x/d0/5e/56/d05e561afd6e03768fd587ca66ebaabf.jpg",
    "videoId": "LGgqyer-qr4",
    "genre": "Hero Shooter, Multiplayer, FPS",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Once Human",
    "description": "A multiplayer open-world survival game, post-apocalyptic future. Unite with friends to fight monstrous enemies, uncover secret plots, compete for resources, and build your own territory. Once.",
    "thumbnail": "https://i.pinimg.com/736x/e1/72/a7/e172a7addc10db413978655407173228.jpg",
    "videoId": "XXpfbP9Ml_4",
    "genre": "Multiplayer, Open World, Survival",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Warframe",
    "description": "Warframe: Awaken as an unstoppable warrior and battle alongside your friends, online action game, craft a loadout of devastating weaponry and define your playstyle to become an unstoppable force.",
    "thumbnail": "https://i.pinimg.com/736x/6b/de/3d/6bde3dd1efb3a7846434161e76bdc27d.jpg",
    "videoId": "SsOgrkdLHD8",
    "genre": "Action RPG, Action, Looter Shooter",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "War Thunder",
    "description": "War Thunder: The MMO military game dedicated to aviation, armoured vehicles, and naval craft, the most advanced modern combat units. Join now battles on land, in the air, and at sea. Action Lovers!",
    "thumbnail": "https://i.pinimg.com/736x/c4/c1/02/c4c1028838c27c48dfdc47da5598ae13.jpg",
    "videoId": "pzgPXOw2plI",
    "genre": "Simulation, VR",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "eFootball™",
    "description": "eFootball : A worldwide total of 750 million downloads is waiting for you! to Play eFootball™ with users around the world and get the experience like real game. Best for Sport lovers & under the top-10 list of steam DB.",
    "thumbnail": "https://i.pinimg.com/736x/58/19/16/58191693004605b3c9c8c35cb9aea23b.jpg",
    "videoId": "BdyXsZMPjWo",
    "genre": "Football, Sports",
    "ageRating": "12",
    "trending": false
  }, {
    "title": "The First Descendant",
    "description": "The First Descendant : A third-person looter shooter made by Unreal Engine 5. it have unique abilities to tackle both solo and co-op missions. Up to 4 players use varied mechanics to defeat giant bosses. Action Lovers!",
    "thumbnail": "https://i.pinimg.com/736x/aa/00/77/aa007790c0c35611b9cb6458abe8e676.jpg",
    "videoId": "e15nHHJjpJg",
    "genre": "Looter shooter, PvE",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Star Trek Online",
    "description": "The Star Trek universe appears for the first time on a truly massive scale. Explore strange new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. Space Lovers!",
    "thumbnail": "https://imgs.search.brave.com/LOmpJznhOCOM_eSP2rUi7JaJvttJc5MRKAfUJdd6yxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9pbWcvY2Zu/LzExMzA3dGdlOW44/SWIzRW9Hc2RHZnNC/ZWg0a3pGdW1rNG84/LXVhbFdIejlBSjk2/NFl3UUY4QnJGWFh6/bkdITEVRZV9wVFhC/aHZpTDc4cVVYQzRz/VmtaRDBKZjBwSy1z/cy5wbmc",
    "videoId": "8pzGjFCVhSE",
    "genre": "Sci-fi,MMO, Space, Multiplayer",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Asphalt Legends Unite",
    "description": "Spark your competitive soul with Asphalt Legends UNITE and feel the collective heartbeat race, perform jaw-dropping stunts, and charge towards victory while driving the finest hypercars, Racing Lovers!",
    "thumbnail": "https://i.pinimg.com/736x/4a/f1/bd/4af1bd26fa79c549274f0fa071e8a511.jpg",
    "videoId": "rH-eZd01NEQ",
    "genre": "Racing",
    "ageRating": "10",
    "trending": false
  },
  {
    "title": "Halo Infinite",
    "description": "Experience the halo sci-fi Action game with epic story that engage you to this game. Featuring an expansive open-world campaign and a dynamic multiplayer experience, Best for the <br>sci-fi Action story game Lovers!",
    "thumbnail": "https://www.charlieintel.com/cdn-image/wp-content/uploads/2021/06/New-concept-art-leaked-for-Halo-Infinite.jpg?width=1200&quality=60&format=auto",
    "videoId": "rFh2i4AlPD4",
    "genre": "FPS, Multiplayer, Singleplayer",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "Blood Strike",
    "description": "Battle Royale, Squad Fight, or Hot Zone, Blood Strike offers a wide range of playable Strikers, unique active and passive ability letting you deploy drones, shield walls and everything in between.",
    "thumbnail": "https://i.pinimg.com/736x/a5/97/1d/a5971d3d6fbb664c62fa6a9b6428ad06.jpg",
    "videoId": "V581-wZLzdU",
    "genre": "Battle Royale, Shooter, Adventure, Multiplyer",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Sky: Children of the Light",
    "description": "Sky: Children of the Light is a peaceful, award-winning MMO from the creators of Journey, a beautifully-animated kingdom across seven realms and create enriching memories, Puzzle adventure Lovers!",
    "thumbnail": "https://i.pinimg.com/736x/38/cc/e0/38cce048d46431483a1dce47dea9b846.jpg",
    "videoId": "A3DNTfhUy0k",
    "genre": "MMO, Multiplayer, Adventure",
    "ageRating": "12",
    "trending": false
  },
];

const searchButton = document.getElementById('search-btn');
const ageFilter = document.getElementById('age-filter');
const gameContainer = document.getElementById('gameContainer');
const videoPopup = document.getElementById('video-popup');
const closeButton = document.getElementById('close-button');
let player;
const toggleViewButton = document.getElementById('toggleView');

let currentView = 'detail';

function createGameCards(games) {
  gameContainer.innerHTML = '';
  games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.classList.add(`${currentView}-view`); // Initial view

    gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <span class="game-title-overlay">${game.title}</span> 
            <div class="game-card-content">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            </div>
        `;

    const image = gameCard.querySelector('img');
    image.addEventListener('click', () => {
      openPopup(game.videoId);
    });

    // Touch event listeners
    gameCard.addEventListener('touchstart', () => {
      if (currentView === 'grid') { // Apply only in grid view
        gameCard.classList.add('hover-effect');
      }
    });

    gameCard.addEventListener('touchend', () => {
      gameCard.classList.remove('hover-effect');
    });

    gameCard.addEventListener('touchcancel', () => {
      gameCard.classList.remove('hover-effect');
    });


    gameContainer.appendChild(gameCard);
  });
}

function toggleView() {
  const detailIcon = document.getElementById('detailIcon');
  const gridIcon = document.getElementById('gridIcon');

  if (currentView === 'grid') {
    currentView = 'detail';
    detailIcon.style.display = 'inline';
    gridIcon.style.display = 'none';

  } else {
    currentView = 'grid';
    detailIcon.style.display = 'none';
    gridIcon.style.display = 'inline';
  }
  const gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach(card => {
    card.classList.remove('detail-view', 'grid-view');
    card.classList.add(`${currentView}-view`);
  });
}

toggleViewButton.addEventListener('click', toggleView);




function filterGames(selectedAge) {
  let filteredGames = gameData;
  if (selectedAge !== 'all') {
    const selectedAgeNum = parseInt(selectedAge, 10);
    if (selectedAgeNum === 18) {
      filteredGames = gameData.filter(game => parseInt(game.ageRating, 10) >= selectedAgeNum);
    } else {
      filteredGames = gameData.filter(game => parseInt(game.ageRating, 10) <= selectedAgeNum);
    }
  } else {
    // If "all" is selected, randomize the games
    filteredGames = randomizeGames(gameData);
  }

  function isRefreshed() {
    if (typeof window !== 'undefined' && typeof window.performance !== 'undefined' && typeof window.performance.navigation !== 'undefined') {
      return window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD;
    }
    return false; // Default to false if performance API is not available
  }

  function randomizeGames(games) {
    // Fisher-Yates shuffle algorithm
    if (isRefreshed) {
      let shuffledGames = [...games]; // Create a copy to avoid modifying the original array
      for (let i = shuffledGames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledGames[i], shuffledGames[j]] = [shuffledGames[j], shuffledGames[i]];
      }
      return shuffledGames;
    }
    else {
      return games;
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
  const availableText = document.getElementById("available-text");

  if (availableText.textContent == "Available Games") {
    filterGames(ageFilter.value);
  } else {
    showTrendingGames();
  }
});

Top10ButtonClicked(); //hide all the button and show only Top-10-games-page


function showTrendingGames() {
  const availableText = document.getElementById("available-text");
  const ageFilterText = document.getElementById("age-filter-text");
  availableText.textContent = "Most Played Games";
  ageFilterText.textContent = "Filter by Age on Trendings"
  const ageFilter = document.getElementById('age-filter');
  const trendingGames = gameData.filter(game => game.trending === true);
  getTrendingAndAgeFilteredGames(ageFilter.value, trendingGames);

}


function getTrendingAndAgeFilteredGames(selectedAge, trendingGames) {
  let trendingGameList = trendingGames; // Start with the full gameData


  if (selectedAge !== 'all') {
    const selectedAgeNum = parseInt(selectedAge, 10);
    if (selectedAgeNum === 18) {
      trendingGameList = trendingGameList.filter(game => parseInt(game.ageRating, 10) >= selectedAgeNum);
    } else {
      trendingGameList = trendingGameList.filter(game => parseInt(game.ageRating, 10) <= selectedAgeNum);
    }
  }

  // else {
  //   filteredGames = randomizeGames(filteredGames);
  // }
  if (trendingGameList.length == 0) {
    createNoGamesMessage();

  } else {
    createGameCards(trendingGameList); // for trending
  }
}

//trending btn end


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api"; // Corrected URL
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = function () {

  let mobileAspect = .6;
  player = new YT.Player('player', {
    height: isMobile() ? window.innerWidth * mobileAspect : 480, // Responsive height based on device
    width: isMobile() ? window.innerWidth * mobileAspect : 854, // Responsive width based on device
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
  // Add resize listener
  window.addEventListener('resize', onWindowResize);
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
    if (isMobile()) {
      screen.orientation.unlock();
    }
  }
}
// Add event listeners for visibility changes
document.addEventListener('visibilitychange', function () {
  if (document.hidden && isMobile() && player && player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  }
});

// Add event listener for blur (window loses focus)
window.addEventListener('blur', function () {
  if (isMobile() && player && player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  }
});


function openPopup(videoId) {
  // console.log("openPopup called with videoId:", videoId);
  player.loadVideoById(videoId);
  videoPopup.style.display = 'flex'; // Use flex for centering
}

closeButton.addEventListener('click', () => {
  videoPopup.style.display = 'none';
  player.stopVideo();
});

//Game Available End