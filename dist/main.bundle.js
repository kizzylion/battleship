/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bin2/domevents.js":
/*!*******************************!*\
  !*** ./src/bin2/domevents.js ***!
  \*******************************/
/***/ ((module) => {

// Get the computed style of the :root element
var rootStyle = getComputedStyle(document.documentElement);

// Get the value of the --cell-size variable
var cellSize = parseFloat(rootStyle.getPropertyValue("--cell-size").trim());
console.log("Cell size:", cellSize);
module.exports = {
  drawCanvas: drawCanvas,
  cellSize: cellSize
};
function drawCanvas(elem, color) {
  var board = [];
  var col = 10;
  var row = 10;
  var spaceSize = cellSize;
  // we will give every space a unique id
  var id = 0;
  //so that when i click on a space, i know the space i clicked on

  for (var i = 0; i < row; i++) {
    board[i] = [];
    for (var j = 0; j < col; j++) {
      //set id for every space
      board[i][j] = id;
      id++;

      //draw the space
      elem.strokeStyle = color;
      elem.strokeRect(j * spaceSize, i * spaceSize, spaceSize, spaceSize);
    }
  }
}

// dragFunction()
module.exports = {
  drawCanvas: drawCanvas,
  cellSize: cellSize
};

/***/ }),

/***/ "./src/bin2/game.js":
/*!**************************!*\
  !*** ./src/bin2/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   htmlStructure: () => (/* binding */ htmlStructure)
/* harmony export */ });
var _require = __webpack_require__(/*! ../modules/playerDom */ "./src/modules/playerDom.js"),
  playerFieldUi = _require.playerFieldUi;
var _require2 = __webpack_require__(/*! ./domevents */ "./src/bin2/domevents.js"),
  drawCanvas = _require2.drawCanvas;
function htmlStructure() {
  return document.body.innerHTML = "\n\n    <Header class=\"flex items-center max-w-7xl  w-full mx-auto mt-10 mb-4\" >\n        <h1 id=\"Logo\" class=\"text-2xl mr-5\">Kiz BattleShip </h1>\n        <div class=\"screen flex px-4 py-3 bg-gray-200 text-sm max-w-xl w-full rounded-md\">\n            <p>Start editing to see some magic happen </p>\n        </div>\n    </Header>\n    \n    <main id=\"body-container\" class=\" flex max-xl mx-auto max-w-7xl w-full h-full mt-12\">\n        \n        <div id=\"battlefield-2\" class=\"hidden board w-1/2\">\n            <canvas id=\"computerboard\" class=\"\" width=\"360\" height=\"360\"></canvas>\n        </div>\n\n    </main>\n\n\n    <footer class=\" max-w-7xl w-full mx-auto py-1\">\n        <p class=\"text-center text-sm\">\n           \n            <a href=\"#\"><i class=\"fa-brands fa-github\"></i> Kizzylion</a>\n        </p>\n    </footer>\n\n    ";
}

/***/ }),

/***/ "./src/modules/DOM/utilities.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/utilities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   flexElement: () => (/* binding */ flexElement),
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   hideElement: () => (/* binding */ hideElement),
/* harmony export */   querySelectorAll: () => (/* binding */ querySelectorAll)
/* harmony export */ });
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// function that returns an element by id from the dom
function getElementById(id) {
  return document.getElementById(id);
}
//function that gets all the class
function querySelectorAll(className) {
  return document.querySelectorAll(".".concat(className));
}
//function that get element by class
function getElementByClass(className) {
  return _toConsumableArray(document.getElementsByClassName(className));
}
// function that hides a element
function hideElement(element) {
  element.style.display = "none";
}
function showElement(element) {
  element.style.display = "block";
}
function flexElement(element) {
  element.style.display = "flex";
}
function resetMain() {
  var main = getElementById("body-container");
  "", _readOnlyError("main");
}
function createElement(string) {
  return document.createElement(string);
}

/***/ }),

/***/ "./src/modules/comDom.js":
/*!*******************************!*\
  !*** ./src/modules/comDom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeComputer: () => (/* binding */ initializeComputer)
/* harmony export */ });
/* harmony import */ var _DOM_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/utilities */ "./src/modules/DOM/utilities.js");
/* harmony import */ var _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bin2/domevents */ "./src/bin2/domevents.js");
/* harmony import */ var _bin2_domevents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bin2_domevents__WEBPACK_IMPORTED_MODULE_1__);


