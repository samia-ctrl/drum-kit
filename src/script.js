function playSound(event) {
let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
let key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
if (!audio) return;
audio.currentTime= 0;
audio.play();
key.classList.add("playing");
};
function removeTransition(event) {
if (event.propertyName !== "transform") return;
this.classList.remove("playing")}

let keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound);