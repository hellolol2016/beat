const keys = document.querySelectorAll(".key");
keys.forEach(key=>key.addEventListener(""))// untransitions

function playSound(k){
    const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${k.keyCode}"]`);
    if(!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    setTimeout(()=>audio.play(), 100)
}
window.addEventListener("keydown", playSound);