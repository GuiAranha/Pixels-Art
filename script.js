let colorBlack = document.getElementsByClassName('color c1')[0];
let colorRed = document.getElementsByClassName('color c2')[0];
let colorBlue = document.getElementsByClassName('color c3')[0];
let colorGreen = document.getElementsByClassName('color c4')[0];
let board = document.getElementById('pixel-board');


function appendPixel(){
    let pixelBoard = document.getElementById('pixel-board');
    let square = document.createElement('div');
    square.className = "pixel";
    pixelBoard.appendChild(square);
}

for(i = 0; i < 25; i+=1){
    appendPixel();        
}

function selectColor(color){
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorGreen.classList.remove('selected');
    color.classList.add('selected');
}

function painting(){
    board.addEventListener('click', function (event){
        if (colorBlack.classList[2] == "selected"){
            event.target.style.background = "Black";
        }else if (colorRed.classList[2] == "selected"){
            event.target.style.background = "Red";
        }else if (colorBlue.classList[2] == "selected"){
            event.target.style.background = "Blue";
        }else if (colorGreen.classList[2] == "selected"){
            event.target.style.background = "Green";
        }
    });
}


window.onload = function () {

    colorBlack.addEventListener('click', function(event){
        selectColor(colorBlack);
    });
    colorRed.addEventListener('click', function (event){
        selectColor(colorRed);
    });
    colorBlue.addEventListener('click', function (event){
        selectColor(colorBlue);
    });
    colorGreen.addEventListener('click', function (event){
        selectColor(colorGreen);
    });
    board.addEventListener('click', function (event){
        event.target.style.background = "red";
    });
    painting();
};

//DIV                 .remove
//newElement.classList.add('selected')