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

/***/ "./src/components/Form/form.ts":
/*!*************************************!*\
  !*** ./src/components/Form/form.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j;\n        const Namer = this.ownerDocument.createElement('input');\n        const Lnamer = this.ownerDocument.createElement('label');\n        Lnamer.textContent = \"Name\";\n        Namer.addEventListener(\"change\", (u) => {\n            // Create a root reference\n            console.log(u.target.value);\n        });\n        const Ingre = this.ownerDocument.createElement('input');\n        const Lingre = this.ownerDocument.createElement('label');\n        Lingre.textContent = \"Ingredientes\";\n        Ingre.addEventListener(\"change\", (u) => {\n            console.log(u.target.value);\n        });\n        const Instr = this.ownerDocument.createElement('input');\n        const Linstr = this.ownerDocument.createElement('label');\n        Linstr.textContent = \"Instrucciones\";\n        Instr.addEventListener(\"change\", (u) => {\n            console.log(u.target.value);\n        });\n        const img = this.ownerDocument.createElement('input');\n        const Limg = this.ownerDocument.createElement('label');\n        Limg.textContent = \"Imagen\";\n        img.addEventListener(\"change\", (u) => {\n            console.log(u.target.value);\n        });\n        const btn = this.ownerDocument.createElement('button');\n        btn.textContent = \"Save\";\n        const Lbtn = this.ownerDocument.createElement('label');\n        btn.addEventListener(\"click\", (u) => {\n            u.btn.action;\n        });\n        function getinfo() {\n        }\n        ;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Namer);\n        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(Lnamer);\n        (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(Ingre);\n        (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(Lingre);\n        (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(Instr);\n        (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.appendChild(Linstr);\n        (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.appendChild(img);\n        (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.appendChild(Limg);\n        (_j = this.shadowRoot) === null || _j === void 0 ? void 0 : _j.appendChild(btn);\n    }\n}\ncustomElements.define(\"my-form\", Form);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Form/form.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* reexport safe */ _Form_form__WEBPACK_IMPORTED_MODULE_0__.Form)\n/* harmony export */ });\n/* harmony import */ var _Form_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form/form */ \"./src/components/Form/form.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('my-form');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;