import React, { forwardRef, useEffect } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { useModalBaseContext } from '../ModalBase.context.js';
import useStyles from './ModalBaseBody.styles.js';
import { Box } from '../../Box/Box.js';

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
const ModalBaseBody = forwardRef((props, ref) => {
  const ctx = useModalBaseContext();
  const _a = useComponentDefaultProps(`${ctx.__staticSelector}Body`, defaultProps, props), { className } = _a, others = __objRest(_a, ["className"]);
  const { classes, cx } = useStyles({ padding: ctx.padding }, ctx.stylesApi);
  useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return /* @__PURE__ */ React.createElement(Box, __spreadValues({
    id: ctx.getBodyId(),
    className: cx(classes.body, className),
    ref
  }, others));
});

export { ModalBaseBody };
//# sourceMappingURL=ModalBaseBody.js.map
