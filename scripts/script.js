///////////////////////////PLAYING SOUND//////////////////////////////////
function playSound(k){
    const audio = document.querySelector(`audio[data-key="${k.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${k.keyCode}"]`);
    if(!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e){
    console.log("remove");
    if(e.propertyName !== 'transform')return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key=>key.addEventListener("transitionend",removeTransition))// untransitions
window.addEventListener("keydown", playSound);


const themes = document.querySelectorAll(".theme-buttons");
themes.forEach(theme=>theme.addEventListener('click',(theme)=>{
    const body = document.querySelector('body');
    const themeName = theme.className();
    body.id = themeName;
}))