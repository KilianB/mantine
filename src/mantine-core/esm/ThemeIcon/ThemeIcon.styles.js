import { createStyles, getSize, rem } from '@mantine/styles';

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
const sizes = {
  xs: rem(16),
  sm: rem(20),
  md: rem(26),
  lg: rem(32),
  xl: rem(40)
};
const THEME_ICON_VARIANTS = ["filled", "light", "gradient", "outline", "default"];
function getVariantStyles({ theme, variant, color, gradient }) {
  if (!THEME_ICON_VARIANTS.includes(variant)) {
    return null;
  }
  const colors = theme.fn.variant({
    variant,
    color: color || theme.primaryColor,
    gradient,
    primaryFallback: false
  });
  return {
    backgroundColor: colors.background,
    color: colors.color,
    backgroundImage: variant === "gradient" ? colors.background : void 0,
    border: `${rem(variant === "gradient" ? 0 : 1)} solid ${colors.border}`
  };
}
var useStyles = createStyles((theme, { color, radius, gradient }, { variant, size }) => {
  const iconSize = getSize({ size, sizes });
  return {
    root: __spreadValues(__spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box",
      width: iconSize,
      height: iconSize,
      minWidth: iconSize,
      minHeight: iconSize,
      borderRadius: theme.fn.radius(radius)
    }), getVariantStyles({ theme, variant, gradient, color }))
  };
});

export default useStyles;
//# sourceMappingURL=ThemeIcon.styles.js.map
