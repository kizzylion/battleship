const { Ship, Gameboard } = require("./index")

//Testing the Ship initialization
test("ship initializes correctly", function () {
  const ship = new Ship(5)
  expect(ship.length).toBe(5)
  expect(ship.hits).toBe(0)
  expect(ship.sunk).toBe(false)
})

//Testing the 'hit' method
test("ship registers the hit correctly", () => {
  const ship = new Ship(5)
  ship.hit()
  expect(ship.hits).toBe(1)
  ship.hit()
  expect(ship.hits).toBe(2)
})

//Testing the 'isSunk' method
test("ship registers the isSunk correctly", () => {
  const ship = new Ship(3)
  expect(ship.isSunk()).toBe(false)
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(false)
  ship.hit()
  expect(ship.isSunk()).toBe(true)
})

//Testing the sunk state after hit
test("ship updates sunk state", () => {
  const ship = new Ship(2)
  ship.hit()
  expect(ship.isSunk()).toBe(false)
  ship.hit()
  expect(ship.isSunk()).toBe(true)
  expect(ship.sunk).toBe(true)
})

//Testing Gameboard Initialization

test("gameboard initializes completely", () => {
  const gameboard = new Gameboard()
  expect(gameboard.ships.length).toBe(0)
  expect(gameboard.missedShots.length).toBe(0)
  expect(gameboard.board.length).toBe(10)
  expect(gameboard.board[0].length).toBe(10)
})

//testing 'placeShip' Method
test("places ship correctly", () => {
  const gameboard = new Gameboard()
  const ship = new Ship(3)

  gameboard.placeShip(ship, 0, 0, "horizontal")

  expect(gameboard.board[0][0]).toMatchObject(ship)
  expect(gameboard.board[0][1]).toMatchObject(ship)
  expect(gameboard.board[0][2]).toMatchObject(ship)
})

//testing the 'receiveAttack' Method
test("receive attack correctly", () => {
  const gameboard = new Gameboard()
  const ship = new Ship(3)

  gameboard.placeShip(ship, 0, 0, "vertical")
  gameboard.receiveAttack(0, 0)
  expect(ship.hits).toBe(1)
  gameboard.receiveAttack(1, 1)
  expect(gameboard.missedShots.length).toBe(1)
  expect(gameboard.missedShots).toContainEqual([1, 1])
})

//testing the 'allShipSunk' Method
test("reports all ships sunk correctly", () => {
  const gameboard = new Gameboard()
  const ship1 = new Ship(2)
  const ship2 = new Ship(3)

  gameboard.placeShip(ship1, 0, 0, "horizontal")
  gameboard.placeShip(ship2, 1, 1, "vertical")

  gameboard.receiveAttack(0, 0)
  gameboard.receiveAttack(1, 0)
  expect(gameboard.allShipSunk()).toBe(false)
  expect(ship1.isSunk()).toBe(true)

  gameboard.receiveAttack(1, 1)
  gameboard.receiveAttack(1, 2)
  expect(ship2.isSunk()).toBe(false)

  gameboard.receiveAttack(1, 3)
  expect(ship2.isSunk()).toBe(true)
  expect(gameboard.allShipSunk()).toBe(true)
})
