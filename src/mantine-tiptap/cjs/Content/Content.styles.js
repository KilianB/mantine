'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

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
function getCodeHighlight(withCodeHighlightStyles, theme) {
  if (!withCodeHighlightStyles) {
    return null;
  }
  const highlightIndex = theme.colorScheme === "dark" ? 5 : 7;
  return {
    pre: {
      background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.fn.rgba(theme.colors.gray[0], 0.65),
      borderRadius: theme.fn.radius(),
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
      fontFamily: theme.fontFamilyMonospace,
      padding: `${theme.spacing.md} ${theme.spacing.xl}`,
      "& code": {
        background: "none",
        color: "inherit",
        fontSize: theme.fontSizes.sm,
        padding: 0
      },
      " & .hljs-comment, & .hljs-quote": {
        color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5]
      },
      "& .hljs-variable, & .hljs-template-variable, & .hljs-attribute, & .hljs-tag, & .hljs-name, & .hljs-regexp, & .hljs-link, & .hljs-name, & .hljs-selector-id, & .hljs-selector-class": {
        color: theme.colors.red[highlightIndex]
      },
      "& .hljs-number, & .hljs-meta, & .hljs-built_in, & .hljs-builtin-name, & .hljs-literal, & .hljs-type, & .hljs-params": {
        color: theme.colors[theme.colorScheme === "dark" ? "cyan" : "blue"][highlightIndex]
      },
      "& .hljs-string, & .hljs-symbol, & .hljs-bullet": {
        color: theme.colors.red[highlightIndex]
      },
      "& .hljs-title, & .hljs-section": {
        color: theme.colors[theme.colorScheme === "dark" ? "yellow" : "pink"][highlightIndex]
      },
      "& .hljs-keyword, & .hljs-selector-tag": {
        color: theme.colors.violet[highlightIndex]
      },
      "& .hljs-emphasis": {
        fontStyle: "italic"
      },
      "& .hljs-strong": {
        fontWeight: 700
      }
    }
  };
}
function getTypographyStyles(withTypographyStyles) {
  if (!withTypographyStyles) {
    return null;
  }
  return {
    "& li > p": {
      margin: 0
    },
    "& ul li, & ol li": {
      marginTop: core.rem(2)
    },
    "& ul, & ol": {
      marginTop: core.rem(5),
      marginBottom: core.rem(5)
    },
    "& p": {
      marginBottom: core.rem(7)
    },
    "& h1, & h2, & h3, & h4, & h5, & h6, & p": {
      marginTop: 0
    }
  };
}
var useStyles = core.createStyles((theme, { withCodeHighlightStyles, withTypographyStyles }) => ({
  typographyStylesProvider: __spreadValues({}, getTypographyStyles(withTypographyStyles)),
  content: __spreadValues({
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderRadius: theme.fn.radius(),
    "& .ProseMirror": {
      outline: 0,
      padding: theme.spacing.md
    },
    "& .ProseMirror > *:last-child": {
      marginBottom: 0
    },
    "& .ProseMirror p.is-editor-empty:first-of-type::before": __spreadValues({
      content: "attr(data-placeholder)",
      pointerEvents: "none",
      userSelect: "none",
      float: "left",
      height: 0
    }, theme.fn.placeholderStyles())
  }, getCodeHighlight(withCodeHighlightStyles, theme))
}));

exports.default = useStyles;
//# sourceMappingURL=Content.styles.js.map
