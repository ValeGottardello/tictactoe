
// function gameTicTacToe() {
//     for (let i = 0; i < winingOption.length; i++) {
//         if (winingOption[i][0].text() === 'X' && winingOption[i][1].text() === 'X' && winingOption[i][2].text() === 'X')
//          {
           
//             playerOneScore = playerOneScore + 1;
//             //restart the game
           
//         } else if (winingOption[i][0].text() === 'O' && winingOption[i][1].text() === 'O' &&
//             winingOption[i][2].text() === 'O') {
       
//             playerTwoScore = playerTwoScore + 1;
//            //restart the game
//         }
//     }
// 



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



let winningOptions = null
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



//checks if any of the winning arrays contains "x" or "o"
function gameTicTacToe() {
    for (let i=0 ; i < winingOption.length ; i++) {
        //X WINS
        if (winningOptions[i][0].classList.contains("X") && winningOptions[i][1].classList.contains("X") && winningOptions[i][2].classList.contains("X")) {

            //update score of player
            playerOneScore++;
            //Change text with the winner
            document.querySelector("p").textContent = "Player 1 win"
            //Display button reset
            btnReset.style.display = "block"

        } else if (winningOptions[i][0].classList.contains("O") && winningOptions[i][1].classList.contains("O") && winningOptions[i][2].classList.contains("0")) {

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
      };
}



//change the player
boxes.forEach(box =>{
    box.addEventListener("click",switchPlayers)
})

function switchPlayers(event) {
    if ($(this).text().length === 1) {
        event.target
        $(this).off('click'); // if there is a value in the button, this disables the click
    } else if (player == 1) {
        //player one play
        event.target.classList.add("X")
        //this changes the player turn
        player = 2; 
        // change text of turn of player
        document.querySelector("span").textContent = "Player Two"
    } else {
        //player two play
        event.target.classList.add("O")
        //changes player turn
        player = 1; 
        // change text of turn of player
        document.querySelector("span").textContent = "Player One"
    };
    //call game function
    gameTicTacToe();
    //call reset with conditions
    reStart();
}
//return each element to 0
function reStart () {

}


winningOptions = [
    //horizontals
    [`${document.querySelector("#a-one")}`, `${document.querySelector("#a-two")}`, `${document.querySelector("#a-three")}`],

    [`${document.querySelector("#b-one")}`, `${document.querySelector("#b-two")}`, `${document.querySelector("#b-three")}`],

    [`${document.querySelector("#c-one")}`, `${document.querySelector("#c-two")}`, `${document.querySelector("#c-three")}`],
    
    //verticals
    [`${document.querySelector("#a-one")}`, `${document.querySelector("#b-one")}`, `${document.querySelector("#c-one")}`],

    [`${document.querySelector("#a-two")}`,`${document.querySelector("#b-two")}`, `${document.querySelector("#c-two")}` ],

    [`${document.querySelector("#a-three")}`,`${document.querySelector("#b-three")}`, `${document.querySelector("#c-three")}`],
    
    //diagonals
    [`${document.querySelector("#a-one")}`,`${document.querySelector("#b-two")}`,`${document.querySelector("#c-three")}`],

    [`${document.querySelector("#a-three")}`,`${document.querySelector("#b-two")}`,`${document.querySelector("#c-one")}`]
]