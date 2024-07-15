console.log("Tis-Tac-Toe!")

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
const squareEl = document.querySelectorAll(".sqr")
const messageEl = document.getElementById('message')



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
    board = ['', 'X', '', 'O', '', '', '', '', '',]
    turn = 'X'
    winner = true
    tie = true
    render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((cell, idx) => {
        if (cell === "X"){
        squareEl[idx].textContent = "X"
        } else if (cell === "O" ) {
        squareEl[idx].textContent = "O"
        } else {
        squareEl[idx].textContent = ""
        }
        
    })
}
function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It is ${turn}'s turn`
    } else if (!winner && tie) {
        messageEl.textContent = "Cat's game. Meow!"
    } else {
        messageEl.textContent = `${turn} wins the game!`
    }
}

/*----------------------------- Event Listeners -----------------------------*/



