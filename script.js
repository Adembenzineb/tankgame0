//Ajusting the size of the container
const container = document.getElementById("container");
const containerSize = 800;

//Creating grids
const gridnum = 13;
container.setAttribute("style" ,`grid-template-columns: repeat(${gridnum}, 1fr); grid-template-rows: repeat(${gridnum}, 1fr); width : ${containerSize}px; height: ${containerSize}px;`);
const gridSize = containerSize / gridnum;
for (let i = 0; i < gridnum**2; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}
