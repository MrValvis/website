const soundCloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio = document.querySelector('#myAudio');
myAudio.loop = true;

off.addEventListener('click', () => soundTrack('off'));
on.addEventListener('click', () => soundTrack('on'));

const soundTrack = (soundState) => {
    if (soundState === 'off') {
        on.style.display = 'block';
        off.style.display = 'none';
        soundCloud.style.color = "#08fdd8";
        myAudio.currentTime = 0;
        myAudio.volume = 1;
        myAudio.play();
    } else if (soundState === 'on') {
        on.style.display = 'none';
        off.style.display = 'block';
        soundCloud.style.color = "#f50057";
        fadeOutAudio();
    }
};

const fadeOutAudio = () => {
    let fadeAudio = setInterval(() => {
        if (myAudio.volume > 0.05) {
            myAudio.volume -= 0.05;
        } else {
            clearInterval(fadeAudio);
            myAudio.pause();
            myAudio.volume = 1;
        }
    }, 50);
};

// Play music functionality

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const NavLinks = document.querySelector('.nav-links');
const SideNav = document.querySelector('.aside');




btnBars.addEventListener('click', () => myFunc('open')); // User pressed burger menu
btnTimes.addEventListener('click', () => myFunc('close')); // User pressed burger menu X
NavLinks.addEventListener('click', () => myFunc('close')); // User pressed navlink

const myFunc = (navCondition) => {
    if(navCondition === 'open'){
        SideNav.classList.add('show-nav');
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    }
    else if(navCondition === 'close'){
            SideNav.classList.remove('show-nav');
            btnTimes.style.display = "none";
            btnBars.style.display = "block";
    }
}


$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})



// Define a function to initialize Google Analytics tracking
function initializeGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-9XLT4K9MDD');
}

// Call the function to initialize Google Analytics tracking
initializeGoogleAnalytics();
