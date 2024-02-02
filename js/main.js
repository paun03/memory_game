// ARRAYS

const arrEasy = ["😀", "😀", "😁", "😁", "😂", "😂", "😃", "😃", "😄", "😄", "😅", "😅", "😆", "😆", "😇", "😇"];
const arrMedium = ["😀", "😀", "😁", "😁", "😂", "😂", "😃", "😃", "😄", "😄", "😅", "😅", "😆", "😆", "😇", "😇", "😈", "😈", "😊", "😊", "😋", "😋", "😌", "😌", "😍", "😍", "😎", "😎", "😏", "😏", "😐", "😐", "😑", "😑", "😒", "😒"];
const arrHard = ["😀", "😀", "😁", "😁", "😂", "😂", "😃", "😃", "😄", "😄", "😅", "😅", "😆", "😆", "😇", "😇", "😈", "😈", "😊", "😊", "😋", "😋", "😌", "😌", "😍", "😍", "😎", "😎", "😏", "😏", "😐", "😐", "😑", "😑", "😒", "😒", "😓", "😓", "😔", "😔", "😕", "😕", "😖", "😖", "😗", "😗", "😘", "😘", "😙", "😙", "😚", "😚", "😛", "😛", "😜", "😜", "😝", "😝", "😞", "😞", "😟", "😟", "😠", "😠"];
const arrExpert = ["😀", "😀", "😁", "😁", "😂", "😂", "😃", "😃", "😄", "😄", "😅", "😅", "😆", "😆", "😇", "😇", "😈", "😈", "😊", "😊", "😋", "😋", "😌", "😌", "😍", "😍", "😎", "😎", "😏", "😏", "😐", "😐", "😑", "😑", "😒", "😒", "😓", "😓", "😔", "😔", "😕", "😕", "😖", "😖", "😗", "😗", "😘", "😘", "😙", "😙", "😚", "😚", "😛", "😛", "😜", "😜", "😝", "😝", "😞", "😞", "😟", "😟", "😠", "😠", "😡", "😡", "😢", "😢", "😣", "😣", "😤", "😤", "😥", "😥", "😦", "😦", "😧", "😧", "😨", "😨", "😩", "😩", "😪", "😪", "😫", "😫", "😬", "😬", "😭", "😭", "😮", "😮", "😯", "😯", "😰", "😰", "😱", "😱", "😲", "😲"];

let arrSelected = [];

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

let selectedCards = [];
let pairsCounter = 0;

let sectionTable = document.querySelector("#sectionTable");
let divTable = document.querySelector("#divTable");
let btnEasy = document.querySelector("#btnEasy");
let btnMedium = document.querySelector("#btnMedium");
let btnHard = document.querySelector("#btnHard");
let btnExpert = document.querySelector("#btnExpert");
let tableEasy = document.querySelector("#tableEasy");
let tableMedium = document.querySelector("#tableMedium");
let tableHard = document.querySelector("#tableHard");
let tableExpert = document.querySelector("#tableExpert");

// FUNCTIONS

let shuffle = (arr) => {
    let newArray = [...arr];
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

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
    if (Number(selectedDifficulty) === 4) {
        arrSelected = arrEasy;
    } else if (Number(selectedDifficulty) === 6) {
        arrSelected = arrMedium;
    } else if (Number(selectedDifficulty) === 8) {
        arrSelected = arrHard;
    } else if (Number(selectedDifficulty) === 10) {
        arrSelected = arrExpert;
    }
};

let fillOutDivGameDiv = () => {
    divGame.innerHTML = "";
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

let checkIfNameIsInserted = () => {
    if (inputUsername.value === "") {
        alert("Please Insert Username");
        location.reload();
    }
};

let restartCountdown = () => {
    timerCountdownCounter = 0;
};

let startCountdown = () => {
    clearInterval(intervalCountdown);
    intervalCountdown = setInterval(()=> {
        timerCountdownCounter++;
        console.log(timerCountdownCounter);
        divTimer.innerHTML = timerCountdownCounter;
    }, 1000);
};

let stopCountdown = () => {
    clearInterval(intervalCountdown);
};

let appendTableElements = () => {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdDiff = document.createElement("td");
    let tdTime = document.createElement("td");
    tdName.innerHTML = inputUsername.value;
    tr.append(tdName);
    tableEasy.append(tr);
};

// EVENTS LISTENERS

btnStart.addEventListener("click", () => {
    btnStart.classList.add("disabled");
    checkIfNameIsInserted();
    checkDifficulty();
    let shuffledArray = shuffle(arrSelected);
    fillOutDivGameDiv();
    restartCountdown();
    startCountdown();
    fillOutElements(getAllGameDivs(), shuffledArray);
});

divGame.addEventListener("click", (event) => {
    if (event.target.classList.contains("divGameCardBack")) {
        event.target.innerHTML = event.target.getAttribute("value");
        selectedCards.push(event.target);

        if (selectedCards.length === 2) {
            if (selectedCards[0].innerHTML !== selectedCards[1].innerHTML) {
                divGame.classList.add("disabled");
                setTimeout(() => {
                    selectedCards[0].innerHTML = "?";
                    selectedCards[1].innerHTML = "?";
                    selectedCards = [];
                    divGame.classList.remove("disabled");
                }, 1000);
            } else {
                selectedCards[0].style.border = "4px green solid";
                selectedCards[1].style.border = "4px green solid";
                selectedCards[0].classList.add("disabled");
                selectedCards[1].classList.add("disabled");
                selectedCards = [];
                pairsCounter++;
            }
        }
    }
    if (pairsCounter === arrSelected.length / 2) {
        stopCountdown();
        
    }
});

btnRestart.addEventListener("click", () => {
    location.reload();
});

sectionTable.addEventListener("click", (event) => {
    if (event.target.id === "btnEasy") {
        tableEasy.style.display = "block";
        tableMedium.style.display = "none";
        tableHard.style.display = "none";
        tableExpert.style.display = "none";
    } else if (event.target.id === "btnMedium") {
        tableEasy.style.display = "none";
        tableMedium.style.display = "block";
        tableHard.style.display = "none";
        tableExpert.style.display = "none";
    } else if (event.target.id === "btnHard") {
        tableEasy.style.display = "none";
        tableMedium.style.display = "none";
        tableHard.style.display = "block";
        tableExpert.style.display = "none";
    } else if (event.target.id === "btnExpert") {
        tableEasy.style.display = "none";
        tableMedium.style.display = "none";
        tableHard.style.display = "none";
        tableExpert.style.display = "block";
    }
});