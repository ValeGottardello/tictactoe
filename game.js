//dom elements buttons
const btnReset = document.querySelector(".reset")
const btnOnePlayer = document.querySelector(".one-player")
const btnTwoPlayer = document.querySelector(".two-player")
//dom elements divs -- choicesgame
// let div1 = document.querySelector("#divone")
// let div2 = document.querySelector("#divtwo")
// let div3 = document.querySelector("#divthree")
// let div4 = document.querySelector("#divfour")
// let div5 = document.querySelector("#divfive")
// let div6 = document.querySelector("#divsix")
// let div7 = document.querySelector("#divseven")
// let div8 = document.querySelector("#diveight")
// let div9 = document.querySelector("#divnine")
const boxes = document.querySelectorAll(".board div")


//wins combinations
// const verticals = [[123],[456],[789]]
// const horizontals = [[147],[258],[369]]
// const diagonals = [[159,357]]
// wins combinations on a unique variable -- easier to compare
const combination1 = 123
const combination2 = 456
const combination3 = 789
const combination4 = 147
const combination5 = 258
const combination6 = 369
const combination7 = 159
const combination8 = 357



//testing choices
let computerChoice = 123
let playerOneChoice = 456
let playerTwoChoice = 789
// computerChoice = Math.floor(Math.random * (999 - 111) + 111)
let arrayofChoices = []
//tried
let counter = 0


function gameOnePlayer(event) {

    let boxClicked = Number(event.target.dataset.num)
    console.log(boxClicked);
    arrayofChoices.push(boxClicked) 
    counter++

    if (counter === 3) {
        let numbersOfChoices =  Number(arrayofChoices.join(""))
        console.log(numbersOfChoices);

        if (numbersOfChoices === (combination1 || combination2 || combination3 || combination4 || combination5 || combination6 || combination7 || combination8)) {
            console.log('you win');

        } else {
            console.log('you loose');
        }
    }
}


boxes.forEach(box => {
    box.addEventListener('click', gameOnePlayer)
})

//buttons functions
// btnReset.addEventListener('click', () => {
//reset the changes in the box
// })


//option one doesnt work


// if (counter < 3) {

//     let boxClicked = Number(event.target.dataset.num)
//     console.log(boxClicked);
//     arrayofChoices.push(boxClicked) 
//     counter++

// } else {

//     let numbersOfChoices =  Number(arrayofChoices.join(""))
//     console.log(numbersOfChoices);

//     if (numbersOfChoices === (combination1 || combination2 || combination3 || combination4 || combination5 || combination6 || combination7 || combination8)) {
//         console.log('you win');

//     } else {
//         console.log('you loose');
//     }
// }