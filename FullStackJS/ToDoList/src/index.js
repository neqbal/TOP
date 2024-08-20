import './style.css';

const main=(() => {
    setLocalStorage();
})();

function setLocalStorage() {
    localStorage.clear();
    var projectArray = new Array();
    localStorage.setItem('projectArray', projectArray);
}