import React, { useRef, useState, useCallback } from 'react';
import { useId, useClickOutside } from '@mantine/hooks';
import { getDefaultZIndex, useComponentDefaultProps, useMantineTheme } from '@mantine/styles';
import { usePopover } from './use-popover.js';
import { PopoverContextProvider } from './Popover.context.js';
import { PopoverTarget } from './PopoverTarget/PopoverTarget.js';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown.js';
import { getFloatingPosition } from '../Floating/get-floating-position/get-floating-position.js';

var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
const defaultProps = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: false,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: getDefaultZIndex("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
function Popover(props) {
  var _b, _c, _d, _e, _f, _g;
  const arrowRef = useRef(null);
  const _a = useComponentDefaultProps("Popover", defaultProps, props), {
    children,
    position,
    offset,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted
  } = _a, others = __objRest(_a, [
    "children",
    "position",
    "offset",
    "onPositionChange",
    "positionDependencies",
    "opened",
    "transitionProps",
    "width",
    "middlewares",
    "withArrow",
    "arrowSize",
    "arrowOffset",
    "arrowRadius",
    "arrowPosition",
    "unstyled",
    "classNames",
    "styles",
    "closeOnClickOutside",
    "withinPortal",
    "portalProps",
    "closeOnEscape",
    "clickOutsideEvents",
    "trapFocus",
    "onClose",
    "onOpen",
    "onChange",
    "zIndex",
    "radius",
    "shadow",
    "id",
    "defaultOpened",
    "__staticSelector",
    "withRoles",
    "disabled",
    "returnFocus",
    "variant",
    "keepMounted"
  ]);
  const [targetNode, setTargetNode] = useState(null);
  const [dropdownNode, setDropdownNode] = useState(null);
  const uid = useId(id);
  const theme = useMantineTheme();
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(theme.dir, position),
    offset: offset + (withArrow ? arrowSize / 2 : 0),
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose
  });
  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
    targetNode,
    dropdownNode
  ]);
  const reference = useCallback((node) => {
    setTargetNode(node);
    popover.floating.reference(node);
  }, [popover.floating.reference]);
  const floating = useCallback((node) => {
    setDropdownNode(node);
    popover.floating.floating(node);
  }, [popover.floating.floating]);
  return /* @__PURE__ */ React.createElement(PopoverContextProvider, {
    value: {
      returnFocus,
      disabled,
      controlled: popover.controlled,
      reference,
      floating,
      x: popover.floating.x,
      y: popover.floating.y,
      arrowX: (_d = (_c = (_b = popover.floating) == null ? void 0 : _b.middlewareData) == null ? void 0 : _c.arrow) == null ? void 0 : _d.x,
      arrowY: (_g = (_f = (_e = popover.floating) == null ? void 0 : _e.middlewareData) == null ? void 0 : _f.arrow) == null ? void 0 : _g.y,
      opened: popover.opened,
      arrowRef,
      transitionProps,
      width,
      withArrow,
      arrowSize,
      arrowOffset,
      arrowRadius,
      arrowPosition,
      placement: popover.floating.placement,
      trapFocus,
      withinPortal,
      portalProps,
      zIndex,
      radius,
      shadow,
      closeOnEscape,
      onClose: popover.onClose,
      onToggle: popover.onToggle,
      getTargetId: () => `${uid}-target`,
      getDropdownId: () => `${uid}-dropdown`,
      withRoles,
      targetProps: others,
      __staticSelector,
      classNames,
      styles,
      unstyled,
      variant,
      keepMounted
    }
  }, children);
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@mantine/core/Popover";

export { Popover };
//# sourceMappingURL=Popover.js.map
