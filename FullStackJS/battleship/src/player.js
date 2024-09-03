import {gameBoard} from './gameBoard.js'

class Player {
    constructor(type) {
        this.board = new gameBoard();
    }
}

export {Player};