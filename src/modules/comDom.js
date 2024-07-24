import {
  querySelectorAll,
  getElementById,
  hideElement,
  flexElement,
  createElement,
} from "./DOM/utilities"

import { cellSize, drawCanvas } from "../bin2/domevents"

export function initializeComputer() {
  getElementById("field").classList.replace("flex-col", "flex-row")
  getElementById("field").classList.add("gap-6")
  generateComputerBoardUi()

  const computerCvs = document.getElementById("computerboard")
  const computerCtx = computerCvs.getContext("2d")

  drawCanvas(computerCtx, "#d4b4b4")
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
