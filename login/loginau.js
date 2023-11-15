document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is already logged in
    checkLoggedInStatus();
});

function toggleForm() {
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
    document.getElementById('loginForm').style.display = (document.getElementById('loginForm').style.display === 'none') ? 'block' : 'none';
    document.getElementById('registerContainer').style.display = (document.getElementById('registerContainer').style.display === 'none') ? 'block' : 'none';
}

function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (newUsername && newPassword) {
        // Check if the username is already taken
        if (!getUserByUsername(newUsername)) {
            const newUser = {
                username: newUsername,
                password: newPassword,
            };

            // Save the new user to localStorage
            saveUser(newUser);

            // Reset the form
            document.getElementById('newUsername').value = '';
            document.getElementById('newPassword').value = '';

            alert('Registration successful! You can now login.');
            toggleForm();
        } else {
            alert('Username is already taken. Please choose another one.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const user = getUserByUsername(username);

        if (user && user.password === password) {
            // Store user information in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(user));

            // Show the secured page
            showSecuredPage();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } else {
        alert('Please enter both username and password.');
    }
}

function checkLoggedInStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        showSecuredPage();
    }
}

function showSecuredPage() {
    const loginContainer = document.getElementById('loginContainer');
    const securedPage = document.getElementById('securedPage');

    loginContainer.style.display = 'none';
    securedPage.style.display = 'block';
}

function logout() {
    // Clear the logged-in user information from localStorage
    localStorage.removeItem('loggedInUser');

    // Reload the page to show the login form again
    location.reload();
}

function getUserByUsername(username) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.username === username);
}

function saveUser(user) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
