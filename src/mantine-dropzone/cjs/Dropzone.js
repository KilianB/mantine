'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDropzone = require('react-dropzone');
var core = require('@mantine/core');
var hooks = require('@mantine/hooks');
var Dropzone_context = require('./Dropzone.context.js');
var DropzoneStatus = require('./DropzoneStatus.js');
var Dropzone_styles = require('./Dropzone.styles.js');

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
  padding: "md",
  loading: false,
  multiple: true,
  maxSize: Infinity,
  autoFocus: false,
  activateOnClick: true,
  activateOnDrag: true,
  dragEventsBubbling: true,
  activateOnKeyboard: true,
  useFsAccessApi: true
};
function _Dropzone(props) {
  const _a = core.useComponentDefaultProps("Dropzone", defaultProps, props), {
    className,
    padding,
    radius,
    disabled,
    classNames,
    styles,
    loading,
    multiple,
    maxSize,
    accept,
    children,
    onDropAny,
    onDrop,
    onReject,
    openRef,
    name,
    unstyled,
    maxFiles,
    autoFocus,
    activateOnClick,
    activateOnDrag,
    dragEventsBubbling,
    activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    getFilesFromEvent,
    validator,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "padding",
    "radius",
    "disabled",
    "classNames",
    "styles",
    "loading",
    "multiple",
    "maxSize",
    "accept",
    "children",
    "onDropAny",
    "onDrop",
    "onReject",
    "openRef",
    "name",
    "unstyled",
    "maxFiles",
    "autoFocus",
    "activateOnClick",
    "activateOnDrag",
    "dragEventsBubbling",
    "activateOnKeyboard",
    "onDragEnter",
    "onDragLeave",
    "onDragOver",
    "onFileDialogCancel",
    "onFileDialogOpen",
    "preventDropOnDocument",
    "useFsAccessApi",
    "getFilesFromEvent",
    "validator",
    "variant"
  ]);
  const { classes, cx } = Dropzone_styles['default']({ radius, padding }, { name: "Dropzone", classNames, styles, unstyled, variant });
  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = reactDropzone.useDropzone(__spreadValues({
    onDrop: onDropAny,
    onDropAccepted: onDrop,
    onDropRejected: onReject,
    disabled: disabled || loading,
    accept: Array.isArray(accept) ? accept.reduce((r, key) => __spreadProps(__spreadValues({}, r), { [key]: [] }), {}) : accept,
    multiple,
    maxSize,
    maxFiles,
    autoFocus,
    noClick: !activateOnClick,
    noDrag: !activateOnDrag,
    noDragEventsBubbling: !dragEventsBubbling,
    noKeyboard: !activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    validator
  }, getFilesFromEvent ? { getFilesFromEvent } : null));
  hooks.assignRef(openRef, open);
  const isIdle = !isDragAccept && !isDragReject;
  return /* @__PURE__ */ React__default.createElement(Dropzone_context.DropzoneProvider, {
    value: { accept: isDragAccept, reject: isDragReject, idle: isIdle }
  }, /* @__PURE__ */ React__default.createElement(core.Box, __spreadProps(__spreadValues(__spreadValues({}, others), getRootProps()), {
    "data-accept": isDragAccept || void 0,
    "data-reject": isDragReject || void 0,
    "data-idle": isIdle || void 0,
    "data-loading": loading || void 0,
    className: cx(classes.root, className)
  }), /* @__PURE__ */ React__default.createElement(core.LoadingOverlay, {
    visible: loading,
    radius,
    unstyled
  }), /* @__PURE__ */ React__default.createElement("input", __spreadProps(__spreadValues({}, getInputProps()), {
    name
  })), /* @__PURE__ */ React__default.createElement("div", {
    className: classes.inner
  }, children)));
}
_Dropzone.displayName = "@mantine/dropzone/Dropzone";
_Dropzone.Accept = DropzoneStatus.DropzoneAccept;
_Dropzone.Reject = DropzoneStatus.DropzoneReject;
_Dropzone.Idle = DropzoneStatus.DropzoneIdle;
const Dropzone = _Dropzone;

exports.Dropzone = Dropzone;
exports._Dropzone = _Dropzone;
exports.defaultProps = defaultProps;
//# sourceMappingURL=Dropzone.js.map
