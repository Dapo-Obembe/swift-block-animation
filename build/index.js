/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







/**
 * Swift Block Animation Plugin for WordPress Blocks
 *
 */



// Swift Block Animation options

const ANIMATION_OPTIONS = [{
  label: "None",
  value: ""
},
// Fade Animations
{
  label: "Fade In",
  value: "fadeIn"
}, {
  label: "Fade In Up",
  value: "fadeInUp"
}, {
  label: "Fade In Down",
  value: "fadeInDown"
}, {
  label: "Fade In Left",
  value: "fadeInLeft"
}, {
  label: "Fade In Right",
  value: "fadeInRight"
}, {
  label: "Fade In Up Big",
  value: "fadeInUpBig"
}, {
  label: "Fade In Down Big",
  value: "fadeInDownBig"
}, {
  label: "Fade In Left Big",
  value: "fadeInLeftBig"
}, {
  label: "Fade In Right Big",
  value: "fadeInRightBig"
},
// Slide Animations
{
  label: "Slide In Up",
  value: "slideInUp"
}, {
  label: "Slide In Down",
  value: "slideInDown"
}, {
  label: "Slide In Left",
  value: "slideInLeft"
}, {
  label: "Slide In Right",
  value: "slideInRight"
},
// Zoom Animations
{
  label: "Zoom In",
  value: "zoomIn"
}, {
  label: "Zoom In Up",
  value: "zoomInUp"
}, {
  label: "Zoom In Down",
  value: "zoomInDown"
}, {
  label: "Zoom In Left",
  value: "zoomInLeft"
}, {
  label: "Zoom In Right",
  value: "zoomInRight"
},
// Bounce Animations
{
  label: "Bounce In",
  value: "bounceIn"
}, {
  label: "Bounce In Up",
  value: "bounceInUp"
}, {
  label: "Bounce In Down",
  value: "bounceInDown"
}, {
  label: "Bounce In Left",
  value: "bounceInLeft"
}, {
  label: "Bounce In Right",
  value: "bounceInRight"
},
// Flip Animations
{
  label: "Flip In X",
  value: "flipInX"
}, {
  label: "Flip In Y",
  value: "flipInY"
},
// Light Speed
{
  label: "Light Speed In Right",
  value: "lightSpeedInRight"
}, {
  label: "Light Speed In Left",
  value: "lightSpeedInLeft"
},
// Roll
{
  label: "Roll In",
  value: "rollIn"
}];

// Add animation attributes.
function addAnimationAttribute(settings, name) {
  // Only apply to core blocks
  if (!name.startsWith("core/")) return settings;
  settings.attributes = {
    ...settings.attributes,
    // Main animation settings
    swiftAnimation: {
      type: "string",
      default: ""
    },
    swiftAnimationDuration: {
      type: "number",
      default: 600
    },
    swiftAnimationDelay: {
      type: "number",
      default: 0
    },
    // Viewport settings
    swiftViewportOffset: {
      type: "number",
      default: 15
    },
    // Stagger settings for grouped animations
    swiftStagger: {
      type: "boolean",
      default: false
    },
    swiftStaggerDelay: {
      type: "number",
      default: 100
    },
    swiftStaggerGroup: {
      type: "string",
      default: ""
    }
  };
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("blocks.registerBlockType", "swift-style/add-animation-attribute", addAnimationAttribute);

// Add animation controls to Inspector
const withSwiftAnimationControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes,
      setAttributes,
      name
    } = props;
    if (!name.startsWith("core/")) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlockEdit, {
      ...props
    });
    const {
      swiftAnimation,
      swiftAnimationDuration,
      swiftAnimationDelay,
      swiftViewportOffset,
      swiftStagger,
      swiftStaggerDelay,
      swiftStaggerGroup
    } = attributes;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Entrance Animation", "swift-block-animation"),
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation", "swift-block-animation"),
            value: swiftAnimation,
            options: ANIMATION_OPTIONS,
            onChange: value => setAttributes({
              swiftAnimation: value
            }),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose entrance animation effect", "swift-block-animation")
          }), swiftAnimation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation Duration (ms)", "swift-block-animation"),
              value: swiftAnimationDuration,
              onChange: value => setAttributes({
                swiftAnimationDuration: value
              }),
              min: 100,
              max: 3000,
              step: 50,
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How long the animation takes to complete", "swift-block-animation")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation Delay (ms)", "swift-block-animation"),
              value: swiftAnimationDelay,
              onChange: value => setAttributes({
                swiftAnimationDelay: value
              }),
              min: 0,
              max: 3000,
              step: 50,
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delay before animation starts", "swift-block-animation")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport Offset (%)", "swift-block-animation"),
              value: swiftViewportOffset,
              onChange: value => setAttributes({
                swiftViewportOffset: value
              }),
              min: 0,
              max: 100,
              step: 5,
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trigger when element is X% visible in viewport", "swift-block-animation")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
                type: "checkbox",
                checked: swiftStagger,
                onChange: e => setAttributes({
                  swiftStagger: e.target.checked
                })
              }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Stagger Animation", "swift-block-animation")]
            }), swiftStagger && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stagger Delay (ms)", "swift-block-animation"),
                value: swiftStaggerDelay,
                onChange: value => setAttributes({
                  swiftStaggerDelay: value
                }),
                min: 0,
                max: 1000,
                step: 50,
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delay between each element in group", "swift-block-animation")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stagger Group", "swift-block-animation"),
                value: swiftStaggerGroup,
                options: [{
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto (same parent)", "swift-block-animation"),
                  value: ""
                }, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Group A", "swift-block-animation"),
                  value: "group-a"
                }, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Group B", "swift-block-animation"),
                  value: "group-b"
                }, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Group C", "swift-block-animation"),
                  value: "group-c"
                }, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Group D", "swift-block-animation"),
                  value: "group-d"
                }],
                onChange: value => setAttributes({
                  swiftStaggerGroup: value
                }),
                help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Group elements for sequential animation", "swift-block-animation")
              })]
            })]
          })]
        })
      })]
    });
  };
}, "withSwiftAnimationControl");
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("editor.BlockEdit", "swift-style/with-animation-control", withSwiftAnimationControl);

