//Ajusting the size of the container
const container = document.getElementById("container");
const containerW = 800;
const containerH = 800;
container.style.width = `${containerW}px`;
container.style.height = `${containerH}px`;

//Creating grids
const gridnum = 10;
const gridSize = containerW / gridnum;
for (let i = 0; i < gridnum**2; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}
