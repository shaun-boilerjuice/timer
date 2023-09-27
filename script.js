// Set the countdown date
const endDate = new Date('2023-09-29 23:59:00 BST');

// Get the current date
const currentDate = new Date();

// Calculate the difference between the two dates
const diff = endDate - currentDate;

// Convert the difference to milliseconds
const milliseconds = diff.getTime();

// Create a function to update the countdown timer
function updateCountdown() {
  // Get the milliseconds remaining until the end date
  const remainingMilliseconds = endDate - new Date();

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(remainingMilliseconds / 1000 / 60 / 60 / 24);
  const hours = Math.floor(remainingMilliseconds / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(remainingMilliseconds / 1000 / 60) % 60;
  const seconds = Math.floor(remainingMilliseconds / 1000) % 60;

  // Update the countdown timer display
  document.getElementById('counter').innerHTML = `
    <li>${days} days</li>
    <li>${hours} hours</li>
    <li>${minutes} minutes</li>
    <li>${seconds} seconds</li>
  `;
}

// Start the countdown timer
updateCountdown();

// Update the countdown timer every second
setInterval(updateCountdown, 1000);
