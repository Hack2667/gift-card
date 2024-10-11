"use strict";

// Select all the claim buttons
const claimBtns = document.querySelectorAll('.claim-btn');

// Define an array of creative titles
const creativeTitles = [
  'Unwrap Your Free Gift Card Now!',
  'Claim Your Discounted Gift Card Today!',
  'Get Your Free Gift Card Before It\'s Too Late!',
  'Limited Time Offer: Get a Free Gift Card Now!',
  'Don\'t Miss Out on Your Chance to Claim a Gift Card!'
];

// Add a click event listener to each claim button
claimBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Generate a random number between 0 and the length of the creativeTitles array
    const randomNum = Math.floor(Math.random() * creativeTitles.length);
    // Update the header title with the randomly selected creative title
    document.querySelector('.title').textContent = creativeTitles[randomNum];
  });
});



// code in verify page

const form = document.getElementById("gift-form");
const emailInput = document.getElementById("email");
const robotCheckbox = document.getElementById("robot");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

// Form submission event listener
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  
  // Validate email
  if (!validateEmail(email)) {
    showError("Please enter a valid email address");
    return;
  }
  
  // Verify checkbox
  if (!robotCheckbox.checked) {
    showError("Please verify that you're not a robot");
    return;
  }
  
  // Submit form
  showSuccess(`Thank you! Your gift card will be sent to ${email} shortly.`);
  form.reset();
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
  successMessage.classList.remove("show");
}

// Show success message
function showSuccess(message) {
  successMessage.textContent = message;
  successMessage.classList.add("show");
  errorMessage.classList.remove("show");
}


