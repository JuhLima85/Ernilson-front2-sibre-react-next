"use strict";
exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 2993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5866);
/* harmony import */ var _componete_RodaPe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4610);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__]);
_componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Home({ data  }) {
    const { 0: isSmallScreen , 1: setIsSmallScreen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Verifica o tamanho da tela apenas no cliente
        const checkScreenSize = ()=>{
            setIsSmallScreen(window.innerWidth < 576);
        };
        checkScreenSize(); // Chama a função ao carregar o componente
        window.addEventListener("resize", checkScreenSize);
        return ()=>window.removeEventListener("resize", checkScreenSize);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Sibre"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "index, follow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Site da Segunda Igreja Batista no Recanto das Emas-DF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Ernilson Daniel Lima de Souza"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componete_Menu_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Jumbotron, {
                fluid: true,
                className: "descr-top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `
          .descr-top {
            background-image: url(${isSmallScreen ? "/header3.png" : "/header4.png"});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100%;
            min-height: 200px;
            max-height: 225px;
            max-width: 1300px;
            color: #FFF;
            text-align: center;
            margin: 0 auto;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        children: !isSmallScreen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "display-5",
                            style: {
                                marginTop: "200px",
                                color: "#17A2B8",
                                fontWeight: "bold",
                                fontSize: "1.5rem"
                            },
                            children: "Um lugar de comunh\xe3o, louvor e adora\xe7\xe3o a Deus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Jumbotron, {
                fluid: true,
                className: "servicos",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `.servicos {
                    padding-top: 20px;
                    padding-bottom: 0px;
                    background: #FFF;
                    margin-bottom: 0rem !important;
                }

                .circulo {
                    width: 200px;
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                    border-radius: 50%;
                    margin: 0 auto;
                }

                /* Media query para telas pequenas (ex: abaixo de 400px de largura) */
                @media (max-width: 399px) {
                .col-lg-4 {
                    margin-bottom: 2rem;                     
                }
                `
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "mt-4 mb-4",
                                style: {
                                    color: "#102658",
                                    fontWeight: "bold"
                                },
                                children: "Nossas Atividades"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/comunhao#domingo-do-senhor",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "circulo",
                                                        style: {
                                                            backgroundImage: "url(/templo_interno.jpg)"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "mt-4 mb-4",
                                                        style: {
                                                            color: "#102658",
                                                            fontWeight: "bold",
                                                            fontSize: "1.6rem"
                                                        },
                                                        children: "Domingo do Senhor"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "btn btn-light",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: "Viver em comunh\xe3o \xe9 uma marca da nossa comunidade. Venha ser igreja com a gente!"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                style: {
                                                                    textAlign: "center",
                                                                    listStyleType: "none",
                                                                    padding: 0
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: "Escola B\xedblica Dominical (EBD) \xe0s 17h."
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                        children: "Culto noturno domingo \xe0s 19h."
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/comunhao#acao-social",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "circulo",
                                                        style: {
                                                            backgroundImage: "url(/cesta.png)"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "mt-4 mb-4",
                                                        style: {
                                                            color: "#102658",
                                                            fontWeight: "bold",
                                                            fontSize: "1.6rem"
                                                        },
                                                        children: "A\xe7\xe3o Social"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "btn btn-light",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Ajudar como Cristo ajudaria e amar como Ele nos ama \xe9 a miss\xe3o do minist\xe9rio de A\xe7\xe3o Social. Seja servindo com doa\xe7\xe3o de alimentos ou roupas, trabalhamos para socorrer ao pr\xf3ximo em sua necessidade."
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-lg-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: "/comunhao#projeto-jiu-jitsu",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "circulo",
                                                        style: {
                                                            backgroundImage: "url(/jiu-jitsu.jpg)"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "mt-4 mb-4",
                                                        style: {
                                                            color: "#102658",
                                                            fontWeight: "bold",
                                                            fontSize: "1.6rem"
                                                        },
                                                        children: "Projeto Jiu-Jitsu"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "btn btn-light",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: "Nossa igreja oferece aulas gratuitas de jiu-j\xedtsu para a comunidade, promovendo sa\xfade, disciplina e inclus\xe3o. Durante as aulas, os alunos tamb\xe9m t\xeam a oportunidade de ouvir a Palavra de Deus, fortalecendo a f\xe9 e valores como respeito e trabalho em equipe. Participe!"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            textAlign: "center",
                                            marginTop: "20px"
                                        },
                                        children: [
                                            "Venha conhecer mais sobre nossas atividades!",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: "/comunhao",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    style: {
                                                        color: "blue",
                                                        textDecoration: "underline",
                                                        cursor: "pointer"
                                                    },
                                                    children: " Clique aqui"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Jumbotron, {
                fluid: true,
                className: "agenda",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `
                    .agenda {
                    position: relative;
                    margin-top: 10px;
                    padding-top: 20px;
                    padding-bottom: 0px;
                    background-size: cover;
                    margin-bottom: 0rem !important;
                    background-color: transparent !important; /* Remove qualquer fundo */
                    }

                    .agenda h2 {
                    position: relative;
                    z-index: 2;
                    background: white; /* Branco puro sem transparência */
                    display: inline-block;
                    padding: 10px 20px;
                    border-radius: 8px;
                    }

                    .agenda-container {
                    position: relative;
                    z-index: 1;
                    background-color: transparent !important; /* Remove fundo indesejado */
                    }
                `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        className: "text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mt-4 mb-4",
                            style: {
                                color: "#102658",
                                fontWeight: "bold"
                            },
                            children: "Agenda Semanal"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {
                        className: "text-center agenda-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: isSmallScreen ? "/agenda-semanal.jpg" : "/agenda-semanal3.jpg",
                            alt: "Agenda Semanal",
                            style: {
                                maxWidth: "100%",
                                height: "auto",
                                marginTop: "10px",
                                background: "transparent"
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componete_RodaPe_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;