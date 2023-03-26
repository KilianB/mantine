'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var AuthenticationForm = require('../../../shared/AuthenticationForm/AuthenticationForm.js');
var _demoBase = require('./_demo-base.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const code = `
import { DEFAULT_THEME, LoadingOverlay } from '@mantine/core';

const customLoader = (
  <svg
    width="54"
    height="54"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke={DEFAULT_THEME.colors.blue[6]}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

function Demo() {
  return <LoadingOverlay loader={customLoader} visible />;
}
`;
const customLoader = /* @__PURE__ */ React__default.createElement("svg", {
  width: "54",
  height: "54",
  viewBox: "0 0 38 38",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: core.DEFAULT_THEME.colors.blue[6]
}, /* @__PURE__ */ React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /* @__PURE__ */ React__default.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, /* @__PURE__ */ React__default.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), /* @__PURE__ */ React__default.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, /* @__PURE__ */ React__default.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
})))));
function Demo() {
  const [visible, setVisible] = React.useState(true);
  const theme = core.useMantineTheme();
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: {
      borderRadius: core.rem(4),
      position: "relative",
      margin: "auto"
    }
  }, /* @__PURE__ */ React__default.createElement(core.LoadingOverlay, {
    visible,
    zIndex: 1e3,
    sx: { borderRadius: core.rem(4) },
    loader: customLoader
  }), /* @__PURE__ */ React__default.createElement(AuthenticationForm.AuthenticationForm, {
    noSubmit: true,
    noShadow: theme.colorScheme === "dark"
  })), /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center",
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => setVisible((v) => !v)
  }, "Toggle overlay")));
}
const loader = __spreadProps(__spreadValues({}, _demoBase.demoBase), {
  type: "demo",
  code,
  component: Demo
});

exports.Demo = Demo;
exports.loader = loader;
//# sourceMappingURL=LoadingOverlay.demo.loader.js.map
