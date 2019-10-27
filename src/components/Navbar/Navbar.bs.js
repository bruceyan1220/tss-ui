// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";

import logoSVG from './images/svgs/logo.svg'
;

function Navbar(Props) {
  return React.createElement("nav", {
              className: "container navbar tss-Navbar"
            }, React.createElement("div", {
                  className: "navbar-brand"
                }, React.createElement("a", {
                      className: "navbar-item",
                      title: "The UI of TiDBSlowSQL"
                    }, React.createElement("img", {
                          alt: "TiDBSlowSQL UI",
                          src: logoSVG,
                          onClick: (function (param) {
                              return ReasonReactRouter.push("/");
                            })
                        })), React.createElement("a", {
                      className: "navbar-item",
                      title: "Realtime statistics",
                      onClick: (function (param) {
                          return ReasonReactRouter.push("/");
                        })
                    }, React.createElement("i", {
                          className: "fas fa-chart-area fa-lg is-large"
                        })), React.createElement("a", {
                      className: "navbar-item",
                      title: "Report statistics",
                      onClick: (function (param) {
                          return ReasonReactRouter.push("/report");
                        })
                    }, React.createElement("i", {
                          className: "fas fa-file-medical-alt fa-lg is-large"
                        })), React.createElement("a", {
                      className: "navbar-item"
                    }, React.createElement("i", {
                          className: "fas fa-cog fa-lg is-large"
                        }))));
}

var make = Navbar;

export {
  make ,
  
}
/*  Not a pure module */