function initializeComputer() {
  (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("field").classList.replace("flex-col", "flex-row");
  (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("field").classList.add("gap-6");
  generateComputerBoardUi();
  var computerCvs = document.getElementById("computerboard");
  var computerCtx = computerCvs.getContext("2d");
  (0,_bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.drawCanvas)(computerCtx, "#d4b4b4");
}
function generateComputerBoardUi() {
  var field = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("field");
  var attackDiv = attackScreen();
  field.appendChild(attackDiv);
  (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("attackScreen").innerHTML = "<canvas id=\"computerboard\" class=\" \" width=\"".concat(_bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize * 10, "\" height=\"").concat(_bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize * 10, "\"></canvas>");
}
function attackScreen() {
  var div = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.createElement)("div");
  div.setAttribute("id", "attackScreen");
  div.setAttribute("class", "attackScreen");
  div.classList.add("relative", "flex", "w-fit");
  return div;
}

/***/ }),

/***/ "./src/modules/factories/Gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/factories/Gameboard.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _require = __webpack_require__(/*! autoprefixer */ "./node_modules/autoprefixer/lib/autoprefixer.js"),
  data = _require.data;
var Ship = __webpack_require__(/*! ./Ship */ "./src/modules/factories/Ship.js");
var _require2 = __webpack_require__(/*! ../playerDom */ "./src/modules/playerDom.js"),
  isColliding = _require2.isColliding,
  isWithinBounds = _require2.isWithinBounds,
  orientation = _require2.orientation;
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.ships = [new Ship("carrier", 4), new Ship("battleship", 3), new Ship("destroyer", 2), new Ship("submarine", 2), new Ship("patrol", 1)];
    this.missedShots = [];
    this.board = Array(10).fill(null).map(function () {
      return Array(10).fill(null);
    });
    this.buckets = new Array(5).fill(null);
  }
  return _createClass(Gameboard, [{
    key: "_hash",
    value: function _hash(key) {
      if (key === "carrier") return 0;
      if (key === "battleship") return 1;
      if (key === "destroyer") return 2;
      if (key === "submarine") return 3;
      if (key === "patrol") return 4;
    }
  }, {
    key: "placeShip",
    value: function placeShip(ship, startX, startY, direction) {
      var shipLength = ship.length;

      // Check if the ship placement is within bounds
      if (direction === "horizontal") {
        if (startX + shipLength > this.board[0].length || startY >= this.board.length) return;
      } else if (direction === "vertical") {
        if (startY + shipLength > this.board.length || startX >= this.board[0].length) return;
      }

      // Check if the placement is not colliding with another ship
      for (var i = 0; i < shipLength; i++) {
        if (direction === "horizontal") {
          if (this.board[startY][startX + i]) return;
        } else if (direction === "vertical") {
          if (this.board[startY + i][startX]) return;
        }
      }
      if (direction === "horizontal") {
        for (var _i = 0; _i < shipLength; _i++) {
          this.board[startY][startX + _i] = ship;
        }
      } else if (direction === "vertical") {
        for (var _i2 = 0; _i2 < shipLength; _i2++) {
          this.board[startY + _i2][startX] = ship;
        }
      }
      this.ships.push(ship);
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      var target = this.board[y][x];
      if (target) {
        target.hit();
      } else {
        this.missedShots.push([x, y]);
      }
    }
  }, {
    key: "removeShip",
    value: function removeShip(shipName, x, y, shipLength, direction) {
      var ship = this.getShip(shipName);
      for (var i = 0; i < shipLength; i++) {
        if (direction === "horizontal" && this.board[y][x + i] === ship) {
          this.board[y][x + i] = null;
        } else if (direction === "vertical" && this.board[y + i][x] === ship) {
          this.board[y + i][x] = null;
        }
      }
    }
  }, {
    key: "allShipSunk",
    value: function allShipSunk() {
      return this.ships.every(function (ship) {
        return ship.isSunk();
      });
    }
  }, {
    key: "getShip",
    value: function getShip(key) {
      return this.ships[this._hash(key)];
    }
  }, {
    key: "calculateNewPosition",
    value: function calculateNewPosition(e, canvas, draggedToken) {
      var newX = e.clientX - canvas.getBoundingClientRect().x;
      var newY = e.clientY - canvas.getBoundingClientRect().y;
      var width = draggedToken.clientWidth;
      var height = draggedToken.clientHeight;
      newX = Math.max(0, Math.min(newX, canvas.width - width));
      newY = Math.max(0, Math.min(newY, canvas.height - height));
      newX = Math.floor(newX / 36) * 36;
      newY = Math.floor(newY / 36) * 36;
      return {
        x: newX,
        y: newY
      };
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      this.board = Array(10).fill(null).map(function () {
        return Array(10).fill(null);
      });
    }
  }]);
}();
module.exports = {
  Gameboard: Gameboard
};

