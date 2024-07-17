const container = document.querySelector('#container');
const p1 = document.createElement('p');
p1.textContent = 'Hey I am red';
p1.style.color = 'red';
container.appendChild(p1);

const h3 = document.createElement('h3');
h3.textContent = 'Hey I am blue h3';
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = "background-color: pink; border-color: black";

const h1 = document.createElement('h1');
h1.textContent = 'Hey I am in a div too';
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = 'I am too';
div.appendChild(p2);

container.appendChild(div);