// Apply animation attributes to save output
function applySwiftAnimationProps(extraProps, blockType, attributes) {
  if (!blockType.name.startsWith("core/")) return extraProps;
  const {
    swiftAnimation,
    swiftAnimationDuration,
    swiftAnimationDelay,
    swiftViewportOffset,
    swiftStagger,
    swiftStaggerDelay,
    swiftStaggerGroup
  } = attributes;
  if (swiftAnimation) {
    // Add data attributes
    extraProps["data-swift-animation"] = swiftAnimation;
    extraProps["data-swift-animation-duration"] = swiftAnimationDuration.toString();
    if (swiftAnimationDelay > 0) {
      extraProps["data-swift-animation-delay"] = swiftAnimationDelay.toString();
    }
    if (swiftViewportOffset !== 15) {
      extraProps["data-swift-viewport-offset"] = swiftViewportOffset.toString();
    }
    if (swiftStagger) {
      extraProps["data-swift-stagger"] = "true";
      extraProps["data-swift-stagger-delay"] = swiftStaggerDelay.toString();
      if (swiftStaggerGroup) {
        extraProps["data-swift-stagger-group"] = swiftStaggerGroup;
      }
    }

    // Add CSS classes for immediate styling (hidden initially)
    extraProps.className = (extraProps.className || "") + " swift-invisible";
  }
  return extraProps;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)("blocks.getSaveContent.extraProps", "swift-style/apply-animation-props", applySwiftAnimationProps);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAnimation: () => (/* binding */ initAnimation)
