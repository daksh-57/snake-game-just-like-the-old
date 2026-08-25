# Snake Game 🐍

A simple browser-based Snake game built with **HTML, CSS, and vanilla JavaScript**.

> Just like the old days — eat, grow, and don't bite yourself.

## 🎮 Features

- Classic Snake gameplay
- Arrow-key controls
- WASD controls
- Score tracking
- Persistent high score using browser `localStorage`
- Increasing difficulty as the score increases
- Restart functionality
- Wall and self-collision detection
- Canvas-based rendering

## 🕹️ Controls

| Key | Action |
| --- | --- |
| ↑ / W | Move up |
| ↓ / S | Move down |
| ← / A | Move left |
| → / D | Move right |

## 🚀 Getting Started

No installation or external dependencies are required.

### Run locally

Clone the repository:

```bash
git clone https://github.com/daksh-57/snake-game-just-like-the-old.git
cd snake-game-just-like-the-old
```

Then open `index.html` in a modern web browser.

You can also use any simple local development server if you prefer.

## 🧩 Project Structure

```text
snake-game-just-like-the-old/
├── index.html    # Game page and UI structure
├── script.js     # Game logic and controls
├── style.css     # Game styling
├── .gitignore    # Files excluded from Git
├── LICENSE       # Project license
└── README.md     # Project documentation
```

## 🛠️ Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- HTML Canvas API
- Browser `localStorage`

## 🧠 How It Works

The game represents the board as a grid and stores each part of the snake as an `(x, y)` coordinate.

During each game update:

1. The snake's direction is updated.
2. A new head position is calculated.
3. Wall collisions are checked.
4. Self-collision is checked.
5. The new head is added to the snake.
6. If food is eaten, the snake grows and the score increases.
7. Otherwise, the tail is removed.
8. The canvas is redrawn.

The highest score is stored in browser `localStorage`, so it can persist between sessions in the same browser.

## ⚠️ Known Limitations

- The current version is designed primarily for keyboard controls.
- There are no automated tests yet.
- Touch controls are not currently implemented.

## 🔮 Possible Improvements

- Mobile/touch controls
- Pause functionality
- Difficulty selection
- Sound effects
- Improved animations
- Leaderboard support

## 📄 License

This project is licensed under the [MIT License](LICENSE).
