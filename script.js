// Show Login Page
function showLogin() {
  document.getElementById("login-container").style.display = "block";
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "none";
  document.getElementById("verification-container").style.display = "none";
}

// Show Signup Page
function showSignup() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "block";
  document.getElementById("forgot-password-container").style.display = "none";
  document.getElementById("verification-container").style.display = "none";
}

// Show Forgot Password Page
function showForgotPassword() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "block";
  document.getElementById("verification-container").style.display = "none";
}

// Form validation for login
document.getElementById("login-form").onsubmit = function(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  
  if (email && password) {
    alert("Login successful!");
  } else {
    alert("Please enter both email and password.");
  }
};

// Form validation for signup
document.getElementById("signup-form").onsubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
  } else if (name && email && password) {
    alert("Sign up successful! Check your email for verification.");
    showVerification();
  } else {
    alert("Please fill all fields.");
  }
};

// Form validation for forgot password
document.getElementById("forgot-password-form").onsubmit = function(event) {
  event.preventDefault();
  const email = document.getElementById("forgot-password-email").value;
  
  if (email) {
    alert("Password reset link sent to your email.");
    showLogin();
  } else {
    alert("Please enter your email.");
  }
};

// Show Verification Page
function showVerification() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "none";
  document.getElementById("verification-container").style.display = "block";
}
