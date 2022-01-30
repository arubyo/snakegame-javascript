const CANVAS_BG = "white";
const CANVAS_BORDER = "black";
const SNAKE_COLOUR = "pink";
const SNAKE_OUTLINE = "black";
const GAME_SPEED = 100;

const deltaX = 10;
const deltaY = 0;

var snakeCanvas = document.getElementById("gameOfSnake");
var context = snakeCanvas.getContext("2d");

let snake = [
    {x: 200, y: 150},
    {x: 190, y: 150},
    {x: 180, y: 150},
    {x: 170, y: 150},
    {x: 160, y: 150},
    {x: 150, y: 150},
    {x: 140, y: 150}
]

main();

function main() {

    if (didGameEnd()) return;

  setTimeout(function onTick() {
    moveSnake = false;
    beginGame();
    advanceSnake();
    drawSnake();

    main();
  }, GAME_SPEED)
}

function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
      if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) 
      return true
    }



function beginGame() {
    //defines the background colour of game canvas
    context.fillStyle = CANVAS_BG;
    //defines the border colour of the game canvas
    context.strokeStyle = CANVAS_BORDER;
    //calls function to fill canvas with height & width from html
    context.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);
    //calls function to draw border of canvas with hieght & width from html
    context.strokeRect(0, 0, snakeCanvas.width, snakeCanvas.height);

}
function drawSnake() {
    snake.forEach(combineSnake)
}

function combineSnake(snakePart) {

  
    
    context.fillStyle = SNAKE_COLOUR;
    context.strokeStyle = SNAKE_OUTLINE;
    context.fillRect(snakePart.x, snakePart.y, 10, 10);
    context.strokeRect(snakePart.x, snakePart.y, 10, 10);

}

window.addEventListener("keydown", moveSnake);

function moveSnake(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;
  
    if (moveSnake) return;
    moveSnake = true;

    const keyPressed = event.keyCode;

    const goingUp = deltaY === -10;
    const goingDown = deltaY === 10;
    const goingRight = deltaX === 10;
    const goingLeft = deltaX === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        deltaX = -10;
        deltaY = 0;
    }
    if (keyPressed === UP_KEY && !goingDown) {
        deltaX = 0;
        deltaY = -10;
    }
    if (keyPressed === RIGHT_KEY && !goingLeft) {
        deltaX = 10;
        deltaY = 0;
    }
    if (keyPressed === DOWN_KEY && !goingUp) {
      deltaX = 0;
      deltaY = 10;
    }
  }


function advanceSnake() {
    const head = {x: snake[0].x + deltaX, y: snake[0].y + deltaY};
    snake.unshift(head);

}

//context.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);