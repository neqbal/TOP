const createMenu = (content) => {
    content.innerHTML="";
    content.setAttribute("class", "home"); 

    const headingContainer = document.createElement("div");
    headingContainer.setAttribute('class', 'headingContainer');

    const heading = document.createElement("div");
    heading.setAttribute('class', 'heading');

    const h1 = document.createElement("h1");
    h1.innerHTML='Menu card';

    heading.appendChild(h1);
    headingContainer.appendChild(heading);
    content.appendChild(headingContainer);
};

export {createMenu};