document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

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
        
    }
});


