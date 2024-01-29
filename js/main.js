// ARRAYS

const arrEasy = ['🐘', '🦒', '🐅', '🦓', '🦌', '🦏', '🐪', '🦔', '🐘', '🦒', '🐅', '🦓', '🦌', '🦏', '🐪', '🦔'];

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

let shuffle = (arr) => {
    let newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

let shuffledArrayEasy = shuffle(arrEasy);

let getAllGameDivs = () => {
    let allBackCardDivs = document.querySelectorAll(".divGameCardBack");
    return allBackCardDivs;
};

let fillOutElements = (divs, arr) => {
    for (let i = 0; i < divs.length; i++) {
        divs[i].setAttribute("value", arr[i]);
        divs[i].style.fontSize = "44px";
    }
};

let flipACard = () => {
    fillOutElements();
};

let checkDifficulty = () => {
    selectedDifficulty = document.querySelector('input[type="radio"]:checked').value;
};

let fillOutDivGameDiv = () => {
    for (let i = 0; i < selectedDifficulty; i++) {
        for (let j = 0; j < selectedDifficulty; j++) {
            let div = document.createElement("div");
            div.classList.add("divGameCardBack");
            div.innerHTML = "?";
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
    fillOutElements(getAllGameDivs(), shuffledArrayEasy);
});

divGame.addEventListener("click", (event) => {
    if (event.target.classList.contains("divGameCardBack")) {
        event.target.innerHTML = event.target.getAttribute("value");
    }
});

btnRestart.addEventListener("click", () => {
    stopCountdown();
});