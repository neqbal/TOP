const projectManager = (() => {
    const currProject=document.querySelector('#defaultProject');
    
    const changeCurrProject = (name) => {
        currProject=name;
    }

    const getCurrProject = () => currProject;

    return {changeCurrProject, getCurrProject, addProject};
})();

const addProject = (name) => {
    localStorage.setItem(name, JSON.stringify({}));
    localStorage.setItem('projectArray', localStorage.getItem('projectArray').push(name));
}

const deleteProject = (name) => {

}

export{projectManager, addProject, deleteProject};