exports.id = 731;
exports.ids = [731];
exports.modules = {

/***/ 3908:
/***/ ((module) => {

// Exports
module.exports = {
	"botao-whatsapp": "BotaoWhatsapp_botao-whatsapp__gQgvJ",
	"tooltip": "BotaoWhatsapp_tooltip__QMCWC"
};


/***/ }),

/***/ 5986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/WhatsApp_icone.68434f06.png","height":705,"width":660,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAhElEQVR42jXNIQuDQBjG8X2BlRtssLC0ssFY3IrFZDGZrCJ+AKtNLBa1iaLJaBHsNr+X/xfeO/gd997zcHeSdRvPX4zoMMG1wRMDXjpf0MKRoYCHBUYLV/RyqGCw21ALtWyNhj+s2PBGI2GMQNt3hMiRyEWHGSUiZEjt238YPODjY/89ANqpNCFsrSaeAAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});

/***/ }),

/***/ 1731:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4310);
/* harmony import */ var _public_WhatsApp_icone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5986);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_BotaoWhatsapp_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3908);
/* harmony import */ var _styles_BotaoWhatsapp_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_BotaoWhatsapp_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_spring__WEBPACK_IMPORTED_MODULE_2__]);
react_spring__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BotaoWhatsapp = ()=>{
    const { 0: showTooltip , 1: setShowTooltip  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const springProps = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({
        to: async (next, cancel)=>{
            while(true){
                await next({
                    transform: "translate3d(0,0,0) scale(1)"
                });
                await next({
                    transform: "translate3d(0,-10px,0) scale(1.1)"
                });
                await next({
                    transform: "translate3d(0,0,0) scale(1)"
                });
                await next({
                    transform: "translate3d(0,10px,0) scale(1.1)"
                });
            }
        },
        from: {
            transform: "translate3d(0,0,0) scale(1)"
        },
        config: {
            tension: 200,
            friction: 10
        },
        delay: 500
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.div, {
        style: {
            ...springProps
        },
        className: (_styles_BotaoWhatsapp_module_css__WEBPACK_IMPORTED_MODULE_5___default()["botao-whatsapp"]),
        onMouseEnter: ()=>setShowTooltip(true),
        onMouseLeave: ()=>setShowTooltip(false),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://api.whatsapp.com/send?phone=5561999178363",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: _public_WhatsApp_icone_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    alt: "WhatsApp",
                    width: 44,
                    height: 44,
                    layout: "fixed"
                })
            }),
            showTooltip && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_BotaoWhatsapp_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltip),
                children: "Atendimento Pastoral"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BotaoWhatsapp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;