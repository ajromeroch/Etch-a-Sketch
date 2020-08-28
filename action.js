function initialGrid(side) {
    document.addEventListener("DOMContentLoaded", function () {
        let totalCount = side * side;
        const container = document.querySelector(".etch-container");
        css = `display: grid; grid-template-columns: repeat(${side}, auto)`;
        container.style.cssText = css;

        for (let i = 0; i < totalCount; i++) {
            let div = document.createElement("div");
            div.classList.add("black-drawing")
            div.addEventListener("mouseover", defaultColor)
            container.appendChild(div);
        }
    });
}

function createGrid(side) {
    let totalCount = side * side;
    const container = document.querySelector(".etch-container");
    css = `display: grid; grid-template-columns: repeat(${side}, auto)`;
    container.style.cssText = css;

    for (let i = 0; i < totalCount; i++) {
        let div = document.createElement("div");
        div.classList.add("black-drawing")
        div.addEventListener("mouseover", defaultColor)
        container.appendChild(div);
    }
}

function defaultColor() {
    this.style.backgroundColor = "black";
}

function eraserColor() {
    this.style.backgroundColor = "white";
}

function randomColor() {
    let x = rand(256);
    let y = rand(256);
    let z = rand(256);
    let randColor = `rgb(${x}, ${y}, ${z})`;
    this.style.backgroundColor = randColor;
}

function rand(max) {
    let numb = Math.floor(Math.random() * max);
    return numb;
}


function eraser() {
    let sons = document.querySelector(".etch-container");
    for(let i = 0; i < sons.childElementCount; i++) {
        if(sons.children[i].classList.value == "black-drawing") {
            sons.children[i].classList.remove("black-drawing");
            sons.children[i].classList.add("white-drawing");
            sons.children[i].removeEventListener("mouseover", defaultColor);
            sons.children[i].addEventListener("mouseover", eraserColor);
        } else if (sons.children[i].classList.value == "random-drawing") {
            sons.children[i].classList.remove("random-drawing");
            sons.children[i].classList.add("white-drawing");
            sons.children[i].removeEventListener("mouseover", randomColor);
            sons.children[i].addEventListener("mouseover", eraserColor);
            }
    }

}

function blackPencil() {
    let sons = document.querySelector(".etch-container");
    for(let i = 0; i < sons.childElementCount; i++) {
        if(sons.children[i].classList.value == "white-drawing") {
            sons.children[i].classList.remove("white-drawing");
            sons.children[i].classList.add("black-drawing");
            sons.children[i].removeEventListener("mouseover", eraserColor);
            sons.children[i].addEventListener("mouseover", defaultColor);
        } else if (sons.children[i].classList.value == "random-drawing") {
            sons.children[i].classList.remove("random-drawing");
            sons.children[i].classList.add("black-drawing");
            sons.children[i].removeEventListener("mouseover", randomColor);
            sons.children[i].addEventListener("mouseover", defaultColor);
            }
    }

}

function randomPencil() {
    let sons = document.querySelector(".etch-container");
    for(let i = 0; i < sons.childElementCount; i++) {
        if(sons.children[i].classList.value == "white-drawing") {
            sons.children[i].classList.remove("white-drawing");
            sons.children[i].classList.add("random-drawing");
            sons.children[i].removeEventListener("mouseover", eraserColor);
            sons.children[i].addEventListener("mouseover", randomColor);
        } else if (sons.children[i].classList.value == "black-drawing") {
            sons.children[i].classList.remove("black-drawing");
            sons.children[i].classList.add("random-drawing");
            sons.children[i].removeEventListener("mouseover", defaultColor);
            sons.children[i].addEventListener("mouseover", randomColor);
            }
    }

}

function putBorder() {
    let sons = document.querySelector(".etch-container");
    for(let i = 0; i < sons.childElementCount; i++) {
        if(sons.children[i].style.border == "") {
            sons.children[i].style.border = "1px dotted black"
        } else {
            sons.children[i].style.border = ""
        }
    }
}



function reset() {
    let sons = document.querySelector(".etch-container");
    while (sons.firstChild) {
        sons.removeChild(sons.firstChild);
    }

    let newGrid = prompt("How big should be the new square grid?");
    createGrid(newGrid);
}

document.addEventListener("DOMContentLoaded", function () {
    const clearBtn = document.querySelector("#clear");
    clearBtn.addEventListener("click", reset);
    const eraserBtn = document.querySelector("#eraser");
    eraserBtn.addEventListener("click", eraser);
    const blackBtn = document.querySelector("#black");
    blackBtn.addEventListener("click", blackPencil);
    const randomBtn = document.querySelector("#random");
    randomBtn.addEventListener("click", randomPencil);
    const borderBtn = document.querySelector("#border");
    borderBtn.addEventListener("click", putBorder);
})

initialGrid(16);

