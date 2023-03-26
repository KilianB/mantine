import React from 'react';
import { Group, Rating, rem, useMantineTheme } from '@mantine/core';
import { IconMoodEmpty, IconMoodCrazyHappy, IconMoodHappy, IconMoodSmile, IconMoodSad, IconMoodCry } from '@tabler/icons-react';

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
    const defaultProps = { size: rem(24), color: "gray" };
    switch (value) {
      case 1:
        return /* @__PURE__ */ React.createElement(IconMoodCry, __spreadValues({}, defaultProps));
      case 2:
        return /* @__PURE__ */ React.createElement(IconMoodSad, __spreadValues({}, defaultProps));
      case 3:
        return /* @__PURE__ */ React.createElement(IconMoodSmile, __spreadValues({}, defaultProps));
      case 4:
        return /* @__PURE__ */ React.createElement(IconMoodHappy, __spreadValues({}, defaultProps));
      case 5:
        return /* @__PURE__ */ React.createElement(IconMoodCrazyHappy, __spreadValues({}, defaultProps));
      default:
        return /* @__PURE__ */ React.createElement(IconMoodEmpty, __spreadValues({}, defaultProps));
    }
  };
  const getFullIcon = (value) => {
    const defaultProps = { size: rem(24) };
    const theme = useMantineTheme();
    switch (value) {
      case 1:
        return /* @__PURE__ */ React.createElement(IconMoodCry, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.red[7]
        }));
      case 2:
        return /* @__PURE__ */ React.createElement(IconMoodSad, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.orange[7]
        }));
      case 3:
        return /* @__PURE__ */ React.createElement(IconMoodSmile, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.yellow[7]
        }));
      case 4:
        return /* @__PURE__ */ React.createElement(IconMoodHappy, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.lime[7]
        }));
      case 5:
        return /* @__PURE__ */ React.createElement(IconMoodCrazyHappy, __spreadProps(__spreadValues({}, defaultProps), {
          color: theme.colors.green[7]
        }));
      default:
        return /* @__PURE__ */ React.createElement(IconMoodEmpty, __spreadValues({}, defaultProps));
    }
  };
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Rating, {
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

export { customSymbol };
//# sourceMappingURL=Rating.demo.customSymbol.js.map
