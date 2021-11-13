//
const texts = [
    "Cartman: “I am NOTHING like Family Guy! When I make jokes they are inherent to a story! Deep situational and emotional jokes based on what is relevant and has a point, not just one random interchangeable joke after another!”",
    "“I am a cop, and you will respect my authoritah!” – Cartman",
    "“Don’t you dare call me a Cartman!” – Stan",
    "“Don’t lie, Stan. Lying makes you sterile.” – Mr. Garrison",
    "“I’m not fat, I’m festively plump.” –Cartman",
    "“Drugs are bad, mmkay?” –Mr. Mackey",
    "“All animals kill, and the animals that don’t kill are stupid ones like cows and turtles and stuff.” –Kyle",
    "“Screw you guys, I’m going home!” –Cartman",
    "“Hell, everything’s legal in Mexico. It’s the American way!” –Jimbo"
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
    "assets/img/background.jpg",
    "assets/img/background2.jpg",
    "assets/img/background3.jpg",
    "assets/img/background4.jpg",
    "assets/img/background5.jpg",
    "assets/img/background6.jpg",
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
