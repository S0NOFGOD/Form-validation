document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");

  if(name === "" || email === "") {
    error.textContent = "Please fill all fields!";
    error.style.color = "red";
  } else {
    error.textContent = "Form submitted successfully!";
    error.style.color = "green";
  }
});