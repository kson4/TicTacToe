import { availableSpots } from "./setup.js"
export let playerTurn = true
export let board = [["", "", "",], ["", "", "",], ["", "", "",]]

export function checkWinner() {
  if (board[0][0] == "p" && board[0][1] == "p" && board[0][2] == "p" || 
    board[0][0] == "c" && board[0][1] == "c" && board[0][2] == "c") {
    return board[0][0]
  }
  else if (board[1][0] == "p" && board[1][1] == "p" && board[1][2] == "p" ||
    board[1][0] == "c" && board[1][1] == "c" && board[1][2] == "c") {
    return board[1][0]
  }
  else if (board[2][0] == "p" && board[2][1] == "p" && board[2][2] == "p" || 
    board[2][0] == "c" && board[2][1] == "c" && board[2][2] == "c") {
    return board[2][0]
  }
  else if (board[0][0] == "p" && board[1][0] == "p" && board[2][0] == "p" ||
    board[0][0] == "c" && board[1][0] == "c" && board[2][0] == "c") {
    return board[0][0]
  }
  else if (board[0][1] == "p" && board[1][1] == "p" && board[2][1] == "p" ||
    board[0][1] == "c" && board[1][1] == "c" && board[2][1] == "c") {
    return board[0][1]
  }
  else if (board[0][2] == "p" && board[1][2] == "p" && board[2][2] == "p" ||
    board[0][2] == "c" && board[1][2] == "c" && board[2][2] == "c") {
    return board[0][2]
  }
  else if (board[0][0] == "p" && board[1][1] == "p" && board[2][2] == "p" || 
    board[0][0] == "p" && board[1][1] == "p" && board[2][2] == "p") {
    return board[0][0]
  }
  else if (board[0][2] == "p" && board[1][1] == "p" && board[2][0] == "p" ||
    board[0][2] == "c" && board[1][1] == "c" && board[2][0] == "c") {
    return board[0][2]
  }
}

export function cpuMove() {
  document.querySelector(".turn").textContent = "COMPUTER'S"
  const cell = availableSpots[Math.floor(Math.random() * availableSpots.length)]
  availableSpots.splice(availableSpots.indexOf(cell), 1)
  cell.classList.add("occupied")
  cell.style.backgroundImage = "url(../img/x.svg)"
  board[cell.id[0]][cell.id[1]] = "c"
  const winner = checkWinner()
  if (winner) {
    console.log(winner)
    document.querySelector(".winner-display").classList.add("visible")
    document.querySelector(".container").classList.add("inactive")
    if (winner === "p") {
      document.querySelector(".player-score-value").textContent++
      // winner-display
      document.querySelector(".winner-text").textContent = "PLAYER WINS!"
    }
    else {
      document.querySelector(".cpu-score-value").textContent++
      document.querySelector(".winner-text").textContent = "CPU WINS!"
    }
  }
  return cell
}

export function reset(availableSpots) {
  board = [["", "", "",], ["", "", "",], ["", "", "",]]
  availableSpots = []
  console.log()
  const cells = document.querySelectorAll(".cell")
  cells.forEach((cell) => {
    cell.classList.remove("occupied")
    cell.style.backgroundImage = ""
    availableSpots.push(cell)
  })
  return availableSpots
}