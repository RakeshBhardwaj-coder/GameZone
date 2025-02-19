   
// day/night button
    const nightModeBtn = document.getElementById('night-mode-button');
    const body2 = document.body;
    nightModeBtn.addEventListener('click',function(){
      //  document.body.style.backgroundColor = "black"; 

      body2.classList.toggle('night-mode');
      if (body2.classList.contains('night-mode')) {
          this.textContent = "Light Mode";
      } else {
          this.textContent = "Night Mode";
      }
   
   
});

const checkbox = document.querySelector('.switch input'); // Select the checkbox
const body = document.body; // Or a specific element you want to apply dark mode to

checkbox.addEventListener('change', function() {
  body.classList.toggle('night-mode');
  if (this.checked) {
    document.body.style.backgroundColor = "black"
    body.classList.add('dark-mode'); // Add dark mode class
    this.textContent = "Night Mode";
  } else {
    body.classList.remove('dark-mode'); // Remove dark mode class
    this.textContent = "Light Mode";
    document.body.style.backgroundColor = "white"

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


