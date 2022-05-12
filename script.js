const dynamicText = document.querySelector(".dynamic")
const words = ["Michał Hals", "Developer", "Freelancer",]
let count = 1;





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


