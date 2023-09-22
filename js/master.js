// Mega-Menu
let services = document.querySelector("#services").onclick = function () {
    document.querySelector(".mega-menu").classList.toggle("open");
}

// buttom Up
let span = document.querySelector(".up");
window.onscroll = function (){
    this.scrollY >= 600 ? span.classList.add("show"): span.classList.remove("show");
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// Landing Page
let Landing = document.querySelector(".landing");
let imgsArray = ["b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg", "b5.jpg"];
setInterval( () => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    Landing.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
}, 6000)
// form submit
document.getElementById("register").onsubmit = function (e) {
    let errorData = document.querySelector(".error");
    let submitUser = document.querySelectorAll(".input")[0].value;
    let usernameRe = /^[a-z0-9-أ-ى]{2,16}$/ig;
    let validationUser = usernameRe.test(submitUser);

    let submitEmail = document.querySelectorAll(".input")[1].value;
    let mailsRe = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,9})$/ig;
    let validationEmail = mailsRe.test(submitEmail);
    
    if (validationUser === false || validationEmail === false) {
        e.preventDefault();
        errorData.style.opacity = 1;
    }
    return true
}

// Cerate Popup with The Image
let ourGallery = document.querySelectorAll(".box .image img");

ourGallery.forEach(img => {
    img.addEventListener('click',(e) => {
        // Create Overlay Element
        let overlay = document.createElement("div");
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
        
        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';

        let popupImg = document.createElement("img");
        popupImg.src = img.src;

        popupBox.appendChild(popupImg);
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("X");
        closeButton.appendChild(closeButtonText);
        closeButton.className = 'close-button';
        popupBox.appendChild(closeButton);
    })
});
// Close Popup
document.addEventListener("click", function (e){
    if (e.target.className == 'close-button') {
        e.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove()
    }
});
