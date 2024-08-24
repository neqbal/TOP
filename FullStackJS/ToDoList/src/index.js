import './style.css';
import {createprojectDiv, createTodoDiv, inputPrompt} from './dom.js';
import { addProject, projectManager } from './project.js';

const main=(() => {
    setLocalStorage();
    addProject('defaultProject');
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
            projectManager.changeCurrProject(i);
            JSON.parse(localStorage.getItem(i)).forEach(function(currVal, n) {
                console.log(currVal);
                createTodoDiv(currVal["name"]);
            });
        }
        j++;
    }
    projectManager.changeCurrProject('defaultProject');
}

function setLocalStorage() {
    localStorage.clear();
    localStorage.setItem('defaultProject', JSON.stringify([]));
}

export {display};