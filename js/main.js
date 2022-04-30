document.querySelectorAll('.board').forEach(item => {
    item.addEventListener("click", function handle() { play(item.id) })
})
document.getElementById('button').addEventListener('click', newGame)

class Board {
    constructor() {
        this.board = new Array(9).fill(0);

    }

    mark(id) {
        this.board[id] = 1
    }
    marked(id) {

        if (this.board[id]) {
            return true
        }
    }
}


class Player {
    constructor() {
        this.moves = new Array(9).fill(0);

    }

    mark(id) {
        console.log(`marking ${id}`)
        this.moves[id] = 1;
    }

    checkWins() {
        let len = this.moves.length
        for (let i = 0; i < len; i += 3) {
            if (this.moves[i] && this.moves[i + 1] && this.moves[i + 2]) {
                return true
            }
        }
        len = 3
        for (let i = 0; i < 3; i++) {
            if (this.moves[i] && this.moves[i + 3] && this.moves[i + 6]) {
                return true
            }
        }

        if (this.moves[0] && this.moves[4] && this.moves[8]) {
            return true
        }

        if (this.moves[2] && this.moves[4] && this.moves[6]) {
            return true
        }

        return false

    }




}

let board = new Board()
let playerOne = new Player()
let playerTwo = new Player()
let flag = true

function play(id) {



    if (board.marked(id)) {
        alert("Already Marked")
    } else {
        board.mark(id)
        if (flag) {
            playerOne.mark(id)
            document.getElementById(id).innerText = "X"
            if (playerOne.checkWins()) {
                document.querySelector('h2').innerText = "Player One Won!"
            }
        } else {

            playerTwo.mark(id)
            document.getElementById(id).innerText = "O"
            if (playerTwo.checkWins()) {
                document.querySelector('h2').innerText = "Player Two Won!"
            }
        }
        console.log(board.board)

        flag = !flag
    }


}

function newGame() {
    let x = document.querySelectorAll('div')
    x.forEach(element => { element.innerText = '' })
    board = new Board()
    playerOne = new Player()
    playerTwo = new Player()
    flag = true
    document.querySelector('h2').innerText = ''
}