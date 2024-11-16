
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form field values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Invalid email format!');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // If validations pass
  alert('Registration successful!');
  form.reset(); // Reset the form
});
