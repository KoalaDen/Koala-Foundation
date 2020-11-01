//hidden left bar
let visiblePart = document.querySelector(".visible-part");
let lsideBar = document.querySelector(".lside-bar");
visiblePart.onmouseenter = function open() {
    lsideBar.classList.add("slide-bar");
}
lsideBar.onmouseleave = function close() {
    lsideBar.classList.remove("slide-bar");
}
//form-sending
let userMessage = document.querySelector("#usermessage");
let buttonSubmit = document.querySelector(".form-submit");
if (buttonSubmit !== null) { 
    buttonSubmit.onclick = function() {
    userMessage.value = "woops, it's just a sample";
    }
}
    