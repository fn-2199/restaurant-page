/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Titania-Regular.ttf */ "./src/assets/fonts/Titania-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/SSNicksonOne.otf */ "./src/assets/fonts/SSNicksonOne.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Darling.ttf */ "./src/assets/fonts/Darling.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/bg.jpeg */ "./src/assets/images/bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'titania-regular';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('opentype');\n}\n\n@font-face {\n    font-family: 'ss-nickson-one';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('opentype');\n}\n\n@font-face {\n    font-family: 'darling';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n}\n\n:root {\n    --main-font: 'titania-regular', sans-serif;\n    --secondary-font: 'ss-nickson-one', sans-serif;\n    --sub-font: 'darling', sans-serif;\n    --text-font: 'Roboto', sans-serif;\n    --main-color: #fedd33;\n}\n\nbody,\nh1,\nh2, \nh3,\nh4,\nul,\np {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    color: var(--main-color);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.3);\n}\n\n/* General Layout */\n\nnav > ul {\n    list-style: none;\n}\n\nnav > ul > li {\n    cursor: pointer;\n}\n\nnav > ul, \nfooter {\n    font-family: var(--secondary-font);\n    font-size: 3rem;\n    display: flex;\n    gap: 100px;\n    margin: 25px 0;\n}\n\n/* General Sub Pages */\n\n.sub-bg {\n    background: rgba(0, 0, 0, 0.65);\n}\n\narticle,\nform {\n    padding: 20px;\n    color: white;\n    font-family: var(--text-font);\n    height: min(75%, 600px);\n    width: min(75%, 820px);\n}\n\nh3 {\n    font-size: 1.8rem;\n }\n \n h3 ~ h3 {\n     margin-top: 30px;\n }\n\n /* Home Page */\n\nheader {\n    position: relative;\n}\n\nh1 {\n    font-size: 8rem;\n    font-family: var(--main-font);\n    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);\n}\n\nh2 {\n    font-size: 3rem;\n    font-family: var(--sub-font);\n    color: white;\n    position: absolute;\n    top: 90px;\n    right: 5px;\n    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);\n}\n\n/* Contact Page */\n\narticle#contactPage {\n    display: flex;\n    gap: 20px;\n}\n\n#contactPage div:first-child {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n#map {\n    height: 600px;\n    width: auto;\n}\n\n/* Menu Page */\n\n.entrees-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 30px 0;\n}\n\n.entree-element {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.food-image {\n    object-fit: cover;\n    height: 80px;\n    width: 80px;\n    border-radius: 50%;\n}\n\n/* Reservation Page */\nform > h3 {\n    text-transform: uppercase;\n    margin-bottom: 20px;\n}\n\nlegend {\n    font-weight: 700;\n}\n\n#basic-info,\n#payment-info,\n#entrees-comments > div:first-of-type {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: start;\n}\n\n#basic-info > div,\n#payment-info > div,\n#entrees-comments > div:first-of-type {\n    padding-left: 10%;\n}\n\n#basic-info,\n#payment-info,\n#entrees-comments {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\nabbr {\n    color: rgba(0, 0, 0, 0.65);\n}\nabbr:before {\n    content: ' *';\n    color: white;\n}\n\n#entrees-comments > div:first-of-type,\nfieldset ~ fieldset {\n margin: 15px 0;\n}\n\ntextarea {\n    display: block;\n    margin: 0 auto;\n    resize: none;\n    font-family: inherit;\n}\n\nbutton {\n    background: white;\n    border: 2px solid black;\n    color: black;\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding: 5px 15px;\n}\n\nbutton:hover {\n    background: black;\n    border: 2px solid white;\n    color: white;\n}\n\n/* * {\n    border: 2px solid red;\n} */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;IAC9B,+DAAiE;AACrE;;AAEA;IACI,6BAA6B;IAC7B,+DAA8D;AAClE;;AAEA;IACI,sBAAsB;IACtB,+DAAyD;AAC7D;;AAEA;IACI,0CAA0C;IAC1C,8CAA8C;IAC9C,iCAAiC;IACjC,iCAAiC;IACjC,qBAAqB;AACzB;;AAEA;;;;;;;IAOI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yDAAgD;IAChD,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;AAClC;;AAEA,mBAAmB;;AAEnB;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,kCAAkC;IAClC,eAAe;IACf,aAAa;IACb,UAAU;IACV,cAAc;AAClB;;AAEA,sBAAsB;;AAEtB;IACI,+BAA+B;AACnC;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;CACpB;;CAEA;KACI,gBAAgB;CACpB;;CAEA,cAAc;;AAEf;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,wCAAwC;AAC5C;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA,qBAAqB;AACrB;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;;IAGI,aAAa;IACb,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;;;IAGI,iBAAiB;AACrB;;AAEA;;;IAGI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;;CAEC,cAAc;AACf;;AAEA;IACI,cAAc;IACd,cAAc;IACd,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;;GAEG","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n@font-face {\n    font-family: 'titania-regular';\n    src: url('./assets/fonts/Titania-Regular.ttf') format('opentype');\n}\n\n@font-face {\n    font-family: 'ss-nickson-one';\n    src: url('./assets/fonts/SSNicksonOne.otf') format('opentype');\n}\n\n@font-face {\n    font-family: 'darling';\n    src: url('./assets/fonts/Darling.ttf') format('truetype');\n}\n\n:root {\n    --main-font: 'titania-regular', sans-serif;\n    --secondary-font: 'ss-nickson-one', sans-serif;\n    --sub-font: 'darling', sans-serif;\n    --text-font: 'Roboto', sans-serif;\n    --main-color: #fedd33;\n}\n\nbody,\nh1,\nh2, \nh3,\nh4,\nul,\np {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-image: url('./assets/images/bg.jpeg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-attachment: fixed;\n    color: var(--main-color);\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.3);\n}\n\n/* General Layout */\n\nnav > ul {\n    list-style: none;\n}\n\nnav > ul > li {\n    cursor: pointer;\n}\n\nnav > ul, \nfooter {\n    font-family: var(--secondary-font);\n    font-size: 3rem;\n    display: flex;\n    gap: 100px;\n    margin: 25px 0;\n}\n\n/* General Sub Pages */\n\n.sub-bg {\n    background: rgba(0, 0, 0, 0.65);\n}\n\narticle,\nform {\n    padding: 20px;\n    color: white;\n    font-family: var(--text-font);\n    height: min(75%, 600px);\n    width: min(75%, 820px);\n}\n\nh3 {\n    font-size: 1.8rem;\n }\n \n h3 ~ h3 {\n     margin-top: 30px;\n }\n\n /* Home Page */\n\nheader {\n    position: relative;\n}\n\nh1 {\n    font-size: 8rem;\n    font-family: var(--main-font);\n    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);\n}\n\nh2 {\n    font-size: 3rem;\n    font-family: var(--sub-font);\n    color: white;\n    position: absolute;\n    top: 90px;\n    right: 5px;\n    text-shadow: 2px 3px 5px rgba(0,0,0,0.5);\n}\n\n/* Contact Page */\n\narticle#contactPage {\n    display: flex;\n    gap: 20px;\n}\n\n#contactPage div:first-child {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n#map {\n    height: 600px;\n    width: auto;\n}\n\n/* Menu Page */\n\n.entrees-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 30px 0;\n}\n\n.entree-element {\n    display: flex;\n    align-items: center;\n    gap: 15px;\n}\n\n.food-image {\n    object-fit: cover;\n    height: 80px;\n    width: 80px;\n    border-radius: 50%;\n}\n\n/* Reservation Page */\nform > h3 {\n    text-transform: uppercase;\n    margin-bottom: 20px;\n}\n\nlegend {\n    font-weight: 700;\n}\n\n#basic-info,\n#payment-info,\n#entrees-comments > div:first-of-type {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: start;\n}\n\n#basic-info > div,\n#payment-info > div,\n#entrees-comments > div:first-of-type {\n    padding-left: 10%;\n}\n\n#basic-info,\n#payment-info,\n#entrees-comments {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\nabbr {\n    color: rgba(0, 0, 0, 0.65);\n}\nabbr:before {\n    content: ' *';\n    color: white;\n}\n\n#entrees-comments > div:first-of-type,\nfieldset ~ fieldset {\n margin: 15px 0;\n}\n\ntextarea {\n    display: block;\n    margin: 0 auto;\n    resize: none;\n    font-family: inherit;\n}\n\nbutton {\n    background: white;\n    border: 2px solid black;\n    color: black;\n    font-size: 1.2rem;\n    cursor: pointer;\n    padding: 5px 15px;\n}\n\nbutton:hover {\n    background: black;\n    border: 2px solid white;\n    color: white;\n}\n\n/* * {\n    border: 2px solid red;\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTACT": () => (/* binding */ generateContact),
/* harmony export */   "contactObj": () => (/* binding */ contactObj)
/* harmony export */ });
/* harmony import */ var _assets_images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/map.png */ "./src/assets/images/map.png");


