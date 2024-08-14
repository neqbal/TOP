import './style.css';
import { createNote } from './notes';

const main = () => {
    setLocalStorage();
    const note = document.querySelector("#note");
    const folder = document.querySelector("#folder");
    const tdl = document.querySelector(".ToDo-List-container");

    note.addEventListener('click', () => {
        createNote(tdl);
    });

    folder.addEventListener('click', () => {
        prompt("add folder");
    });
};

function setLocalStorage() {
    localStorage.clear();
    var ob = {};
    localStorage.setItem("", JSON.stringify(ob));
}

main();