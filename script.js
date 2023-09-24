const signUp = document.getElementById("submit");
var message = document.getElementById("message");

signUp.addEventListener("click", () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirmation-password").value;

    if (name == '' || email == '' || password == '' || confirm_password == '') {
        displayMessage("Error: All fields are mandatory!");
    } else if (password !== confirm_password) {
        displayMessage("Error: Passwords & Confirm Password should be same!");
    } else {
        displayMessage("");
        let user = {
            name: name,
            email: email,
            password: password
        };

        storeUserAndCreateToken(user);
    }

});

function storeUserAndCreateToken(user) {

    let token = "";
    for (var i = 0; i < 16; i++) {
        token += String.fromCharCode(Math.floor(Math.random() * 256));
    }

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", btoa(token));  // Used btoa for base-64 encoding

    displayMessage("Successfully Signed Up!");

    location.href = "./profile.html";
}

function displayMessage(error) {
    message.innerHTML = error;
}

if (localStorage.getItem("user")) {
    location.href = "./profile.html";
}