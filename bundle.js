/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst calculator_1 = __webpack_require__(/*! ./calculator */ \"./src/calculator.ts\");\nconst calculator_2 = __webpack_require__(/*! ./templates/calculator */ \"./src/templates/calculator.ts\");\nconst renderCalculator = () => {\n    const root = document.getElementById(\"root\");\n    root.innerHTML = (0, calculator_2.createCalculatorHTML)();\n};\nrenderCalculator();\nconst userInput = document.getElementById(\"expression\");\nconst addButton = document.getElementById(\"calcBtn\");\nconst clearButton = document.getElementById(\"clearBtn\");\naddButton.addEventListener(\"click\", () => {\n    const expression = String(userInput.value);\n    const result = (0, calculator_1.add)(expression);\n    const resultDisplay = document.getElementById(\"result-alert\");\n    resultDisplay.innerText = `Result: ${result}`;\n    resultDisplay.style.display = \"block\";\n});\nclearButton.addEventListener(\"click\", () => {\n    userInput.value = \"\";\n    const resultDisplay = document.getElementById(\"result-alert\");\n    resultDisplay.innerText = \"\";\n    resultDisplay.style.display = \"none\";\n});\n\n\n//# sourceURL=webpack://incubyte-string-calculator-tdd-kata/./src/app.ts?");

/***/ }),

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.NegativeNumberError = void 0;\nexports.add = add;\nclass NegativeNumberError extends Error {\n    constructor(negativeNumbers) {\n        super(`Negative numbers not allowed: ${negativeNumbers.join(\", \")}`);\n        this.name = \"NegativeNumberError\";\n    }\n}\nexports.NegativeNumberError = NegativeNumberError;\nfunction splitNumbers(expression) {\n    if (expression.startsWith(\"//\")) {\n        const parts = expression.split(\"\\n\");\n        const delimiter = parts[0].slice(2);\n        const numbers = parts[1];\n        const delimiterRegex = new RegExp(delimiter.replace(/[-\\/\\\\^$.*+?()[\\]{}|]/g, \"\\\\$&\"), \"g\");\n        return numbers.split(delimiterRegex);\n    }\n    return expression.split(/,|\\n/g);\n}\nfunction sumNumbers(numbers) {\n    const negativeNumbers = [];\n    const sum = numbers\n        .map((piece) => {\n        const num = parseInt(piece);\n        if (num < 0)\n            negativeNumbers.push(num);\n        return num;\n    })\n        .filter((num) => !isNaN(num) && num <= 1000)\n        .reduce((acc, num) => acc + num, 0);\n    if (negativeNumbers.length > 0) {\n        throw new NegativeNumberError(negativeNumbers);\n    }\n    return sum;\n}\nfunction add(expression) {\n    const pieces = splitNumbers(expression);\n    return sumNumbers(pieces);\n}\n\n\n//# sourceURL=webpack://incubyte-string-calculator-tdd-kata/./src/calculator.ts?");

/***/ }),

/***/ "./src/templates/calculator.ts":
/*!*************************************!*\
  !*** ./src/templates/calculator.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createCalculatorHTML = void 0;\nconst createCalculatorHTML = () => `\r\n  <div id=\"calculator\">\r\n    <h1 id=\"title\">Incubyte TDD Kata</h1>\r\n    <h2>String Calculator</h2>\r\n    <div>\r\n      <textarea id=\"expression\" placeholder=\"Enter the expression\"></textarea>\r\n    </div>\r\n    <div class=\"actionBtns\">\r\n      <button id=\"calcBtn\">Calculate</button>\r\n      <button id=\"clearBtn\">Clear</button>\r\n    </div>\r\n  </div>\r\n  <div id=\"result-alert\">\r\n    <p id=\"result\"></p>\r\n  </div>\r\n`;\nexports.createCalculatorHTML = createCalculatorHTML;\n\n\n//# sourceURL=webpack://incubyte-string-calculator-tdd-kata/./src/templates/calculator.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;