const contactObj = {
    address: {street: "189 The Grove Drive", cityZip: "Los Angeles, CA 90036"},
    number: '(777) 420-6969',
    schedule: 'Open Everyday 11AM - 8PM',
    email: 'restaurant@handfull.com'
}

function generateContact() {
    const article = document.createElement('article');
    article.id = "contactPage";
    article.classList.add('sub-bg');

    const contactInfo = document.createElement('div');

    const location = document.createElement('h3');
    location.textContent = 'Location';
    const locationStreet = document.createElement('p');
    locationStreet.textContent = contactObj.address.street;
    const locationCityZip = document.createElement('p');
    locationCityZip.textContent = contactObj.address.cityZip;

    const hours = document.createElement('h3');
    hours.textContent = 'Hours';
    const hoursInfo = document.createElement('p');
    hoursInfo.textContent = contactObj.schedule;

    const phoneEmail = document.createElement('h3');
    phoneEmail.textContent = 'Contact';
    const phoneInfo = document.createElement('p');
    const emailInfo = document.createElement('p');
    phoneInfo.textContent = contactObj.number;
    emailInfo.textContent = contactObj.email;


    const map = document.createElement('div');
    const mapImg = new Image();
    mapImg.src = _assets_images_map_png__WEBPACK_IMPORTED_MODULE_0__;
    mapImg.alt = "Location of handfull restaurant";
    mapImg.id = "map";

    map.appendChild(mapImg);
    contactInfo.append(location, locationStreet, locationCityZip, hours, hoursInfo, phoneEmail, phoneInfo, emailInfo);
    article.append(contactInfo, map);

    return article;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const titleObj = {
    title: 'handfull',
    subtitle: "traditional filipino dining"
}

function generateHome() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2')

    h1.textContent = titleObj.title;
    h2.textContent = titleObj.subtitle;

    header.append(h1, h2);

    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ generateMenu),
/* harmony export */   "entreesItemsArray": () => (/* binding */ entreesItemsArray)
/* harmony export */ });
/* harmony import */ var _assets_images_grilledChicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/grilledChicken.jpg */ "./src/assets/images/grilledChicken.jpg");
/* harmony import */ var _assets_images_lechonKawali_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/lechonKawali.jpg */ "./src/assets/images/lechonKawali.jpg");
/* harmony import */ var _assets_images_chickenBBQ_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/chickenBBQ.jpg */ "./src/assets/images/chickenBBQ.jpg");
/* harmony import */ var _assets_images_longanisa_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/longanisa.jpg */ "./src/assets/images/longanisa.jpg");
/* harmony import */ var _assets_images_tocino_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/tocino.jpg */ "./src/assets/images/tocino.jpg");
/* harmony import */ var _assets_images_grilledLiempo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/grilledLiempo.jpg */ "./src/assets/images/grilledLiempo.jpg");
/* harmony import */ var _assets_images_porkBBQ_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/porkBBQ.jpg */ "./src/assets/images/porkBBQ.jpg");
/* harmony import */ var _assets_images_hipon_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/hipon.jpg */ "./src/assets/images/hipon.jpg");
/* harmony import */ var _assets_images_tahong_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/tahong.jpg */ "./src/assets/images/tahong.jpg");
/* harmony import */ var _assets_images_chickenAdobo_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/chickenAdobo.jpg */ "./src/assets/images/chickenAdobo.jpg");












