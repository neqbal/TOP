const newlist = (listName, timeOfCreation, dueDate, content, project) => {
    return {listName, timeOfCreation, dueDate, content, project};
}

const listStorageManager = (() => {
    var currProject="";
    var currNote="";
    const changeProject = () => {

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
    return {currProject, currNote, changeProject, changeNote, addList};
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

    ListContainer.insertBefore(div, listname);
    ListContainer.removeChild(listname);

    listStorageManager.changeNote(div.innerHTML);
    listStorageManager.addList(div.innerHTML);

    ListContainer.addEventListener('click', function(e) {
        listStorageManager.changeNote(e.target.firstChild.innerHTML);
    });
};

export {createList};