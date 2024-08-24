import {projectManager, addProject} from './project.js';
import { addTodo } from './todoList.js';

const inputPrompt = function(type) {
    console.log(type);
    var parent = document.querySelector('.ToDo-List-container');
    if(type === 'list') {
        parent = document.querySelector('#'+projectManager.getCurrProject());
    }

    const inputBox = document.createElement('input');
    inputBox.setAttribute('class', 'inputBox');
    inputBox.setAttribute('type', "text");
    parent.appendChild(inputBox);
    inputBox.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
            if(type === 'project') {
                parent.removeChild(inputBox);
                addProject(e.target.value);
            } else {
                parent.removeChild(inputBox);
                addTodo(e.target.value);
            }
        }
    });
}

const createprojectDiv = function(nameOfProject) {
    const parent = document.querySelector('.ToDo-List-container');
    
    const projectClass = document.createElement('div');
    projectClass.setAttribute('class', 'project');
    projectClass.setAttribute('id', nameOfProject);

    const projectName = document.createElement('div');
    projectName.setAttribute('class', 'projectName');
    if(nameOfProject != 'defaultProject')
        projectName.innerHTML = '*' + nameOfProject;

    projectClass.addEventListener('click', function(e) {
        projectManager.changeCurrProject(nameOfProject);
        console.log(projectManager.getCurrProject());
    });

    projectClass.appendChild(projectName);
    parent.appendChild(projectClass);
}

const createTodoDiv = function(nameOfList) {

}
export {inputPrompt, createprojectDiv, createTodoDiv};