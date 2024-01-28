// DOM

// SELECTORS

let divInfo = document.querySelector("#divInfo");
let divTimer = document.querySelector("#divTimer");
let divGame = document.querySelector("#divGame");

let divInput = document.querySelector("#divInput");
let inputUsername = document.querySelector("#inputUsername");
let btnStart = document.querySelector("#btnStart");
let btnRestart = document.querySelector("#btnRestart");

let selectedDifficulty = 0;

let intervalCountdown = 0;
let timerCountdownCounter = 0;

// FUNCTIONS

let checkDifficulty = () => {
    selectedDifficulty = document.querySelector('input[type="radio"]:checked').value;
};

let fillOutDivGameDiv = () => {
    for (let i = 0; i < selectedDifficulty; i++) {
        for (let j = 0; j < selectedDifficulty; j++) {
            let div = document.createElement("div");
            div.classList.add("divGameCardBack");
            div.innerHTML = "<span>?</span>"
            divGame.appendChild(div); 
        }
        let lineBreak = document.createElement("br"); 
        divGame.appendChild(lineBreak); 
    }
};

let startCountdown = () => {
    intervalCountdown = setInterval(()=> {
        timerCountdownCounter++;
        console.log(timerCountdownCounter);
        divTimer.innerHTML = timerCountdownCounter;
    }, 1000);
};

let stopCountdown = () => {
    clearInterval(intervalCountdown);
};

// EVENTS LISTENERS

btnStart.addEventListener("click", () => {
    checkDifficulty();
    fillOutDivGameDiv();
    startCountdown();
});

btnRestart.addEventListener("click", () => {
    clearInterval(intervalCountdown);
});