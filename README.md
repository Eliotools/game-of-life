# 🎮 Game of Life

A simple implementation of Conway's Game of Life using HTML, CSS, and JavaScript.

For more information about Conway's Game of Life, visit [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

🌐 Try it online: [Game of Life Demo](https://eliotools.github.io/game-of-life/)

## ✨ Features

- 🖱️ Interactive grid where cells can be toggled by clicking
- ✏️ Click and drag to toggle multiple cells
- 🎛️ Controls:
  - ⏭️ Next Step: Manually advance to the next generation
  - ▶️ Play (1x): Run the simulation at normal speed
  - ⏩ Play (20x): Run the simulation at fast speed
  - ⏹️ Stop: Pause the simulation
  - 🔄 Reset: Clear all cells
  - 🎲 Random: Randomly populate cells

## 📋 Rules

1. Any live cell with fewer than two live neighbors dies (underpopulation) 💀
2. Any live cell with two or three live neighbors lives on to the next generation 🌱
3. Any live cell with more than three live neighbors dies (overpopulation) 📈
4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction) 🐣

## 🛠️ Implementation Details

- 📐 100x100 grid (10,000 cells)
- 🎨 Uses CSS Grid for layout
- ⚡ Optimized cell state calculations
- 📱 Responsive design with sticky controls

## 🚀 How to Use

1. 🌐 Open `main.html` in a web browser
2. 👆 Click cells to toggle their state
3. 🎮 Use the control buttons at the bottom to:
   - ⏭️ Step through generations
   - ▶️ Start/stop automatic simulation
   - 🔄 Reset the grid
   - 🎲 Generate random patterns

## 🎉 Enjoy!

Feel free to experiment with different patterns and speeds. Some interesting patterns to try:
- 🛸 Create a "glider" that moves diagonally across the grid
- 💫 Build a "blinker" that oscillates between two states
- 🟦 Design a "block" that remains stable
- 🔆 Make a "beacon" that alternates between two forms

The Game of Life is a <span style="color: #4CAF50">fascinating</span> example of how simple rules can create <span style="color: #2196F3">complex behaviors</span>. Have fun exploring the <span style="color: #FF9800">endless possibilities</span>! 🌈
