const field = document.querySelector('.field')
const ball = document.querySelector('.ball')

field.addEventListener('click', (e) => {
  const halfOfBallSize = ball.offsetWidth / 2
  const fieldBorderWidth = +getComputedStyle(field).borderLeftWidth.slice(0, -2)
  const fieldSize = field.offsetWidth - fieldBorderWidth * 2

  const rect = field.getBoundingClientRect()
  const x = e.clientX - rect.left - fieldBorderWidth
  const y = e.clientY - rect.top - fieldBorderWidth

  let ballXCoordinate = x - halfOfBallSize
  let ballYCoordinate = y - halfOfBallSize

  ballXCoordinate = Math.max(0, ballXCoordinate)
  ballYCoordinate = Math.max(0, ballYCoordinate)
  ballXCoordinate = Math.min(fieldSize - halfOfBallSize * 2, ballXCoordinate)
  ballYCoordinate = Math.min(fieldSize - halfOfBallSize * 2, ballYCoordinate)

  ball.style.left = `${ballXCoordinate}px`
  ball.style.top = `${ballYCoordinate}px`
})
