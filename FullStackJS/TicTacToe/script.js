//console.log("hello tictactoe");

const gameBoard = (function() {
    const row=3;
    const col=3;
    const board= new Array(row);
    var count=-1;
    function createBoard() {
        for(var i=0; i<row; i++) {
            board[i] = new Array(col);
            for(var j=0; j<col; j++) {
                board[i][j] = ++count;
            }
        }
    }

    function printBoard(board) {
        for(var i=0; i<row; i++) {
            for(var j=0; j<col; j++) {
                console.log(board[i][j], " ");
            }
            console.log("\n");
        }
    }

    return {createBoard, board, printBoard};
})();

function player() {
    let name;
    let choice;
    const wins=0;
    const loose=0;
    return {name, choice, wins, loose};
}

function startGame() {
    const players = createPlayer();
    gameBoard.createBoard();
    gameBoard.printBoard(gameBoard.board);
    //console.log("1|2|3\n_____\n4|5|6\n_____\n7|8|9");
    var numberOfChoices=0;
    while(players.player1.wins != 3 || players.player2.wins != 3) {
        const row=0, col=0, loc=0;
        loc = Number(prompt(players.player1.name, "enter location"));
        row = loc / 3;
        col = loc % 3;
        if(Number.isInteger(gameBoard.board[row][col])) {
            board[row][col] = players.player1.choice;
        } else {
            console.log("wrong choice");
        }

        ++numberOfChoices;
        checkForWin(numberOfChoices);

        loc = Number(prompt(players.player2.name, "enter location"));
        row = loc / 3;
        col = loc % 3;
        if(Number.isInteger(gameBoard.board[row][col])) {
            board[row][col] = players.player2.choice;
        } else {
            console.log("wrong choice");
        }

        ++numberOfChoices;
        checkForWin(numberOfChoices);
    }
}

function checkForWin(count) {
    if() {

    }
}

function createPlayer() {
    const player1=player();
    const player2=player();

    player1.name = prompt("Player 1 enter name");
    player1.choice = prompt(player1.name, " enter your choice");

    player2.name = prompt("Player 2 enter name");
    player2.choice = prompt(player2.name, " enter your choice");

    return {player1, player2};
}

startGame();