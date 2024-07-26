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
/* harmony export */   canPlaceShip: () => (/* binding */ canPlaceShip),
/* harmony export */   getRandomDirection: () => (/* binding */ getRandomDirection),
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber),
/* harmony export */   htmlStructure: () => (/* binding */ htmlStructure)
/* harmony export */ });
function htmlStructure() {
  return document.body.innerHTML = "\n\n    <Header class=\"flex items-center max-w-7xl  w-full mx-auto mt-10 mb-4\" >\n        <h1 id=\"Logo\" class=\"text-2xl mr-5\"><img id=\"logo\"/>Kiz BattleShip </h1>\n        <div class=\"screen flex px-4 py-3 bg-gray-200 text-sm max-w-xl w-full rounded-md\">\n            <p>Start editing to see some magic happen </p>\n        </div>\n    </Header>\n    \n    <main id=\"body-container\" class=\" flex max-xl mx-auto max-w-7xl w-full h-full mt-12\">\n        \n        <div id=\"battlefield-2\" class=\"hidden board w-1/2\">\n            <canvas id=\"computerboard\" class=\"\" width=\"360\" height=\"360\"></canvas>\n        </div>\n\n    </main>\n\n\n    <footer class=\" max-w-7xl w-full mx-auto py-1\">\n        <p class=\"text-center text-sm\">\n           \n            <a href=\"#\"><i class=\"fa-brands fa-github\"></i> Kizzylion</a>\n        </p>\n    </footer>\n\n    ";
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

/***/ "./src/modules/DOM/utilities.js":
/*!**************************************!*\
  !*** ./src/modules/DOM/utilities.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerShoot: () => (/* binding */ computerShoot),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   flexElement: () => (/* binding */ flexElement),
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   hideElement: () => (/* binding */ hideElement),
/* harmony export */   playerShoot: () => (/* binding */ playerShoot),
/* harmony export */   querySelectorAll: () => (/* binding */ querySelectorAll),
/* harmony export */   randomCell: () => (/* binding */ randomCell)
/* harmony export */ });
/* harmony import */ var _bin2_domevents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../bin2/domevents */ "./src/bin2/domevents.js");
/* harmony import */ var _bin2_domevents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bin2_domevents__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asset_images_X_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asset/images/X.png */ "./src/asset/images/X.png");
/* harmony import */ var _asset_images_dot_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../asset/images/dot.png */ "./src/asset/images/dot.png");
/* harmony import */ var _asset_sound_shot_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../asset/sound/shot.mp3 */ "./src/asset/sound/shot.mp3");
/* harmony import */ var _asset_sound_hit_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../asset/sound/hit.mp3 */ "./src/asset/sound/hit.mp3");
/* harmony import */ var _asset_sound_miss_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../asset/sound/miss.mp3 */ "./src/asset/sound/miss.mp3");
/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../factories/Ship */ "./src/modules/factories/Ship.js");
/* harmony import */ var _factories_Ship__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_factories_Ship__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");
/* harmony import */ var _asset_images_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../asset/images/logo.png */ "./src/asset/images/logo.png");
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }










