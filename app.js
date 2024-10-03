// Containers
const timeFunction = document.querySelectorAll(".time-function")
const milliSecondsContainer = document.querySelector("#milli-seconds")
const secondsContainer = document.querySelector("#seconds")
const minuteContainer = document.querySelector("#minutes")
const hourContainer = document.querySelector("#hour")
let clearState
// Counter Variables
let milliSecondCounter = 0
let secondsCounter = 0
let minuteCounter = 0
let hourCounter = 0
hover()
start()
stop()
reset()
function reset() {
  for (let i = 0; i < timeFunction.length; i++) {
    timeFunction[i].addEventListener("click", (event) => {
      let element = timeFunction[i].classList.contains("reset")
      if (element) {
        milliSecondCounter = 0
        secondsCounter = 0
        minuteCounter = 0
        hourCounter = 0
        milliSecondsContainer.textContent = "00"
        secondsContainer.textContent = "00"
        minuteContainer.textContent = "00"
        hourContainer.textContent = "00"
      }
    })
  }
}
function stop() {
  for (let i = 0; i < timeFunction.length; i++) {
    timeFunction[i].addEventListener("click", (event) => {
      let element = timeFunction[i].classList.contains("stop")

      if (element) {
        clearInterval(clearState)
      }
    })
  }
}
function start() {
  for (let i = 0; i < timeFunction.length; i++) {
    timeFunction[i].addEventListener("click", (event) => {
      let element = timeFunction[i].classList.contains("start")
      if (element) {
        clearState = setInterval(() => {
          milliSecondCounter++
          milliSecondsContainer.textContent = milliSecondCounter

          if (milliSecondCounter >= 100) {
            milliSecondCounter = 0
            secondsCounter++
            secondsContainer.textContent = secondsCounter
          }
          if (secondsCounter >= 60) {
            secondsCounter = 0
            minuteCounter++
            minuteContainer.textContent = minuteCounter
          }
          if (minuteCounter >= 60) {
            minuteCounter = 0
            hourCounter++
            hourContainer.textContent = hourCounter
          }
        }, 10)
      }
    })
  }
}

function hover() {
  for (let i = 0; i < timeFunction.length; i++) {
    timeFunction[i].addEventListener("click", (event) => {
      let stat = event.target
      for (let j = 0; j < timeFunction.length; j++) {
        if (i == j) {
          stat.classList.add("hover")
        } else {
          timeFunction[j].classList.remove("hover")
        }
      }
    })
  }
}
