import './style.css';
import { createNote } from './notes';

const main = () => {
    const note = document.querySelector("#note");
    const folder = document.querySelector("#folder");

    note.addEventListener('click', () => {
        createNote();
    });

    folder.addEventListener('click', ()=> {
        prompt("add folder");
    });
}

main();