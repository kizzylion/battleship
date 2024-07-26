import {
  getElementById,
  createElement,
  playerShoot,
  computerShoot,
  randomCell,
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

  computerCvs.addEventListener("click", attack)
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

//function that  check if position has been shoot previously

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

    ship.left = newPosition.x * cellSize
    ship.top = newPosition.y * cellSize
    computerBoard.placeShip(ship, newPosition.x, newPosition.y, orientation)
  })
  console.log(computerBoard.board)
}

async function attack(e) {
  const computerCvs = getElementById("computerboard")
  const computerCtx = computerCvs.getContext("2d")
  const playerCvs = getElementById("playerboard")
  const playerCtx = playerCvs.getContext("2d")

  let playerKill = playerShoot(
    e,
    computerCvs,
    computerCtx,
    cellSize,
    computerBoard.getBoard(),
    getElementById("attackScreen"),
    computerBoard
  )
  if (playerKill) return
  computerCvs.removeEventListener("click", attack)

  await new Promise((resolve) => setTimeout(resolve, 1500)) // Delay between computer shots

  let computerKill = computerShoot(
    playerboard,
    playerCtx,
    randomCell(),
    getElementById("strategyscreen"),
    playerboard
  )
  while (computerKill) {
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Delay between computer shots
    computerKill = computerShoot(
      playerboard,
      playerCtx,
      randomCell(),
      getElementById("strategyscreen"),
      playerboard
    )
  }

  computerCvs.addEventListener("click", attack)
}
