import './home.css';

const createHome = (content) => {

    content.setAttribute("class", "home"); 

    const headingContainer = document.createElement("div");
    headingContainer.setAttribute('class', 'headingContainer');

    const heading = document.createElement("div");
    heading.setAttribute('class', 'heading');

    const h1 = document.createElement("h1");
    h1.innerHTML='Lorem Ipsum dus das dest';

    heading.appendChild(h1);
    headingContainer.appendChild(heading);
    content.appendChild(headingContainer);


    const aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("class", "aboutContainer");

    const about = document.createElement("div");
    about.setAttribute("class", "about");
    
    const p1 = document.createElement("p");
    p1.innerHTML="Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum ";

    about.appendChild(p1);
    aboutContainer.appendChild(about);
    content.appendChild(aboutContainer);

    const hoursContainer = document.createElement("div");
    hoursContainer.setAttribute("class", "hoursContainer");

    const hours = document.createElement("div");
    hours.setAttribute("class", "hours");

    const p2 = document.createElement("p");
    p2.innerHTML="dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dastdast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dastdast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dastdast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast Lorem ipsum dus des dast";

    hours.appendChild(p2);
    hoursContainer.appendChild(hours);
    content.appendChild(hoursContainer);

};

export {createHome};