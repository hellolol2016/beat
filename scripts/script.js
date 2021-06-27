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

const sessionStorage = window.sessionStorage;

const themes = document.querySelectorAll(".theme-buttons");

console.log(sessionStorage.getItem('darkness'))
let darks = document.querySelectorAll("#dark");
darks.forEach(dark=>{
    dark.classList.remove('dark');
    if(sessionStorage.getItem('darkness')===null){
        return;
    }
    dark.id=sessionStorage.getItem('darkness');
})
function makeDarker(){
    darks = document.querySelectorAll("#dark");
    sessionStorage.setItem('darkness', 'darker');
    darks.forEach(dark=>{
        dark.classList.remove('dark');
        dark.id=sessionStorage.getItem('darkness');
    })
}

function makeDark(){
    let darkers = document.querySelectorAll("#darker");
    sessionStorage.setItem('darkness', 'dark');
    if(!darkers)return;
    darkers.forEach(darker=>{
        darker.classList.remove('darker');
        darker.id=sessionStorage.getItem('darkness');
    })
}

const darkerButton = document.querySelector(".darker");
darkerButton.addEventListener("click", makeDarker)

const darkButton = document.querySelector(".dark");
darkButton.addEventListener("click", makeDark)