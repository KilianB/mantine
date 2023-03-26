import React from 'react';
import { createStyles, rem, Paper, Text, Title, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
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
    fontSize: rem(32),
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
  return /* @__PURE__ */ React.createElement(Paper, {
    shadow: "md",
    p: "xl",
    radius: "md",
    sx: { backgroundImage: `url(${image})` },
    className: classes.card
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, {
    className: classes.category,
    size: "xs"
  }, category), /* @__PURE__ */ React.createElement(Title, {
    order: 3,
    className: classes.title
  }, title)), /* @__PURE__ */ React.createElement(Button, {
    variant: "white",
    color: "dark"
  }, "Read article"));
}

export { Card };
//# sourceMappingURL=_card.js.map
