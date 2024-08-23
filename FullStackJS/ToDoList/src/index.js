import './style.css';
import {projectDom} from './dom.js';

const main=(() => {
    setLocalStorage();
})();

function display() {
    const length = localStorage.length;
    var j=0;
    for(const i in localStorage) {
        if(j<length)
            console.log(i);
        j++;
    }
}

function setLocalStorage() {
    localStorage.clear();
    localStorage.setItem('defaultProject', JSON.stringify([]));
}

export {display};