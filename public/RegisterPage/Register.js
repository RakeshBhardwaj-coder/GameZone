document.addEventListener('DOMContentLoaded', function() {
    const plans = document.querySelectorAll('.plan');

    plans.forEach(plan => {
        plan.addEventListener('touchstart', function() {
            this.classList.add('hover');
        });

        plan.addEventListener('touchend', function() {
            this.classList.remove('hover');
        });
    });
});

      
// Registering Form page
document.getElementById('register-button').addEventListener('click', function(event) {
    event.preventDefault();
  window.scrollBy({
    top: 300,
    behavior: 'smooth'
});
  fetch('registerPage/registrationForm.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('registerPage').innerHTML = data;
      document.getElementById('allGamesPage').style.display = 'none';
      document.getElementById('registerPage').style.display = 'block'; // Show the registration page

    

    //   Add event listener for form submission
    //   This code is running in index.html but it's from the RegisterForm content
      
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        document.getElementById('registration-form').style.display = 'none'; // Hide registration form
        document.getElementById('paymentForm').style.display = 'block'; // Show payment form
        
      });
      document.getElementById('homePage').addEventListener('click', function() {
            document.getElementById('paymentForm').style.display = 'none';
            document.getElementById('registration-form').style.display = 'block';
        });

        document.getElementById('planSelection').addEventListener('change', function() {
            let selectedPlan = this.value;
            let paymentAmountDisplay = document.getElementById('paymentAmount');
            let validity = document.getElementById('validity');
            let gameplay = document.getElementById('gameplay');
            let package = document.getElementById('package');
            let cost = document.getElementById('cost');
            let accessories = document.getElementById('accessories');
            let steering = document.getElementById('steering');

            let extra = document.getElementById('extra');
            if (selectedPlan === 'bronze') {
                paymentAmountDisplay.textContent = 'Bronze | Pay 250 Rs.';
                validity.textContent = 'Validity: 10 Days';
                gameplay.textContent = 'Total Gameplay: 5 Hours';
                package.textContent = 'Package (10 Card) for ₹150';
                cost.textContent = '30 Minutes/vCard';
                accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                steering.textContent = 'Steering Wheel: ₹10/session';

                extra.textContent = '';
            } else if (selectedPlan === 'silver') {
                paymentAmountDisplay.textContent = 'Silver | Pay 300 Rs.';
                validity.textContent = 'Validity: 15 Days';
                gameplay.textContent = 'Total Gameplay: 8 Hours';
                package.textContent = 'Package (10 Card) for ₹300';
                cost.textContent = '45 Minutes/vCard';
                accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                steering.textContent = '';
                
                extra.textContent = 'Steering Wheel: ₹10/session';
            } else if (selectedPlan === 'gold') {
                paymentAmountDisplay.textContent = 'Gold | Pay 400 Rs.';
                validity.textContent = 'Validity: Forever';
                gameplay.textContent = 'Total Gameplay: 8 Hours';
                package.textContent = 'Package (10 Card) for ₹400';
                cost.textContent = '45 Minutes/vCard';
                accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                steering.textContent = 'Steering Wheel: ₹10/session';
                
                extra.textContent = 'Physical card will be provided';
            } else if (selectedPlan === 'birthdayspecial') {
                paymentAmountDisplay.textContent = 'Birthdayspecial | Pay 100 Rs.';
                validity.textContent = 'Validity: 1 Day';
                gameplay.textContent = 'Total Gameplay: 15-20 Minute';
                package.textContent = 'Package (5 Card) for ₹50';
                cost.textContent = '15-20 Minutes/Card';
                accessories.textContent = 'Gamepad, Keyboard, and Mouse';
                steering.textContent = 'Steering Wheel: ₹10/session';
               
                extra.textContent = 'Physica or virtual card';
            } else {
                paymentAmountDisplay.textContent = '';     }
        });

    //   This code is running in index.html but it's from the RegisterForm content End 


    });
});

        document.getElementById('home').addEventListener('click', function() {
            document.getElementById('registerPage').style.display = 'none';
            document.getElementById('allGamesPage').style.display = 'block';
            filterGames('all');
        });

// Registering Form page end 