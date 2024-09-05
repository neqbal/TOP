import {gameBoard} from './gameBoard.js'

class Player {
    countShip=21;
    constructor(type) {
        this.board = new gameBoard();
        this.type=type;
    }
}

export {Player};