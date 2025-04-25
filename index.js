
const rockEl = document.getElementById('rock')
const paperEl = document.getElementById('paper')
const scissorsEl = document.getElementById('scissors')

const user = document.getElementById('one')
const computer = document.getElementById('two')

const message = document.getElementById('message')

let userWin = 0
let computerWin = 0

function gameStart_rock() {
  const computerInput = Math.floor(Math.random() * 3) + 1

  if (computerInput === 1) {
    userWin++
    user.innerText = userWin
    message.innerText = `"You win"`
  } else if (computerInput === 2){
    computerWin++
    computer.innerText = computerWin
    message.innerText = `"You lose"`
  } else {
    message.innerText = `"It's a tie"`
  }
}

function gameStart_paper() {
  const computerInput = Math.floor(Math.random() * 3) + 1

  if (computerInput === 3) {
    userWin++
    user.innerText = userWin
    message.innerText = `"You win"`
  }  else if (computerInput === 1){
    computerWin++
    computer.innerText = computerWin
    message.innerText = `"You lose"`
  } else {
    message.innerText = `"It's a tie"`
  }
}

function gameStart_scissors() {
  const computerInput = Math.floor(Math.random() * 3) + 1

  if (computerInput === 2) {
    userWin++
    user.innerText = userWin
    message.innerText = `"You win"`
  } else if (computerInput === 3) {
    computerWin++
    computer.innerText = computerWin
    message.innerText = `"You lose"`
  } else {
    message.innerText = `"It's a tie"`
  }
}

rockEl.addEventListener('click', gameStart_rock)
paperEl.addEventListener('click', gameStart_paper)
scissorsEl.addEventListener('click', gameStart_scissors)