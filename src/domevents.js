const cvs = document.getElementById("playerboard")
const compCvs = document.getElementById("computerboard")
const ctx = cvs.getContext("2d")
const compCtx = compCvs.getContext("2d")

let game_over = false
console.log(cvs)

let board = []
let col = 10
let row = 10
let spaceSize = 36

function drawBoard(elem) {
  // we will give every space a unique id
  let id = 0
  //so that when i click on a space, i know the space i clicked on

  for (let i = 0; i < row; i++) {
    board[i] = []
    for (let j = 0; j < col; j++) {
      //set id for every space
      board[i][j] = id
      id++

      //draw the space
      elem.strokeStyle = "#b4b4ff"
      elem.strokeRect(j * spaceSize, i * spaceSize, spaceSize, spaceSize)
    }
  }
}

drawBoard(ctx)
drawBoard(compCtx)

cvs.addEventListener("click", (e) => {
  if (game_over) return

  //X & Y position of the mouse click relative to the canvas
  //event.client show the click position relative to the viewport
  //cvs.getBoundaringClientRec show the position of the canvas in the view port

  let X = e.clientX - cvs.getBoundingClientRect().x
  let Y = e.clientY - cvs.getBoundingClientRect().y

  //we calculated i & j of the clicked canvas

  let i = Math.floor(Y / spaceSize)
  let j = Math.floor(X / spaceSize)

  id = board[i][j]

  console.log(`i= ${i} , j = ${j}, id = ${id}`)
})

function dragFunction() {
  const token = document.querySelectorAll(".token")
  const placeables = document.querySelectorAll(".placeable")

  token.forEach((token) => {
    token.addEventListener("dragstart", (e) => {
      token.classList.add("dragging")
    })

    token.addEventListener("dragend", () => {
      token.classList.remove("dragging")
    })
  })

  placeables.forEach((placeable) => {
    placeable.addEventListener("dragover", (e) => {
      e.preventDefault()

      const draggedToken = document.querySelector(".dragging")
      if (placeable.classList.contains("pack")) {
        //if placeable is not empty return
        if (placeable.children.length > 0) return

        draggedToken.style.top = 0
        draggedToken.style.left = 0

        draggedToken.setAttribute = "horizontal"

        placeable.appendChild(draggedToken)
      } else {
        // get the positions with respect to the board
        let newX = e.clientX - cvs.getBoundingClientRect().x
        let newY = e.clientY - cvs.getBoundingClientRect().y

        // Keep within canvas boundaries
        newX = Math.max(0, Math.min(newX, cvs.width - draggedToken.clientWidth))
        newY = Math.max(
          0,
          Math.min(newY, cvs.height - draggedToken.clientHeight)
        )
        // Snap to grid (optional):
        newX = Math.floor(newX / 36) * 36
        newY = Math.floor(newY / 36) * 36
        console.log(newX, newY)

        if (!isColliding(draggedToken, newX, newY)) {
          draggedToken.style.left = newX + "px"
          draggedToken.style.top = newY + "px"

          placeable.appendChild(draggedToken)
        } else return
      }
    })
  })
}

function isColliding(element, newX, newY) {
  const draggableElements = document.querySelectorAll("#strategyscreen .token")

  for (const otherDraggable of draggableElements) {
    if (otherDraggable === element) continue //skip checking against itself

    const otherRect = otherDraggable.getBoundingClientRect()

    const otherToken = {
      x: otherRect.x - cvs.getBoundingClientRect().x,
      y: otherRect.y - cvs.getBoundingClientRect().y,
      top: otherRect.top - cvs.getBoundingClientRect().top,
      left: otherRect.left - cvs.getBoundingClientRect().left,
      width: otherRect.width,
      height: otherRect.height,
    }

    const elemRect = {
      left: newX,
      top: newY,
      width: element.clientWidth,
      height: element.clientHeight,
    }

    if (isRectColliding(elemRect, otherToken)) {
      return true // colission detected
    }
  }
  return false
}

function isRectColliding(rect1, rect2) {
  return (
    // rect1.left < rect2.right &&
    // rect1.right > rect2.left &&
    // rect1.top < rect2.bottom &&
    // rect1.bottom > rect2.top

    rect1.left >= rect2.left - rect1.width &&
    rect1.left <= rect2.left + rect2.width - 36 &&
    rect1.top >= rect2.top - rect1.width &&
    rect1.top <= rect2.top + rect2.width - 36
  )
}

dragFunction()
module.exports = drawBoard
