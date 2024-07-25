import {
  getElementById,
  createElement,
  playerShoot,
  computerShoot,
} from "./DOM/utilities"

const { Gameboard } = require("./factories/Gameboard")

import { cellSize, drawCanvas } from "../bin2/domevents"
import { playerboard, computerBoard } from "./playerDom"
import { getRandomDirection, getRandomNumber, canPlaceShip } from "../bin2/game"

export function initializeComputer() {
  getElementById("field").classList.replace("flex-col", "flex-row")
  getElementById("field").classList.add("gap-6")
  generateComputerBoardUi()

  const computerCvs = getElementById("computerboard")
  const computerCtx = computerCvs.getContext("2d")
  const playerCvs = getElementById("playerboard")
  const playerCtx = playerCvs.getContext("2d")

  drawCanvas(computerCtx, "#d4b4b4")
  placeShipsRandomly(computerBoard.ships)

  computerCvs.addEventListener("click", function (e) {
    playerShoot(e, computerCvs, computerCtx, cellSize, computerBoard.getBoard())

    let randomPosition = randomCell()

    const opponentBoard = playerboard.getBoard()

    while (
      checkIfPositionHasBeenHit(playerboard.positionShot, randomPosition)
    ) {
      console.log("position has been shot")
      randomPosition = randomCell
    }

    computerShoot(opponentBoard, playerCtx, randomPosition)
  })
}

function generateComputerBoardUi() {
  const field = getElementById("field")
  let attackDiv = attackScreen()

  field.appendChild(attackDiv)
  getElementById(
    "attackScreen"
  ).innerHTML = `<canvas id="computerboard" class=" " width="${
    cellSize * 10
  }" height="${cellSize * 10}"></canvas>`
}

function attackScreen() {
  const div = createElement("div")
  div.setAttribute("id", "attackScreen")
  div.setAttribute("class", "attackScreen")
  div.classList.add("relative", "flex", "w-fit")
  return div
}

function randomCell() {
  const randomX = Math.floor(Math.random() * 10)
  const randomY = Math.floor(Math.random() * 10)
  return { x: randomX, y: randomY }
}

//function that  check if position has been shoot previously
function checkIfPositionHasBeenHit(set, position) {
  return set.has(position.toString())
}

function placeShipsRandomly(ships) {
  ships.forEach((ship) => {
    let length = ship.length
    let orientation = getRandomDirection()
    ship.direction = orientation

    console.log(ship, length, orientation)

    let newPosition = {
      x: getRandomNumber(),
      y: getRandomNumber(),
    }

    let wellPlaced = canPlaceShip(
      computerBoard.board,
      newPosition.x * cellSize,
      newPosition.y * cellSize,
      length,
      orientation,
      cellSize
    )

    console.log(ship, length, newPosition, orientation)

    while (!wellPlaced) {
      newPosition = {
        x: getRandomNumber(),
        y: getRandomNumber(),
      }

      wellPlaced = canPlaceShip(
        computerBoard.board,
        newPosition.x * cellSize,
        newPosition.y * cellSize,
        length,
        orientation,
        cellSize
      )
    }

    computerBoard.placeShip(ship, newPosition.x, newPosition.y, orientation)
  })
  console.log(computerBoard.board)
}
