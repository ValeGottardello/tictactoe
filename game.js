
let player = 1
let playerTurn = "Player 1"
let player1score = 0
let player2score = 0
//dom elements buttons
const btnReset = document.querySelector(".reset")
const start = document.querySelector(".start")
const boxes = document.querySelectorAll(".board button")

//elements to display
const h2 = document.querySelector("h2")
const whoWinsParr = document.querySelector("p")
const numScore1 = document.querySelector(".score1")
const numScore2 = document.querySelector(".score2")
const playername1 = document.querySelector(".playerone")
const playername2 = document.querySelector(".playertwo")
//inputs-names
let name1 = document.querySelector(".p-one").value
let name2 = document.querySelector(".p-two").value
//winning combinations
let a1 = document.querySelector("#a-one")
let a2 = document.querySelector("#a-two")
let a3 = document.querySelector("#a-three")

let b1 = document.querySelector("#b-one")
let b2 = document.querySelector("#b-two")
let b3 = document.querySelector("#b-three")

let c1 = document.querySelector("#c-one")
let c2 = document.querySelector("#c-two")
let c3 = document.querySelector("#c-three")
let counter = 0
// winningOptions 
// a1+a2+a3
// b1+b2+b3
// c1+c2+c3

// a1+b1+c1
// a2+b2+c2
// a3+b3+c3

// a1+b2+c3
// a3+b2+c1

//player one = x
//player two = o

//FUNCTIONS:
//GAME
function gameTicTacToe(event) {
    //checks if any of the winning arrays contains "x" or "o"
    //X WINS
    if (a1.classList.contains("X") && a2.classList.contains("X") && a3.classList.contains("X") ||
        b1.classList.contains("X") && b2.classList.contains("X") && b3.classList.contains("X") ||
        c1.classList.contains("X") && c2.classList.contains("X") && c3.classList.contains("X") ||
        a1.classList.contains("X") && b1.classList.contains("X") && c1.classList.contains("X") ||
        a2.classList.contains("X") && b2.classList.contains("X") && c2.classList.contains("X") ||
        a3.classList.contains("X") && b3.classList.contains("X") && c3.classList.contains("X") ||
        a1.classList.contains("X") && b2.classList.contains("X") && c3.classList.contains("X") ||
        a3.classList.contains("X") && b2.classList.contains("X") && c1.classList.contains("X")) {
        //update score of player
        player1score++
        numScore1.textContent = `${player1score}`
        //Change text with the winner
        whoWinsParr.textContent = `${name1} win!`
        whoWinsParr.style.display = "block"
        h2.style.display = "none"
        //disble the buttons when someone win
        for(let i =0;i < boxes.length ; i++) {
            boxes[i].disabled = true
            
        }

        //Display button reset
        setTimeout(reStart, 2000)
        //O WINS
    } else if (a1.classList.contains("O") && a2.classList.contains("O") && a3.classList.contains("O") ||
        b1.classList.contains("O") && b2.classList.contains("O") && b3.classList.contains("O") ||
        c1.classList.contains("O") && c2.classList.contains("O") && c3.classList.contains("O") ||
        a1.classList.contains("O") && b1.classList.contains("O") && c1.classList.contains("O") ||
        a2.classList.contains("O") && b2.classList.contains("O") && c2.classList.contains("O") ||
        a3.classList.contains("O") && b3.classList.contains("O") && c3.classList.contains("O") ||
        a1.classList.contains("O") && b2.classList.contains("O") && c3.classList.contains("O") ||
        a3.classList.contains("O") && b2.classList.contains("O") && c1.classList.contains("O")) {
        //update score of player
        player2score++
        numScore2.textContent = `${player2score}`
        //Change text with the winner
        whoWinsParr.textContent = `${name2} win!`
        whoWinsParr.style.display = "block"
        h2.style.display = "none"
        //disabled the buttons when o win
        boxes.forEach(box =>{
            box.disabled = true
        }) 
        //Display button reset
        setTimeout(reStart, 2000)
    } else {
        counter++ 
        if (counter === 9){    
            text.textContent = `It's a tie!`
            setTimeout(reStart, 3000)
        }
    }     
}
//TURNS
function switchPlayers(event) {
    event.target.disabled = true
    if (player == 1) {
        //player one play
        event.target.classList.add("X")
        //display a O in the button
        event.target.textContent = "X"
        //this change the player turn
        player = 2;
        // change text of turn of player
        h2.textContent = `Turn is for: ${name2}`
        //change style of the box
        event.target.style.backgroundColor = "#FFBD00"

    } else {
        //player two play
        event.target.classList.add("O")
        //display a O in the button
        event.target.textContent = "O"
        //changes player turn
        player = 1;
        // change text of turn of player
        h2.textContent = `The turn is for: ${name1}`
        //change style of the box
        event.target.style.backgroundColor = "#f72584"
    }
    //call game function
    gameTicTacToe(event);
    //call reset with conditions
}
//RESTART each game - no the entire game// doesn't change scores to 0
function reStart(event) {
    //turn of player1
    player = 1
    //display who win 
    whoWinsParr.style.display = "none"
    h2.style.display = "block"
    h2.textContent = `The turn is for:${name1}`
    //reset the board
    for (let i = 0; i < boxes.length ; i++) {
        boxes[i].style.backgroundColor = "#ffbb00cb"
        boxes[i].classList.remove("X")
        boxes[i].classList.remove("O")
        boxes[i].disabled = false
        boxes[i].textContent = ""
    }  
    //for ties 
    counter = 0
}
//event listener: 
//clicked buttons of the game
boxes.forEach(box => {
    box.addEventListener("click", switchPlayers)

})
//reset the game from scratch (difference with restart is the scores)
btnReset.addEventListener("click",() =>{
    // reset turn to player 1
    player = 1
    //reset score of players
    numScore1.textContent = "0"
    numScore2.textContent = "0"
    //reset name of players
    document.querySelector(".playerone").textContent = "Player one" 
    document.querySelector(".playertwo").textContent = "Player Two"
    counter = 0 
    for (let i =0;i<boxes.length;i++) {
        boxes[i].style.backgroundColor = "#ffbb00cb"
        boxes[i].disabled = false
        boxes[i].textContent = ""
    }
})
//start - set up the values to start 
start.addEventListener("click", () => {
    //change the name of player with the inputs names
    name1 = document.querySelector(".p-one").value 
    name2 = document.querySelector(".p-two").value
    //display the names
    playername1.textContent = name1
    playername2.textContent = name2
    //display the scores to 0
    numScore1.textContent = "0"
    numScore2.textContent = "0"
    //set the turn to player 1
    player = 1
    //display turn of player 1
    h2.textContent = `The turn is for:${name1}`
    counter = 0 
    
})




