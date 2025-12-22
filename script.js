const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission

  // Clear previous errors
  clearErrors();

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required");
    isValid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Email is invalid");
    isValid = false;
  }

  // Password validation
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, "Password is required");
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully ✅");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.parentElement.querySelector(".error");
  error.innerText = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.innerText = "");
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}