import './style.css';
import {createprojectDiv, inputPrompt} from './dom.js';
import { addProject } from './project.js';

const main=(() => {
    setLocalStorage();
    addProject('defaultProject');
    createprojectDiv('defaultProject');
    const projectIcon = document.querySelector('#project');
    projectIcon.addEventListener('click', () => {
        inputPrompt('project');
    });

    const todoIcon = document.querySelector('#todo');
    todoIcon.addEventListener('click', () => {
        inputPrompt('list');
    });
})();

function display() {
    document.querySelector('.ToDo-List-container').innerHTML='';
    const length = localStorage.length;
    var j=0;

    for(const i in localStorage) {
        if(j < length) {
            createprojectDiv(i);
            for(const j in JSON.parse(localStorage.getItem(i))) {
    
            }
        }
        j++;
    }
}

function setLocalStorage() {
    localStorage.clear();
    localStorage.setItem('defaultProject', JSON.stringify([]));
}

export {display};