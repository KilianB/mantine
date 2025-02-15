import { createStyles, getSize } from '@mantine/styles';

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
var useStyles = createStyles((theme, _params, { size }) => ({
  item: __spreadProps(__spreadValues({}, theme.fn.fontStyles()), {
    boxSizing: "border-box",
    textAlign: "left",
    width: "100%",
    padding: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5) ${getSize({
      size,
      sizes: theme.spacing
    })}`,
    cursor: "pointer",
    fontSize: getSize({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.fn.radius(),
    "&[data-hovered]": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
    },
    "&[data-selected]": __spreadValues({
      backgroundColor: theme.fn.variant({ variant: "filled" }).background,
      color: theme.fn.variant({ variant: "filled" }).color
    }, theme.fn.hover({ backgroundColor: theme.fn.variant({ variant: "filled" }).hover })),
    "&[data-disabled]": {
      cursor: "default",
      color: theme.colors.dark[2]
    }
  }),
  nothingFound: {
    boxSizing: "border-box",
    color: theme.colors.gray[6],
    paddingTop: `calc(${getSize({ size, sizes: theme.spacing })} / 2)`,
    paddingBottom: `calc(${getSize({ size, sizes: theme.spacing })} / 2)`,
    textAlign: "center"
  },
  separator: {
    boxSizing: "border-box",
    textAlign: "left",
    width: "100%",
    padding: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5) ${getSize({
      size,
      sizes: theme.spacing
    })}`
  },
  separatorLabel: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
  }
}));

export default useStyles;
//# sourceMappingURL=SelectItems.styles.js.map
