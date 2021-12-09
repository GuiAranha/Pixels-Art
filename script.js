
function appendPixel(){
    let pixelBoard = document.getElementById('pixel-board');
    let square = document.createElement('div');
    square.className = "pixel";
    pixelBoard.appendChild(square);
}

for(i = 0; i < 25; i+=1){
    appendPixel();        
}
