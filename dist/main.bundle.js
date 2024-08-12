(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([[792],{

/***/ 9518:
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

/***/ 7709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canPlaceShip: () => (/* binding */ canPlaceShip),
/* harmony export */   getRandomDirection: () => (/* binding */ getRandomDirection),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),
/* harmony export */   htmlStructure: () => (/* binding */ htmlStructure)
/* harmony export */ });
function htmlStructure() {
  return document.body.innerHTML = "\n\n    <Header class=\"flex items-center max-w-7xl  w-full mx-auto mt-10 mb-4\" >\n        <h1 id=\"Logo\" class=\"text-2xl mr-5\"><img id=\"logo\"/>Kiz BattleShip </h1>\n        <div class=\"screen flex px-4 py-3 bg-gray-200 text-sm max-w-xl w-full rounded-md\">\n            <p id=\"message\">Start editing to see some magic happen </p>\n        </div>\n    </Header>\n    \n    <main id=\"body-container\" class=\" flex max-xl mx-auto max-w-7xl w-full h-full mt-12\">\n        \n        <div id=\"battlefield-2\" class=\"hidden board w-1/2\">\n            <canvas id=\"computerboard\" class=\"\" width=\"360\" height=\"360\"></canvas>\n        </div>\n\n    </main>\n\n\n    <footer class=\" max-w-7xl w-full mx-auto py-1\">\n        <p class=\"text-center text-sm\">\n           \n            <a target=\"_blank\" href=\"https://github.com/kizzylion/battleship\"><i class=\"fa-brands fa-github\"></i> Kizzylion</a>\n        </p>\n    </footer>\n\n    ";
}
function getRandomDirection() {
  return Math.random() < 0.5 ? "horizontal" : "vertical";
}
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
function canPlaceShip(board, xPosition, yPosition, shipLength, direction, cellSize) {
  var xCord = parseInt(xPosition / cellSize);
  var yCord = parseInt(yPosition / cellSize);
  if (direction === "horizontal") {
    //check if ship can fit horizontal
    if (xCord % 10 <= 10 - shipLength) {
      for (var i = 0; i < shipLength; i++) {
        var space = board[yCord][xCord + i];
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
        var _space = board[yCord + _i][xCord];
        if (_space) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
}

/***/ }),

/***/ 4124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _require = __webpack_require__(1993),
  data = _require.data;
var _require2 = __webpack_require__(9250),
  Ship = _require2.Ship;
var _require3 = __webpack_require__(260),
  isColliding = _require3.isColliding,
  isWithinBounds = _require3.isWithinBounds,
  orientation = _require3.orientation;
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.opponentName, this.ships = [new Ship("carrier", 4), new Ship("battleship", 3), new Ship("destroyer", 2), new Ship("submarine", 2), new Ship("patrol", 1)];
    this.missedShots = new Set();
    this.positionShot = new Set();
    this.board = Array(10).fill(null).map(function () {
      return Array(10).fill(null);
    });
    this.hitShot = new Set();
  }
  return _createClass(Gameboard, [{
    key: "setOpponentName",
    value: function setOpponentName(name) {
      this.playerName = name;
    }
  }, {
    key: "getOpponentName",
    value: function getOpponentName() {
      return this.playerName;
    }
  }, {
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
        if (startX + shipLength > this.board[0].length || startY >= this.board.length) return false;
      } else if (direction === "vertical") {
        if (startY + shipLength > this.board.length || startX >= this.board[0].length) return false;
      }

      // Check if the placement is not colliding with another ship
      for (var i = 0; i < shipLength; i++) {
        if (direction === "horizontal") {
          if (this.board[startY][startX + i]) return false;
        } else if (direction === "vertical") {
          if (this.board[startY + i][startX]) return false;
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
        this.addToPositionShot([x, y]);
        this.hitShot.add([x, y].toString());
        target.hit();
      } else {
        this.missedShots.add([x, y].toString());
        this.addToPositionShot([x, y]);
      }
    }
  }, {
    key: "addToPositionShot",
    value: function addToPositionShot(array) {
      var string = array.toString();
      this.positionShot.add(string);
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
  }, {
    key: "getBoard",
    value: function getBoard() {
      return this.board;
    }
  }, {
    key: "checkIfPositionHasBeenHit",
    value: function checkIfPositionHasBeenHit(position) {
      return this.positionShot.has(position.toString());
    }
  }]);
}();
module.exports = {
  Gameboard: Gameboard
};

/***/ }),

/***/ 9250:
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
module.exports = {
  Ship: Ship,
  createTokenDiv: createTokenDiv
};
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

