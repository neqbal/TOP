const newlist = (listName, timeOfCreation, dueDate, content, project) => {
    return {listName, timeOfCreation, dueDate, content, project};
}

const newProject = (projectName, timeOfCreation) => {
    return {projectName, timeOfCreation};
}

const listStorageManager = (() => {
    var currProject="";
    var currNote="";
    const changeProject = (projectName) => {
        currProject = projectName;
    };

    function changeNote(noteName) {

        currNote = noteName;
    }

    const addList = (name) => {
        const list = newlist(currNote, null, null, null, currProject);

        const project = JSON.parse(localStorage.getItem(currProject));

        project[currNote] = list;

        localStorage.setItem(currProject, JSON.stringify(project));
    }

    const addProject = (projectname) => {

        localStorage.setItem(currProject, JSON.stringify({}));
    }
    return {currProject, currNote, changeProject, changeNote, addList, addProject};
})();

const createList = (tdl) => {
    const ListContainer = document.createElement("div");
    ListContainer.setAttribute("class", "list-container");

    const inputListName = document.createElement("input");
    inputListName.setAttribute("class", "input-ListName");
    inputListName.setAttribute("type", "text");
    inputListName.setAttribute("maxlength", "12");

    const listOptions = document.createElement("div");
    listOptions.setAttribute("class", "listOptions-container");
    
    ListContainer.appendChild(inputListName);
    ListContainer.appendChild(listOptions);
    tdl.appendChild(ListContainer);

    inputListName.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
            addListToContainer(inputListName);
        }
    });
};

const addListToContainer = (listname) => {
    const ListContainer = listname.parentNode;
    const div = document.createElement("div");
    div.setAttribute("id", "listName-container");
    div.innerHTML="#" + listname.value;
    div.style.color="white";
    div.style.cssText="width: 100%";
    ListContainer.insertBefore(div, listname);
    ListContainer.removeChild(listname);

    listStorageManager.changeNote(div.innerHTML);
    listStorageManager.addList(div.innerHTML);

    div.addEventListener('click', function(e) {
        
        listStorageManager.changeNote(e.target.innerHTML);
    });
};

const addProjectToContainer = (projectname) => {
    const ProjectContainer = projectname.parentNode;
    const div = document.createElement("div");
    div.setAttribute("id", "projectName-container");
    div.innerHTML="*" + projectname.value;
    div.style.color="white";
    div.style.cssText="width: 100%";
    ProjectContainer.insertBefore(div, projectname);
    ProjectContainer.removeChild(projectname);

    listStorageManager.changeProject(div.innerHTML);
    listStorageManager.addProject(div.innerHTML);

    div.addEventListener('click', function(e) {
        
        listStorageManager.changeProject(e.target.innerHTML);
    });
};

const createProject = (tdl) => {
    const ProjectContainer = document.createElement("div");
    ProjectContainer.setAttribute("class", "project-container");

    const inputProjectName = document.createElement("input");
    inputProjectName.setAttribute("class", "input-ProjectName");
    inputProjectName.setAttribute("type", "text");
    inputProjectName.setAttribute("maxlength", "12");

    const projectOptions = document.createElement("div");
    projectOptions.setAttribute("class", "projectOptions-container");
    
    ProjectContainer.appendChild(inputProjectName);
    ProjectContainer.appendChild(projectOptions);
    tdl.appendChild(ProjectContainer);

    inputProjectName.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
            addProjectToContainer(inputProjectName);
        }
    });
}

export {createList, createProject};