function addAccount() {
    var response = "";
    var jsonData = {};
    jsonData.name = document.getElementById("name").value;
    jsonData.email = document.getElementById("email").value;
    jsonData.password = document.getElementById("password").value;

    if (jsonData.name === "" || jsonData.email === "" || jsonData.password === "") {
        document.getElementById("message").innerHTML = 'All fields are required!';
        document.getElementById("message").setAttribute("class", "text-danger");
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(jsonData.email)) {
        document.getElementById("message").innerHTML = 'Please enter a valid email!';
        document.getElementById("message").setAttribute("class", "text-danger");
        return;
    }

    var request = new XMLHttpRequest();
    request.open("POST", "/add-account", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.message === 'Account created successfully') {
            document.getElementById("message").innerHTML = 'Added Account: ' + jsonData.name + '!';
            document.getElementById("message").setAttribute("class", "text-success");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            window.location.href = 'login.html';
        } else {
            document.getElementById("message").innerHTML = response.message || 'Unable to add account. Please try again.';
            document.getElementById("message").setAttribute("class", "text-danger");
        }
    };
    request.send(JSON.stringify(jsonData));
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert('Email and password are required!');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert('Invalid email format');
        return;
    }

    const request = new XMLHttpRequest();
    request.open("POST", "/login-account", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        const response = JSON.parse(request.responseText);
        if (response.message === 'Login successful') {
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert(response.message || 'Login failed');
        }
    };

    request.send(JSON.stringify({ email, password }));
}
