import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { useTabsContext } from '../Tabs.context.js';
import useStyles from './Tab.styles.js';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton.js';

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
const Tab = forwardRef((props, ref) => {
  const _a = useComponentDefaultProps("TabsTab", defaultProps, props), { value, children, onKeyDown, onClick, className, icon, rightSection, color } = _a, others = __objRest(_a, ["value", "children", "onKeyDown", "onClick", "className", "icon", "rightSection", "color"]);
  const ctx = useTabsContext();
  const hasIcon = !!icon;
  const hasRightSection = !!rightSection;
  const { theme, classes, cx } = useStyles({
    withIcon: hasIcon || hasRightSection && !children,
    withRightSection: hasRightSection || hasIcon && !children,
    orientation: ctx.orientation,
    color: color || ctx.color,
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
  const isActive = value === ctx.value;
  const activateTab = (event) => {
    ctx.onTabChange(ctx.allowTabDeactivation ? value === ctx.value ? null : value : value);
    onClick == null ? void 0 : onClick(event);
  };
  return /* @__PURE__ */ React.createElement(UnstyledButton, __spreadProps(__spreadValues({}, others), {
    unstyled: ctx.unstyled,
    className: cx(classes.tab, className),
    "data-active": isActive || void 0,
    ref,
    type: "button",
    role: "tab",
    id: ctx.getTabId(value),
    "aria-selected": isActive,
    tabIndex: isActive || ctx.value === null ? 0 : -1,
    "aria-controls": ctx.getPanelId(value),
    onClick: activateTab,
    onKeyDown: createScopedKeydownHandler({
      siblingSelector: '[role="tab"]',
      parentSelector: '[role="tablist"]',
      activateOnFocus: ctx.activateTabWithKeyboard,
      loop: ctx.loop,
      dir: theme.dir,
      orientation: ctx.orientation,
      onKeyDown
    })
  }), icon && /* @__PURE__ */ React.createElement("span", {
    className: classes.tabIcon
  }, icon), children && /* @__PURE__ */ React.createElement("span", {
    className: classes.tabLabel
  }, children), rightSection && /* @__PURE__ */ React.createElement("span", {
    className: classes.tabRightSection
  }, rightSection));
});
Tab.displayName = "@mantine/core/Tab";

export { Tab };
//# sourceMappingURL=Tab.js.map