/***/ }),

/***/ "./src/modules/factories/Ship.js":
/*!***************************************!*\
  !*** ./src/modules/factories/Ship.js ***!
  \***************************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    _classCallCheck(this, Ship);
    this.name = name;
    this.length = length;
    this.direction = "horizontal";
    this.hits = 0;
    this.sunk = false;
    this.top = null;
    this.left = null;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      this.hits++;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      this.sunk = this.hits >= this.length;
      return this.sunk;
    }
  }, {
    key: "shipUi",
    value: function shipUi() {
      var shipPort = document.querySelector(".".concat(this.name, "-port"));
      if (this.top === 0 || this.top) shipPort.appendChild(createTokenDiv(this.name, this.direction, this.length, this.left, this.top));else shipPort.appendChild(createTokenDiv(this.name, this.direction, this.length, this.left, this.top));
      // return (shipPort.innerHTML = `<div data-name="${this.name}" data-direction="horizontal" data-length="${this.length}" draggable="true" class="${this.name} token"></div>`)
    }
  }]);
}();
function createTokenDiv(name, direction, length, left, top) {
  // Create a new div element
  var div = document.createElement("div");

  // Set the attributes
  div.setAttribute("data-name", name);
  div.setAttribute("data-direction", direction);
  div.setAttribute("data-length", length);
  div.setAttribute("draggable", "true");
  // div.setAttribute("width", `${length * 36}px`)

  // Set the class
  div.className = "".concat(name, " token");

  // Set the style
  div.style.left = "".concat(left, "px");
  div.style.top = "".concat(top, "px");
  return div;
}
module.exports = Ship;

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_playerDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/playerDom */ "./src/modules/playerDom.js");




/***/ }),

/***/ "./src/modules/playerDom.js":
/*!**********************************!*\
  !*** ./src/modules/playerDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");
/* harmony import */ var _DOM_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/utilities */ "./src/modules/DOM/utilities.js");
/* harmony import */ var _comDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comDom */ "./src/modules/comDom.js");
var _require = __webpack_require__(/*! ../bin2/game */ "./src/bin2/game.js"),
  htmlStructure = _require.htmlStructure;
var _require2 = __webpack_require__(/*! ../bin2/domevents */ "./src/bin2/domevents.js"),
  drawCanvas = _require2.drawCanvas,
  cellSize = _require2.cellSize;
var _require3 = __webpack_require__(/*! ./factories/Gameboard */ "./src/modules/factories/Gameboard.js"),
  Gameboard = _require3.Gameboard;



