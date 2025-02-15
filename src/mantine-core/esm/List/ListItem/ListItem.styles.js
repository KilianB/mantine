import { createStyles, getStylesRef, getSize } from '@mantine/styles';

var useStyles = createStyles((theme, { spacing, center }) => ({
  itemWrapper: {
    ref: getStylesRef("itemWrapper"),
    display: "inline-flex",
    flexDirection: "column",
    whiteSpace: "normal"
  },
  item: {
    whiteSpace: "nowrap",
    lineHeight: center ? 1 : theme.lineHeight,
    "&:not(:first-of-type)": {
      marginTop: getSize({ size: spacing, sizes: theme.spacing })
    },
    "&[data-with-icon]": {
      listStyle: "none",
      [`& .${getStylesRef("itemWrapper")}`]: {
        display: "inline-flex",
        alignItems: center ? "center" : "flex-start",
        flexDirection: "row"
      }
    }
  },
  itemIcon: {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: theme.spacing.sm
  }
}));

export default useStyles;
//# sourceMappingURL=ListItem.styles.js.map
