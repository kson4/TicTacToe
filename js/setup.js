import { board, checkWinner, cpuMove, reset, displayWinner, isTie } from "./logic.js"

export let availableSpots = []
document.querySelector(".turn").textContent = "PLAYER'S"
const cells = document.querySelectorAll(".cell")
let playerRecentMove
let cpuRecentMove

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
      playerRecentMove = cell
      cell.style.backgroundImage = "url(../img/o.svg)"
      cell.classList.add("occupied")
      board[cell.id[0]][cell.id[1]] = "p"
      availableSpots.splice(availableSpots.indexOf(cell), 1)
      if (checkWinner()) {
        displayWinner("p")
      }
    }
    if (isTie()) {
      displayWinner("t")
    }
    else {
      cpuMove()
    }
  })
})

document.querySelector("#play-again").addEventListener("click", () => {
  document.querySelector(".winner-display").classList.remove("visible")
  document.querySelector(".container").classList.remove("inactive")
  availableSpots = reset(availableSpots)
  console.log(availableSpots)
})