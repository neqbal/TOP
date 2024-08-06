//refernced https://github.com/slothSteady5/project-tic-tac-toe/blob/main/script.js

const player = (name, mark, wins) => {
    return {name, mark, wins};
}

const GameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = function() {
        return board;
    };

    const updateBoard = function(index, mark) {
        if(board[index] === "") {
            board[index] = mark;
            return true;
        }
        return false;
    };

    const reset = function() {
        for(var i=0; i<9; i++) {
            board[i] = "";
        }
    };
    return {getBoard, updateBoard, reset};
})();

const GameController = (() => {

    const player1 = player("player1", "X", 0);
    const player2 = player("player2", "O", 0);
    let currPlayer = player1;

    const players = [player1, player2];

    const changePlayer = () => {
        currPlayer = currPlayer === player1? player2 : player1;
    };

    const checkWinner = () => {
        const winPat = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ]

        const board = GameBoard.getBoard();
        for(var i=0; i<8; i++) {
            const pat = winPat[i];
            const [a, b, c] = pat;
            if(board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }
        return board.includes("")? null: "tie";
    };

    const makeMove = (index) => {
        if(GameBoard.updateBoard(index, currPlayer.mark)) {
            changePlayer();
            console.log("aiushdbn");
            return true;
        }
        return false;
    };

    const reset = () => {
        GameBoard.reset();
        currPlayer = player1;
    };

    return {players, checkWinner, makeMove, reset, changePlayer};
})();

const DisplayController = (() => {
    const box = document.querySelector(".box");

    const render = function() {
        
        const board = GameBoard.getBoard();
        box.innerHTML="";
        board.forEach((cell, index) => {
            const cellDiv = document.createElement("div");
            cellDiv.textContent=board[index];
            cellDiv.addEventListener("click", () => {
                console.log(index);
                if(GameController.makeMove(index)) {
                    render();
                    const winner = GameController.checkWinner()
                    if(winner) {
                        alert(winner==="tie"? "its a tie" : winner + ' wins')
                        GameController.reset();
                        render();
                    }
                }
            });
            box.appendChild(cellDiv);
        });
    } 

    return {render};
})();

DisplayController.render();