/***/ }),

/***/ 6211:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6044);
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_playerDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(260);




/***/ }),

/***/ 260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  computerBoard: () => (/* binding */ computerBoard),
  playerboard: () => (/* binding */ playerboard)
});

;// CONCATENATED MODULE: ./src/asset/images/logo.png
const logo_namespaceObject = __webpack_require__.p + "images/logo.592c26ec429743242944.png";
;// CONCATENATED MODULE: ./src/asset/sound/ocean.mp3
const ocean_namespaceObject = __webpack_require__.p + "sounds/ocean.mp3";
// EXTERNAL MODULE: ./src/bin2/domevents.js
var domevents = __webpack_require__(9518);
;// CONCATENATED MODULE: ./src/asset/images/X.png
const X_namespaceObject = __webpack_require__.p + "images/X.9493edeacefd1c017a9f.png";
;// CONCATENATED MODULE: ./src/asset/images/dot.png
const dot_namespaceObject = __webpack_require__.p + "images/dot.7088b88f10c080527f0e.png";
;// CONCATENATED MODULE: ./src/asset/images/dot2.png
const dot2_namespaceObject = __webpack_require__.p + "images/dot2.f73431b293c1447dd286.png";
;// CONCATENATED MODULE: ./src/asset/sound/shot.mp3
const shot_namespaceObject = __webpack_require__.p + "sounds/shot.mp3";
;// CONCATENATED MODULE: ./src/asset/sound/hit.mp3
const hit_namespaceObject = __webpack_require__.p + "sounds/hit.mp3";
;// CONCATENATED MODULE: ./src/asset/sound/miss.mp3
const miss_namespaceObject = __webpack_require__.p + "sounds/miss.mp3";
// EXTERNAL MODULE: ./src/modules/factories/Ship.js
var Ship = __webpack_require__(9250);
// EXTERNAL MODULE: ./node_modules/typed.js/dist/typed.module.js
var typed_module = __webpack_require__(2902);
// EXTERNAL MODULE: ./node_modules/autoprefixer/lib/autoprefixer.js
var autoprefixer = __webpack_require__(1993);
;// CONCATENATED MODULE: ./src/modules/DOM/utilities.js
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }











