//
const texts = [
    "Have fun or something",
    "Family guy is pretty cool",
    "much wow",
    "doge is epic",
    "gamer man",
];
let count = 0;
let index = 0;
let currentText = 0;
let letter = 0;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".tips").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000)
        return;
    }
    setTimeout(type, 50)
}

// Random Backgrounds
const backgrounds = [
    "assets/img/family-guy.jpg",
    "assets/img/family-guy2.jpg",
    "assets/img/family-guy3.jpg",
]
let curBackground = 0;

function cycleBackground() {
    if (curBackground === backgrounds.length) {
        curBackground = 0;
    }

    document.body.style.background = `#f3f3f3 url('${backgrounds[curBackground]}') no-repeat center center fixed`;
    document.body.style["background-size"] = "cover";

    curBackground++;
    setTimeout(cycleBackground, 7000)
}

// Load Everything
window.onload = () => {
    type();
    cycleBackground();
}
