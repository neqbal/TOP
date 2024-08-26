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

const todoList = function (name, timeOfCreation, dueDate, priority, project, content) {
    this.name = name;
    this.timeOfCreation = timeOfCreation;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.content = content;
}

const addTodo = (name) => {
    const n = projectManager.getCurrProject();
    const currProject = document.querySelector('#'+projectManager.getCurrProject());
    const p = JSON.parse((localStorage.getItem(currProject.getAttribute('id'))));
    const newtodoList = new todoList(name, null, null, null, currProject.getAttribute('id'), null);
    p.push(newtodoList);
    localStorage.setItem(currProject.getAttribute('id'), JSON.stringify(p));
    display();
    projectManager.changeCurrProject(n);
}

export {addTodo, ListManager};