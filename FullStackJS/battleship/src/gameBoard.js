import {Ship} from './ship.js';

const SHIP='🚢';
const DESTROYED ='💥';
const MISSED='💨';

class gameBoard {
    #board = [];
    constructor() {
        this.generateEmptyBoard();
    }
    generateEmptyBoard() {
        for(var i=0; i<10; i++) {
            this.#board[i] = new Array();
            for(var j=0; j<10; j++) {
                this.#board[i][j] = 0;
            }
        }
    }

    placeShips(orientation, head, length) {
        const tailCol = head[1] - (length - 1)*(orientation^1);
        const tailRow = head[0] - (length-1)*orientation;

        //ship goes outside the board
        if(tailCol < 0 || tailRow < 0) return false; 
        const saveTheBoard = this.#board;

        const ship = new Ship(length);
        for(var i=tailRow; i<=head[0]; i++) {
            for(var j=tailCol; j<=head[1]; j++) {
                if(typeof(this.#board[i][j]) === 'object') {
                    board = saveTheBoard;
                    return false;
                }
                board[i][j] = ship;
            }
        }
        return true;
    }

    recieveAttack(row, col) {
        if(typeof(this.#board[row][col]) != 'object') {
            return false;
        } else {
            const ship = this.#board[row][col];
            ship.hit();
            return true;
        }
    }

    randomPlacement() {
        this.#board=this.generateEmptyBoard();
        this.generateRandomCoordinates(5);
        this.generateRandomCoordinates(4);
        this.generateRandomCoordinates(3);
        this.generateRandomCoordinates(3);
        this.generateRandomCoordinates(2);
        this.generateRandomCoordinates(2);
        this.generateRandomCoordinates(2);
    }

    generateRandomCoordinates(length) {
        const shipPlaced = false;
        while(!shipPlaced) {
            const orientation = Math.floor(Math.random()*2);
            const row = Math.floor(Math.random()*10);
            const col = Math.floor(Math.random()*10);

            shipPlaced = this.placeShips(orientation, [row, col], length);
        }
    }
}

module.exports = gameBoard;