//load x and dot images for canvas
var xImage = new Image();
xImage.src = _asset_images_X_png__WEBPACK_IMPORTED_MODULE_1__;
var dotImage = new Image();
dotImage.src = _asset_images_dot_png__WEBPACK_IMPORTED_MODULE_2__;
//load audios
var hitSound = new Audio(_asset_sound_hit_mp3__WEBPACK_IMPORTED_MODULE_4__);
hitSound.playbackRate = 1.5;
var shotSound = new Audio(_asset_sound_shot_mp3__WEBPACK_IMPORTED_MODULE_3__);
shotSound.playbackRate = 1.5;
var missSound = new Audio(_asset_sound_miss_mp3__WEBPACK_IMPORTED_MODULE_5__);
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
  var id = board[top][left];
  console.log("top= ".concat(top, " , left = ").concat(left), "id =", id);
  playShotSound();
  return drawOnBoard(id, ctx, left, top, placeable, gameboard);
}
function computerShoot(opponent, ctx, position, placeable, gameboard) {
  var randomPosition = randomCell();
  while (opponent.checkIfPositionHasBeenHit(randomPosition)) {
    console.log("position has been shot");
    randomPosition = randomCell();
  }
  var top = position.y;
  var left = position.x;
  var id = opponent.board[top][left];
  console.log("top= ".concat(top, " , left = ").concat(left, ", id = ").concat(id));
  playShotSound();
  return drawOnBoard(id, ctx, left, top, placeable, gameboard);
}
function drawOnBoard(result, ctx, left, top, placeable, gameboard) {
  var img = result ? xImage : dotImage;
  ctx.drawImage(img, left * _bin2_domevents__WEBPACK_IMPORTED_MODULE_0__.cellSize, top * _bin2_domevents__WEBPACK_IMPORTED_MODULE_0__.cellSize, _bin2_domevents__WEBPACK_IMPORTED_MODULE_0__.cellSize, _bin2_domevents__WEBPACK_IMPORTED_MODULE_0__.cellSize);
  if (result) {
    result.hit();
    if (result.isSunk()) {
      var tokenDiv = (0,_factories_Ship__WEBPACK_IMPORTED_MODULE_6__.createTokenDiv)(result.name, result.direction, result.length, result.left, result.top);
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
  document.body.appendChild(dialog);
  dialog.innerHTML = "\n        <div class=\"sm:w-3/4 lg:w-3/4 h-fit p-10 bg-gray-900/60 border bottom-1 border-blue-600/50 rounded-2xl shadow-2xl\">\n            <h1 class=\"text-center text-5xl text-blue-100 mb-4 font-semibold\">Game Over!</h1>\n            <p id=\"message\" class=\"text-center text-2xl text-blue-500 mb-12 mt-10 font-mono\"></p>\n            <div id=\"restartBtn\" class=\"flex w-fit px-5 py-2 bg-gray-900 hover:bg-white hover:text-gray-950 rounded-lg  mt-4 shadow-md mx-auto text-white font-thin cursor-pointer\">Restart</div>\n        </div>\n    ";
  var restartBtn = getElementById("restartBtn");
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_7__["default"](getElementById("message"), {
    strings: ["".concat(gameboard.getOpponentName(), " has won the battle")],
    typeSpeed: 50
  });
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
/* harmony import */ var _playerDom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerDom */ "./src/modules/playerDom.js");
/* harmony import */ var _bin2_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bin2/game */ "./src/bin2/game.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var _require = __webpack_require__(/*! ./factories/Gameboard */ "./src/modules/factories/Gameboard.js"),
  Gameboard = _require.Gameboard;



function initializeComputer() {
  (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("field").classList.replace("flex-col", "flex-row");
  (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("field").classList.add("gap-6", "begin");
  generateComputerBoardUi();
  var computerCvs = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("computerboard");
  var computerCtx = computerCvs.getContext("2d");
  var playerCvs = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("playerboard");
  var playerCtx = playerCvs.getContext("2d");
  (0,_bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.drawCanvas)(computerCtx, "#d4b4b4");
  placeShipsRandomly(_playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard.ships);
  computerCvs.addEventListener("click", attack);
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

//function that  check if position has been shoot previously

function placeShipsRandomly(ships) {
  ships.forEach(function (ship) {
    var length = ship.length;
    var orientation = (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.getRandomDirection)();
    ship.direction = orientation;
    console.log(ship, length, orientation);
    var newPosition = {
      x: (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)(),
      y: (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)()
    };
    var wellPlaced = (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.canPlaceShip)(_playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard.board, newPosition.x * _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize, newPosition.y * _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize, length, orientation, _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize);
    console.log(ship, length, newPosition, orientation);
    while (!wellPlaced) {
      newPosition = {
        x: (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)(),
        y: (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.getRandomNumber)()
      };
      wellPlaced = (0,_bin2_game__WEBPACK_IMPORTED_MODULE_3__.canPlaceShip)(_playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard.board, newPosition.x * _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize, newPosition.y * _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize, length, orientation, _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize);
    }
    ship.left = newPosition.x * _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize;
    ship.top = newPosition.y * _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize;
    _playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard.placeShip(ship, newPosition.x, newPosition.y, orientation);
  });
  console.log(_playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard.board);
}
function attack(_x) {
  return _attack.apply(this, arguments);
}
function _attack() {
  _attack = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var computerCvs, computerCtx, playerCvs, playerCtx, playerKill, computerKill;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          computerCvs = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("computerboard");
          computerCtx = computerCvs.getContext("2d");
          playerCvs = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("playerboard");
          playerCtx = playerCvs.getContext("2d");
          playerKill = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.playerShoot)(e, computerCvs, computerCtx, _bin2_domevents__WEBPACK_IMPORTED_MODULE_1__.cellSize, _playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard.getBoard(), (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("attackScreen"), _playerDom__WEBPACK_IMPORTED_MODULE_2__.computerBoard);
          if (!playerKill) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return");
        case 7:
          computerCvs.removeEventListener("click", attack);
          _context.next = 10;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1500);
          });
        case 10:
          // Delay between computer shots
          computerKill = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.computerShoot)(_playerDom__WEBPACK_IMPORTED_MODULE_2__.playerboard, playerCtx, (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.randomCell)(), (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("strategyscreen"), _playerDom__WEBPACK_IMPORTED_MODULE_2__.playerboard);
        case 11:
          if (!computerKill) {
            _context.next = 17;
            break;
          }
          _context.next = 14;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 1500);
          });
        case 14:
          // Delay between computer shots
          computerKill = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.computerShoot)(_playerDom__WEBPACK_IMPORTED_MODULE_2__.playerboard, playerCtx, (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.randomCell)(), (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_0__.getElementById)("strategyscreen"), _playerDom__WEBPACK_IMPORTED_MODULE_2__.playerboard);
          _context.next = 11;
          break;
        case 17:
          computerCvs.addEventListener("click", attack);
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _attack.apply(this, arguments);
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
var _require2 = __webpack_require__(/*! ./Ship */ "./src/modules/factories/Ship.js"),
  Ship = _require2.Ship;