const entreesItem = (imageSrc, foodName, camelCase) => {
    return {imageSrc, foodName, camelCase}
}

let entreesItemsArray = [entreesItem(_assets_images_grilledChicken_jpg__WEBPACK_IMPORTED_MODULE_0__, "Grilled Chicken Inasal", 'grilledChiken'), entreesItem(_assets_images_lechonKawali_jpg__WEBPACK_IMPORTED_MODULE_1__, "Lechon Kawali/Deep Fried Pork", 'lechonKawali'), entreesItem(_assets_images_chickenBBQ_jpg__WEBPACK_IMPORTED_MODULE_2__, "Filipino Chicken BBQ", 'chickenBBQ'), entreesItem(_assets_images_longanisa_jpg__WEBPACK_IMPORTED_MODULE_3__, "Longanisa Filipino Sausage", 'longanisa'), entreesItem(_assets_images_tocino_jpg__WEBPACK_IMPORTED_MODULE_4__, "Tocino/Sweet Garlic Pork", 'tocino'), entreesItem(_assets_images_grilledLiempo_jpg__WEBPACK_IMPORTED_MODULE_5__, "Grilled Liempo/Grilled Pork Belly", 'grilledLiempo'), entreesItem(_assets_images_porkBBQ_jpg__WEBPACK_IMPORTED_MODULE_6__, "Pork BBQ", 'porkBBQ'), entreesItem(_assets_images_hipon_jpg__WEBPACK_IMPORTED_MODULE_7__, "Hipon/Whole Shrimp", 'hipon'), entreesItem(_assets_images_tahong_jpg__WEBPACK_IMPORTED_MODULE_8__, "Tahong/Mussels", 'tahong'), entreesItem(_assets_images_chickenAdobo_jpg__WEBPACK_IMPORTED_MODULE_9__, "Chicken Adobo", 'chickenAdobo')];

function generateMenu() {
    const article = document.createElement('article');
    article.id= "menuPage";
    article.classList.add('sub-bg');

    const includedTitle = document.createElement('h3');
    includedTitle.textContent = "All Boodle Fights Include"
    
    const includedItems = document.createElement('p');
    includedItems.innerHTML = "Lumpia, ensaldang kamatis, white rice, assorted dipping sauces, and garnishes. <br> Garnishes: fresh mangos & oranges, fried garlic crumble, and scallions.";

    const entreesTitle = document.createElement('h3');
    entreesTitle.textContent = "Boodle Fight Entrees";

    const entreesItems = document.createElement('p');
    entreesItems.textContent = "Combination of 6 items total from the following. (Menu subject to change)"

    const entreesContainer = document.createElement('div');
    entreesContainer.classList.add('entrees-container');

    entreesItemsArray.forEach((entree) => {
        let entreeElement = document.createElement('div');
        entreeElement.classList.add('entree-element');

        let entreeName = document.createElement('h4');
        let entreeImg = new Image();
        entreeImg.src = entree.imageSrc;
        entreeImg.classList.add('food-image');
        entreeName.textContent = entreeImg.alt = entree.foodName;

        entreeElement.append(entreeImg, entreeName);
        entreesContainer.appendChild(entreeElement);
    })
    
    article.append(includedTitle, includedItems, entreesTitle, entreesItems, entreesContainer);

    return article;
}



/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");


const formElements = (camelCase, stringLabel, inputType) => {
    return {camelCase, stringLabel, inputType}
}

const categoryElements = (title, array, camelCase) => {
    return {title, array, camelCase}
}

const basicInfoArray = [formElements('firstName', "First Name", 'text'), formElements('lastName', "Last Name", 'text'), formElements('phoneNumber', "Phone Number", 'tel'), formElements('email', "Email", 'email'), formElements('numOfPpl', "Number of Party", 'number'), formElements('dateTime', "Date & Time", 'datetime-local')];

const paymentInfoArray = [formElements('cardNumber', "Card Number", 'tel'), formElements('expirationDate', "Expiration Date", 'month'), formElements('cvv', "CVV", 'tel'), formElements('zipCode', "Card Zip Code", 'text')];

const formCategoryArray = [categoryElements("Basic Information", basicInfoArray, 'basic-info'), categoryElements("Entrees & Comments", _menu__WEBPACK_IMPORTED_MODULE_0__.entreesItemsArray, 'entrees-comments'), categoryElements("Payment Information", paymentInfoArray, 'payment-info')];

function generateReserve() {
    const form = document.createElement('form');
    form.classList.add('sub-bg');
    form.id = "reservation";
    form.action = "#";
    form.method = "post";

    const h3 = document.createElement('h3');
    h3.textContent = 'Reservation Form';
    form.appendChild(h3);

    formCategoryArray.forEach((category) => {
        const fieldset = document.createElement('fieldset');
        fieldset.id = category.camelCase;
        const legend = document.createElement('legend');
        legend.textContent = category.title;
        fieldset.append(legend);
        form.append(fieldset);

        if (category.title == 'Basic Information' || category.title == 'Payment Information') {
            for (let element of category.array) {
                const div = document.createElement('div');
    
                const label = document.createElement('label');
                label.textContent = element.stringLabel;
    
                const strong = document.createElement('strong');
                const abbr = document.createElement('abbr');
                abbr.title = 'required';
                abbr.textContent = '*';
    
                const input = document.createElement('input');
                input.type = element.inputType;
                input.name = element.camelCase;

                input.setAttribute('required', '');
    
                strong.appendChild(abbr);
                label.append(strong, input);
                div.append(label);
                fieldset.appendChild(div);
            }
        } else {
            const checkBoxContainer = document.createElement('div');

            const p = document.createElement('p');
            p.textContent = "Choose up to any six items for your Boodle Fight Service";
            
            for (let entree of category.array) {
                const label = document.createElement('label');
                const span = document.createElement('span');
                span.textContent = entree.foodName;
    
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'entreeItem';
                input.value = entree.camelCase;
    
                label.append(input, span);
                checkBoxContainer.appendChild(label);
            }

            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = "Add-Ons/Comments/Requests/Allergies/Celebration";

            const textarea = document.createElement('textarea');
            textarea.name = 'comments';
            textarea.cols = '60';
            textarea.rows = '2';

            label.append(textarea);
            div.appendChild(label);
            fieldset.append(p, checkBoxContainer, div);

        }
        
    })

    const button = document.createElement('button');
    button.textContent = "Submit";
    form.appendChild(button);

    return form;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateReserve);

