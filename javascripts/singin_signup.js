var signUpBTN;
var signInBTN;

var overlayContainer;
var overlayphoto;

var signInForm;
var signUpForm;

function transformElement(element, value) {
    element.style.cssText = "transform: translate3d(" + value + ", 0px, 0px); transform-origin: right center; transition-property: transform; transition-duration: 0.5s; transition-delay: 0s; transition-timing-function: ease-in-out;";
}

function zindexElement(element, value) {
    element.style.zIndex = value;
}

function signUPFaceMethod() {
    overlayphoto.classList.toggle("overlay-photo-right", false);
    overlayContainer.classList.toggle("overlay-container-right", false);

    overlayphoto.classList.toggle("overlay-photo-left", true);
    overlayContainer.classList.toggle("overlay-container-left", true);
    
    transformElement(signInForm, "320px");
    transformElement(signUpForm, "320px");

    setTimeout(zindexElement, 300, signUpForm, 2);
    setTimeout(zindexElement, 300, signInForm, 1);
}

function signINFaceMethod() {
    overlayphoto.classList.toggle("overlay-photo-left", false);
    overlayContainer.classList.toggle("overlay-container-left", false);

    overlayphoto.classList.toggle("overlay-photo-right", true);
    overlayContainer.classList.toggle("overlay-container-right", true);

    transformElement(signInForm, "0px");
    transformElement(signUpForm, "0px");
}


window.onload = function() {
    overlayContainer = document.querySelector(".overlay-container");
    overlayphoto = document.querySelector(".overlay-photo");

    signUpBTN = document.querySelector(".signup-BTN");
    signInBTN = document.querySelector(".signin-BTN");

    signInForm = document.querySelector(".signin");
    signUpForm = document.querySelector(".signup");

    signUpBTN.addEventListener("click", function(e) {
        signUPFaceMethod();
    }, false);

    signInBTN.addEventListener("click", function(e) {
        signINFaceMethod();
    }, false);
};