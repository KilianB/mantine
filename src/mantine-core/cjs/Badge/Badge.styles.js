'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');

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
const BADGE_VARIANTS = ["light", "filled", "outline", "dot", "gradient"];
const sizes = {
  xs: { fontSize: styles.rem(9), height: styles.rem(16) },
  sm: { fontSize: styles.rem(10), height: styles.rem(18) },
  md: { fontSize: styles.rem(11), height: styles.rem(20) },
  lg: { fontSize: styles.rem(13), height: styles.rem(26) },
  xl: { fontSize: styles.rem(16), height: styles.rem(32) }
};
const dotSizes = {
  xs: styles.rem(4),
  sm: styles.rem(4),
  md: styles.rem(6),
  lg: styles.rem(8),
  xl: styles.rem(10)
};
function getVariantStyles({ theme, variant, color, size, gradient }) {
  if (!BADGE_VARIANTS.includes(variant)) {
    return null;
  }
  if (variant === "dot") {
    const dotSize = styles.getSize({ size, sizes: dotSizes });
    return {
      backgroundColor: "transparent",
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
      border: `${styles.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[3]}`,
      paddingLeft: `calc(${styles.getSize({ size, sizes: theme.spacing })} / 1.5 - ${dotSize} / 2)`,
      "&::before": {
        content: '""',
        display: "block",
        width: dotSize,
        height: dotSize,
        borderRadius: dotSize,
        backgroundColor: theme.fn.themeColor(color, theme.colorScheme === "dark" ? 4 : theme.fn.primaryShade("light"), true),
        marginRight: dotSize
      }
    };
  }
  const colors = theme.fn.variant({ color, variant, gradient });
  return {
    background: colors.background,
    color: colors.color,
    border: `${styles.rem(variant === "gradient" ? 0 : 1)} solid ${colors.border}`
  };
}
var useStyles = styles.createStyles((theme, { color, radius, gradient, fullWidth }, { variant, size }) => {
  const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;
  return {
    leftSection: {
      marginRight: `calc(${theme.spacing.xs} / 2)`
    },
    rightSection: {
      marginLeft: `calc(${theme.spacing.xs} / 2)`
    },
    inner: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    root: __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, theme.fn.focusStyles()), theme.fn.fontStyles()), {
      fontSize,
      height,
      WebkitTapHighlightColor: "transparent",
      lineHeight: `calc(${height} - ${styles.rem(2)})`,
      textDecoration: "none",
      padding: `0 calc(${styles.getSize({ size, sizes: theme.spacing })} / 1.5)`,
      boxSizing: "border-box",
      display: fullWidth ? "flex" : "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: fullWidth ? "100%" : "auto",
      textTransform: "uppercase",
      borderRadius: theme.fn.radius(radius),
      fontWeight: 700,
      letterSpacing: styles.rem(0.25),
      cursor: "inherit",
      textOverflow: "ellipsis",
      overflow: "hidden"
    }), getVariantStyles({ theme, variant, color, size, gradient }))
  };
});

exports.default = useStyles;
//# sourceMappingURL=Badge.styles.js.map
