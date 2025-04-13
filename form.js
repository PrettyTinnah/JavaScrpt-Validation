document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");
    const successMessage = document.getElementById("successMessage");
  
    let isValid = true;
  
    // Reset all errors
    document.querySelectorAll(".form-group").forEach(group => {
      group.classList.remove("error");
      group.querySelector("small").textContent = "";
    });
  
    // Name validation
    if (name.value.trim().length < 3) {
      showError(name, "Name must be at least 3 characters");
      isValid = false;
    }
  
    // Email validation
    if (!validateEmail(email.value)) {
      showError(email, "Enter a valid email address");
      isValid = false;
    }
  
    // Password validation
    if (!validatePassword(password.value)) {
      showError(password, "Password must be 8+ chars with upper, lower & number");
      isValid = false;
    }
  
    // Confirm password validation
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
      showError(confirmPassword, "Passwords do not match");
      isValid = false;
    }
  
    // Terms checkbox
    if (!terms.checked) {
      showError(terms, "You must accept the terms");
      isValid = false;
    }
  
    if (isValid) {
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.display = "block";
      document.getElementById("registrationForm").reset();
    }
  });
  
  function showError(inputElement, message) {
    const group = inputElement.closest(".form-group");
    group.classList.add("error");
    group.querySelector("small").textContent = message;
  }
  
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  function validatePassword(password) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return pattern.test(password);
  }
  