// start point / top 

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
// import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
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

function toggleMute() {
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
}



// 

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

// Scroll-up button

function pageUpBtn() {

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
  if (this.value) {
    clearButton.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
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

// Registration button

// const registrationLink = document.getElementById("registrationBtn");

// registrationLink.addEventListener("click", function(event) {
//     event.preventDefault();

//     registrationLink.classList.add("registration-animation");

//     setTimeout(function() {
//         window.open("https://docs.google.com/forms/d/e/1FAIpQLScOIY7SgAUQpdpZ16ZacbiFyq1VVk2evw9-KvgUFC_PdE76_Q/viewform?usp=sharing", "_blank");
//         registrationLink.classList.remove("registration-animation");
//     }, 1000); // Increased to 1000ms for a more elaborate animation
// });
// Registration button End

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
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
  });
  // Register Page
  fetch('registerPage/plans.html')
    .then(response => response.text())
    .then(data => {

      document.getElementById('place-for-plans').innerHTML = data;


      document.getElementById('all-games-place').style.display = 'none';
      document.getElementById('place-for-plans').style.display = 'block';

      // Back button functionality inside index.html
      document.getElementById('plans-to-home-btn').addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        document.getElementById('all-games-place').style.display = 'block';
        document.getElementById('place-for-plans').style.display = 'none';
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

              document.getElementById('place-for-reg-and-pay-form').innerHTML = data;

              //getting plans in registratoin page from plans.html
              document.getElementById('planSelection').value = selectedPlan;
              // Show the registration page

              document.getElementById('all-games-place').style.display = 'none';
              document.getElementById('place-for-reg-and-pay-form').style.display = 'block';
              document.getElementById('place-for-plans').style.display = 'none';




              document.getElementById('reg-to-plans-btn').addEventListener("click", function (event) {
                event.preventDefault();
                document.getElementById('place-for-reg-and-pay-form').style.display = 'none';
                document.getElementById('place-for-plans').style.display = 'block';

              });
              //   Add event listener for form submission
              //   This code is running in index.html but it's from the RegisterForm content

              document.getElementById('open-payment-page-btn').addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default form submission

                document.getElementById('registration-form').style.display = 'none'; // Hide registration form
                document.getElementById('paymentForm').style.display = 'block'; // Show payment form

              });

              document.getElementById('payment-to-reg-form-btn').addEventListener('click', function () {
                document.getElementById('paymentForm').style.display = 'none';
                document.getElementById('registration-form').style.display = 'block';
              });

              document.getElementById('planSelection').addEventListener('change', function () {
                let selectedPlan = this.value;
                let paymentAmountDisplay = document.getElementById('pay-amount-show');
                let validity = document.getElementById('validity');
                let gameplay = document.getElementById('gameplay');
                let gamePackage = document.getElementById('package');
                let cost = document.getElementById('cost');
                let accessories = document.getElementById('accessories');
                let steering = document.getElementById('steering');

                let extra = document.getElementById('extra');
                if (selectedPlan === 'bronze') {
                  paymentAmountDisplay.textContent = 'Bronze | Pay 250 Rs.';
                  validity.textContent = 'Validity: 10 Days';
                  gameplay.textContent = 'Total Gameplay: 5 Hours';
                  gamePackage.textContent = 'gamePackage (10 Card) for ₹150';
                  cost.textContent = '30 Minutes/vCard';
                  accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                  steering.textContent = 'Steering Wheel: ₹10/session';

                  extra.textContent = '';
                } else if (selectedPlan === 'silver') {
                  paymentAmountDisplay.textContent = 'Silver | Pay 300 Rs.';
                  validity.textContent = 'Validity: 15 Days';
                  gameplay.textContent = 'Total Gameplay: 8 Hours';
                  gamePackage.textContent = 'gamePackage (10 Card) for ₹300';
                  cost.textContent = '45 Minutes/vCard';
                  accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                  steering.textContent = '';

                  extra.textContent = 'Steering Wheel: ₹10/session';
                } else if (selectedPlan === 'gold') {
                  paymentAmountDisplay.textContent = 'Gold | Pay 400 Rs.';
                  validity.textContent = 'Validity: Forever';
                  gameplay.textContent = 'Total Gameplay: 8 Hours';
                  gamePackage.textContent = 'gamePackage (10 Card) for ₹400';
                  cost.textContent = '45 Minutes/vCard';
                  accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                  steering.textContent = 'Steering Wheel: ₹10/session';

                  extra.textContent = 'Physical card will be provided';
                } else if (selectedPlan === 'birthdayspecial') {
                  paymentAmountDisplay.textContent = 'Birthdayspecial | Pay 100 Rs.';
                  validity.textContent = 'Validity: 1 Day';
                  gameplay.textContent = 'Total Gameplay: 15-20 Minute';
                  gamePackage.textContent = 'gamePackage (5 Card) for ₹50';
                  cost.textContent = '15-20 Minutes/Card';
                  accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                  steering.textContent = 'Steering Wheel: ₹10/session';

                  extra.textContent = 'Physica or virtual card';
                } else {
                  paymentAmountDisplay.textContent = '';
                }
              });

              //   This code is running in index.html but it's from the RegisterForm content End 


            });
        });
      });


      document.getElementById('home').addEventListener('click', function () {
        document.getElementById('place-for-reg-and-pay-form').style.display = 'none';
        document.getElementById('place-for-plans').style.display = 'none';

        document.getElementById('all-games-place').style.display = 'block';
        filterGames('all');
      });

      document.getElementById('top-10-games').addEventListener('click', function () {
        document.getElementById('place-for-reg-and-pay-form').style.display = 'none';
        document.getElementById('place-for-plans').style.display = 'none';
        document.getElementById('all-games-place').style.display = 'block';
        showTrendingGames();
      });
      // Registering Form page end 

    })
    .catch(error => {
      console.error('Error loading page:', error);
      document.getElementById('place-for-reg-and-pay-form').innerHTML = "<p>Error loading content.</p>";
      document.getElementById('place-for-reg-and-pay-form').style.display = 'block';
    });
});

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
      document.getElementById('place-for-user-signup').innerHTML = data;
      document.getElementById('all-games-place').style.display = 'none';
      document.getElementById('place-for-user-signup').style.display = 'block';


      // handle forgot button in signupPage
      document.getElementById('forgotpass-page-btn').addEventListener('click', function (event) {
        event.preventDefault();
        fetch('account/forgotPassword.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('place-for-user-forgotPassword').innerHTML = data;
            document.getElementById('place-for-user-signup').style.display = 'none';
            document.getElementById('place-for-user-forgotPassword').style.display = 'block';

            // handle backto-signup Page in forgot page to signup page
            // back to signup page 
            document.getElementById('loginPageBtn').addEventListener('click', function () {
              document.getElementById('place-for-user-signup').style.display = 'block';
              document.getElementById('place-for-user-forgotPassword').style.display = 'none';
              // event.preventDefault();
              //   fetch('account/login.html')
              //   .then(response => response.text())
              //   .then(data => {
              // document.getElementById('place-for-user-login').innerHTML = data;
              //       document.getElementById('place-for-user-forgotPassword').style.display = 'none';
              //       document.getElementById('place-for-user-login').style.display = 'block';

              //   });

              // handle forgot button for signupPage

              // document.getElementById('forgotPageBtn').addEventListener('click', function () {
              //   document.getElementById('place-for-user-forgotPassword').style.display = 'block';
              //   document.getElementById('place-for-user-login').style.display = 'none';


              // });

            });
            // back to login page end

          });


      });

      // handle login page in signup Page 

      document.getElementById('login-Page-Btn').addEventListener('click', function (event) {
        window.scrollBy({
          top: 300,
          behavior: 'smooth'
        });
        event.preventDefault();
        fetch('account/login.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('place-for-user-login').innerHTML = data;
            document.getElementById('place-for-user-login').style.display = 'block';
            document.getElementById('place-for-user-signup').style.display = 'none';

            // handle forgot page in login page by signup page
            document.getElementById('forgotPageBtn').addEventListener('click', function (event) {
              event.preventDefault();
              fetch('account/forgotPassword.html')
                .then(response => response.text())
                .then(data => {
                  document.getElementById('place-for-user-forgotPassword').innerHTML = data;
                  document.getElementById('place-for-user-login').style.display = 'none';
                  document.getElementById('place-for-user-forgotPassword').style.display = 'block';


                  // handle back to login page in forgot page by signup page
                  document.getElementById('loginPageBtn').addEventListener('click', function () {
                    document.getElementById('place-for-user-login').style.display = 'block';
                    document.getElementById('place-for-user-forgotPassword').style.display = 'none';
                  });
                });

            });


            // back to signup Page
            document.getElementById('signupBtn').addEventListener('click', function () {

              document.getElementById('place-for-user-login').style.display = 'none';
              document.getElementById('place-for-user-signup').style.display = 'block';
            });
            // back to signup page end


            // script for login
            const loginForm = document.getElementById("loginForm");

            loginForm.addEventListener("submit", (event) => {
              event.preventDefault();
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;

              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  const user = userCredential.user;
                  console.log("User logged in:", user);
                  alert("Login Successfully!!!");

                  // Redirect to a dashboard or home page after successful login
                  window.location.href = "index.html"; // Replace with your desired page
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.error("Login error:", errorCode, errorMessage);
                  alert("Login failed: " + errorMessage);
                });
            });
            // script for login end

          });




      });
      // login page end


      // script for signup page button 
      const signupForm = document.getElementById("signupForm");
      const signupButton = document.getElementById("signUpBtn");
      const loadingBar = document.querySelector(".loadingBar");
      const signupContainer = document.querySelector(".signup-container");
      const alertText = document.getElementById("alert-text");
      
      signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
      
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const username = document.getElementById("username").value;
      
        // Show loading indicator
        signupContainer.style.display = "none";
        loadingBar.style.display = "block";
        alertText.textContent = "";
      
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
      
            return sendEmailVerification(user); // Send verification email
          })
          .then(() => {
            alertText.textContent =
              "Verification email sent. Please check your inbox!";
            return updateProfile(auth.currentUser, { displayName: username });
          })
          .then(() => {
            console.log("Username updated");
            // You can redirect to a "verify email" page or show a message.
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Signup error:", errorCode, errorMessage);
      
            if (errorCode === "auth/email-already-in-use") {
              alertText.textContent = "Email is already registered.";
              // Check if the user is verified
              auth.fetchSignInMethodsForEmail(email).then((signInMethods) => {
                if (signInMethods.length > 0) {
                  auth.getUserByEmail(email).then((userRecord) => {
                    if (userRecord.emailVerified) {
                      alertText.textContent =
                        "Email is already registered and verified. Please proceed to login.";
                    } else {
                      alertText.textContent =
                        "Email is already registered but not verified. Please verify your email. We've sent a new verification link.";
                      auth.sendSignInLinkToEmail(email, {
                        url: "YOUR_REDIRECT_URL", // Replace with your actual redirect URL
                        handleCodeInApp: true, // This is true when your app will handle the action code.
                      }).then(() => {
                        console.log("Verification link sent");
                      }).catch((err) => {
                        console.log("Error sending verification link", err);
                      });
                    }
                  }).catch((err) => {
                    console.log("Error getting user", err);
                  });
                }
              });
            } else {
              alertText.textContent = "Signup failed: " + errorMessage;
            }
          })
          .finally(() => {
            signupContainer.style.display = "block";
            loadingBar.style.display = "none";
          });
      });
      
      // Assuming 'auth' is your Firebase Auth instance
      onAuthStateChanged(auth, (user) => {
        if (user) {
          if (user.emailVerified) {
            console.log("Email verified!");
            alertText.textContent = "Email Verified! You can now proceed.";
            // Example:
            // saveUserDataToFirestore(user); // Function to save data to Firestore
            // window.location.href = "dashboard.html"; // Redirect to dashboard
          } else {
            console.log("Email is not verified. Please verify!");
            alertText.textContent = "Please verify your email to continue.";
          }
        }
      });
      
      // // (Optional) Function to save user data to Firestore
      // async function saveUserDataToFirestore(user) {
      //   try {
      //     const username = document.getElementById("username").value;
      //     await setDoc(doc(db, "users", user.uid), {
      //       username: username,
      //       email: user.email,
      //       uid: user.uid,
      //     });
      //     console.log("User data saved to Firestore.");
      //   } catch (error) {
      //     console.error("Error saving user data:", error);
      //     alertText.textContent = "Error saving user data.";
      //   }
      // }
      // script for signup page button end


    });



});




// user login page end

// Home Link Functionality
document.getElementById('home').addEventListener('click', function () {
  //this will back to filter normal
  // choos
  filterGames('all');
  document.getElementById('all-games-place').style.display = 'block';
  document.getElementById('place-for-reg-and-pay-form').style.display = 'none';
  document.getElementById('place-for-plans').style.display = 'none';
  document.getElementById('place-for-user-login').style.display = 'none';



});
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

// trending button

// document.addEventListener('DOMContentLoaded', function () {
//   const  top10GamesBtn = document.getElementById(" top-10-games");


//   //auto-scroll
// //   top10GamesBtn.addEventListener('click', function (event) {
// //     event.preventDefault(); // Prevent the default anchor behavior

// //     const imageElement = document.getElementById('gameContainer');

// //     // if (imageElement) {
// //     //   imageElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll and center the image
// //     // }
// //   showTrendingGames();

// //   });


// //   //  top10GamesBtn.addEventListener("click", function (event) {
// //   //   event.preventDefault();


// //   // });

// // });
document.getElementById('top-10-games').addEventListener('click', function () {
  showTrendingGames();
});


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