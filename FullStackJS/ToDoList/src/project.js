import { display } from "./index.js";
const projectManager = (() => {
    let currProject='defaultProject';
    const changeCurrProject = (projectName) => {
        currProject=projectName;
    }

    const getCurrProject = () => currProject;

    return {changeCurrProject, getCurrProject};
})();

function addProject(name) {
    localStorage.setItem(name, JSON.stringify([]));
    display();
    projectManager.changeCurrProject(name);
}

const deleteProject = (name) => {

}

export{projectManager, addProject, deleteProject};