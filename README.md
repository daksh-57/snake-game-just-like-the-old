# Snake Game 🐍

A simple browser-based Snake game built with **HTML, CSS, and vanilla JavaScript**.

> Just like the old days — eat, grow, and don't bite yourself.

## 🎮 Features

* Classic Snake gameplay
* Arrow-key controls
* WASD controls
* Score tracking
* Persistent high score using `localStorage`
* Increasing difficulty as the score increases
* Restart functionality
* Collision detection for walls and the snake's body
* Canvas-based rendering

## 🕹️ Controls

| Key   | Action     |
| ----- | ---------- |
| ↑ / W | Move up    |
| ↓ / S | Move down  |
| ← / A | Move left  |
| → / D | Move right |

## 🚀 Running the Game

No installation or external dependencies are required.

### Option 1 — Open directly

Download or clone the repository and open `index.html` in a modern web browser.

### Option 2 — Run with a local server

Clone the repository:

```bash
git clone https://github.com/daksh-57/snake-game-just-like-the-old.git
cd snake-game-just-like-the-old
```

Then serve the folder using any local HTTP server.

For example, with VS Code, you can use a local development server extension.

## 🧩 Project Structure

```text
snake-game-just-like-the-old/
├── index.html    # Game page and UI structure
├── script.js     # Game logic and controls
├── style.css     # Game styling
└── README.md     # Project documentation
```

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* HTML Canvas API
* Browser `localStorage`

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

The game also stores the highest score in browser `localStorage`, allowing the best score to persist between sessions.

##  Known Limitations

* The game currently uses keyboard controls.
* No automated test suite is included.
* The game does not currently provide touch controls for mobile devices.

##  Possible Improvements

Future improvements could include:

* Mobile/touch controls
* Pause functionality
* Difficulty selection
* Sound effects
* Start menu
* Improved animations
* Leaderboard support
 is available under the MIT License.
