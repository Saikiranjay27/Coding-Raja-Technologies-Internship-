document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Perform any additional validation if needed

    // Redirect to the resume builder page
    window.location.href = "htmls.html";
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Registration successful!');
        // Here you can add code to submit the form data to your server
    }
});


