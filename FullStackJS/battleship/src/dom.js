import { attackFromHuman, attackFromComputer} from "./gameController";

function createGrids(human, computer) {
    const humanDiv = document.querySelector(".human");
    humanDiv.innerHTML="";
    const compDiv = document.querySelector(".computer");
    compDiv.innerHTML="";
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
            cGridBox.addEventListener("click", function attackListener() {
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