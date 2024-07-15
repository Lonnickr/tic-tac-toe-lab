console.log("Tis-Tac-Toe!")

/*-------------------------------- Constants --------------------------------*/
const winningCoombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8],
]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
const squareEl = document.querySelectorAll(".sqr")
const messageEl = document.getElementById('message')



/*-------------------------------- Functions --------------------------------*/
init()
function init() {
    board = ['', '', '', '', '', '', '', '', '',]
    turn = 'X'
    winner = false
    tie = false
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

function handleClick(evt) {
    const squareIdx = parseInt(evt.target.id)
    if (board[squareIdx] === "X" || board[squareIdx] === "O" || winner) {
        return 
    }
    placePiece(squareIdx)
    checkForwinner()
    checkforTie()
    switchPlayerTurn()
    render()
}

function placePiece(idx) {
    board[idx] = turn
    console.log(board);
}

function checkForwinner() {
    if (
       (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
       (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
       (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
       (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
       (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
       (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
       (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
       (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
      )  {
        winner = true
    }
}

function checkforTie() {
    if (winner) {
        return
    }
    if (!board.includes('')) {
        tie = true
    }
}

function switchPlayerTurn() {
    if (winner) {
        return
    }
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }
}

/*----------------------------- Event Listeners -----------------------------*/
squareEl.forEach((squareEl) => {
    squareEl.addEventListener("click", handleClick)
})


