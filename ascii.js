window.onload = () => {
    // var frame = document.getElementById("frame");
    // const bikeArr = ANIMATIONS['BIKE'].match(/[^=]+=====/g);
    // var i = 0;
    // setInterval(function () {
    //     if (i < bikeArr.length) {
    //         frame.innerHTML = bikeArr[i];
    //         i++;
    //     }
    // }, 150);
};

var play = true;
var time = 150;
var interval;

function disableButtons(stateBtn1, stateBtn2, stateBtn3, stateBtn4, stateBtn5) {
    var start = document.getElementById("start");
    start.disabled = stateBtn1;
    var stop = document.getElementById("stop");
    stop.disabled = stateBtn2;
    var animSelect = document.getElementById("animation");
    animSelect.disabled = stateBtn3;
    var sizeSelect = document.getElementById("size");
    sizeSelect.disabled = stateBtn4;
    var turboCheckbox = document.getElementById("turbo");
    turboCheckbox.disabled = stateBtn5;
}

function startAnimation(animArr) {
    var frame = document.getElementById("frame");
    var i = 0;
    play = true;
    if (play) {
        interval = setInterval(function () {
            if (i < animArr.length) {
                frame.innerHTML = animArr[i];
                i++;
            } else if (i == animArr.length) {
                i = 0;
            }
        }, time);
    }
    disableButtons(true, false, true, true, true);
}

function setTurbo() {
    var turbo = document.getElementById("turbo");
    if (turbo.checked)
        time = 50;
    else time = 150;
}

function stop() {
    play = false;
    clearInterval(interval);
    disableButtons(false, true, false, false, false);
}

var animation = "BLANK";

function start() {
    if (animation != "BLANK") {
        const animArr = getAnimationArr();
        startAnimation(animArr);
    }
}

function getAnimationArr() {
    return ANIMATIONS[animation].match(/[^=]+=====/g);
}

function setAnimation() {
    animation = document.getElementById('animation').value;
    var textarea = document.getElementById("frame");
    const animArr = getAnimationArr();
    if (animArr != null)
        textarea.innerHTML = getAnimationArr()[0];
    else textarea.innerHTML = "";
}

function setSize(size) {
    var textarea = document.getElementById('frame');
    textarea.style.fontSize = size;
    console.log(textarea.innerHTML);
}