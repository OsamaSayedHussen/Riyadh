// Menu-Detalis
let MenuDetalis = document.querySelector(".list").onclick = function () {
    document.querySelector("ul").classList.toggle("oping");
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