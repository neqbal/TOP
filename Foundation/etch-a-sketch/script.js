const grid = document.querySelector("#grid");

updateGrid(16);

const grid_size = document.querySelector("#grid_size");

grid_size.addEventListener("click", () => {
    const size = parseInt(prompt("Enter grid size"));
    updateGrid(size);
}); 

function updateGrid(size) {
    var l = grid.children.length;
    for(let i=0; i<l; i++) {
        grid.removeChild(grid.lastChild);
    }
    
    const heightGrid = size*50;
    const widthGrid = size*50;

    var r; 
    for(let i=0; i<size*size; i++) {
        
        if(i % size === 0) {
            r = document.createElement("div");
            r.setAttribute("class", "row");
            r.style.display = "flex";
            grid.appendChild(r);
        }
        const c = document.createElement("div");
        c.setAttribute("class", "col");
        c.style.backgroundColor = "grey";
        c.style.height = "50px";
        c.style.width = "50px";
        c.style.flex = "1";

        c.addEventListener("mouseover", function (e) {
            this.style.backgroundColor = getRandomColor();
        } );


        r.appendChild(c);
        console.log(r);
    }
    grid.style.height = heightGrid;
    grid.style.width = widthGrid;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
