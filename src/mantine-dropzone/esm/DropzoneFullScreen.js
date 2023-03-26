import React, { useEffect } from 'react';
import { getDefaultZIndex, useComponentDefaultProps, OptionalPortal, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { _Dropzone } from './Dropzone.js';
import useFullScreenStyles from './DropzoneFullScreen.styles.js';

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
const fullScreenDefaultProps = {
  padding: "md",
  loading: false,
  multiple: true,
  maxSize: Infinity,
  autoFocus: false,
  activateOnClick: true,
  activateOnDrag: true,
  dragEventsBubbling: true,
  activateOnKeyboard: true,
  active: true,
  zIndex: getDefaultZIndex("max"),
  withinPortal: true
};
function DropzoneFullScreen(props) {
  const _a = useComponentDefaultProps("DropzoneFullScreen", fullScreenDefaultProps, props), {
    classNames,
    styles,
    sx,
    className,
    style,
    unstyled,
    active,
    onDrop,
    onReject,
    zIndex,
    withinPortal,
    portalProps
  } = _a, others = __objRest(_a, [
    "classNames",
    "styles",
    "sx",
    "className",
    "style",
    "unstyled",
    "active",
    "onDrop",
    "onReject",
    "zIndex",
    "withinPortal",
    "portalProps"
  ]);
  const [counter, setCounter] = React.useState(0);
  const [visible, { open, close }] = useDisclosure(false);
  const { classes, cx } = useFullScreenStyles(null, {
    name: "DropzoneFullScreen",
    classNames,
    styles,
    unstyled
  });
  const handleDragEnter = (event) => {
    if (event.dataTransfer.types.includes("Files")) {
      setCounter((prev) => prev + 1);
      open();
    }
  };
  const handleDragLeave = () => {
    setCounter((prev) => prev - 1);
  };
  useEffect(() => {
    counter === 0 && close();
  }, [counter]);
  useEffect(() => {
    if (!active)
      return void 0;
    document.addEventListener("dragenter", handleDragEnter, false);
    document.addEventListener("dragleave", handleDragLeave, false);
    return () => {
      document.removeEventListener("dragenter", handleDragEnter, false);
      document.removeEventListener("dragleave", handleDragLeave, false);
    };
  }, [active]);
  return /* @__PURE__ */ React.createElement(OptionalPortal, __spreadValues({
    withinPortal
  }, portalProps), /* @__PURE__ */ React.createElement(Box, {
    className: cx(classes.wrapper, className),
    sx,
    style: __spreadProps(__spreadValues({}, style), {
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "all" : "none",
      zIndex
    })
  }, /* @__PURE__ */ React.createElement(_Dropzone, __spreadProps(__spreadValues({}, others), {
    classNames,
    styles,
    unstyled,
    className: classes.dropzone,
    onDrop: (files) => {
      onDrop == null ? void 0 : onDrop(files);
      close();
    },
    onReject: (files) => {
      onReject == null ? void 0 : onReject(files);
      close();
    }
  }))));
}
DropzoneFullScreen.displayName = "@mantine/dropzone/DropzoneFullScreen";

export { DropzoneFullScreen };
//# sourceMappingURL=DropzoneFullScreen.js.map
