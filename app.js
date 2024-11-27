document.getElementById('loginForm').onsubmit = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;



    
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    else if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false; // Prevent form submission
    }

    // Additional validation can be added here
    return true; // Allow form submission
};