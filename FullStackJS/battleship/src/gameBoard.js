import {Ship} from './ship.js';

class gameBoard {
    board = [];
    constructor() {
        this.generateEmptyBoard();
    }
    generateEmptyBoard() {
        for(var i=0; i<10; i++) {
            this.board[i] = new Array(10);
            for(var j=0; j<10; j++) {
                this.board[i][j] = 0;
            }
        }
    }

    placeShips(head, tail, length) {
        const saveTheBoard = this.board;

        const ship = new Ship(length);

        for(var i=tail[0]; i<=head[0]; i++) {
            for(var j=tail[1]; j<=head[1]; j++) {
                if(typeof(this.board[i][j]) === 'object') {
                    this.board = saveTheBoard;
                    return false;
                }
                this.board[i][j] = ship;
            }
        }
        return true;
    }

    recieveAttack(row, col) {
        if(typeof(this.board[row][col]) != 'object') {
            return false;
        } else {
            const ship = this.board[row][col];
            ship.hit();
            return true;
        }
    }

    randomPlacement() {
        this.generateEmptyBoard();
        this.generateRandomCoordinates(5);
        this.generateRandomCoordinates(4);
        this.generateRandomCoordinates(3);
        this.generateRandomCoordinates(3);
        this.generateRandomCoordinates(2);
        this.generateRandomCoordinates(2);
        this.generateRandomCoordinates(2);
        return true;
    }

    validCoordinates(tail) {
        if(tail[0] < 0 || tail[1] <0) return false;
        return true;
    }

    generateRandomCoordinates(length) {
        let shipPlaced = false;
        while(!shipPlaced) {
            const orientation = Math.floor(Math.random()*2);

            const headRow = Math.floor(Math.random()*10);
            const headCol = Math.floor(Math.random()*10);

            const tailRow =  headRow - (length-1)*orientation;
            const tailCol = headCol - (length - 1)*(orientation^1);
3
            if(!this.validCoordinates([tailRow, tailCol])) continue;

            shipPlaced = this.placeShips([headRow, headCol], [tailRow, tailCol], length);
        }
    }
}

export {gameBoard}