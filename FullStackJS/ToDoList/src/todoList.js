import {todoDom} from './dom.js';
import { projectManager } from './project.js';
import { display } from './index.js';
const ListManager = (() => {
    let currList = '';

    const changeCurrList = (list) => {
        currList = list;
    }

    const getCurrList = () => currList;

    return {changeCurrList, getCurrList};
})();

const todoList = function (name, timeOfCreation, dueDate, priority, project) {
    this.name = name;
    this.timeOfCreation = timeOfCreation;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
}

const addTodo = (name) => {
    const currProject = document.querySelector('#'+projectManager.getCurrProject());
    const p = JSON.parse((localStorage.getItem(currProject.getAttribute('id'))));
    const newtodoList = new todoList(name, null, null, null, currProject.getAttribute('id'));
    p.push(newtodoList);
    localStorage.setItem(currProject.getAttribute('id'), JSON.stringify(p));
    display();
}

export {addTodo, ListManager};