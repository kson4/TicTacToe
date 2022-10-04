import { playerTurn, board, checkWinner, cpuMove, reset } from "./logic.js"

export let availableSpots = []
document.querySelector(".turn").textContent = "PLAYER'S"
const cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
  availableSpots.push(cell)
  cell.addEventListener("mouseover", () => {
    if (!cell.classList.contains("occupied")) {
      cell.style.backgroundImage = "url(../img/o.svg)"
    }
  })
  cell.addEventListener("mouseout", () => {
    if (!cell.classList.contains("occupied")) {
      cell.style.backgroundImage = ""
    }
  })
  cell.addEventListener("click", () => {
    if (!cell.classList.contains("occupied")) {
      cell.style.backgroundImage = "url(../img/o.svg)"
      cell.classList.add("occupied")
      board[cell.id[0]][cell.id[1]] = "p"
      availableSpots.splice(availableSpots.indexOf(cell), 1)
      cpuMove()
      const winner = checkWinner()
      if (winner) {
        console.log(winner)
        document.querySelector(".winner-display").classList.add("visible")
        document.querySelector(".container").classList.add("inactive")
        if (winner === "p") {
          document.querySelector(".player-score-value").textContent++
          winner-display
          document.querySelector(".winner-text").textContent = "PLAYER WINS!"
        }
        else {
          document.querySelector(".cpu-score-value").textContent++
          document.querySelector(".winner-text").textContent = "CPU WINS!"
        }
      }
    }
  })
})

document.querySelector("#play-again").addEventListener("click", () => {
  document.querySelector(".winner-display").classList.remove("visible")
  document.querySelector(".container").classList.remove("inactive")
  // debugger
  availableSpots = reset(availableSpots)
  console.log(availableSpots)
})