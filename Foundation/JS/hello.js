function getComputerChoice() {
    let choice =  Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "Rock";
    } else if(choice === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let hc = (prompt("Enter choice"));
    return hc;
}

function playRound(humanchoice, compchoice) {
    if(humanchoice === compchoice) {
        console.log("Draw");
        return;
    }
    
    if(humanchoice === "Rock") {
        if(compchoice === "Paper") {
            console.log("You Loose");
        } else {
            console.log("You Win!!");
        }
    } else if(humanchoice === "Paper") {
        if(compchoice === "Scissor") {
            console.log("You Loose");
        } else {
            console.log("You Win!!");
        }
    } else {
        if(compchoice === "Rock") {
            console.log("You Loose");
        } else {
            console.log("You Win!!");
        }
    }
}

const humanchoice = getHumanChoice();
const compchoice = getComputerChoice();

console.log("Your choice:",  humanchoice);
console.log("Computer choice:", compchoice);

playRound(humanchoice, compchoice);