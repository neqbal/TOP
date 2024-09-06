import {Player} from './player.js';
import { createGrids } from './dom.js';

function startGame() {
    
    const human = new Player(0);
    const computer = new Player(1);

    human.board.randomPlacement();
    computer.board.randomPlacement();
    createGrids(human, computer);

    randomizeButton();
}
function randomizeButton() {
    document.querySelector(".randomize").addEventListener("click", function() {
        startGame();
    });   
}
function attackFromHuman(computer, row, col, GridBox, attackListener) {
    attack(computer, row, col, GridBox);
    GridBox.removeEventListener('click', attackListener, false);
}

function attackFromComputer(human) {
    const row = Math.floor(Math.random()*10);
    const col = Math.floor(Math.random()*10);

    const hGridBox = document.querySelector(".human").childNodes[row].childNodes[col];
    if(hGridBox.innerHTML === '💨' || hGridBox.innerHTML === '💥') return false;

    attack(human, row, col, hGridBox);
    
    return true;
}

function attack(player, row, col, GridBox) {
    if(player.board.recieveAttack(row, col)) {
        GridBox.innerHTML = '💥';
        if(player.board.board[row][col].isSunk()) {
            player.countShip -=1;
            checkForWinner(player);
        }
    } else {
        GridBox.innerHTML= '💨';
    }
}

function checkForWinner(player) {
    if(player.countShip === 0) {
        if(player.type === 0) {
            alert("computer won");
        } else {
            alert("human won");
        }
        startGame();
    }
}

export {startGame, attackFromHuman, attackFromComputer, checkForWinner};