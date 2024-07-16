class Ship {
  constructor(name, length) {
    this.name = name
    this.length = length
    this.hits = 0
    this.sunk = false
  }

  hit() {
    this.hits++
  }

  isSunk() {
    this.sunk = this.hits >= this.length
    return this.sunk
  }
}

module.exports = Ship
