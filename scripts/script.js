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

    if(e.propertyName !== 'transform')return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key=>key.addEventListener("transitionend",removeTransition))// untransitions
window.addEventListener("keydown", playSound);

const localStorage = window.localStorage;

const themes = document.querySelectorAll(".theme-buttons");

function makeDarker(){
    let darks = document.querySelectorAll("#dark");
    darks.forEach(dark=>{
        dark.classList.remove('dark');
        dark.id="darker";
    })
}

function makeDark(){
    let darks = document.querySelectorAll("#darker");
    if(!darks)return;
    darks.forEach(dark=>{
        dark.classList.remove('dark');
        dark.id="dark";
    })
}

const darkerButton = document.querySelector(".darker");
darkerButton.addEventListener("click", makeDarker)

const darkButton = document.querySelector(".dark");
darkButton.addEventListener("click", makeDark)