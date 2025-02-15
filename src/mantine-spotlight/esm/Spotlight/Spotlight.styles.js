import { createStyles, rem } from '@mantine/core';

var useStyles = createStyles((theme) => ({
  content: {
    position: "relative",
    overflow: "hidden"
  },
  searchInput: {
    border: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    "&, &:focus-within": {
      borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`
    }
  }
}));

export default useStyles;
//# sourceMappingURL=Spotlight.styles.js.map
