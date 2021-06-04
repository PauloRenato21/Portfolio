let currentDivIndex = 0;
let divs = document.querySelectorAll(".container-tecnologias");
max = divs.length;

function nextDiv(){

    divs[currentDivIndex].classList.remove("selected");

    currentDivIndex++;

    if(currentDivIndex >= max){
        currentDivIndex = 0;
    }

    divs[currentDivIndex].classList.add("selected");
}

function lastDiv(){
    divs[currentDivIndex].classList.remove("selected");

    currentDivIndex--;

    if(currentDivIndex < 0){
        currentDivIndex = 1;
    }

    divs[currentDivIndex].classList.add("selected");
}

document.querySelector(".arrow-right").addEventListener("click",nextDiv);
document.querySelector(".arrow-left").addEventListener("click",lastDiv);

function inicia(){
    getdata();
}

function getdata(){
    let footerAno = document.querySelector(".container-footer");
    let data = new Date();
    let ano = data.getFullYear();
    if(data.getFullYear() == 2021){
        footerAno.innerHTML += "";
    } else{
        footerAno.innerHTML += ` - ${ano}`;
    }
}

window.addEventListener("load",inicia);