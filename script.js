const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const highscoreEl = document.getElementById('highscore');
const overlay = document.getElementById('overlay');
const overlayText = document.getElementById('overlay-text');
const restartBtn = document.getElementById('restart');

const GRID_SIZE = 20;
const TILE_COUNT = canvas.width / GRID_SIZE; // 20x20 grid

let snake, direction, nextDirection, food, score, highScore, gameRunning, gameLoopId, speed, isGameOver;

highScore = parseInt(localStorage.getItem('snakeHighScore') || '0', 10);
highscoreEl.textContent = `Best: ${highScore}`;

function initGame() {
  snake = [
    { x: 8, y: 10 },
    { x: 7, y: 10 },
    { x: 6, y: 10 },
  ];
  direction = { x: 1, y: 0 };
  nextDirection = { x: 1, y: 0 };
  score = 0;
  speed = 120;
  scoreEl.textContent = `Score: ${score}`;
  placeFood();
  gameRunning = false;
  isGameOver = false;
  overlay.classList.remove('hidden');
  overlayText.textContent = 'Press any arrow key to start';
  draw();
}

function placeFood() {
  let valid = false;
  while (!valid) {
    food = {
      x: Math.floor(Math.random() * TILE_COUNT),
      y: Math.floor(Math.random() * TILE_COUNT),
    };
    valid = !snake.some((seg) => seg.x === food.x && seg.y === food.y);
  }
}

function draw() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // grid lines (subtle)
  ctx.strokeStyle = '#e8f5e9';
  for (let i = 0; i <= TILE_COUNT; i++) {
    ctx.beginPath();
    ctx.moveTo(i * GRID_SIZE, 0);
    ctx.lineTo(i * GRID_SIZE, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * GRID_SIZE);
    ctx.lineTo(canvas.width, i * GRID_SIZE);
    ctx.stroke();
  }

  // food
  ctx.fillStyle = '#e53935';
  ctx.beginPath();
  ctx.arc(
    food.x * GRID_SIZE + GRID_SIZE / 2,
    food.y * GRID_SIZE + GRID_SIZE / 2,
    GRID_SIZE / 2.5,
    0,
    Math.PI * 2
  );
  ctx.fill();

  // snake
  snake.forEach((seg, index) => {
    ctx.fillStyle = index === 0 ? '#1b5e20' : '#2e7d32';
    ctx.fillRect(
      seg.x * GRID_SIZE + 1,
      seg.y * GRID_SIZE + 1,
      GRID_SIZE - 2,
      GRID_SIZE - 2
    );
  });
}

function update() {
  direction = nextDirection;
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // wall collision
  if (head.x < 0 || head.x >= TILE_COUNT || head.y < 0 || head.y >= TILE_COUNT) {
    return gameOver();
  }

  // self collision
  if (snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
    return gameOver();
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 10;
    scoreEl.textContent = `Score: ${score}`;
    placeFood();
    if (speed > 60) {
      speed -= 3;
    }
    clearInterval(gameLoopId);
    gameLoopId = setInterval(update, speed);
  } else {
    snake.pop();
  }

  draw();
}

function gameOver() {
  gameRunning = false;
  isGameOver = true;
  clearInterval(gameLoopId);

  if (score > highScore) {
    highScore = score;
    localStorage.setItem('snakeHighScore', highScore);
    highscoreEl.textContent = `Best: ${highScore}`;
  }

  overlay.classList.remove('hidden');
  overlayText.textContent = `Game Over! Score: ${score} — Press Restart`;
}

function startGame() {
  if (gameRunning) return;
  gameRunning = true;
  overlay.classList.add('hidden');
  gameLoopId = setInterval(update, speed);
}

function changeDirection(dx, dy) {
  // ignore input once the game has ended; player must press Restart
  if (isGameOver) return;

  // prevent reversing directly into itself
  if (dx === -direction.x && dy === -direction.y) return;
  nextDirection = { x: dx, y: dy };
  if (!gameRunning) {
    startGame();
  }
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
    case 'W':
      e.preventDefault();
      changeDirection(0, -1);
      break;
    case 'ArrowDown':
    case 's':
    case 'S':
      e.preventDefault();
      changeDirection(0, 1);
      break;
    case 'ArrowLeft':
    case 'a':
    case 'A':
      e.preventDefault();
      changeDirection(-1, 0);
      break;
    case 'ArrowRight':
    case 'd':
    case 'D':
      e.preventDefault();
      changeDirection(1, 0);
      break;
  }
});

restartBtn.addEventListener('click', () => {
  clearInterval(gameLoopId);
  initGame();
});

initGame();
