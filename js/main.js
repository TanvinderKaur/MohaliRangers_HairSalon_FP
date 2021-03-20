

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

function LogOut() {
    sessionStorage.setItem("SessionName", null);
    document.getElementById("logged-in").style.display = "none";
    window.location.href = "index.html";
    alert('Logged Out Successfully');
}

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

// added to clear the cart 
function clearCart(){
   localStorage.removeItem("cart");
   location.reload();
}

function checkout(){
    // window.target = "_blank";
     window.location.href = "checkoutForm.html";
    
}


function SignIn() {
    let Email = document.getElementById("formSignIn").elements.Email.value;
    let Pass = document.getElementById("formSignIn").elements.password.value;
    let data = JSON.parse(localStorage.getItem(Email));
    if (data !== null && data.Password === Pass) {
        sessionStorage.setItem("SessionName", data.Email);
        window.location.href = "index.html";
    } else {
        alert('Invalid Login');
    }
}
function SignUp() {
    let data = {
        Email: document.getElementById("formSignUp").elements.Email.value,
        Website: document.getElementById("formSignUp").elements.website.value,
        DOB: document.getElementById("formSignUp").elements.date_of_birth.value,
        Password: document.getElementById("formSignUp").elements.password.value,
        Gender: document.getElementById("formSignUp").elements.gender.value
    }
    localStorage.setItem(data.Email, JSON.stringify(data));
    alert('Registered Successfully.Please login now');
    window.location.href = "signIn.html";
}

function cancel() {
    alert("Order cancelled");
    window.location = "index.html";
    // window.history.back();
  }

function placed(){

    alert("Order placed successfully");
    clearCart();
    window.location = "index.html";


}

$(function () {

    function setHeight() {
        $(".response").each(function (index, element) {
            var target = $(element);
            target.removeClass("fixed-height");
            var height = target.innerHeight();
            target.attr("data-height", height)
                .addClass("fixed-height");
        });
    };

    $("input[name=question]").on("change", function () {
        $("p.response").removeAttr("style");

        var target = $(this).next().next();
        target.height(target.attr("data-height"));
    })

    setHeight();
});
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 3000); // Change image every 2 seconds
// }