//load x and dot images for canvas
var xImage = new Image();
xImage.src = X_namespaceObject;
var dotImage = new Image();
dotImage.src = dot_namespaceObject;
var dot2Image = new Image();
dot2Image.src = dot2_namespaceObject;
//load audios
var hitSound = new Audio(hit_namespaceObject);
hitSound.playbackRate = 1.5;
var shotSound = new Audio(shot_namespaceObject);
shotSound.playbackRate = 1.5;
var missSound = new Audio(miss_namespaceObject);
missSound.playbackRate = 1.5;

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
function playerShoot(event, canvas, ctx, cellSize, board, placeable, gameboard) {
  //   if (game_over) return
  //X & Y position of the mouse click relative to the canvas
  //event.client show the click position relative to the viewport
  //cvs.getBoundaringClientRec show the position of the canvas in the view port
  var X = event.clientX - canvas.getBoundingClientRect().x;
  var Y = event.clientY - canvas.getBoundingClientRect().y;

  //we calculated i & j of the clicked canvas
  var top = Math.floor(Y / cellSize);
  var left = Math.floor(X / cellSize);
  var position = [left, top];
  //check if position have been hit
  if (gameboard.checkIfPositionHasBeenHit(position)) return true;
  var id = board[top][left];
  // console.log(`top= ${top} , left = ${left}`, `id =`, id)
  playShotSound();
  return drawOnBoard(id, ctx, left, top, placeable, gameboard);
}
function computerShoot(opponent, ctx, position, placeable) {
  var randomPosition = position;
  while (opponent.checkIfPositionHasBeenHit(Object.values(randomPosition))) {
    console.log("position has been shot");
    randomPosition = randomCell();
  }
  var top = position.y;
  var left = position.x;
  var id = opponent.board[top][left];
  console.log("top= ".concat(top, " , left = ").concat(left, ", id = ").concat(id));
  playShotSound();
  return drawOnBoard(id, ctx, left, top, placeable, opponent);
}
function drawOnBoard(result, ctx, left, top, placeable, gameboard) {
  var img = result ? xImage : gameboard.getOpponentName() === "Computer" ? dot2Image : dotImage;
  ctx.drawImage(img, left * domevents.cellSize, top * domevents.cellSize, domevents.cellSize, domevents.cellSize);
  gameboard.receiveAttack(left, top);
  if (result) {
    if (result.isSunk()) {
      var tokenDiv = (0,Ship.createTokenDiv)(result.name, result.direction, result.length, result.left, result.top);
      tokenDiv.style.position = "absolute";
      tokenDiv.setAttribute("draggable", false);
      tokenDiv.style.cursor = "default";
      tokenDiv.classList.add("bgImg");
      if (result.direction === "vertical") tokenDiv.classList.add("vertical");
      placeable.classList.add("bringFront");
      placeable.appendChild(tokenDiv);
    }
    playHitSound();
    if (gameboard.allShipSunk()) {
      displayGameOverDialogue(gameboard);
    }
    return true;
  }
  playMissSound();
  return false;
}
function randomCell() {
  var randomX = Math.floor(Math.random() * 10);
  var randomY = Math.floor(Math.random() * 10);
  return {
    x: randomX,
    y: randomY
  };
}
function playHitSound() {
  hitSound.currentTime = 0;
  hitSound.play();
}
function playMissSound() {
  missSound.currentTime = 0;
  missSound.play();
}
function playShotSound() {
  shotSound.currentTime = 0;
  shotSound.play();
}
function displayGameOverDialogue(gameboard) {
  var dialog = createElement("dialogue");
  dialog.setAttribute("id", "dialogue");
  dialog.setAttribute("class", "dialogue");
  dialog.classList.add("flex", "justify-center", "items-center", "bg-blue-900/80");
  getElementById("body-container").appendChild(dialog);
  dialog.innerHTML = "\n        <div class=\"sm:w-3/4 lg:w-3/4 h-fit p-10 bg-gray-900/60 border bottom-1 border-blue-600/50 rounded-2xl shadow-2xl\">\n            <h1 class=\"text-center text-5xl text-blue-100 mb-4 font-semibold\">Game Over!</h1>\n            <p id=\"winnerInfo\" class=\"text-center text-2xl text-blue-500 mb-12 mt-10 font-mono\"></p>\n            <div id=\"restartBtn\" class=\"flex w-fit px-5 py-2 bg-gray-900 hover:bg-white hover:text-gray-950 rounded-lg  mt-4 shadow-md mx-auto text-white font-thin cursor-pointer\">Restart</div>\n        </div>\n    ";
  var winnerMessage = ["".concat(gameboard.getOpponentName(), " has won the battle")];
  newMessage("winnerInfo", winnerMessage);
  document.body.classList.add("no-scroll");
  var restartBtn = getElementById("restartBtn");
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
}
var typedInstance = null;
function newMessage(element, array) {
  var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var typeSpeed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }
  typedInstance = new typed_module/* default */.A(getElementById(element), {
    strings: array,
    typeSpeed: typeSpeed,
    backSpeed: 25,
    // Speed of backspacing
    backDelay: 3000,
    // Delay before starting to backspace
    loop: loop
  });
}
// EXTERNAL MODULE: ./src/bin2/game.js
var game = __webpack_require__(7709);
;// CONCATENATED MODULE: ./src/modules/comDom.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var _require = __webpack_require__(4124),
  Gameboard = _require.Gameboard;



var isHunting = true;
var targetCells = [];
var lastHitCell = null;
function initializeComputer() {
  getElementById("field").classList.replace("flex-col", "flex-row");
  getElementById("field").classList.add("gap-6", "begin");
  generateComputerBoardUi();
  var computerCvs = getElementById("computerboard");
  var computerCtx = computerCvs.getContext("2d");
  var playerCvs = getElementById("playerboard");
  var playerCtx = playerCvs.getContext("2d");
  (0,domevents.drawCanvas)(computerCtx, "#d4b4b4");
  placeShipsRandomly(computerBoard.ships);
  computerCvs.addEventListener("click", attack);
}
function generateComputerBoardUi() {
  var field = getElementById("field");
  var attackDiv = attackScreen();
  field.appendChild(attackDiv);
  getElementById("attackScreen").innerHTML = "<canvas id=\"computerboard\" class=\" \" width=\"".concat(domevents.cellSize * 10, "\" height=\"").concat(domevents.cellSize * 10, "\"></canvas>");
}
function attackScreen() {
  var div = createElement("div");
  div.setAttribute("id", "attackScreen");
  div.setAttribute("class", "attackScreen");
  div.classList.add("relative", "flex", "w-fit");
  return div;
}

//function that  check if position has been shoot previously

