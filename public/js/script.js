const searchButton = document.getElementById('search-btn');

// Now you can work with the button element:
searchButton.addEventListener('click', function() {
    console.log('Search button clicked!');
    // ... your code here ...
});

const nightModeButton = document.getElementById('night-mode-button');
const body = document.body;

nightModeButton.addEventListener('click', function() {
  body.classList.toggle('night-mode');
  if (body.classList.contains('night-mode')) {
      this.textContent = "Light Mode";
  } else {
      this.textContent = "Night Mode";
  }
});


const myParagraph = document.getElementById('myParagraph');
    const myButton = document.getElementById('myButton');

    // 2. Add an event listener to the button
    myButton.addEventListener('click', function() {
      // 3. Code to run when the button is clicked

      // Change the text of the paragraph
      myParagraph.textContent = "The text has been changed!";

      // Change the button's text
      this.textContent = "Text changed!";

      // Change the color of the paragraph (inline style)
      myParagraph.style.color = "blue";

      // You can also change styles using CSS classes (better approach)
      // myParagraph.classList.add('highlighted'); // Add a class

      // Log a message to the console (for debugging)
      console.log("Button clicked!");
    });
