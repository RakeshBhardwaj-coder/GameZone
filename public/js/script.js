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
    "pc":"pc1 | pc2 | pc3 ",
    "thumbnail": "https://i.pinimg.com/736x/5a/59/cb/5a59cbcd013100462fd70a73b67ce9cf.jpg",
    "videoId": "e_E9W2vsRbQ",
    "genre": "Tactical Shooter",
    "ageRating": "13",
    "trending": true
  },
  {
    "title": "GTA5 Enhanced",
    "description": "Grand Theft Auto V (GTA V) is an open-world action-adventure game set in the fictional state of San Andreas, focusing on the sprawling city of Los Santos.",
    "pc":"pc1 | pc2 | pc3 ",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOGI2Yjk1ZTEtZTA2Yy00ZjQ3LTk4MTgtYTgyMGQ1Zjk3YjgzXkEyXkFqcGc@.jpg",
    "videoId": "hvoD7ehZPcM",
    "genre": "Open world",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "Sekiro",
    "description": "Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan.",
    "pc":"pc2",
    "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg",
    "videoId": "rXMX4YJ7Lks",
    "genre": "Sward fighting,fighting, Survival",
    "ageRating": "18",
    "trending": true
  },
  {
    "title": "Session Skate Sim",
    "description": "Session: Skate Sim is a sports video game developed by independent developer Crea-ture Studios for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S. The game is …",
    "pc":"pc2",
    "thumbnail": "https://imgs.search.brave.com/wCKOF4NN-VmiNdt-oNGRwLHt0tOgQOd8Jant5DE7Ht8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjIv/MDcvMTIvc2Vzc2lv/bi1za2F0ZS1zaW0t/YnV0dG9uLWZpbi0x/NjU3NjY5NTEwNzIx/LmpwZz9jcm9wPTE6/MSxzbWFydCZmb3Jt/YXQ9anBnJmF1dG89/d2VicCZxdWFsaXR5/PTgw",
    "videoId": "kTo59FyCHhs",
    "genre": "Adventure, Third Person, Simulation, Competitive",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Marvel's Spider-Man 2",
    "description": "Spider-Sense tingling… Mask-up for more thrilling web-slinging heroics as Marvel’s Spider-Man 2 swings onto PC. Developed by Insomniac Games in collaboration with Marvel, and optimized for PC by Nixxes Software.",
    "pc":"pc2",
    "thumbnail": "https://imgs.search.brave.com/7dQ-MuvyfzS2Sgyxx8VKPqqoNjfHGEFrgMkpq_bWdZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzFi/LzdjLzNjMWI3Yzll/NTk2ZjhhMjc4YTQz/NjRjNDE3YTRkMWU1/LmpwZw",
    "videoId": "nq1M_Wc4FIc",
    "genre": "Adventure, Third Person, fighting, Competitive",
    "ageRating": "18",
    "trending": true
  },
  {
    "title": "God of War Ragnarök",
    "description": "Death is never the end. Kratos will have access to his weapons, skills, shields and abilities, but each new attempt will reset his Stats, Runic Attacks and Perks.",
    "pc":"pc1 | pc2 | pc3",
    "thumbnail": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg",
    "videoId": "dIQGI36BxDE",
    "genre": "Tactical Shooter",
    "ageRating": "18",
    "trending": true
  },
  {
    "title": "RDR 2",
    "description": "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores,Red Dead Redemption 2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
    "pc":"pc1 | pc2",
    "thumbnail": "https://i.pinimg.com/originals/c5/2a/78/c52a787b7790ca66c4ae9710d3d30e31.jpg",
    "videoId": "gmA6MrX81z4",
    "genre": "Adventure, Action",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "The Last of Us Part-1",
    "description": "Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.",
    "pc":"pc3",
    "thumbnail": "https://imgs.search.brave.com/GhCPSKxVw154IYWRGDkbWkksZLr2sWzyeulKcWa2s9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjIv/MDYvMDkvdGhlLWxh/c3Qtb2YtdXMtcGFy/dC0xLWJ1dHRvbi0x/NjU0NzkxODU1ODcw/LmpwZz9jcm9wPTE6/MSxzbWFydCZmb3Jt/YXQ9anBnJmF1dG89/d2VicCZxdWFsaXR5/PTgw",
    "videoId": "R2Ebc_OFeug",
    "genre": "Adventure, Action",
    "ageRating": "17",
    "trending": false
  },
  {
    "title": "Assassin's Creed Unity",
    "description": "Paris, 1789 – The French Revolution turns a once-magnificent city into a place of terror and chaos. Its cobblestone streets run red with the blood of commoners who dared to rise up against the oppressive aristocracy.",
    "pc":"pc2",
    "thumbnail": "https://imgs.search.brave.com/nGzhUQybl5xAauMO_ZsyA0BHzR3NIxj3PVW07IpyBQI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nYW1l/bHVzdGVyLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/My9JTUdfMjcxMC5q/cGVn",
    "videoId": "xzCEdSKMkdU",
    "genre": "strategy, Fighting",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Watch Dog 2",
    "description": "Watch Dogs 2 is an action-adventure game with stealth elements and played from a third-person perspective as Marcus Holloway, a young hacker. Explore a massive and dynamic open-world offering an incredible variety of gameplay possibilities.",
    "pc":"pc3",
    "thumbnail": "https://imgs.search.brave.com/iAqq3ybkgBLvw0IfEKQHcxuSGlDyC1YmO3pZIKpoq0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16UmpZalEx/WkRJdE5qazRZeTAw/WVRaaUxXRXhOemN0/Tm1ReE9ERTROakky/WmpWaVhrRXlYa0Zx/Y0djQC5qcGc",
    "videoId": "hh9x4NqW0Dw",
    "genre": "Open world, strategy, hacking",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "Need for Speed Payback",
    "description": "Need for Speed Payback is a 2017 racing video game developed by Ghost Games and published by Electronic Arts, released on November 10, 2017, for PlayStation 4, Windows, and Xbox One. It is the 23rd installment in the Need for Speed series and is set in the fictional open world of Fortune Valley.",
    "pc":"pc1",
    "thumbnail": "https://imgs.search.brave.com/MJaW3ZOhLbKK8vj0qhT4uHHTnxwG4dCzzmFnM8qO6Z0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIyNjc3/NDguanBn",
    "videoId": "kc-OcOduEx0",
    "genre": "Racing, wheel",
    "ageRating": "8",
    "trending": true
  },
   {
    "title": "Forza horizon 5",
    "description": "Set in the underworld of Fortune Valley, you and your crew were divided by betrayal and reunited by revenge to take down The House, a nefarious cartel that rules the city’s casinos, criminals and cops. In this corrupt gambler’s paradise, the stakes are high and The House always wins.",
    "pc":"pc1",
    "thumbnail": "https://imgs.search.brave.com/TRYctPO9UU_RUy687jiLQWyKBbv4r8TsW1UK3YHadeY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MDgvMjQvZm9yemEt/aG9yaXpvbi01LWJ1/dHRvbi1maW4tMTYy/OTgzMDA2ODM3OS5q/cGc_Y3JvcD0xOjEs/c21hcnQmZm9ybWF0/PWpwZyZhdXRvPXdl/YnAmcXVhbGl0eT04/MA",
    "videoId": "Rv7xLt5yNsM",
    "genre": "Racing, wheel",
    "ageRating": "8",
    "trending": true
  },
  {
    "title": "Free Fire Max",
    "description": "The Paladins: The fantasy team-based shooter sensation. Wield guns and magic as a legendary Champion of the Realm, customizing your core set of abilities to play exactly how you want to play.",
    "pc":"pc2",
    "thumbnail": "https://imgs.search.brave.com/LFyxzLqwCjIhulFFIajJaQJyyEaEVsHw5kGjbkvwV_k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMTI1/MzE5LmpwZw",
    "videoId": "g4WHiMVq1-8",
    "genre": "Shooter, Competitive, Multiplayer",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "Goat Simulator 3",
    "description": "Goat Simulator 3 is a brand new third-person sandbox adventure game in which you get to become the literal GOAT. Just like the first Goat Simulator, you'll need to headbutt, lick and triple-jump your way across the giant island of San Angora .",
    "pc":"pc2",
    "thumbnail": "https://imgs.search.brave.com/YEF9YS-qvu-VQTfyngTftC2_zcSRGWa-WmF-ZIu6LOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmludGVuZG8u/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8v/cV9hdXRvL2Rwcl8x/LjUvc3RvcmUvc29m/dHdhcmUvc3dpdGNo/LzcwMDEwMDAwMDY2/MzYyL2UzOWU2MGYy/YzBhYTdlZmJjYWEw/MDMyMWNiNTY4M2U0/Y2M4NGEzOTIxNzJk/MGJlYWU4ZTc1ODQ2/ODgzMTlhNDc",
    "videoId": "2wkTsOoxqQc",
    "genre": "funny, open-world, simulation",
    "ageRating": "12",
    "trending": true
  },
  {
    "title": "Kamla horror",
    "description": "Step into the eerie world of Kamla's Exorcism, a chilling survival horror game set in 1980s India. Play as a Tantrik Priest tasked with saving a newlywed woman, Kamla, who has become possessed by a dangerous demon. Can you solve ancient puzzles, face her wrath, and perform the exorcism ritual in time?",
    "pc":"pc2",
    "thumbnail": "https://imgs.search.brave.com/T2huJ-_iKXr2ftn-s3rskyRekqXuExuufKOxAkCLy8g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvVlNqZ1BBUkxD/dDAvMC5qcGc",
    "videoId": "vhYQDGWdxyA",
    "genre": "Survival Horror, Horror",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Residence Evil Village",
    "description": "Resident Evil Village is a 2021 survival horror game developed and published by Capcom. It is the sequel to Resident Evil 7: Biohazard (2017) and the eighth main installment in the Resident.",
    "pc":"pc1 | pc2 | pc3",
    "thumbnail": "https://imgs.search.brave.com/kjsJe03X_SXWBYuwNITaVIkPMbuZ6CG83fV8hVqwsJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC84LzUv/Ny8xNDM0MTgtMTky/MHgxMDgwLWRlc2t0/b3AtZnVsbC1oZC1y/ZXNpZGVudC1ldmls/LXZpbGxhZ2UtYmFj/a2dyb3VuZC1waG90/by5qcGc",
    "videoId": "arEdruKxrQ8",
     "genre": "Survival Horror, Horror, Emotional, Story",
    "ageRating": "18",
    "trending": true
  },
 {
    "title": "Euro Truck Simulator2",
    "description": "Euro Truck Simulator 2 is a truck simulator game developed and published by SCS Software for Microsoft Windows, Linux, and macOS and was initially released as open development on 18 October 2012.",
    "pc":"pc0",
    "thumbnail": "https://imgs.search.brave.com/GVG2NHtUzE0Sx3POm6Zdlthh_AJkteunEfy9Hb-PByw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MC8wZS9FdXJvX1Ry/dWNrX1NpbXVsYXRv/cl8yX2NvdmVyLmpw/Zy81MTJweC1FdXJv/X1RydWNrX1NpbXVs/YXRvcl8yX2NvdmVy/LmpwZw",
    "videoId": "5uvwfskYwl0",
    "genre": "Racing Wheel, simulation",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Just Cause 4",
    "description": "Just Cause 4 is a 2018 action-adventure game developed by Avalanche Studios and published by Square Enix. It is the fourth game in the Just Cause series and the sequel to 2015's …",
    "pc":"pc0",
    "thumbnail": "https://imgs.search.brave.com/374iDve6vAYmYEfKLmaprcU4E-IXpM0LE-nP5xXO7xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMxLmlnbmltZ3Mu/Y29tLzIwMTgvMDYv/MTEvanVzdC1jYXVz/ZS00LS0tYnV0dG9u/LTAtMTUyODY5MzE4/ODQzOS5qcGc_Y3Jv/cD0xOjEsc21hcnQm/Zm9ybWF0PWpwZyZh/dXRvPXdlYnAmcXVh/bGl0eT04MA",
    "videoId": "Lfek7Kcq16g",
    "genre": "Fight, open world, survival",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "World War Z: Aftermath",
    "description": "Zombie survival. Battle massive hordes in new, global locations. Intense story episodes, upgraded gameplay, and visceral action for 15 million players, Survival game for with epic story try at once!",
    "pc":"pc1 | pc2 | pc3",
    "thumbnail": "https://i.pinimg.com/736x/39/7d/c4/397dc4777e4190bd6b2459e414565614.jpg",
    "videoId": "EYQk3eDa-V8",
    "genre": "Survival",
    "ageRating": "18",
    "trending": false
  },
  {
    "title": "Speed Storm Disney",
    "description": "An incredible lineup of Disney and Pixar Racers are suited up and revved up for racing combat. Each Racer has a Unique Skill at their disposal. there's a wide range of Unique Skills to master.",
    "pc":"pc2 | pc3",
    "thumbnail": "https://imgs.search.brave.com/M6PFPNeiTdaiv2tf8l9vTo1xecm9vAzGtG4Vfy2De4Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9hcC9ybmQv/MjAyMzA5LzIyMTQv/NWY1NzZhZTI3M2M0/MzU2ODVjNGNkNzdk/MTk1YWQzMGQxOTY5/MDE5YjE2YzhlMzUy/LmpwZw",
    "videoId": "bXOd3Pue-NA",
    "genre": "Multiplayer, Competitive",
    "ageRating": "12",
    "trending": false
  },
  {
    "title": "Fall Guys",
    "description": "Fall Guys: the most playable multiplayer game of YouTube, play this fun Game, Stumble through wacky obstacle courses, compete with friends, or create your own wild levels. Multiplayer mayhem!",
    "pc":"pc0",
    "thumbnail": "https://i.pinimg.com/736x/63/6b/6f/636b6fb101da5efa2e69fa197114c47c.jpg",
    "videoId": "Wj3dUvGLjNQ",
    "genre": "Multiplayer, Competitive",
    "ageRating": "12",
    "trending": false
  },
   {
    "title": "Ghost of Tshushima",
    "description": "Ghost of Tsushima is a 2020 action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. The player controls Jin Sakai, a samurai on a quest to protect Tsushima …",
    "pc":"pc0",
    "thumbnail": "https://imgs.search.brave.com/qi2rZlquCyIumgEiijYTy2eNODzsFl6eHaizeGrQpeQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YXByb3h5LnR2dHJv/cGVzLm9yZy93aWR0/aC8xMjAwL2h0dHBz/Oi8vc3RhdGljLnR2/dHJvcGVzLm9yZy9w/bXdpa2kvcHViL2lt/YWdlcy9naG9zdG9m/dHN1c2hpbWEucG5n",
    "videoId": "RcWk08PBe7k",
    "genre": "Fighting, Sward, Competitive",
    "ageRating": "16",
    "trending": false
  },
  {
    "title": "Call of Duty®: Warzone™",
    "description": "Welcome to Call of Duty®: Warzone™, the massive combat arena. Experience thrilling modes & new gameplay with different maps and tournaments, Get the best experience of war zone, best for action lovers!",
    "pc":"pc0",
    "thumbnail": "https://i.pinimg.com/736x/ec/63/30/ec63301f24e5456516c9cd2754b53166.jpg",
    "videoId": "0E44DClsX5Q",
    "genre": "FPS, Multiplayer, Competitive, Battle Royale",
    "ageRating": "18",
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
                <p>${game.pc}</p>
                
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