// script.js

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Replace the following condition with your actual validation logic
    if (email === "your@email.com" && password === "yourpassword") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
