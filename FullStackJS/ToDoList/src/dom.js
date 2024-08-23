import {projectManager, addProject, deleteProject} from './project.js';
import { addTodo } from './todoList.js';

const projectDom=(() => {
    const projectIcon = document.querySelector('#project');
    const todoListContainer = document.querySelector('.ToDo-List-container');
    createProjectDiv("defaultProject");
    projectIcon.addEventListener('click', () => {
        projectNamePrompt();
    });

    function projectNamePrompt() {
        const inputBox = document.createElement('input');
        inputBox.setAttribute('class', 'inputBox');
        inputBox.setAttribute('maxlength', '12');

        todoListContainer.appendChild(inputBox);

        inputBox.addEventListener('keydown', function(e) {
            if(e.key === 'Enter') {
                addProject(e.target.value);
                projectManager.changeCurrProject(e.target.value);
                todoListContainer.removeChild(e.target);
            }
        });
    }

    function createProjectDiv(name) {
        const projectContainer = document.createElement('div');
        projectContainer.setAttribute('class', 'project');
        projectContainer.setAttribute('id', name);

        const nameContainer = document.createElement('div');
        nameContainer.setAttribute('class', 'projectName');
        if(name != 'defaultProject')
            nameContainer.innerHTML='*' + name;

        projectContainer.appendChild(nameContainer);
        todoListContainer.appendChild(projectContainer);
    }

    return {createProjectDiv};
})();


const todoDom = (() => {
    const todoIcon = document.querySelector('#todo');
    const currProject = document.querySelector(projectManager.getCurrProject());
    
    todoIcon.addEventListener('click', () => {
        todoListNamePrompt();
    });

    function todoListNamePrompt() {
        const inputBox = document.createElement('input');
        inputBox.setAttribute('class', 'inputBox');
        inputBox.setAttribute('maxlength', '12');

        currProject.appendChild(inputBox);

        inputBox.addEventListener('keydown', function(e) {
            if(e.key === 'Enter') {
                addTodo(e.target.value);
                currProject.removeChild(e.target); 
            }
        });
    }

    function createTodoDiv(name) {
        
    }
})();


export {projectDom, todoDom};