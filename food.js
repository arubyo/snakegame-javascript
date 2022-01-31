import { randomGridPosition } from "./grid.js";
import { onSnake, expandSnake } from "./snake.js";

//grid is between 1 & 21
let food = getRandomFoodPosition()
const EXPAND_SNAKE = 1 

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPAND_SNAKE)
        food = getRandomFoodPosition()
    }

}

export function draw(gameBoard) {
   

        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)

    

}

function getRandomFoodPosition() {
    let newFood 
    while(newFood == null || onSnake(newFood)) {
        newFood = randomGridPosition()
    }
    return newFood
}