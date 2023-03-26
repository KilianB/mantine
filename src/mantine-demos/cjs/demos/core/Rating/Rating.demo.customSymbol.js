'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

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
import { Rating, useMantineTheme, rem } from '@mantine/core';
import {
  IconMoodEmpty,
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

function Demo() {

  const getEmptyIcon = (value: number) => {
    const defaultProps = { size: rem(24), color: 'gray' };
    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} />;
      case 2:
        return <IconMoodSad {...defaultProps} />;
      case 3:
        return <IconMoodSmile {...defaultProps} />;
      case 4:
        return <IconMoodHappy {...defaultProps} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  const getFullIcon = (value: number) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <IconMoodCry {...defaultProps} color={theme.colors.red[7]} />;
      case 2:
        return <IconMoodSad {...defaultProps} color={theme.colors.orange[7]} />;
      case 3:
        return <IconMoodSmile {...defaultProps} color={theme.colors.yellow[7]} />;
      case 4:
        return <IconMoodHappy {...defaultProps} color={theme.colors.lime[7]} />;
      case 5:
        return <IconMoodCrazyHappy {...defaultProps} color={theme.colors.green[7]} />;
      default:
        return <IconMoodEmpty {...defaultProps} />;
    }
  };

  return (
    <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />
  );
}
`;
function Demo() {
  const getEmptyIcon = (value) => {
    const defaultProps = { size: core.rem(24), color: "gray" };
    switch (value) {
      case 1:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCry, __spreadValues({}, defaultProps));
      case 2:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSad, __spreadValues({}, defaultProps));
      case 3:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSmile, __spreadValues({}, defaultProps));
      case 4:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodHappy, __spreadValues({}, defaultProps));
      case 5:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCrazyHappy, __spreadValues({}, defaultProps));
      default:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodEmpty, __spreadValues({}, defaultProps));
    }
  };
  const getFullIcon = (value) => {
    const defaultProps = { size: core.rem(24) };
    const theme = core.useMantineTheme();
    switch (value) {
      case 1:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCry, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.red[7]
        }));
      case 2:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSad, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.orange[7]
        }));
      case 3:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodSmile, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.yellow[7]
        }));
      case 4:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodHappy, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.lime[7]
        }));
      case 5:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodCrazyHappy, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.green[7]
        }));
      default:
        return /* @__PURE__ */ React__default.createElement(iconsReact.IconMoodEmpty, __spreadValues({}, defaultProps));
    }
  };
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Rating, {
    emptySymbol: getEmptyIcon,
    fullSymbol: getFullIcon,
    highlightSelectedOnly: true
  }));
}
const customSymbol = {
  type: "demo",
  code,
  component: Demo
};

exports.customSymbol = customSymbol;
//# sourceMappingURL=Rating.demo.customSymbol.js.map