/* harmony export */ });
function initAnimation() {
  // Get the animated elements.
  const animatedElements = document.querySelectorAll("[data-swift-animation]");
  if (animatedElements.length <= 0) return;

  // Prepare stagger groups before creating observer
  const staggerGroups = prepareStaggerGroups(animatedElements);
  const animatedElementsSet = new Set(); // Track animated elements

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        handleElementAnimation(entry.target, observer, staggerGroups, animatedElementsSet);
      }
    });
  }, {
    threshold: 0,
    // Use dynamic rootMargin based on element's viewport offset
    rootMargin: "0px 0px -15% 0px"
  });

  // Hide elements initially and start observing
  animatedElements.forEach(element => {
    // Add invisible class
    element.classList.add("swift-invisible");
    observer.observe(element);
  });
}
function prepareStaggerGroups(elements) {
  const staggerGroups = new Map();
  elements.forEach(element => {
    const isStagger = element.getAttribute("data-swift-stagger") === "true";
    if (!isStagger) return;
    const staggerGroup = element.getAttribute("data-swift-stagger-group") || "auto";
    const animation = element.getAttribute("data-swift-animation");
    let groupKey;
    if (staggerGroup === "auto" || staggerGroup === "") {
      // Auto-group by parent container and animation type
      const parent = element.parentElement;
      groupKey = `auto-${parent ? parent.className + parent.tagName : "root"}-${animation}`;
    } else {
      groupKey = staggerGroup;
    }
    if (!staggerGroups.has(groupKey)) {
      staggerGroups.set(groupKey, {
        elements: [],
        triggered: false
      });
    }
    staggerGroups.get(groupKey).elements.push(element);
  });

  // Sort elements in each group by DOM/visual position
  staggerGroups.forEach(group => {
    group.elements.sort((a, b) => {
      const position = a.compareDocumentPosition(b);
      if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;

      // Fallback to visual position
      const aRect = a.getBoundingClientRect();
      const bRect = b.getBoundingClientRect();
      const topDiff = aRect.top - bRect.top;
      return Math.abs(topDiff) > 10 ? topDiff : aRect.left - bRect.left;
    });
  });
  return staggerGroups;
}
function handleElementAnimation(element, observer, staggerGroups, animatedElementsSet) {
  // Check for custom viewport offset
  const customOffset = element.getAttribute("data-swift-viewport-offset");
  if (customOffset && customOffset !== "15") {
    handleCustomViewportOffset(element, observer, parseInt(customOffset), staggerGroups, animatedElementsSet);
    return;
  }

  // Check if this is a stagger element
  const isStagger = element.getAttribute("data-swift-stagger") === "true";
  if (isStagger) {
    handleStaggerAnimation(element, observer, staggerGroups, animatedElementsSet);
  } else {
    triggerElementAnimation(element, observer, animatedElementsSet);
  }
}
function handleCustomViewportOffset(element, mainObserver, offset, staggerGroups, animatedElementsSet) {
  const customObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const isStagger = element.getAttribute("data-swift-stagger") === "true";
        if (isStagger) {
          handleStaggerAnimation(element, mainObserver, staggerGroups, animatedElementsSet);
        } else {
          triggerElementAnimation(element, mainObserver, animatedElementsSet);
        }
        customObserver.unobserve(element);
      }
    });
  }, {
    threshold: 0,
    rootMargin: `0px 0px -${offset}% 0px`
  });

  // Stop observing with main observer and start with custom
  mainObserver.unobserve(element);
  customObserver.observe(element);
}
function handleStaggerAnimation(element, observer, staggerGroups, animatedElementsSet) {
  // Find the stagger group
  let targetGroup = null;
  for (const [groupKey, group] of staggerGroups.entries()) {
    if (group.elements.includes(element)) {
      targetGroup = group;
      break;
    }
  }
  if (!targetGroup || targetGroup.triggered) return;

  // Mark group as triggered
  targetGroup.triggered = true;

  // Animate all elements in the group with stagger
  const staggerDelay = parseInt(element.getAttribute("data-swift-stagger-delay") || "100");
  targetGroup.elements.forEach((el, index) => {
    const elementDelay = parseInt(el.getAttribute("data-swift-animation-delay") || "0");
    const totalDelay = elementDelay + index * staggerDelay;
    setTimeout(() => {
      triggerElementAnimation(el, observer, animatedElementsSet);
    }, totalDelay);
  });
}
function triggerElementAnimation(element, observer, animatedElementsSet) {
  if (animatedElementsSet.has(element)) return;

  // Get Swift-style attributes
  const animation = element.getAttribute("data-swift-animation");
  const duration = element.getAttribute("data-swift-animation-duration") || "600";
  const delay = element.getAttribute("data-swift-animation-delay") || "0";

  // Apply Swift-style CSS custom properties
  element.style.setProperty("--swift-animation-duration", `${duration}ms`);
  if (parseInt(delay) > 0) {
    element.style.setProperty("--swift-animation-delay", `${delay}ms`);
  }

  // Remove invisible class and add animation classes (Swift style)
  element.classList.remove("swift-invisible");
  element.classList.add("animated", animation); // Note: no 'animate-' prefix

  // Mark as animated
  animatedElementsSet.add(element);

  // Stop observing
  observer.unobserve(element);

  // Clean up after animation completes
  const totalDuration = parseInt(duration) + parseInt(delay);
  setTimeout(() => {
    element.classList.remove("animated", animation);
    element.style.removeProperty("--swift-animation-duration");
    element.style.removeProperty("--swift-animation-delay");
  }, totalDuration);
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAnimation);
} else {
  initAnimation();
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 			"index": 0,
/******/ 			"./style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkawc_animations"] = globalThis["webpackChunkawc_animations"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map