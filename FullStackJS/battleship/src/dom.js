import { attackFromHuman, attackFromComputer, checkForWinner } from "./gameController";

/* function createGrids(player) {
    const playerDiv = (player.type === 0) ? document.querySelector('.human') : document.querySelector('.computer');
    for(var i=0; i<10; i++) {
        const row = document.createElement("div");
        row.setAttribute('id', 'row');
        playerDiv.appendChild(row);
        for(var j=0; j<10; j++) {
            const gridBox = createGridBox();
            if(typeof(player.board.board[i][j]) === 'object' && playerDiv.className === 'human') {
                gridBox.innerHTML='🚢';
            }
            const r = i;
            const c = j;
            if(playerDiv.className==='computer') {
                gridBox.addEventListener('click', function() {
                    if(attack(player, r, c)) {
                        gridBox.innerHTML='💥';
                        if(player.board.board[r][c].isSunk()) {
                            player.countShip -=1;
                            checkForWinner(player);
                        }
                    } else {
                        gridBox.innerHTML='💨';
                    }
                    attack()
                });
            }
            row.append(gridBox);
        }
    }
} */

function createGrids(human, computer) {
    const humanDiv = document.querySelector(".human");
    const compDiv = document.querySelector(".computer");
    for(var i=0; i<10; i++) {
        const hRow = document.createElement("div");
        hRow.setAttribute('id', "row");

        const cRow = document.createElement("div");
        cRow.setAttribute('id', "row");

        humanDiv.appendChild(hRow);
        compDiv.appendChild(cRow);
        
        for(var j=0; j<10; j++) {
            const y = i;
            const x = j;
            const hGridBox = createGridBox();
            const cGridBox = createGridBox();
            if(typeof(human.board.board[y][x]) === 'object') {
                hGridBox.innerHTML='🚢';
            }
            if(typeof(computer.board.board[y][x]) === 'object') {
                cGridBox.innerHTML='🚢';
            }
            cGridBox.addEventListener("click", function attackListener() {
                console.log("clicked");
                attackFromHuman(computer, y, x, cGridBox, attackListener);
                while(!attackFromComputer(human));
            });
            hRow.appendChild(hGridBox);
            cRow.appendChild(cGridBox);
        }
    }
}

function createGridBox() {
    const box = document.createElement('div');
    box.style.cssText="height: 50px; width: 50px";
    box.style.backgroundColor="blue";
    box.style.borderStyle="solid";
    box.style.borderColor="white";
    box.style.borderWidth="1px";
    return box;
}
export {createGrids};