import { playerTurn, board, checkWinner, cpuMove } from "./logic.js"

export let availableSpots = []
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
    cell.style.backgroundImage = "url(../img/o.svg)"
    cell.classList.add("occupied")
    board[cell.id[0]][cell.id[1]] = "p"
    availableSpots.splice(availableSpots.indexOf(cell), 1)
    cpuMove()
    console.log(checkWinner())
  })
})