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

function addToCart(elem) {

    var productName = document.getElementById("product-price-" + elem).innerHTML;
    var addCard = '<div class="productCard" id="product-price-' + elem + '" >' + productName + '</div > ';
    var getFavoriteData = localStorage.getItem('cart');
    if (getFavoriteData !== null && getFavoriteData !== '') {
        getFavoriteData += addCard;
    } else {
        getFavoriteData = addCard;
    }
    localStorage.setItem('cart', getFavoriteData);
}
