const CANVAS_BG = "white";
const CANVAS_BORDER = "black";

var snakeCanvas = document.getElementById("gameOfSnake")
var context = snakeCanvas.getContext("2d");



function beginGame() {
    context.fillStyle = CANVAS_BG;
    context.strokeStyle = CANVAS_BG;
    
    context.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);
    
    context.strokeRect(0, 0, snakeCanvas.width, snakeCanvas.height);

}


beginGame();

//context.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);