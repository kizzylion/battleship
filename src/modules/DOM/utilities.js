import { cellSize } from "../../bin2/domevents"
import xSrc from "../../asset/images/X.png"
import dotSrc from "../../asset/images/dot.png"

//load x and dot images for canvas
const xImage = new Image()
xImage.src = xSrc
const dotImage = new Image()
dotImage.src = dotSrc

// function that returns an element by id from the dom
export function getElementById(id) {
  return document.getElementById(id)
}
//function that gets all the class
export function querySelectorAll(className) {
  return document.querySelectorAll(`.${className}`)
}
//function that get element by class
function getElementByClass(className) {
  return [...document.getElementsByClassName(className)]
}
// function that hides a element
export function hideElement(element) {
  element.style.display = "none"
}
function showElement(element) {
  element.style.display = "block"
}
export function flexElement(element) {
  element.style.display = "flex"
}
function resetMain() {
  const main = getElementById("body-container")
  main = ""
}

export function createElement(string) {
  return document.createElement(string)
}
export function playerShoot(event, canvas, ctx, cellSize, board) {
  //   if (game_over) return
  //X & Y position of the mouse click relative to the canvas
  //event.client show the click position relative to the viewport
  //cvs.getBoundaringClientRec show the position of the canvas in the view port
  let X = event.clientX - canvas.getBoundingClientRect().x
  let Y = event.clientY - canvas.getBoundingClientRect().y

  //we calculated i & j of the clicked canvas
  let top = Math.floor(Y / cellSize)
  let left = Math.floor(X / cellSize)

  console.log(`top= ${top} , left = ${left}, id = ${id}`)
  let id = board[top][left]

  drawOnBoard(id, ctx, left, top)
}

export function computerShoot(board, canvas, position) {
  const top = position.y
  const left = position.x

  let id = board[top][left]

  console.log(`top= ${top} , left = ${left}, id = ${id}`)
  drawOnBoard(id, canvas, left, top)
}

function drawOnBoard(result, ctx, i, j) {
  const img = result ? xImage : dotImage
  ctx.drawImage(img, i * cellSize, j * cellSize, cellSize, cellSize)
}
