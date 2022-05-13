const dynamicText = document.querySelector(".dynamic")
const words = ["Michał Hals", "Developer", "Freelancer",]
let count = 1;
const pigBtn = document.querySelector("#choosePig")
const rpsBtn = document.querySelector("#chooseRps")
const memoryBtn = document.querySelector("#chooseMemory")
const guessBtn = document.querySelector("#chooseGuess")
const drumBtn = document.querySelector("#chooseDrum")
const calcBtn = document.querySelector("#chooseCalc")

const firstPhoto = document.querySelector(".gamePhoto1")
const secondPhoto = document.querySelector(".gamePhoto2")



setInterval(newText,2000)

function newText() { 
    if(count === 3) {
        count = 0
        dynamicText.textContent = words[count]
    } else {
    dynamicText.textContent = words[count]
    count++
}

}

function press() {
    pigBtn.classList.remove("pressedButton")
    rpsBtn.classList.remove("pressedButton") 
    memoryBtn.classList.remove("pressedButton") 
    guessBtn.classList.remove("pressedButton") 
    calcBtn.classList.remove("pressedButton") 
    drumBtn.classList.remove("pressedButton")
    firstPhoto.classList.remove("rpsOne")
    secondPhoto.classList.remove("rpsTwo")
    firstPhoto.classList.remove("memoryOne")
    secondPhoto.classList.remove("memoryTwo")
    firstPhoto.classList.remove("guessOne")
    secondPhoto.classList.remove("guessTwo")
    firstPhoto.classList.remove("guessOne")
    secondPhoto.classList.remove("guessTwo")
    firstPhoto.classList.remove("drumOne")
    secondPhoto.classList.remove("drumTwo")
    firstPhoto.classList.remove("calcOne")
    secondPhoto.classList.remove("calcTwo")
}



function pig() {
    press()
    pigBtn.classList.add("pressedButton") 
}

function rps() {
    press()
    rpsBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("rpsOne")
    secondPhoto.classList.add("rpsTwo")
}

function memory() {
    press()
    memoryBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("memoryOne")
    secondPhoto.classList.add("memoryTwo")
}

function guess() {
    press()
    guessBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("guessOne")
    secondPhoto.classList.add("guessTwo")
}

function calc() {
    press()
    calcBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("calcOne")
    secondPhoto.classList.add("calcTwo")
}

function drum() {
    press()
    drumBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("drumOne")
    secondPhoto.classList.add("drumTwo")
}



