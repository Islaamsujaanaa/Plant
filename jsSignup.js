// script.js

// Variables to keep track of login attempts
let attempts = 3;

// Function to validate the login form
function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace the following condition with your actual validation logic
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
        window.location.href = "login-success.html"; // Redirect to the success page
    } else {
        attempts--;
        alert(`Incorrect credentials. ${attempts} attempts left.`);

        if (attempts === 0) {
            // Disable form fields after 3 failed attempts
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
    }
}

// Example usage:
// In your HTML, make sure you have an input field with id="username",
// an input field with id="password", and a button with id="submit".
// The button's onclick attribute should call the validate() function.
