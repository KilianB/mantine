'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mantine/styles');

const sizes = {
  xs: styles.rem(3),
  sm: styles.rem(5),
  md: styles.rem(8),
  lg: styles.rem(12),
  xl: styles.rem(16)
};
const stripesAnimation = styles.keyframes({
  from: { backgroundPosition: "0 0" },
  to: { backgroundPosition: `${styles.rem(40)} 0` }
});
var useStyles = styles.createStyles((theme, { color, radius }, { size }) => ({
  root: {
    position: "relative",
    height: styles.getSize({ size, sizes }),
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],
    borderRadius: theme.fn.radius(radius),
    overflow: "hidden"
  },
  bar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.fn.variant({
      variant: "filled",
      primaryFallback: false,
      color: color || theme.primaryColor
    }).background,
    transition: "width 100ms linear",
    "&[data-animate]": {
      animation: `${stripesAnimation} 1000ms linear infinite`
    },
    "&[data-striped]": {
      backgroundSize: `${styles.rem(20)} ${styles.rem(20)}`,
      backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"
    },
    "&:last-of-type": {
      borderTopRightRadius: theme.fn.radius(radius),
      borderBottomRightRadius: theme.fn.radius(radius)
    },
    "&:first-of-type": {
      borderTopLeftRadius: theme.fn.radius(radius),
      borderBottomLeftRadius: theme.fn.radius(radius)
    },
    "@media (prefers-reduced-motion)": {
      transitionDuration: theme.respectReducedMotion ? "0ms" : void 0
    }
  },
  label: {
    color: theme.white,
    fontSize: `calc(${styles.getSize({ size, sizes })} * 0.65)`,
    fontWeight: 700,
    userSelect: "none",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
}));

exports.default = useStyles;
//# sourceMappingURL=Progress.styles.js.map
