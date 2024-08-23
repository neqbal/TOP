import { projectDom } from "./dom";
import { display } from "./index.js";
const projectManager = (() => {
    const currProject="defaultProject";

    const changeCurrProject = (name) => {
        currProject=name;
    }

    const getCurrProject = () => currProject;

    return {changeCurrProject, getCurrProject, addProject};
})();

function addProject(name) {
    localStorage.setItem(name, JSON.stringify([]));
    display();
}

const deleteProject = (name) => {

}

export{projectManager, addProject, deleteProject};