var _require3 = __webpack_require__(/*! ../playerDom */ "./src/modules/playerDom.js"),
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
    this.buckets = new Array(5).fill(null);
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
        this.positionShot.add([x, y].toString());
        target.hit();
      } else {
        this.missedShots.add([x, y].toString);
        this.positionShot.add([x, y].toString());
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerBoard: () => (/* binding */ computerBoard),
/* harmony export */   playerboard: () => (/* binding */ playerboard)
/* harmony export */ });
/* harmony import */ var _asset_images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/images/logo.png */ "./src/asset/images/logo.png");
/* harmony import */ var _asset_sound_ocean_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/sound/ocean.mp3 */ "./src/asset/sound/ocean.mp3");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");
/* harmony import */ var _DOM_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/utilities */ "./src/modules/DOM/utilities.js");
/* harmony import */ var _comDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comDom */ "./src/modules/comDom.js");


var _require = __webpack_require__(/*! ../bin2/game */ "./src/bin2/game.js"),
  htmlStructure = _require.htmlStructure,
  getRandomDirection = _require.getRandomDirection,
  getRandomNumber = _require.getRandomNumber,
  canPlaceShip = _require.canPlaceShip;
var _require2 = __webpack_require__(/*! ../bin2/domevents */ "./src/bin2/domevents.js"),
  drawCanvas = _require2.drawCanvas,
  cellSize = _require2.cellSize;
var _require3 = __webpack_require__(/*! ./factories/Gameboard */ "./src/modules/factories/Gameboard.js"),
  Gameboard = _require3.Gameboard;



