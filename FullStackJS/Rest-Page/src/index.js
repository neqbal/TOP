import './style.css';

import {createHome} from './home.js';
import {createMenu} from './menu.js';
import {createContact} from './contact.js';

const mainController = () => {
    const tabs = document.querySelectorAll("button");
    const content = document.querySelector("#content");
    createHome(content);
    tabs[0].addEventListener('click', () => {
        if(content.getAttribute("class") != "home")
            createHome(content);
    });

    tabs[1].addEventListener('click', () => {
        if(content.getAttribute("class") != "menu")
            createMenu(content);
    });

    tabs[2].addEventListener('click', () => {
        if(content.getAttribute("class") != "contact")
            createContact(content);
    });
}

mainController();