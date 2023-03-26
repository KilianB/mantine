import React, { forwardRef } from 'react';
import { useComponentDefaultProps, Box } from '@mantine/core';
import { useRichTextEditorContext } from '../../RichTextEditor.context.js';
import useStyles from './ControlsGroup.styles.js';

var __defProp = Object.defineProperty;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const defaultProps = {};
const ControlsGroup = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("RichTextEditorControlsGroup", defaultProps, props), { className, children } = _a, others = __objRest(_a, ["className", "children"]);
  const { classNames, styles, unstyled } = useRichTextEditorContext();
  const { classes, cx } = useStyles(null, {
    name: "RichTextEditor",
    classNames,
    styles,
    unstyled
  });
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    className: cx(classes.controlsGroup, className),
    ref
  }, others), children);
});
ControlsGroup.displayName = "@mantine/tiptap/ControlsGroup";

export { ControlsGroup };
//# sourceMappingURL=ControlsGroup.js.map
