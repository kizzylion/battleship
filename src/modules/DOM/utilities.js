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
