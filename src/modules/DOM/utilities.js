import { cellSize } from "../../bin2/domevents"
import xSrc from "../../asset/images/X.png"
import dotSrc from "../../asset/images/dot.png"
import shotSoundSrc from "../../asset/sound/shot.mp3"
import hitSoundSrc from "../../asset/sound/hit.mp3"
import missSoundSrc from "../../asset/sound/miss.mp3"

//load x and dot images for canvas
const xImage = new Image()
xImage.src = xSrc
const dotImage = new Image()
dotImage.src = dotSrc
//load audios
const hitSound = new Audio(hitSoundSrc)
hitSound.playbackRate = 1.5
const shotSound = new Audio(shotSoundSrc)
shotSound.playbackRate = 1.5
const missSound = new Audio(missSoundSrc)
missSound.playbackRate = 1.5

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

  let id = board[top][left]
  console.log(`top= ${top} , left = ${left}, id = ${id}`)
  playShotSound()
  return drawOnBoard(id, ctx, left, top)
}

export function computerShoot(opponent, canvas, position) {
  let randomPosition = randomCell()

  while (opponent.checkIfPositionHasBeenHit(randomPosition)) {
    console.log("position has been shot")
    randomPosition = randomCell()
  }

  const top = position.y
  const left = position.x

  let id = opponent.board[top][left]

  console.log(`top= ${top} , left = ${left}, id = ${id}`)
  playShotSound()
  return drawOnBoard(id, canvas, left, top)
}

function drawOnBoard(result, ctx, i, j) {
  const img = result ? xImage : dotImage
  ctx.drawImage(img, i * cellSize, j * cellSize, cellSize, cellSize)
  if (result) {
    playHitSound()
    return true
  }
  playMissSound()
  return false
}
export function randomCell() {
  const randomX = Math.floor(Math.random() * 10)
  const randomY = Math.floor(Math.random() * 10)
  return { x: randomX, y: randomY }
}

function playHitSound() {
  hitSound.currentTime = 0
  hitSound.play()
}

function playMissSound() {
  missSound.currentTime = 0
  missSound.play()
}

function playShotSound() {
  shotSound.currentTime = 0
  shotSound.play()
}
