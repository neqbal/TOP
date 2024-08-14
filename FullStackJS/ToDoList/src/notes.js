const createNote = (tdl) => {
    const NameContainer = document.createElement("div");
    NameContainer.setAttribute("class", "name-container");

    const name = document.createElement("input");
    name.setAttribute("class", "name-area");
    name.setAttribute("type", "text");
    name.setAttribute("maxlength", "12");

    const more_container = document.createElement("div");
    more_container.setAttribute("class", "more-container");
    
    NameContainer.appendChild(name);
    NameContainer.appendChild(more_container);
    tdl.appendChild(NameContainer);

    name.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
            addList(name);
        }
    });
};

const addList = (name) => {
    localStorage.setItem(name.value, "");
    const NameContainer = name.parentNode;
    const div = document.createElement("div");
    div.innerHTML=name.value;

    NameContainer.insertBefore(div, name);
    NameContainer.removeChild(name);
};

export {createNote};