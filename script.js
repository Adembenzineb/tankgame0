//Ajusting the size of the container
const container = document.getElementById("container");
const containerSize = 650;

//Creating grids
const gridnum = 15;
container.setAttribute("style" ,`grid-template-columns: repeat(${gridnum}, 1fr); grid-template-rows: repeat(${gridnum}, 1fr); width : ${containerSize}px; height: ${containerSize}px;`);
const gridSize = containerSize / gridnum;
for (let i = 1; i <= gridnum**2; i++) {
    let div = document.createElement("div");
    div.setAttribute("id",`${i}`)
    div.classList.add("grid");
    container.appendChild(div);
}


const tank = "blue" ;
const initpos = Math.round(gridnum**2 / 2); //the center grid position
const centerDiv = document.getElementById(`${initpos}`);
centerDiv.style.backgroundColor = tank ;
let newDiv = centerDiv;
let prevDiv = centerDiv;
let pos = initpos;

window.addEventListener("keydown" , (e) => {
    if (e.key == "ArrowRight"){
        prevDiv = newDiv;
        prevDiv.style.backgroundColor = "white" ;
        pos ++
        newDiv = document.getElementById(`${pos}`);
        newDiv.style.backgroundColor = tank;
    }else if (e.key == "ArrowLeft"){
        prevDiv = newDiv;
        prevDiv.style.backgroundColor = "white" ;
        pos --
        newDiv = document.getElementById(`${pos}`);
        newDiv.style.backgroundColor = tank;
    }else if (e.key == "ArrowUp"){
        prevDiv = newDiv;
        prevDiv.style.backgroundColor = "white" ;
        pos -= gridnum ;
        newDiv = document.getElementById(`${pos}`);
        newDiv.style.backgroundColor = tank;
    }else if (e.key == "ArrowDown"){
        prevDiv = newDiv;
        prevDiv.style.backgroundColor = "white" ;
        pos += gridnum ;
        newDiv = document.getElementById(`${pos}`);
        newDiv.style.backgroundColor = tank;
    }
})