function placeShipsRandomly(ships) {
  ships.forEach(function (ship) {
    var length = ship.length;
    var orientation = (0,game.getRandomDirection)();
    ship.direction = orientation;

    // console.log(ship, length, orientation)

    var newPosition = {
      x: (0,game.getRandomNumber)(),
      y: (0,game.getRandomNumber)()
    };
    var wellPlaced = (0,game.canPlaceShip)(computerBoard.board, newPosition.x * domevents.cellSize, newPosition.y * domevents.cellSize, length, orientation, domevents.cellSize);

    // console.log(ship, length, newPosition, orientation)

    while (!wellPlaced) {
      newPosition = {
        x: (0,game.getRandomNumber)(),
        y: (0,game.getRandomNumber)()
      };
      wellPlaced = (0,game.canPlaceShip)(computerBoard.board, newPosition.x * domevents.cellSize, newPosition.y * domevents.cellSize, length, orientation, domevents.cellSize);
    }
    ship.left = newPosition.x * domevents.cellSize;
    ship.top = newPosition.y * domevents.cellSize;
    computerBoard.placeShip(ship, newPosition.x, newPosition.y, orientation);
  });
  // console.log(computerBoard.board)
}
function attack(_x) {
  return _attack.apply(this, arguments);
}
function _attack() {
  _attack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var computerCvs, computerCtx, playerCvs, playerCtx, playerKill, cell, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          computerCvs = document.getElementById("computerboard");
          computerCtx = computerCvs.getContext("2d");
          playerCvs = document.getElementById("playerboard");
          playerCtx = playerCvs.getContext("2d");
          playerKill = playerShoot(e, computerCvs, computerCtx, domevents.cellSize, computerBoard.getBoard(), document.getElementById("attackScreen"), computerBoard);
          if (!playerKill) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return");
        case 7:
          // player plays again

          computerCvs.removeEventListener("click", attack);
          _context.next = 10;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1500);
          });
        case 10:
          if (isHunting) {
            cell = shootCellRandomly(playerboard);
          } else {
            cell = targetCells.shift();
            if (!cell) {
              isHunting = true;
              cell = shootCellRandomly(playerboard);
            }
          }
          result = computerShoot(playerboard, playerCtx, cell, document.getElementById("strategyscreen"));
          if (result) {
            lastHitCell = cell;
            isHunting = false;
            targetCells = getTargetCells(cell);
          }
          _context.next = 15;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1500);
          });
        case 15:
          if (result) {
            _context.next = 10;
            break;
          }
        case 16:
          // Continue shooting if hit

          computerCvs.addEventListener("click", attack);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _attack.apply(this, arguments);
}
function shootCellRandomly(gameBoard) {
  var cell;
  do {
    cell = randomCell();
  } while (gameBoard.checkIfPositionHasBeenHit([cell.x, cell.y]));
  return cell;
}
function getTargetCells(cell) {
  return getAdjacentCells(cell).filter(function (c) {
    return !playerboard.checkIfPositionHasBeenHit([c.x, c.y]);
  });
}
function getAdjacentCells(cell) {
  var arr = [];
  if (cell.x - 1 >= 0) arr.push({
    x: cell.x - 1,
    y: cell.y
  });
  if (cell.x + 1 < 10) arr.push({
    x: cell.x + 1,
    y: cell.y
  });
  if (cell.y - 1 >= 0) arr.push({
    x: cell.x,
    y: cell.y - 1
  });
  if (cell.y + 1 < 10) arr.push({
    x: cell.x,
    y: cell.y + 1
  });
  return arr;
}
;// CONCATENATED MODULE: ./src/modules/playerDom.js


var playerDom_require = __webpack_require__(7709),
  htmlStructure = playerDom_require.htmlStructure,
  getRandomDirection = playerDom_require.getRandomDirection,
  getRandomNumber = playerDom_require.getRandomNumber,
  canPlaceShip = playerDom_require.canPlaceShip;
var _require2 = __webpack_require__(9518),
  drawCanvas = _require2.drawCanvas,
  cellSize = _require2.cellSize;
var _require3 = __webpack_require__(4124),
  playerDom_Gameboard = _require3.Gameboard;


