import { createStyles, getStylesRef, rem } from '@mantine/styles';

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
const WRAPPER_PADDING = 4;
const sizes = {
  xs: `${rem(3)} ${rem(6)}`,
  sm: `${rem(5)} ${rem(10)}`,
  md: `${rem(7)} ${rem(14)}`,
  lg: `${rem(9)} ${rem(16)}`,
  xl: `${rem(12)} ${rem(20)}`
};
var useStyles = createStyles((theme, {
  fullWidth,
  color,
  radius,
  shouldAnimate,
  transitionDuration,
  transitionTimingFunction,
  orientation
}, { size }) => {
  const vertical = orientation === "vertical";
  const colors = theme.fn.variant({ variant: "filled", color });
  return {
    label: __spreadProps(__spreadValues(__spreadValues({
      ref: getStylesRef("label")
    }, theme.fn.focusStyles()), theme.fn.fontStyles()), {
      WebkitTapHighlightColor: "transparent",
      borderRadius: theme.fn.radius(radius),
      fontWeight: 500,
      fontSize: size in theme.fontSizes ? theme.fontSizes[size] : theme.fontSizes.sm,
      cursor: "pointer",
      display: "block",
      textAlign: "center",
      padding: sizes[size in sizes ? size : "sm"],
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      userSelect: "none",
      color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
      transition: `color ${shouldAnimate ? 0 : transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
      "&:hover": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black
      },
      "&[data-disabled]": {
        "&, &:hover": {
          color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5],
          cursor: "not-allowed"
        }
      },
      "&[data-active]": {
        "&, &:hover": {
          color: color || theme.colorScheme === "dark" ? theme.white : theme.black
        }
      }
    }),
    control: {
      ref: getStylesRef("control"),
      position: "relative",
      boxSizing: "border-box",
      flex: 1,
      zIndex: 2,
      transition: `border-left-color ${shouldAnimate ? 0 : transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
      "&:not(:first-of-type)": {
        borderStyle: "solid",
        borderWidth: vertical ? `${rem(1)} 0 0 0` : `0 0 0 ${rem(1)}`,
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }
    },
    input: {
      height: 0,
      width: 0,
      position: "absolute",
      overflow: "hidden",
      whiteSpace: "nowrap",
      opacity: 0,
      "&:focus": {
        outline: "none",
        [`& + .${getStylesRef("label")}`]: __spreadValues({}, theme.focusRing === "always" || theme.focusRing === "auto" ? theme.focusRingStyles.styles(theme) : theme.focusRingStyles.resetStyles(theme)),
        "&:focus:not(:focus-visible)": {
          [`& + .${getStylesRef("label")}`]: __spreadValues({}, theme.focusRing === "auto" || theme.focusRing === "never" ? theme.focusRingStyles.resetStyles(theme) : null)
        }
      }
    },
    root: {
      position: "relative",
      display: fullWidth || vertical ? "flex" : "inline-flex",
      width: vertical && !fullWidth ? "max-content" : "auto",
      flexDirection: vertical ? "column" : "row",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[1],
      borderRadius: theme.fn.radius(radius),
      overflow: "hidden",
      padding: WRAPPER_PADDING
    },
    controlActive: {
      borderLeftColor: "transparent !important",
      borderTopColor: "transparent !important",
      [`& + .${getStylesRef("control")}`]: {
        [vertical ? "borderTopColor" : "borderLeftColor"]: "transparent !important"
      },
      borderRadius: theme.fn.radius(radius),
      boxShadow: shouldAnimate ? color || theme.colorScheme === "dark" ? "none" : theme.shadows.xs : void 0,
      backgroundColor: shouldAnimate ? color ? colors.background : theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white : void 0
    },
    indicator: {
      boxSizing: "border-box",
      borderRadius: theme.fn.radius(radius),
      position: "absolute",
      zIndex: 1,
      boxShadow: color || theme.colorScheme === "dark" ? "none" : theme.shadows.xs,
      transition: `transform ${shouldAnimate ? 0 : transitionDuration}ms ${theme.transitionTimingFunction}, width ${shouldAnimate ? 0 : transitionDuration / 2}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
      backgroundColor: color ? colors.background : theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white
    }
  };
});

export default useStyles;
export { WRAPPER_PADDING };
//# sourceMappingURL=SegmentedControl.styles.js.map
