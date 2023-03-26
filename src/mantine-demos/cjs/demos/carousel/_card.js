'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const useStyles = core.createStyles((theme) => ({
  card: {
    height: core.rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: core.rem(32),
    marginTop: theme.spacing.xs
  },
  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase"
  }
}));
function Card({ image, title, category }) {
  const { classes } = useStyles();
  return /* @__PURE__ */ React__default.createElement(core.Paper, {
    shadow: "md",
    p: "xl",
    radius: "md",
    sx: { backgroundImage: `url(${image})` },
    className: classes.card
  }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, {
    className: classes.category,
    size: "xs"
  }, category), /* @__PURE__ */ React__default.createElement(core.Title, {
    order: 3,
    className: classes.title
  }, title)), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "white",
    color: "dark"
  }, "Read article"));
}

exports.Card = Card;
//# sourceMappingURL=_card.js.map
