'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@mantine/core');

var useStyles = core.createStyles((theme, { radius }) => ({
  tab: {
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    height: core.rem(34),
    border: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
    borderBottom: 0,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7],
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    borderRadius: 0,
    "&:first-of-type": {
      borderTopLeftRadius: theme.radius.sm
    },
    "&:not(:first-of-type)": {
      borderLeft: 0
    },
    "&:last-of-type": {
      borderTopRightRadius: theme.radius.sm
    },
    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
    },
    "&[data-active]": {
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.fn.rgba(theme.colors.gray[0], 0.65),
      "&::before": {
        backgroundColor: "transparent"
      }
    }
  },
  prism: {
    borderRadius: theme.fn.radius(radius),
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    border: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
    borderTop: 0,
    overflow: "hidden"
  },
  code: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    border: 0
  }
}));

exports.default = useStyles;
//# sourceMappingURL=PrismTabs.styles.js.map