var playerboard = new Gameboard();
var computerBoard = new Gameboard();
playerboard.setOpponentName("Computer");
computerBoard.setOpponentName("Player");
(function () {
  htmlStructure();
  (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("logo").src = _asset_images_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  setupPlayerField();
  var oceanSound = new Audio(_asset_sound_ocean_mp3__WEBPACK_IMPORTED_MODULE_1__);
  var playerCvs = document.getElementById("playerboard");
  var playerCtx = playerCvs.getContext("2d");
  var message = document.querySelector(".screen p");
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2__["default"](message, {
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
  var shipTokens = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.querySelectorAll)("token");
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
  var randomBTN = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("randomBTN");
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
    console.log(playerboard.board);
  });
  var startBTN = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("startBTN");
  startBTN.addEventListener("click", function () {
    if (allShipPlaced() && wellPlaced) {
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("port"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("axis-section"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("cta"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.flexElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("restartDiv"));
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.querySelectorAll)("token").forEach(function (token) {
        removeDragEvents(token);
      });
      (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("playerboard").classList.add("bringFront");
      (0,_comDom__WEBPACK_IMPORTED_MODULE_4__.initializeComputer)();
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
    var main = (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("body-container");
    main.innerHTML = playerFieldUi();
    (0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.hideElement)((0,_DOM_utilities__WEBPACK_IMPORTED_MODULE_3__.getElementById)("restartDiv"));
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/images/world.svg */ "./src/asset/images/world.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/images/ships/carrierX.svg */ "./src/asset/images/ships/carrierX.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/images/ships/battleshipX.svg */ "./src/asset/images/ships/battleshipX.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/images/ships/destroyerX.svg */ "./src/asset/images/ships/destroyerX.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/images/ships/submarineX.svg */ "./src/asset/images/ships/submarineX.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../asset/images/ships/patrolX.svg */ "./src/asset/images/ships/patrolX.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
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
.bottom-1 {
  bottom: 0.25rem;
}
.float-left {
  float: left;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mb-12 {
  margin-bottom: 3rem;
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
.hidden {
  display: none;
}
.h-9 {
  height: 2.25rem;
}
.h-dvh {
  height: 100dvh;
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
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
.cursor-pointer {
  cursor: pointer;
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
.rounded-2xl {
  border-radius: 1rem;
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
.border-blue-600\\/50 {
  border-color: rgb(37 99 235 / 0.5);
}
.border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(22 163 74 / var(--tw-border-opacity));
}
.border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(220 38 38 / var(--tw-border-opacity));
}
.bg-blue-900\\/80 {
  background-color: rgb(30 58 138 / 0.8);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
.bg-gray-900\\/60 {
  background-color: rgb(17 24 39 / 0.6);
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}
.p-10 {
  padding: 2.5rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.text-center {
  text-align: center;
}
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-semibold {
  font-weight: 600;
}
.font-thin {
  font-weight: 100;
}
.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(219 234 254 / var(--tw-text-opacity));
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
:root {
  --cell-size: 36px;
}
html {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-position: center;
  -o-object-position: center;
     object-position: center;
  -o-object-fit: cover;
     object-fit: cover;
  background-size: 100% 100%;
  background-color: #000e29;
}
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  max-width: 1024px !important;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
.screen {
  max-width: 720px !important;
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ff990032;
  border: 1px solid #ff9900;
  color: #ff9900;
}
footer {
  color: white;
  margin: 0 20px;
  font-size: 20px !important;
}
#logo {
  -o-object-position: center;
     object-position: center;
  -o-object-fit: cover;
     object-fit: cover;
  width: 40px;
  display: inline-block;
  margin-right: 6px;
  margin-bottom: 4px;
}
header {
  display: flex;
  flex-direction: column;
}
header h1 {
    color: #ffffff;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
  background-color: #000b3435;
  color: #a7a7ffe5;
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
  border: 1px solid #ff99002f;
  background-color: #ff99008a;
  box-sizing: border-box;
  cursor: grab;
  transform: rotate(0deg);
}
#dialogue {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.bgImg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.5;
  background-color: rgba(255, 0, 0, 0.293) !important;
  border: rgba(255, 0, 0, 0.506) !important;
}
.token.carrier {
  width: calc(4 * var(--cell-size));
  height: var(--cell-size);
}
.token.carrier.bgImg {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.token.battleship {
  width: calc(3 * var(--cell-size));
  height: var(--cell-size);
}
.token.battleship.bgImg {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.token.destroyer {
  width: calc(2 * var(--cell-size));
  height: var(--cell-size);
}
.token.destroyer.bgImg {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.token.submarine {
  width: calc(2 * var(--cell-size));
  height: var(--cell-size);
}
.token.submarine.bgImg {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.token.patrol {
  width: var(--cell-size);
  height: var(--cell-size);
}
.token.patrol.bgImg {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
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
/* Media query for medium screen sizes (md) and up */
@media (max-width: 768px) {
  #field.begin {
    flex-direction: column !important;
    align-items: center;
  }
}
.hover\\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.hover\\:text-gray-950:hover {
  --tw-text-opacity: 1;
  color: rgb(3 7 18 / var(--tw-text-opacity));
}
@media (min-width: 640px) {

  .sm\\:w-3\\/4 {
    width: 75%;
  }
}
@media (min-width: 768px) {

  .md\\:flex {
    display: flex;
  }

  .md\\:inline-flex {
    display: inline-flex;
  }
}
@media (min-width: 1024px) {

  .lg\\:w-2\\/4 {
    width: 50%;
  }

  .lg\\:w-3\\/4 {
    width: 75%;
  }
}
`, "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/base.css","webpack://./node_modules/tailwindcss/utilities.css","webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n","@tailwind utilities;\n","@import \"tailwindcss/base\";\n@import \"tailwindcss/components\";\n@import \"tailwindcss/utilities\";\n\n:root {\n  --cell-size: 36px;\n}\n\nhtml {\n  background-image: url(\"../asset/images/world.svg\");\n  background-blend-mode: overlay;\n  background-repeat: no-repeat;\n  background-position: center;\n  object-position: center;\n  object-fit: cover;\n  background-size: 100% 100%;\n  background-color: #000e29;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  max-width: 1024px !important;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 20px;\n}\n\n.screen {\n  max-width: 720px !important;\n  width: 100%;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #ff990032;\n  border: 1px solid #ff9900;\n  color: #ff9900;\n}\n\nfooter {\n  color: white;\n  margin: 0 20px;\n  font-size: 20px !important;\n}\n\n#logo {\n  object-position: center;\n  object-fit: cover;\n  width: 40px;\n  display: inline-block;\n  margin-right: 6px;\n  margin-bottom: 4px;\n}\nheader {\n  display: flex;\n  flex-direction: column;\n  h1 {\n    color: #ffffff;\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n}\n.pack {\n  box-sizing: content-box;\n  border: 1px dotted #00000020;\n  width: 140px;\n  /* transform: scale(0.5); */\n}\n\n#strategyscreen {\n  /* transform: scale(0.5); */\n}\n\n.btn {\n  cursor: pointer;\n  background-color: #000b3435;\n  color: #a7a7ffe5;\n}\n\n.bringFront {\n  z-index: 10;\n}\n\n.active {\n  background-color: #0000ff !important;\n  color: white !important;\n}\n.play {\n  background-color: #008000 !important;\n  border: 1px solid #008000;\n  color: white !important;\n}\n.restart {\n  border: 1px solid #ff0000 !important;\n  color: red !important;\n}\n\n.token {\n  /* position: absolute; */\n  top: 0;\n  left: 0;\n  border: 1px solid #ff99002f;\n  background-color: #ff99008a;\n  box-sizing: border-box;\n  cursor: grab;\n  transform: rotate(0deg);\n}\n\n#dialogue {\n  z-index: 10;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.bgImg {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  opacity: 0.5;\n  background-color: rgba(255, 0, 0, 0.293) !important;\n  border: rgba(255, 0, 0, 0.506) !important;\n}\n.token.carrier {\n  width: calc(4 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.carrier.bgImg {\n  background-image: url(\"../asset/images/ships/carrierX.svg\");\n}\n.token.battleship {\n  width: calc(3 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.battleship.bgImg {\n  background-image: url(\"../asset/images/ships/battleshipX.svg\");\n}\n.token.destroyer {\n  width: calc(2 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.destroyer.bgImg {\n  background-image: url(\"../asset/images/ships/destroyerX.svg\");\n}\n.token.submarine {\n  width: calc(2 * var(--cell-size));\n  height: var(--cell-size);\n}\n.token.submarine.bgImg {\n  background-image: url(\"../asset/images/ships/submarineX.svg\");\n}\n.token.patrol {\n  width: var(--cell-size);\n  height: var(--cell-size);\n}\n.token.patrol.bgImg {\n  background-image: url(\"../asset/images/ships/patrolX.svg\");\n}\n.token.carrier.vertical {\n  height: calc(4 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.battleship.vertical {\n  height: calc(3 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.destroyer.vertical {\n  height: calc(2 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.submarine.vertical {\n  height: calc(2 * var(--cell-size));\n  width: var(--cell-size);\n  transition: ease;\n}\n.token.patrol.vertical {\n  width: var(--cell-size);\n  height: var(--cell-size);\n  transition: ease;\n}\n\n.token.dragging {\n  opacity: 0.5;\n}\n\n.token.rotate {\n  transform: rotate(90deg);\n  translate: -0% -0%;\n  transition: ease;\n  transition-delay: 3ms;\n  transform-origin: 18px center;\n}\n\n.errorBorder {\n  border: 1px solid red !important;\n  background-color: rgba(255, 0, 0, 0.2) !important;\n}\n\n/* Media query for medium screen sizes (md) and up */\n@media (max-width: 768px) {\n  #field.begin {\n    flex-direction: column !important;\n    align-items: center;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/asset/images/X.png":
/*!********************************!*\
  !*** ./src/asset/images/X.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/X.png";

/***/ }),

/***/ "./src/asset/images/dot.png":
/*!**********************************!*\
  !*** ./src/asset/images/dot.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/dot.png";

/***/ }),

/***/ "./src/asset/images/logo.png":
/*!***********************************!*\
  !*** ./src/asset/images/logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo.png";

/***/ }),

/***/ "./src/asset/images/ships/battleshipX.svg":
/*!************************************************!*\
  !*** ./src/asset/images/ships/battleshipX.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/battleshipX.svg";

/***/ }),

/***/ "./src/asset/images/ships/carrierX.svg":
/*!*********************************************!*\
  !*** ./src/asset/images/ships/carrierX.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/carrierX.svg";

/***/ }),

/***/ "./src/asset/images/ships/destroyerX.svg":
/*!***********************************************!*\
  !*** ./src/asset/images/ships/destroyerX.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/destroyerX.svg";

/***/ }),

/***/ "./src/asset/images/ships/patrolX.svg":
/*!********************************************!*\
  !*** ./src/asset/images/ships/patrolX.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/patrolX.svg";

/***/ }),

/***/ "./src/asset/images/ships/submarineX.svg":
/*!***********************************************!*\
  !*** ./src/asset/images/ships/submarineX.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/submarineX.svg";

/***/ }),

/***/ "./src/asset/images/world.svg":
/*!************************************!*\
  !*** ./src/asset/images/world.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/world.svg";

/***/ }),

/***/ "./src/asset/sound/hit.mp3":
/*!*********************************!*\
  !*** ./src/asset/sound/hit.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/hit.mp3";

/***/ }),

/***/ "./src/asset/sound/miss.mp3":
/*!**********************************!*\
  !*** ./src/asset/sound/miss.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/miss.mp3";

/***/ }),

/***/ "./src/asset/sound/ocean.mp3":
/*!***********************************!*\
  !*** ./src/asset/sound/ocean.mp3 ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/ocean.mp3";

/***/ }),

/***/ "./src/asset/sound/shot.mp3":
/*!**********************************!*\
  !*** ./src/asset/sound/shot.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "sounds/shot.mp3";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_autoprefixer_lib_aut-77484a"], () => (__webpack_require__("./src/modules/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map