var playerboard = new playerDom_Gameboard();
var computerBoard = new playerDom_Gameboard();
playerboard.setOpponentName("Computer");
computerBoard.setOpponentName("Player");
(function () {
  htmlStructure();
  getElementById("logo").src = logo_namespaceObject;
  setupPlayerField();
  var oceanSound = new Audio(ocean_namespaceObject);
  var playerCvs = document.getElementById("playerboard");
  var playerCtx = playerCvs.getContext("2d");
  var startMessage = ["Begin by setting up a formation", "Drag and Drop your ships in your country water", "You can arrange your ships in a vertical or horizontal position by using the X axis or Y axis Button", "All the best with your formation"];
  newMessage("message", startMessage);

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
  var shipTokens = querySelectorAll("token");
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
  var randomBTN = getElementById("randomBTN");
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
    playOceanSound();
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
      wellPlaced = canPlaceShip(playerboard.board, newPosition.x, newPosition.y, length, orientation, cellSize);
      while (!wellPlaced) {
        newPosition = {
          x: getRandomNumber() * cellSize,
          y: getRandomNumber() * cellSize
        };
        wellPlaced = canPlaceShip(playerboard.board, newPosition.x, newPosition.y, length, orientation, cellSize);
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
    var randomFormation = ["Your Ships have been placed randomly", "Not fine with the formation? click Random, else, Start! now"];
    newMessage("message", randomFormation);
    // console.log(playerboard.board)
  });
  var startBTN = getElementById("startBTN");
  startBTN.addEventListener("click", function () {
    if (allShipPlaced() && wellPlaced) {
      hideElement(getElementById("port"));
      hideElement(getElementById("axis-section"));
      hideElement(getElementById("cta"));
      flexElement(getElementById("restartDiv"));
      querySelectorAll("token").forEach(function (token) {
        removeDragEvents(token);
      });
      var _startMessage = ["Fight!!! Now", "Shoot any position on your enemies water to destroy enemies ship", "Remember, Ships are placed Horizontally and Vertically Only"];
      newMessage("message", _startMessage, true);
      getElementById("playerboard").classList.add("bringFront");
      initializeComputer();
      playOceanSound();
    } else {
      alert("Fix Board: click 'Random' button to set up ships randomly");
    }
  });
  function playOceanSound() {
    oceanSound.play()["catch"](function (error) {
      console.error("Error playing the sound:", error);
    });
    oceanSound.loop = true;
  }
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
    if (!canPlaceShip(playerboard.board, newPosition.x, newPosition.y, length, orientation, cellSize)) {
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
    if (canPlaceShip(playerboard.board, newPosition.x, newPosition.y, length, orientation, cellSize)) {
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
    return "\n\n            <div id=\"battlefield\" class=\"board w-full\">\n            <div id=\"port\" class=\"hidden md:inline-flex flex-col float-left flex-wrap w-52 gap-x-5 gap-y-10 mr-6\">\n                <div class=\"carrier-port pack placeable  h-9 \">\n                    \n                </div>\n                <div class=\"battleship-port pack placeable  h-9 \">\n                    \n                </div>\n                <div class=\"destroyer-port pack placeable  h-9\">\n                    \n                </div>\n                <div class=\"submarine-port pack placeable  h-9 \">\n                    \n                    \n                </div>\n                <div class=\"patrol-port pack placeable  h-9 \">\n                    \n                    \n                    \n                </div>\n                \n            </div>\n            <div id=\"field\" class=\"flex flex-col justify-items-center\">\n              <div id=\"axis-section\" class=\"hidden md:flex gap-4 w-[360px] justify-center mb-4\">\n                <div id=\"axis-x\" class=\"btn axis-x px-6 py-1 border border-1 border-blue-600 rounded-lg active\">X axis</div>\n                <div id=\"axis-y\" class=\"btn axis-y px-6 py-1 border border-1 border-blue-600 rounded-lg\">Y axis</div>\n              </div>\n              <div id=\"strategyscreen\" class=\"placeable relative flex w-fit\">\n                  <canvas id=\"playerboard\" class=\" \" width=\"".concat(cellSize * 10, "\" height=\"").concat(cellSize * 10, "\"></canvas>\n              </div>\n              <div id=\"cta\" class=\"flex gap-4 w-[360px] justify-center mt-4\">\n                <div id=\"randomBTN\" class=\"btn  px-6 py-1 border border-1 border-blue-600 rounded-lg\">Random</div>\n                <div id=\"startBTN\" class=\"btn  px-6 py-1 border border-1 border-green-600 rounded-lg play\">Start</div>\n              </div>\n            </div>\n            <div id=\"restartDiv\" class=\"flex gap-4 justify-center mt-4\">\n                \n                <div id=\"restartBTN\" onclick = \"location.reload()\" class=\"btn  px-6 py-1 text-white bg-red-600 border border-1 border-red-600 rounded-lg restart\">Restart</div>\n              </div>\n\n        </div>\n        \n        ");
  }
  function setupPlayerField() {
    var main = getElementById("body-container");
    main.innerHTML = playerFieldUi();
    hideElement(getElementById("restartDiv"));
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

/***/ 8411:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 9746:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 9977:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 197:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1866:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2739:
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [787], () => (__webpack_exec__(6211)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map