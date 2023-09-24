if (localStorage.getItem("user")) {
    var user = JSON.parse(localStorage.getItem("user"));

    var user_name = document.getElementById("name");
    var email = document.getElementById("email");
    var token = document.getElementById("token");
    var password = document.getElementById("password");

    user_name.innerHTML = `Full Name : ${user.name}`;
    email.innerHTML = `Email : ${user.email}`;
    token.innerHTML = `Token : ${localStorage.getItem("token")}`;
    password.innerHTML = `Password : ${user.password}`;

} else {
    location.href='./index.html';
}

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    location.href='./index.html';
});