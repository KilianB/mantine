import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { useTabsContext } from '../Tabs.context.js';
import useStyles from './TabsPanel.styles.js';
import { Box } from '../../Box/Box.js';

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
const TabsPanel = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("TabsPanel", defaultProps, props), { value, children, sx, className } = _a, others = __objRest(_a, ["value", "children", "sx", "className"]);
  const ctx = useTabsContext();
  const { classes, cx } = useStyles({
    orientation: ctx.orientation,
    color: ctx.color,
    radius: ctx.radius,
    inverted: ctx.inverted,
    placement: ctx.placement
  }, {
    name: "Tabs",
    unstyled: ctx.unstyled,
    classNames: ctx.classNames,
    styles: ctx.styles,
    variant: ctx.variant
  });
  const active = ctx.value === value;
  const content = ctx.keepMounted ? children : active ? children : null;
  return /* @__PURE__ */ React.createElement(Box, __spreadProps(__spreadValues({}, others), {
    ref,
    sx: [{ display: !active ? "none" : void 0 }, ...packSx(sx)],
    className: cx(classes.panel, className),
    role: "tabpanel",
    id: ctx.getPanelId(value),
    "aria-labelledby": ctx.getTabId(value)
  }), content);
});
TabsPanel.displayName = "@mantine/core/TabsPanel";

export { TabsPanel };
//# sourceMappingURL=TabsPanel.js.map
