'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, { colorScheme, native, maxLineSize, radius }) => ({
  scrollArea: {},
  root: {
    position: "relative"
  },
  code: {
    boxSizing: "border-box",
    position: "relative",
    fontFamily: theme.fontFamilyMonospace,
    lineHeight: 1.7,
    fontSize: core.rem(13),
    overflowX: native ? "auto" : void 0,
    borderRadius: theme.fn.radius(radius),
    padding: `${theme.spacing.sm} 0`,
    marginTop: 0,
    marginBottom: 0
  },
  copy: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.dir === "ltr" ? theme.spacing.xs : "unset",
    left: theme.dir === "rtl" ? theme.spacing.xs : "unset",
    zIndex: 2,
    "&, &:hover": {
      backgroundColor: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
    }
  },
  line: {
    display: "flex",
    width: "100%",
    padding: `0 ${theme.spacing.md}`
  },
  lineNumber: {
    color: colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[4],
    textAlign: "right",
    width: `calc(8 * ${core.rem(maxLineSize)})`,
    marginRight: theme.dir === "ltr" ? theme.spacing.xs : void 0,
    marginLeft: theme.dir === "rtl" ? theme.spacing.xs : void 0,
    userSelect: "none"
  },
  lineContent: {
    width: "100%"
  }
}));

exports.default = useStyles;
//# sourceMappingURL=Prism.styles.js.map
