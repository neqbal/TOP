import './style.css';
import { createList } from './notes';

const main = () => {
    setLocalStorage();
    const note = document.querySelector("#note");
    const folder = document.querySelector("#folder");
    const tdl = document.querySelector(".ToDo-List-container");

    note.addEventListener('click', () => {
        createList(tdl);
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