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
    const p = JSON.parse((localStorage.getItem(n)));
    const newtodoList = new todoList(name, null, null, null, n, null);
    p.push(newtodoList);
    localStorage.setItem(n, JSON.stringify(p));
    display();
    projectManager.changeCurrProject(n);
}

const saveListContent = function(listObject, content) {
    
    listObject["content"] = content;
    const p=JSON.parse(localStorage.getItem(listObject["project"]));
    console.log(listObject);
    p.forEach(function(a, index) {
        if(a["name"] === listObject["name"]) {
            p[index] = listObject;
        }
    });

    localStorage.setItem(listObject["project"], JSON.stringify(p));
}
export {addTodo, ListManager, saveListContent};