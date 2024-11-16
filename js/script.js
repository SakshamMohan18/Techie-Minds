// Navbar functionality
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
};
document.querySelector('#nav-close').onclick = () => {
  navbar.classList.remove('active');
};

// Search form functionality
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.add('active');
};
document.querySelector('#close-search').onclick = () => {
  searchForm.classList.remove('active');
};

// Header active state on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }

  // Water Tracker functionality
  const waterTracker = document.getElementById('waterTracker');

  // Event listener for click
  waterTracker.addEventListener('click', () => {
    // Prompt user for water intake and hydration level
    const waterIntake = prompt("Enter your water intake in ml:");
    const hydrated = prompt("How hydrated do you feel? (Rate 0-10)");

    // Validate water intake
    if (!waterIntake || isNaN(waterIntake) || waterIntake <= 0) {
      alert("Invalid input. Please enter a valid positive number for water intake.");
    } else {
      alert(`You logged ${waterIntake.trim()} ml of water intake.`);
      console.log(`Water intake recorded: ${waterIntake.trim()} ml`);
    }

    // Validate hydration level
    if (!hydrated || isNaN(hydrated) || hydrated < 0 || hydrated > 10) {
      alert("Invalid input. Please enter a hydration level between 0 and 10.");
    } else {
      alert(`You feel ${hydrated.trim()} out of 10 hydrated.`);
      console.log(`Hydration level recorded: ${hydrated.trim()}`);
    }
  });
};
