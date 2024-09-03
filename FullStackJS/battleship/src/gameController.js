import {Player} from './player.js';
import { gameBoard } from './gameBoard.js';

function startGame() {
    const human = new Player(0);
    const computer = new Player(1);

    createBoard(human);
    createBoard(computer);
}

function createBoard(player) {
    player.randomPlacement();
}

export {startGame};