/***/ }),

/***/ "./src/assets/fonts/Darling.ttf":
/*!**************************************!*\
  !*** ./src/assets/fonts/Darling.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "298d838223700f7aaff7.ttf";

/***/ }),

/***/ "./src/assets/fonts/SSNicksonOne.otf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/SSNicksonOne.otf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf3502a517dcc716c615.otf";

/***/ }),

/***/ "./src/assets/fonts/Titania-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Titania-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e828a11bbc97236df132.ttf";

/***/ }),

/***/ "./src/assets/images/bg.jpeg":
/*!***********************************!*\
  !*** ./src/assets/images/bg.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dabb473a2bee85e3e92c.jpeg";

/***/ }),

/***/ "./src/assets/images/chickenAdobo.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/chickenAdobo.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "236affa9fe339fcb5570.jpg";

/***/ }),

/***/ "./src/assets/images/chickenBBQ.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/chickenBBQ.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e06a8d0a93ddbec4539.jpg";

/***/ }),

/***/ "./src/assets/images/grilledChicken.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/grilledChicken.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80007e72038dd2e6156e.jpg";

/***/ }),

/***/ "./src/assets/images/grilledLiempo.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/grilledLiempo.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9163fdcc01298411772.jpg";

/***/ }),

/***/ "./src/assets/images/hipon.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/hipon.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28a2107cc58070502b7c.jpg";

/***/ }),

/***/ "./src/assets/images/lechonKawali.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/lechonKawali.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1389e68be0562d0290ff.jpg";

/***/ }),

/***/ "./src/assets/images/longanisa.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/longanisa.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf69bee5a5469c206c8.jpg";

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b63a2fc5be5ad2bd337.png";

/***/ }),

/***/ "./src/assets/images/porkBBQ.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/porkBBQ.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4741e29c4d44619d5667.jpg";

/***/ }),

/***/ "./src/assets/images/tahong.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/tahong.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7df497c85657c35cdc9d.jpg";

/***/ }),

/***/ "./src/assets/images/tocino.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/tocino.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7e19a44963c09fd3b68.jpg";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reserve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reserve */ "./src/reserve.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






window.HOME = _home__WEBPACK_IMPORTED_MODULE_1__["default"];
window.MENU = _menu__WEBPACK_IMPORTED_MODULE_2__.MENU;
window.RESERVE = _reserve__WEBPACK_IMPORTED_MODULE_3__["default"];
window.CONTACT = _contact__WEBPACK_IMPORTED_MODULE_4__.CONTACT;

