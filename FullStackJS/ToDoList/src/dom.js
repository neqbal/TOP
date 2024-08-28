import {projectManager, addProject} from './project.js';
import { addTodo, ListManager } from './todoList.js';

const inputPrompt = function(type) {
    var parent = document.querySelector('.ToDo-List-container');
    if(type === 'list') {
        parent = document.querySelector('#'+projectManager.getCurrProject());
    } else {
        projectManager.changeCurrProject('defaultProject');
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
    if(nameOfProject != 'defaultProject') {
        projectName.innerHTML = '*' + nameOfProject;

        projectClass.addEventListener('click', function(e) {
            projectManager.changeCurrProject(nameOfProject);
            e.stopPropagation();
        });
    }

    projectClass.appendChild(projectName);
    parent.appendChild(projectClass);
}

const createTodoDiv = function(listObject) {
    const parent = document.querySelector('#'+projectManager.getCurrProject());

    const listName = document.createElement('div');
    listName.setAttribute('class', 'listName');
    listName.setAttribute('id', listObject["name"]);
    listName.innerHTML = '#' + listObject["name"];

    listName.addEventListener('click', function(e) {
        ListManager.changeCurrList(listObject["name"]);
        createContentInput(listObject);
        console.log("abcd");
    });

    parent.appendChild(listName);

}

const createContentInput = function(listObject) {
    const display_items = document.querySelector(".display-items");
    display_items.innerHTML="";
    const textArea = document.createElement("textarea");
    textArea.setAttribute('class', "textArea")
    textArea.setAttribute("id", listObject["name"]);
    textArea.value=listObject["content"];
    display_items.appendChild(textArea);
}

const createContentDiv = function(listObject) {

}

export {inputPrompt, createprojectDiv, createTodoDiv, createContentInput, createContentDiv};