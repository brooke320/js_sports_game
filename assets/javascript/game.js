let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");



let shotsTakenOne = document.querySelector("#teamone-numshots");
let shotsTakenValue = Number(shotsTakenOne.innerHTML);

let shotsTakenTwo = document.querySelector("#teamtwo-numshots");
let shotsTakenTwoValue = Number(shotsTakenTwo.innerHTML);

let goalsOne = document.querySelector("#teamone-numgoals");
let goalsOneValue = Number(goalsOne.innerHTML);

let goalsTwo = document.querySelector("#teamtwo-numgoals");
let goalsTwoValue = Number(goalsTwo.innerHTML);

let numResets = document.querySelector("#num-resets");
let numResetsValue = Number(numResets.innerHTML);

teamoneShootButton.addEventListener("click", function () {
    shotsTakenValue += 1;
    shotsTakenOne.innerHTML = shotsTakenValue;
    let shots = Math.floor(Math.random() * Math.floor(10) + 1);
    if (shots >= 5) {
        goalsOneValue += 1;
    } else {
        goalsOneValue;
    }
    goalsOne.innerHTML = goalsOneValue;

})

teamtwoShootButton.addEventListener("click", function () {
    shotsTakenValue += 1;
    shotsTakenTwo.innerHTML = shotsTakenValue;
    let shots = Math.floor(Math.random() * Math.floor(10) + 1);
    if (shots >= 5) {
        goalsTwoValue += 1;
    } else {
        goalsTwoValue;
    }
    goalsTwo.innerHTML = goalsTwoValue;

})

resetButton.addEventListener("click", function () {
    numResetsValue += 1;
    numResets.innerHTML = numResetsValue;


})

