const generateFrontPage = function() {
    const content = document.querySelector('.content')
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    const navArray = ['HOME', 'MENU', 'RESERVE', 'CONTACT'];
    for (let page of navArray) {
        const li = document.createElement('li');
        li.textContent = page;
        li.onclick = activatePage;
        ul.appendChild(li);
    }

    nav.appendChild(ul);

    const footer = document.createElement('footer');

    for (let key in _contact__WEBPACK_IMPORTED_MODULE_4__.contactObj) {
        const p = document.createElement('p');

        if (key == 'address') {
            p.textContent = Object.values(_contact__WEBPACK_IMPORTED_MODULE_4__.contactObj[key]).join(' ');
        } else if (key == 'number' || key == 'schedule') {
            p.textContent = _contact__WEBPACK_IMPORTED_MODULE_4__.contactObj[key];
        } else {
            continue;
        }

        footer.appendChild(p);
    }

    content.append(nav, (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(), footer)
}();

function activatePage() {
    (document.querySelector('.content').firstChild.nextSibling).remove();
    document.querySelector('.content').insertBefore(window[`${this.textContent}`](), document.querySelector('footer'));
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcmVzZXJ2ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvVGl0YW5pYS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL1NTTmlja3Nvbk9uZS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9EYXJsaW5nLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltYWdlcy9iZy5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RpdGFuaWEtcmVndWxhcic7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3NzLW5pY2tzb24tb25lJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZGFybGluZyc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWZvbnQ6ICd0aXRhbmlhLXJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcbiAgICAtLXNlY29uZGFyeS1mb250OiAnc3Mtbmlja3Nvbi1vbmUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXN1Yi1mb250OiAnZGFybGluZycsIHNhbnMtc2VyaWY7XFxuICAgIC0tdGV4dC1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgLS1tYWluLWNvbG9yOiAjZmVkZDMzO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLCBcXG5oMyxcXG5oNCxcXG51bCxcXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLyogR2VuZXJhbCBMYXlvdXQgKi9cXG5cXG5uYXYgPiB1bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbm5hdiA+IHVsID4gbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiA+IHVsLCBcXG5mb290ZXIge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc2Vjb25kYXJ5LWZvbnQpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIG1hcmdpbjogMjVweCAwO1xcbn1cXG5cXG4vKiBHZW5lcmFsIFN1YiBQYWdlcyAqL1xcblxcbi5zdWItYmcge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG5hcnRpY2xlLFxcbmZvcm0ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0LWZvbnQpO1xcbiAgICBoZWlnaHQ6IG1pbig3NSUsIDYwMHB4KTtcXG4gICAgd2lkdGg6IG1pbig3NSUsIDgyMHB4KTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gfVxcbiBcXG4gaDMgfiBoMyB7XFxuICAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiB9XFxuXFxuIC8qIEhvbWUgUGFnZSAqL1xcblxcbmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCA1cHggcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXN1Yi1mb250KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogOTBweDtcXG4gICAgcmlnaHQ6IDVweDtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAzcHggNXB4IHJnYmEoMCwwLDAsMC41KTtcXG59XFxuXFxuLyogQ29udGFjdCBQYWdlICovXFxuXFxuYXJ0aWNsZSNjb250YWN0UGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI2NvbnRhY3RQYWdlIGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWFwIHtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi8qIE1lbnUgUGFnZSAqL1xcblxcbi5lbnRyZWVzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIG1hcmdpbjogMzBweCAwO1xcbn1cXG5cXG4uZW50cmVlLWVsZW1lbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5mb29kLWltYWdlIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogUmVzZXJ2YXRpb24gUGFnZSAqL1xcbmZvcm0gPiBoMyB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNiYXNpYy1pbmZvLFxcbiNwYXltZW50LWluZm8sXFxuI2VudHJlZXMtY29tbWVudHMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4jYmFzaWMtaW5mbyA+IGRpdixcXG4jcGF5bWVudC1pbmZvID4gZGl2LFxcbiNlbnRyZWVzLWNvbW1lbnRzID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcXG59XFxuXFxuI2Jhc2ljLWluZm8sXFxuI3BheW1lbnQtaW5mbyxcXG4jZW50cmVlcy1jb21tZW50cyB7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuYWJiciB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5hYmJyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcgKic7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2VudHJlZXMtY29tbWVudHMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSxcXG5maWVsZHNldCB+IGZpZWxkc2V0IHtcXG4gbWFyZ2luOiAxNXB4IDA7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiAqIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtEQUFpRTtBQUNyRTs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwrREFBOEQ7QUFDbEU7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsK0RBQXlEO0FBQzdEOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLDhDQUE4QztJQUM5QyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLHFCQUFxQjtBQUN6Qjs7QUFFQTs7Ozs7OztJQU9JLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5REFBZ0Q7SUFDaEQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGFBQWE7SUFDYixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7Q0FDcEI7O0NBRUE7S0FDSSxnQkFBZ0I7Q0FDcEI7O0NBRUEsY0FBYzs7QUFFZjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0NBQXdDO0FBQzVDOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG9CQUFvQjtBQUN4Qjs7QUFFQTs7O0lBR0ksaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndGl0YW5pYS1yZWd1bGFyJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1RpdGFuaWEtUmVndWxhci50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3NzLW5pY2tzb24tb25lJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1NTTmlja3Nvbk9uZS5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2RhcmxpbmcnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvRGFybGluZy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWZvbnQ6ICd0aXRhbmlhLXJlZ3VsYXInLCBzYW5zLXNlcmlmO1xcbiAgICAtLXNlY29uZGFyeS1mb250OiAnc3Mtbmlja3Nvbi1vbmUnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXN1Yi1mb250OiAnZGFybGluZycsIHNhbnMtc2VyaWY7XFxuICAgIC0tdGV4dC1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgLS1tYWluLWNvbG9yOiAjZmVkZDMzO1xcbn1cXG5cXG5ib2R5LFxcbmgxLFxcbmgyLCBcXG5oMyxcXG5oNCxcXG51bCxcXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pbWFnZXMvYmcuanBlZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4vKiBHZW5lcmFsIExheW91dCAqL1xcblxcbm5hdiA+IHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubmF2ID4gdWwgPiBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2ID4gdWwsIFxcbmZvb3RlciB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1zZWNvbmRhcnktZm9udCk7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMDBweDtcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxufVxcblxcbi8qIEdlbmVyYWwgU3ViIFBhZ2VzICovXFxuXFxuLnN1Yi1iZyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbmFydGljbGUsXFxuZm9ybSB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHQtZm9udCk7XFxuICAgIGhlaWdodDogbWluKDc1JSwgNjAwcHgpO1xcbiAgICB3aWR0aDogbWluKDc1JSwgODIwcHgpO1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiB9XFxuIFxcbiBoMyB+IGgzIHtcXG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuIH1cXG5cXG4gLyogSG9tZSBQYWdlICovXFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICAgIHRleHQtc2hhZG93OiAycHggM3B4IDVweCByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tc3ViLWZvbnQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA5MHB4O1xcbiAgICByaWdodDogNXB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCA1cHggcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG5cXG4vKiBDb250YWN0IFBhZ2UgKi9cXG5cXG5hcnRpY2xlI2NvbnRhY3RQYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY29udGFjdFBhZ2UgZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtYXAge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLyogTWVudSBQYWdlICovXFxuXFxuLmVudHJlZXMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxufVxcblxcbi5lbnRyZWUtZWxlbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmZvb2QtaW1hZ2Uge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBSZXNlcnZhdGlvbiBQYWdlICovXFxuZm9ybSA+IGgzIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2Jhc2ljLWluZm8sXFxuI3BheW1lbnQtaW5mbyxcXG4jZW50cmVlcy1jb21tZW50cyA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbiNiYXNpYy1pbmZvID4gZGl2LFxcbiNwYXltZW50LWluZm8gPiBkaXYsXFxuI2VudHJlZXMtY29tbWVudHMgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbn1cXG5cXG4jYmFzaWMtaW5mbyxcXG4jcGF5bWVudC1pbmZvLFxcbiNlbnRyZWVzLWNvbW1lbnRzIHtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG5hYmJyIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcbmFiYnI6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyAqJztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZW50cmVlcy1jb21tZW50cyA+IGRpdjpmaXJzdC1vZi10eXBlLFxcbmZpZWxkc2V0IH4gZmllbGRzZXQge1xcbiBtYXJnaW46IDE1cHggMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qICoge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTWFwIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9tYXAucG5nJztcblxuY29uc3QgY29udGFjdE9iaiA9IHtcbiAgICBhZGRyZXNzOiB7c3RyZWV0OiBcIjE4OSBUaGUgR3JvdmUgRHJpdmVcIiwgY2l0eVppcDogXCJMb3MgQW5nZWxlcywgQ0EgOTAwMzZcIn0sXG4gICAgbnVtYmVyOiAnKDc3NykgNDIwLTY5NjknLFxuICAgIHNjaGVkdWxlOiAnT3BlbiBFdmVyeWRheSAxMUFNIC0gOFBNJyxcbiAgICBlbWFpbDogJ3Jlc3RhdXJhbnRAaGFuZGZ1bGwuY29tJ1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBhcnRpY2xlLmlkID0gXCJjb250YWN0UGFnZVwiO1xuICAgIGFydGljbGUuY2xhc3NMaXN0LmFkZCgnc3ViLWJnJyk7XG5cbiAgICBjb25zdCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcbiAgICBjb25zdCBsb2NhdGlvblN0cmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb2NhdGlvblN0cmVldC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouYWRkcmVzcy5zdHJlZXQ7XG4gICAgY29uc3QgbG9jYXRpb25DaXR5WmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uQ2l0eVppcC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmouYWRkcmVzcy5jaXR5WmlwO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gJ0hvdXJzJztcbiAgICBjb25zdCBob3Vyc0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnNJbmZvLnRleHRDb250ZW50ID0gY29udGFjdE9iai5zY2hlZHVsZTtcblxuICAgIGNvbnN0IHBob25lRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHBob25lRW1haWwudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgY29uc3QgcGhvbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGVtYWlsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwaG9uZUluZm8udGV4dENvbnRlbnQgPSBjb250YWN0T2JqLm51bWJlcjtcbiAgICBlbWFpbEluZm8udGV4dENvbnRlbnQgPSBjb250YWN0T2JqLmVtYWlsO1xuXG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYXBJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYXBJbWcuc3JjID0gTWFwO1xuICAgIG1hcEltZy5hbHQgPSBcIkxvY2F0aW9uIG9mIGhhbmRmdWxsIHJlc3RhdXJhbnRcIjtcbiAgICBtYXBJbWcuaWQgPSBcIm1hcFwiO1xuXG4gICAgbWFwLmFwcGVuZENoaWxkKG1hcEltZyk7XG4gICAgY29udGFjdEluZm8uYXBwZW5kKGxvY2F0aW9uLCBsb2NhdGlvblN0cmVldCwgbG9jYXRpb25DaXR5WmlwLCBob3VycywgaG91cnNJbmZvLCBwaG9uZUVtYWlsLCBwaG9uZUluZm8sIGVtYWlsSW5mbyk7XG4gICAgYXJ0aWNsZS5hcHBlbmQoY29udGFjdEluZm8sIG1hcCk7XG5cbiAgICByZXR1cm4gYXJ0aWNsZTtcbn1cblxuZXhwb3J0IHtjb250YWN0T2JqLCBnZW5lcmF0ZUNvbnRhY3QgYXMgQ09OVEFDVH07IiwiY29uc3QgdGl0bGVPYmogPSB7XG4gICAgdGl0bGU6ICdoYW5kZnVsbCcsXG4gICAgc3VidGl0bGU6IFwidHJhZGl0aW9uYWwgZmlsaXBpbm8gZGluaW5nXCJcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb21lKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcblxuICAgIGgxLnRleHRDb250ZW50ID0gdGl0bGVPYmoudGl0bGU7XG4gICAgaDIudGV4dENvbnRlbnQgPSB0aXRsZU9iai5zdWJ0aXRsZTtcblxuICAgIGhlYWRlci5hcHBlbmQoaDEsIGgyKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZTsiLCJpbXBvcnQgZ3JpbGxlZENoaWNrZW4gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2dyaWxsZWRDaGlja2VuLmpwZyc7XG5pbXBvcnQgbGVjaG9uS2F3YWxpIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9sZWNob25LYXdhbGkuanBnJztcbmltcG9ydCBjaGlja2VuQkJRIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9jaGlja2VuQkJRLmpwZyc7XG5pbXBvcnQgbG9uZ2FuaXNhIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9sb25nYW5pc2EuanBnJztcbmltcG9ydCB0b2Npbm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3RvY2luby5qcGcnO1xuaW1wb3J0IGdyaWxsZWRMaWVtcG8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2dyaWxsZWRMaWVtcG8uanBnJztcbmltcG9ydCBwb3JrQkJRIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9wb3JrQkJRLmpwZyc7XG5pbXBvcnQgaGlwb24gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2hpcG9uLmpwZyc7XG5pbXBvcnQgdGFob25nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy90YWhvbmcuanBnJztcbmltcG9ydCBjaGlja2VuQWRvYm8gZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2NoaWNrZW5BZG9iby5qcGcnO1xuXG5cbmNvbnN0IGVudHJlZXNJdGVtID0gKGltYWdlU3JjLCBmb29kTmFtZSwgY2FtZWxDYXNlKSA9PiB7XG4gICAgcmV0dXJuIHtpbWFnZVNyYywgZm9vZE5hbWUsIGNhbWVsQ2FzZX1cbn1cblxubGV0IGVudHJlZXNJdGVtc0FycmF5ID0gW2VudHJlZXNJdGVtKGdyaWxsZWRDaGlja2VuLCBcIkdyaWxsZWQgQ2hpY2tlbiBJbmFzYWxcIiwgJ2dyaWxsZWRDaGlrZW4nKSwgZW50cmVlc0l0ZW0obGVjaG9uS2F3YWxpLCBcIkxlY2hvbiBLYXdhbGkvRGVlcCBGcmllZCBQb3JrXCIsICdsZWNob25LYXdhbGknKSwgZW50cmVlc0l0ZW0oY2hpY2tlbkJCUSwgXCJGaWxpcGlubyBDaGlja2VuIEJCUVwiLCAnY2hpY2tlbkJCUScpLCBlbnRyZWVzSXRlbShsb25nYW5pc2EsIFwiTG9uZ2FuaXNhIEZpbGlwaW5vIFNhdXNhZ2VcIiwgJ2xvbmdhbmlzYScpLCBlbnRyZWVzSXRlbSh0b2Npbm8sIFwiVG9jaW5vL1N3ZWV0IEdhcmxpYyBQb3JrXCIsICd0b2Npbm8nKSwgZW50cmVlc0l0ZW0oZ3JpbGxlZExpZW1wbywgXCJHcmlsbGVkIExpZW1wby9HcmlsbGVkIFBvcmsgQmVsbHlcIiwgJ2dyaWxsZWRMaWVtcG8nKSwgZW50cmVlc0l0ZW0ocG9ya0JCUSwgXCJQb3JrIEJCUVwiLCAncG9ya0JCUScpLCBlbnRyZWVzSXRlbShoaXBvbiwgXCJIaXBvbi9XaG9sZSBTaHJpbXBcIiwgJ2hpcG9uJyksIGVudHJlZXNJdGVtKHRhaG9uZywgXCJUYWhvbmcvTXVzc2Vsc1wiLCAndGFob25nJyksIGVudHJlZXNJdGVtKGNoaWNrZW5BZG9ibywgXCJDaGlja2VuIEFkb2JvXCIsICdjaGlja2VuQWRvYm8nKV07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpIHtcbiAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGFydGljbGUuaWQ9IFwibWVudVBhZ2VcIjtcbiAgICBhcnRpY2xlLmNsYXNzTGlzdC5hZGQoJ3N1Yi1iZycpO1xuXG4gICAgY29uc3QgaW5jbHVkZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaW5jbHVkZWRUaXRsZS50ZXh0Q29udGVudCA9IFwiQWxsIEJvb2RsZSBGaWdodHMgSW5jbHVkZVwiXG4gICAgXG4gICAgY29uc3QgaW5jbHVkZWRJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmNsdWRlZEl0ZW1zLmlubmVySFRNTCA9IFwiTHVtcGlhLCBlbnNhbGRhbmcga2FtYXRpcywgd2hpdGUgcmljZSwgYXNzb3J0ZWQgZGlwcGluZyBzYXVjZXMsIGFuZCBnYXJuaXNoZXMuIDxicj4gR2FybmlzaGVzOiBmcmVzaCBtYW5nb3MgJiBvcmFuZ2VzLCBmcmllZCBnYXJsaWMgY3J1bWJsZSwgYW5kIHNjYWxsaW9ucy5cIjtcblxuICAgIGNvbnN0IGVudHJlZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZW50cmVlc1RpdGxlLnRleHRDb250ZW50ID0gXCJCb29kbGUgRmlnaHQgRW50cmVlc1wiO1xuXG4gICAgY29uc3QgZW50cmVlc0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVudHJlZXNJdGVtcy50ZXh0Q29udGVudCA9IFwiQ29tYmluYXRpb24gb2YgNiBpdGVtcyB0b3RhbCBmcm9tIHRoZSBmb2xsb3dpbmcuIChNZW51IHN1YmplY3QgdG8gY2hhbmdlKVwiXG5cbiAgICBjb25zdCBlbnRyZWVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZW50cmVlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlbnRyZWVzLWNvbnRhaW5lcicpO1xuXG4gICAgZW50cmVlc0l0ZW1zQXJyYXkuZm9yRWFjaCgoZW50cmVlKSA9PiB7XG4gICAgICAgIGxldCBlbnRyZWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVudHJlZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZW50cmVlLWVsZW1lbnQnKTtcblxuICAgICAgICBsZXQgZW50cmVlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGxldCBlbnRyZWVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZW50cmVlSW1nLnNyYyA9IGVudHJlZS5pbWFnZVNyYztcbiAgICAgICAgZW50cmVlSW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb2QtaW1hZ2UnKTtcbiAgICAgICAgZW50cmVlTmFtZS50ZXh0Q29udGVudCA9IGVudHJlZUltZy5hbHQgPSBlbnRyZWUuZm9vZE5hbWU7XG5cbiAgICAgICAgZW50cmVlRWxlbWVudC5hcHBlbmQoZW50cmVlSW1nLCBlbnRyZWVOYW1lKTtcbiAgICAgICAgZW50cmVlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyZWVFbGVtZW50KTtcbiAgICB9KVxuICAgIFxuICAgIGFydGljbGUuYXBwZW5kKGluY2x1ZGVkVGl0bGUsIGluY2x1ZGVkSXRlbXMsIGVudHJlZXNUaXRsZSwgZW50cmVlc0l0ZW1zLCBlbnRyZWVzQ29udGFpbmVyKTtcblxuICAgIHJldHVybiBhcnRpY2xlO1xufVxuXG5leHBvcnQge2VudHJlZXNJdGVtc0FycmF5LCBnZW5lcmF0ZU1lbnUgYXMgTUVOVX07IiwiaW1wb3J0IHtlbnRyZWVzSXRlbXNBcnJheX0gZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBmb3JtRWxlbWVudHMgPSAoY2FtZWxDYXNlLCBzdHJpbmdMYWJlbCwgaW5wdXRUeXBlKSA9PiB7XG4gICAgcmV0dXJuIHtjYW1lbENhc2UsIHN0cmluZ0xhYmVsLCBpbnB1dFR5cGV9XG59XG5cbmNvbnN0IGNhdGVnb3J5RWxlbWVudHMgPSAodGl0bGUsIGFycmF5LCBjYW1lbENhc2UpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBhcnJheSwgY2FtZWxDYXNlfVxufVxuXG5jb25zdCBiYXNpY0luZm9BcnJheSA9IFtmb3JtRWxlbWVudHMoJ2ZpcnN0TmFtZScsIFwiRmlyc3QgTmFtZVwiLCAndGV4dCcpLCBmb3JtRWxlbWVudHMoJ2xhc3ROYW1lJywgXCJMYXN0IE5hbWVcIiwgJ3RleHQnKSwgZm9ybUVsZW1lbnRzKCdwaG9uZU51bWJlcicsIFwiUGhvbmUgTnVtYmVyXCIsICd0ZWwnKSwgZm9ybUVsZW1lbnRzKCdlbWFpbCcsIFwiRW1haWxcIiwgJ2VtYWlsJyksIGZvcm1FbGVtZW50cygnbnVtT2ZQcGwnLCBcIk51bWJlciBvZiBQYXJ0eVwiLCAnbnVtYmVyJyksIGZvcm1FbGVtZW50cygnZGF0ZVRpbWUnLCBcIkRhdGUgJiBUaW1lXCIsICdkYXRldGltZS1sb2NhbCcpXTtcblxuY29uc3QgcGF5bWVudEluZm9BcnJheSA9IFtmb3JtRWxlbWVudHMoJ2NhcmROdW1iZXInLCBcIkNhcmQgTnVtYmVyXCIsICd0ZWwnKSwgZm9ybUVsZW1lbnRzKCdleHBpcmF0aW9uRGF0ZScsIFwiRXhwaXJhdGlvbiBEYXRlXCIsICdtb250aCcpLCBmb3JtRWxlbWVudHMoJ2N2dicsIFwiQ1ZWXCIsICd0ZWwnKSwgZm9ybUVsZW1lbnRzKCd6aXBDb2RlJywgXCJDYXJkIFppcCBDb2RlXCIsICd0ZXh0JyldO1xuXG5jb25zdCBmb3JtQ2F0ZWdvcnlBcnJheSA9IFtjYXRlZ29yeUVsZW1lbnRzKFwiQmFzaWMgSW5mb3JtYXRpb25cIiwgYmFzaWNJbmZvQXJyYXksICdiYXNpYy1pbmZvJyksIGNhdGVnb3J5RWxlbWVudHMoXCJFbnRyZWVzICYgQ29tbWVudHNcIiwgZW50cmVlc0l0ZW1zQXJyYXksICdlbnRyZWVzLWNvbW1lbnRzJyksIGNhdGVnb3J5RWxlbWVudHMoXCJQYXltZW50IEluZm9ybWF0aW9uXCIsIHBheW1lbnRJbmZvQXJyYXksICdwYXltZW50LWluZm8nKV07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVzZXJ2ZSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnc3ViLWJnJyk7XG4gICAgZm9ybS5pZCA9IFwicmVzZXJ2YXRpb25cIjtcbiAgICBmb3JtLmFjdGlvbiA9IFwiI1wiO1xuICAgIGZvcm0ubWV0aG9kID0gXCJwb3N0XCI7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnUmVzZXJ2YXRpb24gRm9ybSc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBmb3JtQ2F0ZWdvcnlBcnJheS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIGZpZWxkc2V0LmlkID0gY2F0ZWdvcnkuY2FtZWxDYXNlO1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgbGVnZW5kLnRleHRDb250ZW50ID0gY2F0ZWdvcnkudGl0bGU7XG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZChsZWdlbmQpO1xuICAgICAgICBmb3JtLmFwcGVuZChmaWVsZHNldCk7XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5LnRpdGxlID09ICdCYXNpYyBJbmZvcm1hdGlvbicgfHwgY2F0ZWdvcnkudGl0bGUgPT0gJ1BheW1lbnQgSW5mb3JtYXRpb24nKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGNhdGVnb3J5LmFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudC5zdHJpbmdMYWJlbDtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhYmJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYWJicicpO1xuICAgICAgICAgICAgICAgIGFiYnIudGl0bGUgPSAncmVxdWlyZWQnO1xuICAgICAgICAgICAgICAgIGFiYnIudGV4dENvbnRlbnQgPSAnKic7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGlucHV0LnR5cGUgPSBlbGVtZW50LmlucHV0VHlwZTtcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gZWxlbWVudC5jYW1lbENhc2U7XG5cbiAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIFxuICAgICAgICAgICAgICAgIHN0cm9uZy5hcHBlbmRDaGlsZChhYmJyKTtcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoc3Ryb25nLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZChsYWJlbCk7XG4gICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gXCJDaG9vc2UgdXAgdG8gYW55IHNpeCBpdGVtcyBmb3IgeW91ciBCb29kbGUgRmlnaHQgU2VydmljZVwiO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBlbnRyZWUgb2YgY2F0ZWdvcnkuYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZW50cmVlLmZvb2ROYW1lO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICBpbnB1dC5uYW1lID0gJ2VudHJlZUl0ZW0nO1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZW50cmVlLmNhbWVsQ2FzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmQoaW5wdXQsIHNwYW4pO1xuICAgICAgICAgICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkLU9ucy9Db21tZW50cy9SZXF1ZXN0cy9BbGxlcmdpZXMvQ2VsZWJyYXRpb25cIjtcblxuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgdGV4dGFyZWEubmFtZSA9ICdjb21tZW50cyc7XG4gICAgICAgICAgICB0ZXh0YXJlYS5jb2xzID0gJzYwJztcbiAgICAgICAgICAgIHRleHRhcmVhLnJvd3MgPSAnMic7XG5cbiAgICAgICAgICAgIGxhYmVsLmFwcGVuZCh0ZXh0YXJlYSk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kKHAsIGNoZWNrQm94Q29udGFpbmVyLCBkaXYpO1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUmVzZXJ2ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSE9NRSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHtNRU5VfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IFJFU0VSVkUgZnJvbSBcIi4vcmVzZXJ2ZVwiO1xuaW1wb3J0IHtjb250YWN0T2JqLCBDT05UQUNUfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbndpbmRvdy5IT01FID0gSE9NRTtcbndpbmRvdy5NRU5VID0gTUVOVTtcbndpbmRvdy5SRVNFUlZFID0gUkVTRVJWRTtcbndpbmRvdy5DT05UQUNUID0gQ09OVEFDVDtcblxuY29uc3QgZ2VuZXJhdGVGcm9udFBhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IG5hdkFycmF5ID0gWydIT01FJywgJ01FTlUnLCAnUkVTRVJWRScsICdDT05UQUNUJ107XG4gICAgZm9yIChsZXQgcGFnZSBvZiBuYXZBcnJheSkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gcGFnZTtcbiAgICAgICAgbGkub25jbGljayA9IGFjdGl2YXRlUGFnZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGZvciAobGV0IGtleSBpbiBjb250YWN0T2JqKSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaWYgKGtleSA9PSAnYWRkcmVzcycpIHtcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBPYmplY3QudmFsdWVzKGNvbnRhY3RPYmpba2V5XSkuam9pbignICcpO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PSAnbnVtYmVyJyB8fCBrZXkgPT0gJ3NjaGVkdWxlJykge1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmpba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHApO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdiwgSE9NRSgpLCBmb290ZXIpXG59KCk7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlUGFnZSgpIHtcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5maXJzdENoaWxkLm5leHRTaWJsaW5nKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmluc2VydEJlZm9yZSh3aW5kb3dbYCR7dGhpcy50ZXh0Q29udGVudH1gXSgpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9