

let player = 1
let playerOneScore = 0
let playerTwoScore = 0
let playerTurn = "Player 1"
//dom elements buttons
const btnReset = document.querySelector(".reset")
const btnOnePlayer = document.querySelector(".one-player")
const btnTwoPlayer = document.querySelector(".two-player")
// //dom elements divs -- choicesgame
const boxes = document.querySelectorAll(".board button")

let a1 = document.querySelector("#a-one")
let a2 = document.querySelector("#a-two")
let a3 = document.querySelector("#a-three")

let b1 = document.querySelector("#b-one")
let b2 = document.querySelector("#b-two")
let b3 = document.querySelector("#b-three")

let c1 = document.querySelector("#c-one")
let c2 = document.querySelector("#c-two")
let c3 = document.querySelector("#c-three")

// winningOptions 
// a1+a2+a3
// b1+b2+b3
// c1+c2+c3

// a1+b1+c1
// a2+b2+c2
// a3+b3+c3

// a1+b2+c3
// a3+b2+c1

//checks if any of the winning arrays contains "x" or "o"
function gameTicTacToe() {
    //X WINS
    if (a1.classList.contains("X") && a2.classList.contains("X") && a3.classList.contains("X") ||
        b1.classList.contains("X") && b2.classList.contains("X") && b3.classList.contains("X") ||
        c1.classList.contains("X") && c2.classList.contains("X") && c3.classList.contains("X") ||
        a1.classList.contains("X") && b1.classList.contains("X") && c1.classList.contains("X") ||
        a2.classList.contains("X") && b2.classList.contains("X") && c2.classList.contains("X") ||
        a3.classList.contains("X") && b3.classList.contains("X") && c3.classList.contains("X") ||
        a1.classList.contains("X") && a2.classList.contains("X") && a3.classList.contains("X") ||
        b1.classList.contains("X") && b2.classList.contains("X") && b3.classList.contains("X") ||
        c1.classList.contains("X") && b2.classList.contains("X") && c3.classList.contains("X")) {

        //update score of player
        playerOneScore++;
        //Change text with the winner
        document.querySelector("p").textContent = "Player 1 win"
        //Display button reset
        btnReset.style.display = "block"
    
    //O WINS
    } else if (a1.classList.contains("O") && a2.classList.contains("O") && a3.classList.contains("O") ||
        b1.classList.contains("O") && b2.classList.contains("O") && b3.classList.contains("O") ||
        c1.classList.contains("O") && c2.classList.contains("O") && c3.classList.contains("O") ||
        a1.classList.contains("O") && b1.classList.contains("O") && c1.classList.contains("O") ||
        a2.classList.contains("O") && b2.classList.contains("O") && c2.classList.contains("O") ||
        a3.classList.contains("O") && b3.classList.contains("O") && c3.classList.contains("O") ||
        a1.classList.contains("O") && a2.classList.contains("O") && a3.classList.contains("O") ||
        b1.classList.contains("O") && b2.classList.contains("O") && b3.classList.contains("O") ||
        c1.classList.contains("O") && b2.classList.contains("O") && c3.classList.contains("O")) {

        //update score of player
        playerTwoScore++
        //Change text with the winner
        document.querySelector("p").textContent = "Player Two win"
        //Display button reset
        btnReset.style.display = "block"

    } else {

        document.querySelector("p").textContent = "It's a tie"
        //Display button reset
        btnReset.style.display = "block"
    }
}

//player one = x
//player two = o

//change the player
boxes.forEach(box => {
    box.addEventListener("click", switchPlayers)
})

function switchPlayers(event) {
    let buttonClicked = event.target
    buttonClicked.disabled = true
    if (player == 1) {
        //player one play
        event.target.classList.add("X")
        //this changes the player turn
        player = 2;
        // change text of turn of player
        document.querySelector("span").textContent = "Player Two"
        //change style of the box
        event.target.style.backgroundColor = "purple"

    } else {
        //player two play
        event.target.classList.add("O")
        //changes player turn
        player = 1;
        // change text of turn of player
        document.querySelector("span").textContent = "Player One"
        event.target.style.backgroundColor = "deeppink"

    }
    //call game function
    gameTicTacToe();
    //call reset with conditions
    reStart();
}

//return each element to 0
function reStart() {

}






//ONE OPTION FOR GAME FUNCTIONS WITH LOOP AND ARRAY

//     //horizontals
//     [`${document.querySelector("#a-one")}`, `${document.querySelector("#a-two")}`, `${document.querySelector("#a-three")}`],

//     [`${document.querySelector("#b-one")}`, `${document.querySelector("#b-two")}`, `${document.querySelector("#b-three")}`],

//     [`${document.querySelector("#c-one")}`, `${document.querySelector("#c-two")}`, `${document.querySelector("#c-three")}`],

//     //verticals
//     [`${document.querySelector("#a-one")}`, `${document.querySelector("#b-one")}`, `${document.querySelector("#c-one")}`],

//     [`${document.querySelector("#a-two")}`, `${document.querySelector("#b-two")}`, `${document.querySelector("#c-two")}`],

//     [`${document.querySelector("#a-three")}`, `${document.querySelector("#b-three")}`, `${document.querySelector("#c-three")}`],

//     //diagonals
//     [`${document.querySelector("#a-one")}`, `${document.querySelector("#b-two")}`, `${document.querySelector("#c-three")}`],

//     [`${document.querySelector("#a-three")}`, `${document.querySelector("#b-two")}`, `${document.querySelector("#c-one")}`]
// ]


//winning options goes for options of for loop
// function gameTicTacToe() {
//     for (let i = 0; i < boxes.length; i++) {
//         //X WINS
//         if (winningOptions[i][0].classList.contains("X") && winningOptions[i][1].classList.contains("X") && winningOptions[i][2].classList.contains("X")) {

//             //update score of player
//             playerOneScore++;
//             //Change text with the winner
//             document.querySelector("p").textContent = "Player 1 win"
//             //Display button reset
//             btnReset.style.display = "block"
//         //O WINS
//         } else if (winningOptions[i][0].classList.contains("O") && winningOptions[i][1].classList.contains("O") && winningOptions[i][2].classList.contains("0")) {

//             //update score of player
//             playerTwoScore++
//             //Change text with the winner
//             document.querySelector("p").textContent = "Player Two win"
//             //Display button reset
//             btnReset.style.display = "block"

//         } else {

//             document.querySelector("p").textContent = "It's a tie"
//             //Display button reset
//             btnReset.style.display = "block"
//         }
//     };
// }


//OPTION TWO WITH JUST ONE PLAYER AND NUMBER COMBINATIONS

// function gameOnePlayer(event) {

//     let boxClicked = Number(event.target.dataset.num)
//     console.log(boxClicked);
//     arrayofChoices.push(boxClicked) 
//     counter++

//     if () {
//         let numbersOfChoices =  Number(arrayofChoices.join(""))
//         console.log(numbersOfChoices);

//         if (numbersOfChoices == combination1 ||numbersOfChoices ==  combination2 || numbersOfChoices ==  combination3 || numbersOfChoices == combination4 || numbersOfChoices == combination5 || numbersOfChoices == combination6 ||numbersOfChoices ==  combination7 || numbersOfChoices == combination8) {
//             console.log('you win');

//         } else {
//             console.log('you loose');
//         }
//     }
// }


// boxes.forEach(box => {
//     box.addEventListener('click', gameOnePlayer)
// })

//buttons functions
// btnReset.addEventListener('click', () => {
//reset the changes in the box
// })

