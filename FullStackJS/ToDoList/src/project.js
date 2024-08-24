import { projectDom } from "./dom";
import { display } from "./index.js";
const projectManager = (() => {
    let currProject='defaultProject';
    let currTodoList = '';
    const changeCurrProject = (projectName) => {
        currProject=projectName;
    }

    const getCurrProject = () => currProject;

    const changeCurrTodoList = (listName) => {
        currTodoList = listName;
    }

    const getCurrTodoList = () => currTodoList;

    return {changeCurrProject, getCurrProject, changeCurrTodoList, getCurrTodoList};
})();

function addProject(name) {
    localStorage.setItem(name, JSON.stringify([]));
    display();
}

const deleteProject = (name) => {

}

export{projectManager, addProject, deleteProject};