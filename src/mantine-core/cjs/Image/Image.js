'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styles = require('@mantine/styles');
var hooks = require('@mantine/hooks');
var ImageIcon = require('./ImageIcon.js');
var Image_styles = require('./Image.styles.js');
var Box = require('../Box/Box.js');
var Text = require('../Text/Text.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
const defaultProps = {
  fit: "cover",
  width: "100%",
  height: "auto",
  radius: 0
};
const Image = React.forwardRef((props, ref) => {
  const _a = styles.useComponentDefaultProps("Image", defaultProps, props), {
    className,
    alt,
    src,
    fit,
    width,
    height,
    radius,
    imageProps,
    withPlaceholder,
    placeholder,
    imageRef,
    classNames,
    styles: styles$1,
    caption,
    unstyled,
    style,
    variant
  } = _a, others = __objRest(_a, [
    "className",
    "alt",
    "src",
    "fit",
    "width",
    "height",
    "radius",
    "imageProps",
    "withPlaceholder",
    "placeholder",
    "imageRef",
    "classNames",
    "styles",
    "caption",
    "unstyled",
    "style",
    "variant"
  ]);
  const { classes, cx } = Image_styles['default']({ radius }, { classNames, styles: styles$1, unstyled, name: "Image", variant });
  const [error, setError] = React.useState(!src);
  const isPlaceholder = withPlaceholder && error;
  hooks.useDidUpdate(() => {
    setError(!src);
  }, [src]);
  return /* @__PURE__ */ React__default.createElement(Box.Box, __spreadValues({
    className: cx(classes.root, className),
    style: __spreadValues({ width: styles.rem(width) }, style),
    ref
  }, others), /* @__PURE__ */ React__default.createElement("figure", {
    className: classes.figure
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: classes.imageWrapper
  }, /* @__PURE__ */ React__default.createElement("img", __spreadValues({
    className: classes.image,
    src,
    alt,
    style: { objectFit: fit, width: styles.rem(width), height: styles.rem(height) },
    ref: imageRef,
    onError: (event) => {
      setError(true);
      typeof (imageProps == null ? void 0 : imageProps.onError) === "function" && imageProps.onError(event);
    }
  }, imageProps)), isPlaceholder && /* @__PURE__ */ React__default.createElement("div", {
    className: classes.placeholder,
    title: alt
  }, placeholder || /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(ImageIcon.ImageIcon, {
    width: styles.rem(40),
    height: styles.rem(40)
  })))), !!caption && /* @__PURE__ */ React__default.createElement(Text.Text, {
    component: "figcaption",
    size: "sm",
    align: "center",
    className: classes.caption
  }, caption)));
});
Image.displayName = "@mantine/core/Image";

exports.Image = Image;
//# sourceMappingURL=Image.js.map
