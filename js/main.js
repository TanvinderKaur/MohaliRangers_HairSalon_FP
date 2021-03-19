$(document).ready(function () {
    if (sessionStorage.getItem('SessionName') != ' ') {
        document.getElementById("login-user").innerHTML = sessionStorage.getItem('SessionName');
        document.getElementById("logged-sign-in").style.display = "none";
        document.getElementById("logged-in").style.display = "none";
    } else {
        document.getElementById("login-user").style.display = "none";
        document.getElementById("logoutId").style.display = "none";
        document.getElementById("wishlist-page").style.display = "none";

    }

});