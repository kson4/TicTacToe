import { availableSpots } from "./setup.js"
export let playerTurn = true
export let board = [["", "", "",], ["", "", "",], ["", "", "",]]

export function checkWinner() {
  if (board[0][0] == "p" && board[0][1] == "p" && board[0][2] == "p" || 
    board[0][0] == "c" && board[0][1] == "c" && board[0][2] == "c") {
    return board[0][0] === "p"
  }
  else if (board[1][0] == "p" && board[1][1] == "p" && board[1][2] == "p" ||
    board[1][0] == "c" && board[1][1] == "c" && board[1][2] == "c") {
    return board[1][0] === "p"
  }
  else if (board[2][0] == "p" && board[2][1] == "p" && board[2][2] == "p" || 
    board[2][0] == "c" && board[2][1] == "c" && board[2][2] == "c") {
    return board[2][0] === "p"
  }
  else if (board[0][0] == "p" && board[1][0] == "p" && board[2][0] == "p" ||
    board[0][0] == "c" && board[1][0] == "c" && board[2][0] == "c") {
    return board[0][0] === "p"
  }
  else if (board[0][1] == "p" && board[1][1] == "p" && board[2][1] == "p" ||
    board[0][1] == "c" && board[1][1] == "c" && board[2][1] == "c") {
    return board[0][1] === "p"
  }
  else if (board[0][2] == "p" && board[1][2] == "p" && board[2][2] == "p" ||
    board[0][2] == "c" && board[1][2] == "c" && board[2][2] == "c") {
    return board[0][2] === "p"
  }
  else if (board[0][0] == "p" && board[1][1] == "p" && board[2][2] == "p" || 
    board[0][0] == "p" && board[1][1] == "p" && board[2][2] == "p") {
    return board[0][0] === "p"
  }
  else if (board[0][2] == "p" && board[1][1] == "p" && board[2][0] == "p" ||
    board[0][2] == "c" && board[1][1] == "c" && board[2][0] == "c") {
    return board[0][2] === "p"
  }
  return undefined
}

export function displayWinner(winner) {
  console.log(winner)
  document.querySelector(".winner-display").classList.add("visible")
  document.querySelector(".container").classList.add("inactive")
  if (winner === "p") {
    document.querySelector(".player-score-value").textContent++
    // winner-display
    document.querySelector(".winner-text").textContent = "PLAYER WINS!"
  }
  else if (winner === "c") {
    document.querySelector(".cpu-score-value").textContent++
    document.querySelector(".winner-text").textContent = "CPU WINS!"
  }
  else {
    document.querySelector(".ties-value").textContent++
    document.querySelector(".winner-text").textContent = "TIE!"
  }
}

export function cpuMove() {
  let bestScore = Infinity
  let move
  for (let i = 0; i < availableSpots.length; i++) {
    console.log(" NEW ROW~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~", i)
    const cell = availableSpots[i]
    takeCpuSpot(cell)
    let score = minimax(0, true)
    undo(cell, i)
    console.log(score)
    if (score < bestScore) {
      console.log("taking: ", cell)
      move = cell
      bestScore = score
    }
  }
  console.log(bestScore)
  console.log(move)
  takeCpuSpot(move)
  move.style.backgroundImage = "url(../img/x.svg)"
  console.log(checkWinner())
  if (checkWinner() === false) {
    displayWinner("c")
  }
}

export function isTie() {
  return availableSpots.length === 0
}
function takeCpuSpot(cell) {
  cell.classList.add("occupied")
  board[cell.id[0]][cell.id[1]] = "c"
  availableSpots.splice(availableSpots.indexOf(cell), 1)
}
function takePlayerSpot(cell) {
  cell.classList.add("occupied")
  board[cell.id[0]][cell.id[1]] = "p"
  availableSpots.splice(availableSpots.indexOf(cell), 1)
}
function undo(cell, i) {
  cell.classList.remove("occupied")
  cell.style.backgroundImage = ""
  board[cell.id[0]][cell.id[1]] = ""
  availableSpots.splice(i, 0, cell)
}
function minimax(depth, maxing) {
  let result = checkWinner()
  if (result !== undefined) {
    return result === true ? Infinity : -Infinity
  }
  if (isTie()) {
    return 0
  }
  if (maxing) {
    let bestScore = -Infinity
    for (let i = 0; i < availableSpots.length; i++) {
      const cell = availableSpots[i]
      takePlayerSpot(cell)
      let score = minimax(depth + 1, !maxing)
      undo(cell, i)
      bestScore = Math.max(score, bestScore)
    }

    return bestScore
  }
  else {
    let bestScore = Infinity
    for (let i = 0; i < availableSpots.length; i++) {
      const cell = availableSpots[i]
      takeCpuSpot(cell)
      let score = minimax(depth + 1, !maxing)
      undo(cell, i)
      bestScore = Math.min(score, bestScore)
    }
    return bestScore
  }
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