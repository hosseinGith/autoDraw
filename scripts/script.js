const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const reset = document.querySelector("button");

let snakeSize = 2,
  direction,
  snakeColor;
let snake = [
  {
    x: 0,
    y: 50,
  },
];
range.addEventListener("change", () => {
  if (range.value == 0) {
    snakeSize = 2;
  } else if (range.value == 1) {
    snakeSize = 10;
  } else if (range.value == 2) {
    snakeSize = 15;
  } else if (range.value == 3) {
    snakeSize = 20;
  }
});
direction = "right";
reset.addEventListener("click", () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snake[0].x = 0;
  snake[0].y = 50;
  snakeColor = "red";
  direction = "right";
});
let randomNum = Math.floor(Math.random() * 44);
setInterval(() => {
  randomNum = String(Math.random());
  let arr = [randomNum[4], randomNum[5], randomNum[3]];
  let colorOffset = arr.join("");
  snakeColor = `#${colorOffset}`;
}, 500);

setInterval(() => {
  let rando = Math.floor(Math.random() * 4);
  if (rando === 3) direction = "right";
  else if (rando === 4) direction = "left";
  else if (rando === 2) direction = "up";
  else if (rando === 1) direction = "down";
}, 0);
const drowChar = function () {
  if (snake[0].x >= canvas.width) {
    snake[0].x = 0;
  } else if (snake[0].x <= 0) {
    snake[0].x = canvas.width;
  } else if (snake[0].y >= canvas.height) {
    snake[0].y = 0;
  } else if (snake[0].y <= 0) {
    snake[0].y = canvas.height;
  }
  drowSnake();
  snakeMove();
};
window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowRight") direction = "right";
  else if (e.key == "ArrowLeft") direction = "left";
  else if (e.key == "ArrowUp") direction = "up";
  else if (e.key == "ArrowDown") direction = "down";
});
const drowSnake = () => {
  snake.forEach((item) => {
    ctx.fillStyle = snakeColor;
    ctx.fillRect(item.x, item.y, snakeSize, snakeSize);
  });
};
const changeSnake = (x, y) => {
  snake.forEach((item) => {
    if (x === 2) {
      item.x += 3;
    } else if (x === 1) {
      item.x -= 3;
    } else if (y === 2) {
      item.y += 3;
    } else if (y === 1) {
      item.y -= 3;
    }
  });
};
const snakeMove = () => {
  if (direction === "right") changeSnake(2, 0);
  if (direction === "left") changeSnake(1, 0);
  if (direction === "up") changeSnake(0, 1);
  if (direction === "down") changeSnake(0, 2);
};
setInterval(drowChar, 10);
