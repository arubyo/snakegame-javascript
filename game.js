import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from  "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRender = 0;
const gameBoard = document.getElementById('gameBoard');
let gameOver = false;



//game loop
function main(currentTime)
 {
    if (gameOver) {
       if(confirm('Damn, you suck. Press ok to retry')) {
          window.location = '/'
       }
       return 
    }

    window.requestAnimationFrame(main);
    const secondsSinceRender = (currentTime - lastRender) / 1000;
    if (secondsSinceRender < 1 / SNAKE_SPEED) return

    lastRender = currentTime;
   

    update()
    draw()
    

 }

 window.requestAnimationFrame(main);


 function update() {
    updateSnake()
    updateFood()
    checkDeath()
 }

 function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard)
 }

 function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
 }