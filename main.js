let container = document.querySelector(".container");
let divBox;
let buttonChangeCanvas = document.querySelector(".change-canvas");
let buttonRandomMode = document.querySelector(".random");
let newSize;
let k = 1;
let randomMode = false;
let defaultMode = true; 


/// TO-DO'S


function createDiv(newSize = 4){
    for(let i = 0; i < newSize; i++){
        for(let j = 0; j < newSize; j++){
    // creating boxes (divs) inside of container
    divBox = document.createElement("div");
    container.appendChild(divBox)

    // determining width and height of each box
    divBox.style.width = `${600 / newSize}px`;
    divBox.style.height = `${600 / newSize}px`;

    // adjusting grids columns and rows in accordance with newSize 
    container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
    
    // adding data-key attribute for each box.
    var att = document.createAttribute("data-key"); 
    att.value = k;
    k += 1;
    divBox.setAttributeNode(att);  
}
}
}

function changeColor(e){
    let mouseTargeted = e.target;
    let randomColor = "#" + ((1<<24)*Math.random() | 0).toString(16)
    if(randomMode == false){
        mouseTargeted.style.backgroundColor = "blue"; 
    } else {
        mouseTargeted.style.backgroundColor = randomColor;
    }
}

function getSize(){
    newSize = parseInt(prompt("Determine the new size up to 64."))
    while (newSize > 64){
        newSize = parseInt(prompt("I said up to 64!"))
    }
    container.innerHTML = "";
    createDiv(newSize)
}

function changeGrid(newSize){
    container.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
}

function switchRandom(){
    buttonRandomMode.classList.toggle("clicked");
    randomMode = !randomMode
    defaultMode = !defaultMode
    let allChilds = container.childNodes;
    console.log(allChilds)
    allChilds.forEach(child => child.style.backgroundColor= "");
    console.log(randomMode,defaultMode);
    container.addEventListener('mouseover',changeColor)
}


buttonChangeCanvas.addEventListener("click", getSize); 

buttonRandomMode.addEventListener("click", switchRandom); 

 window.onload = function(){
    changeGrid(newSize)
    createDiv(newSize)
    container.addEventListener('mouseover', changeColor)
}