(function () {
  htmlStructure();
  setupPlayerField();
  var playerCvs = document.getElementById("playerboard");
  var playerCtx = playerCvs.getContext("2d");
  var playerboard = new Gameboard();
  var message = document.querySelector(".screen p");
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, {
    strings: ["Begin by setting up a formation", "Drag and Drop your ships in your country water", "You can arrange your ships in a vertical or horizontal position by using the X axis or Y axis Button", "All the best with your formation"],
    typeSpeed: 50,
    loop: true
  });

  //draw player canvas
  drawCanvas(playerCtx, "#b4b4ff");

  //axis
  var xAxis = document.getElementById("axis-x");
  var yAxis = document.getElementById("axis-y");
  var orientation = "horizontal";
  xAxis.addEventListener("click", function () {
    horizontalAxis();
    console.log(orientation);
  });
  yAxis.addEventListener("click", function () {
    verticalAxis();
    console.log(orientation);
  });

  // draw player ships and add ships
  playerboard.ships.forEach(function (ship) {
    ship.shipUi();
  });
  var shipTokens = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.querySelectorAll)("token");
  console.log(shipTokens);
  var wellPlaced = true;
  var allShipPlaced = checkAllTokenPlaced;
  shipTokens.forEach(function (token) {
    token.addEventListener("dragstart", dragStart);
    token.addEventListener("dragend", dragEnd);
  });
  var strategyscreen = document.getElementById("strategyscreen");
  var packs = document.querySelectorAll(".pack");
  strategyscreen.addEventListener("dragover", dragOverBoard);
  strategyscreen.addEventListener("drop", dropOnBoard);
  packs.forEach(function (pack) {
    pack.addEventListener("dragover", dragOverPack);
  });
  var randomBTN = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("randomBTN");
  randomBTN.addEventListener("click", function () {
    var tokens = document.querySelectorAll(".token");
    var strategyscreen = document.getElementById("strategyscreen");
    var placedTokens = document.querySelectorAll("#strategyscreen .onboard");
    var packedTokens = document.querySelectorAll(".pack .token");
    packedTokens.forEach(function (token) {
      return token.remove();
    });
    placedTokens.forEach(function (token) {
      return token.remove();
    });
    playerboard.clearBoard();
    tokens.forEach(function (token) {
      var wellPlaced = true;
      var tokenName = token.getAttribute("data-name");
      var orientation = getRandomDirection();
      var length = parseInt(token.getAttribute("data-length"));

      //add the orientation class to draggedToken

      var newPosition = {
        x: getRandomNumber() * cellSize,
        y: getRandomNumber() * cellSize
      };
      wellPlaced = canPlaceShip(newPosition.x, newPosition.y, length, orientation);
      while (!wellPlaced) {
        newPosition = {
          x: getRandomNumber() * cellSize,
          y: getRandomNumber() * cellSize
        };

        // this allows the dragged token to move while isOverlap is true
        wellPlaced = canPlaceShip(newPosition.x, newPosition.y, length, orientation);
      }
      token.style.top = "".concat(newPosition.y, "px");
      token.style.left = "".concat(newPosition.x, "px");
      token.style.position = "absolute";
      token.setAttribute("data-direction", orientation);
      if (orientation === "vertical") {
        token.classList.add("vertical");
      } else {
        token.classList.remove("vertical");
      }
      token.classList.add("onboard");
      strategyscreen.appendChild(token);
      var draggedShip = playerboard.getShip(tokenName);
      draggedShip.left = newPosition.x;
      draggedShip.top = newPosition.y;
      draggedShip.direction = orientation;
      playerboard.placeShip(draggedShip, newPosition.x / cellSize, newPosition.y / cellSize, orientation);
    });
    console.log(playerboard.board);
  });
  var startBTN = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("startBTN");
  startBTN.addEventListener("click", function () {
    if (allShipPlaced() && wellPlaced) {
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("port"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("axis-section"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("cta"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.flexElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("restartDiv"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.querySelectorAll)("token").forEach(function (token) {
        removeDragEvents(token);
      });
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("playerboard").classList.add("bringFront");
      (0,_comDom__WEBPACK_IMPORTED_MODULE_2__.initializeComputer)();
      console.log("start!");
      console.log(playerboard.board);
    } else {
      console.log("fix board");
    }
  });
  function dragStart(e) {
    this.classList.add("dragging");
  }
  function dragEnd(e) {
    this.classList.remove("dragging");
  }
  function dragOverBoard(e) {
    e.preventDefault();
    var draggedToken = document.querySelector(".dragging");
    var currentX = parseInt(draggedToken.style.left) / cellSize;
    var currentY = parseInt(draggedToken.style.top) / cellSize;
    var length = parseInt(draggedToken.getAttribute("data-length"));
    var direction = draggedToken.getAttribute("data-direction");
    var shipName = draggedToken.getAttribute("data-name");

    //if the token is already on the board,
    // Remove it from its current position
    if (draggedToken.classList.contains("onboard") && draggedToken.classList.contains(draggedToken.getAttribute("data-name"))) {
      playerboard.removeShip(shipName, currentX, currentY, length, direction);
    }
    var newPosition = playerboard.calculateNewPosition(e, playerCvs, draggedToken);

    //get the cell position of the dragged token in the canvas

    if (orientation === "vertical") {
      draggedToken.classList.add("vertical");
    } else {
      draggedToken.classList.remove("vertical");
    }
    //add the orientation class to draggedToken

    //check if canPlace ship
    //if it not return to previous state
    if (!canPlaceShip(newPosition.x, newPosition.y, length, orientation)) {
      draggedToken.classList.add("errorBorder");
      var draggedShip = playerboard.getShip(draggedToken.getAttribute("data-name"));
      draggedToken.setAttribute("data-direction", direction);
      //set previous direction
      if (direction === "vertical") {
        draggedToken.classList.add("vertical");
        draggedToken.classList.remove("errorBorder");
      } else {
        draggedToken.classList.remove("vertical");
        draggedToken.classList.remove("errorBorder");
      }
      console.log(wellPlaced);
      playerboard.placeShip(draggedShip, currentX, currentY, direction);
      return;
    }
    draggedToken.classList.remove("errorBorder");
  }
  function dropOnBoard(e) {
    var draggedToken = document.querySelector(".dragging");
    var length = parseInt(draggedToken.getAttribute("data-length"));
    var newPosition = playerboard.calculateNewPosition(e, playerCvs, draggedToken);
    if (canPlaceShip(newPosition.x, newPosition.y, length, orientation)) {
      console.log(draggedToken);
      draggedToken.classList.remove("errorBorder");
      draggedToken.style.top = "".concat(newPosition.y, "px");
      draggedToken.style.left = "".concat(newPosition.x, "px");
      draggedToken.style.position = "absolute";
      draggedToken.setAttribute("data-direction", orientation);
      draggedToken.classList.add("onboard");
      strategyscreen.appendChild(draggedToken);
      var draggedShip = playerboard.getShip(draggedToken.getAttribute("data-name"));
      draggedShip.left = newPosition.x;
      draggedShip.top = newPosition.y;
      draggedShip.direction = orientation;
      playerboard.placeShip(draggedShip, newPosition.x / cellSize, newPosition.y / cellSize, orientation);
      wellPlaced = true;
      console.log(wellPlaced);
    }
    console.log(playerboard.board);
    // console.log(draggedShip)
  }
  function dragOverPack(e) {
    e.preventDefault();
    var draggedToken = document.querySelector(".dragging");
    var length = parseInt(draggedToken.getAttribute("data-length"));
    var currentX = parseInt(draggedToken.style.left) / cellSize;
    var currentY = parseInt(draggedToken.style.top) / cellSize;
    var direction = draggedToken.getAttribute("data-direction");
    var shipName = draggedToken.getAttribute("data-name");
    if (this.children.length > 0) return;
    playerboard.removeShip(shipName, currentX, currentY, length, direction);
    draggedToken.style.top = 0;
    draggedToken.style.left = 0;
    draggedToken.style.position = "";
    draggedToken.classList.remove("vertical", "onboard");
    draggedToken.setAttribute("data-direction", "horizontal");
    this.appendChild(draggedToken);
    var draggedShip = playerboard.getShip(shipName);
    draggedShip.left = 0;
    draggedShip.top = 0;
    draggedShip.direction = "horizontal";
  }
  function canPlaceShip(xPosition, yPosition, shipLength, direction) {
    var xCord = xPosition / cellSize;
    var yCord = yPosition / cellSize;
    if (direction === "horizontal") {
      //check if ship can fit horizontal
      if (xCord % 10 <= 10 - shipLength) {
        for (var i = 0; i < shipLength; i++) {
          var space = playerboard.board[yCord][xCord + i];
          if (space) {
            return false;
          }
        }
        return true;
      }
      return false;
    } else if (direction === "vertical") {
      //check if ship can fit vertical
      if (yCord % 10 <= 10 - shipLength) {
        for (var _i = 0; _i < shipLength; _i++) {
          var _space = playerboard.board[yCord + _i][xCord];
          if (_space) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
  }
  function getRandomDirection() {
    return Math.random() < 0.5 ? "horizontal" : "vertical";
  }
  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  //switch buttons
  var switchActive = function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
  };
  var horizontalAxis = function horizontalAxis() {
    yAxis.style.backgroundColor = "";
    switchActive(yAxis, xAxis);
    return orientation = "horizontal";
  };
  var verticalAxis = function verticalAxis() {
    xAxis.style.backgroundColor = "";
    switchActive(xAxis, yAxis);
    return orientation = "vertical";
  };
  function checkAllTokenPlaced() {
    var shipTokens = document.querySelectorAll("#strategyscreen .token");
    return shipTokens.length === 5;
  }
  function playerFieldUi() {
    return "\n\n            <div id=\"battlefield\" class=\"board w-full\">\n            <div id=\"port\" class=\"  inline-flex flex-col float-left flex-wrap w-52 gap-x-5 gap-y-10 mr-6\">\n                <div class=\"carrier-port pack placeable  h-9 \">\n                    \n                </div>\n                <div class=\"battleship-port pack placeable  h-9 \">\n                    \n                </div>\n                <div class=\"destroyer-port pack placeable  h-9\">\n                    \n                </div>\n                <div class=\"submarine-port pack placeable  h-9 \">\n                    \n                    \n                </div>\n                <div class=\"patrol-port pack placeable  h-9 \">\n                    \n                    \n                    \n                </div>\n                \n            </div>\n            <div id=\"field\" class=\"flex flex-col justify-items-center\">\n              <div id=\"axis-section\" class=\"flex gap-4 w-[360px] justify-center mb-4\">\n                <div id=\"axis-x\" class=\"btn axis-x px-6 py-1 border border-1 border-blue-600 rounded-lg active\">X axis</div>\n                <div id=\"axis-y\" class=\"btn axis-y px-6 py-1 border border-1 border-blue-600 rounded-lg\">Y axis</div>\n              </div>\n              <div id=\"strategyscreen\" class=\"placeable relative flex w-fit\">\n                  <canvas id=\"playerboard\" class=\" \" width=\"".concat(cellSize * 10, "\" height=\"").concat(cellSize * 10, "\"></canvas>\n              </div>\n              <div id=\"cta\" class=\"flex gap-4 w-[360px] justify-center mt-4\">\n                <div id=\"randomBTN\" class=\"btn  px-6 py-1 border border-1 border-blue-600 rounded-lg\">Random</div>\n                <div id=\"startBTN\" class=\"btn  px-6 py-1 border border-1 border-green-600 rounded-lg play\">Start</div>\n              </div>\n            </div>\n            <div id=\"restartDiv\" class=\"flex gap-4 justify-center mt-4\">\n                \n                <div id=\"restartBTN\" onclick = \"location.reload()\" class=\"btn  px-6 py-1 text-white bg-red-600 border border-1 border-red-600 rounded-lg restart\">Restart</div>\n              </div>\n\n        </div>\n        \n        ");
  }
  function setupPlayerField() {
    var main = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("body-container");
    main.innerHTML = playerFieldUi();
    (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_1__.getElementById)("restartDiv"));
  }

  //function that removes all events from token
  function removeDragEvents(token) {
    token.removeEventListener("dragstart", dragStart);
    token.removeEventListener("dragend", dragEnd);
    token.setAttribute("draggable", "false");
    token.style.cursor = "default";
  }
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/style.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/style.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.5 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.float-left {
  float: left;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mr-5 {
  margin-right: 1.25rem;
}
.mr-6 {
  margin-right: 1.5rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-12 {
  margin-top: 3rem;
}
.mt-4 {
  margin-top: 1rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.hidden {
  display: none;
}
.h-9 {
  height: 2.25rem;
}
.h-dvh {
  height: 100dvh;
}
.h-full {
  height: 100%;
}
.w-1\\/2 {
  width: 50%;
}
.w-52 {
  width: 13rem;
}
.w-\\[360px\\] {
  width: 360px;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}
.max-w-7xl {
  max-width: 80rem;
}
.max-w-xl {
  max-width: 36rem;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-items-center {
  justify-items: center;
}
.gap-4 {
  gap: 1rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-x-5 {
  -moz-column-gap: 1.25rem;
       column-gap: 1.25rem;
}
.gap-y-10 {
  row-gap: 2.5rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.border {
  border-width: 1px;
}
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(37 99 235 / var(--tw-border-opacity));
}
.border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(22 163 74 / var(--tw-border-opacity));
}
.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.text-center {
  text-align: center;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
:root {
  --cell-size: 36px;
}
.pack {
  box-sizing: content-box;
  border: 1px dotted #00000020;
  width: 140px;
  /* transform: scale(0.5); */
}
#strategyscreen {
  /* transform: scale(0.5); */
}
.btn {
  cursor: pointer;
  background-color: #ffffff;
  color: #0000ff;
}
.bringFront {
  z-index: 10;
}
.active {
  background-color: #0000ff !important;
  color: white !important;
}
.play {
  background-color: #008000 !important;
  border: 1px solid #008000;
  color: white !important;
}
.restart {
  border: 1px solid #ff0000 !important;
  color: red !important;
}
.token {
  /* position: absolute; */
  top: 0;
  left: 0;
  border: 1px solid #0000ff;
  background-color: #0000ff10;
  box-sizing: border-box;
  cursor: grab;
  transform: rotate(0deg);
}
.token.carrier {
  width: calc(4 * var(--cell-size));
  height: var(--cell-size);
}
.token.battleship {
  width: calc(3 * var(--cell-size));
  height: var(--cell-size);
}
.token.destroyer {
  width: calc(2 * var(--cell-size));
  height: var(--cell-size);
}
.token.submarine {
  width: calc(2 * var(--cell-size));
  height: var(--cell-size);
}
.token.patrol {
  width: var(--cell-size);
  height: var(--cell-size);
}
.token.carrier.vertical {
  height: calc(4 * var(--cell-size));
  width: var(--cell-size);
  transition: ease;
}
.token.battleship.vertical {
  height: calc(3 * var(--cell-size));
  width: var(--cell-size);
  transition: ease;
}
.token.destroyer.vertical {
  height: calc(2 * var(--cell-size));
  width: var(--cell-size);
  transition: ease;
}
.token.submarine.vertical {
  height: calc(2 * var(--cell-size));
  width: var(--cell-size);
  transition: ease;
}
.token.patrol.vertical {
  width: var(--cell-size);
  height: var(--cell-size);
  transition: ease;
}
.token.dragging {
  opacity: 0.5;
}
.token.rotate {
  transform: rotate(90deg);
  translate: -0% -0%;
  transition: ease;
  transition-delay: 3ms;
  transform-origin: 18px center;
}
.errorBorder {
  border: 1px solid red !important;
  background-color: rgba(255, 0, 0, 0.2) !important;
}
`, "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/base.css","webpack://./node_modules/tailwindcss/utilities.css","webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n","@tailwind utilities;\n","@import \"tailwindcss/base\";\n@import \"tailwindcss/components\";\n@import \"tailwindcss/utilities\";\n\n:root {\n  --cell-size: 36px;\n}\n\n.pack {\n  box-sizing: content-box;\n  border: 1px dotted #00000020;\n  width: 140px;\n  /* transform: scale(0.5); */\n}\n\n#strategyscreen {\n  /* transform: scale(0.5); */\n}\n\n.btn {\n  cursor: pointer;\n  background-color: #ffffff;\n  color: #0000ff;\n}\n\n.bringFront {\n  z-index: 10;\n}\n\n.active {\n  background-color: #0000ff !important;\n  color: white !important;\n}\n.play {\n  background-color: #008000 !important;\n  border: 1px solid #008000;\n  color: white !important;\n}\n.restart {\n  border: 1px solid #ff0000 !important;\n  color: red !important;\n}\n\n.token {\n  /* position: absolute; */\n  top: 0;\n  left: 0;\n  border: 1px solid #0000ff;\n  background-color: #0000ff10;\n  box-sizing: border-box;\n  cursor: grab;\n  transform: rotate(0deg);\n}\n\n.token.carrier {\n  width: calc(4 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.battleship {\n  width: calc(3 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.destroyer {\n  width: calc(2 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.submarine {\n  width: calc(2 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.patrol {\n  width: var(--cell-size);\n  height: var(--cell-size);\n}\n.token.carrier.vertical {\n  height: calc(4 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.battleship.vertical {\n  height: calc(3 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.destroyer.vertical {\n  height: calc(2 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.submarine.vertical {\n  height: calc(2 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.patrol.vertical {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  transition: ease;\n}\n\n.token.dragging {\n  opacity: 0.5;\n}\n\n.token.rotate {\n  transform: rotate(90deg);\n  translate: -0% -0%;\n  transition: ease;\n  transition-delay: 3ms;\n  transform-origin: 18px center;\n}\n\n.errorBorder {\n  border: 1px solid red !important;\n  background-color: rgba(255, 0, 0, 0.2) !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "?3465":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5580":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?03fb":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6197":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b8cb":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?c717":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_autoprefixer_lib_aut-5d1bf3"], () => (__webpack_require__("./src/modules/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map