import {Player} from './player.js';
import { gameBoard } from './gameBoard.js';
import { createGrids } from './dom.js';

function startGame() {
    
    const human = new Player(0);
    const computer = new Player(1);

    human.board.randomPlacement();
    computer.board.randomPlacement();
    createGrids(human, computer);
}

function attackFromHuman(player, row, col, GridBox, attackListener) {
    if(player.board.recieveAttack(row, col)) {
        player.board.board[row][col].hit();
        
        player.countShip -=1;
        console.log(player.countShip);
        checkForWinner(player);
        /* if(player.board.board[row][col].isSunk()) {
            player.countShip -=1;
            checkForWinner(player);
        } */
        GridBox.innerHTML = '💥';
        player.board.board[row][col] = undefined;
    } else {
        GridBox.innerHTML= '💨';
    }
    GridBox.removeEventListener('click', attackListener, false);
}

function attackFromComputer(human) {
    const row = Math.floor(Math.random()*10);
    const col = Math.floor(Math.random()*10);

    const hGridBox = document.querySelector(".human").childNodes[row].childNodes[col];
    if(hGridBox.innerHTML === '💨' || hGridBox.innerHTML === '💥') return false;

    if(human.board.recieveAttack(row, col)) {
        human.board.board[row][col].hit();
        human.countShip -=1;
        /* if(human.board.board[row][col].isSunk()) {
            human.countShip -=1;
            checkForWinner(human);
        } */
        checkForWinner(human);
        hGridBox.innerHTML = '💥';
        human.board.board[row][col] = undefined;
    } else {
        hGridBox.innerHTML='💨';
    }
    return true;
}

function checkForWinner(player) {
    if(player.countShip === 0) {
        if(player.type === 0) {
            alert("computer won");
        } else {
            alert("human won");
        }
    }
}

export {startGame, attackFromHuman, attackFromComputer, checkForWinner};