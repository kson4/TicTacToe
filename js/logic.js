import { availableSpots } from "./setup.js"
export let playerTurn = true
export const board = [["", "", "",], ["", "", "",], ["", "", "",]]

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
  console.log(availableSpots)
  
  const cell = availableSpots[Math.floor(Math.random() * availableSpots.length)]
  cell.classList.add("occupied")
  cell.style.backgroundImage = "url(../img/x.svg)"
  board[cell.id[0]][cell.id[1]] = "c"
}