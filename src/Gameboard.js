class Gameboard {
  constructor() {
    this.ships = []
    this.missedShots = []
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null))
  }

  placeShip(ship, startX, startY, direction) {
    const shipLength = ship.length
    if (direction === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        this.board[startY][startX + i] = ship
      }
    } else if ((direction = "vertical")) {
      for (let i = 0; i < shipLength; i++) {
        this.board[startY + i][startX] = ship
      }
    }

    this.ships.push(ship)
  }

  receiveAttack(x, y) {
    const target = this.board[y][x]
    if (target) {
      target.hit()
    } else {
      this.missedShots.push([x, y])
    }
  }

  allShipSunk() {
    return this.ships.every((ship) => ship.isSunk())
  }
}
module.exports = Gameboard
