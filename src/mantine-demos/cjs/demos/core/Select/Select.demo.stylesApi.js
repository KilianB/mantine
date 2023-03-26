'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      placeholder="Custom active styles"
      label="Custom active styles"
      defaultValue="Vue"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      styles={(theme) => ({
        item: {
          // applies styles to selected item
          '&[data-selected]': {
            '&, &:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
              color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
            },
          },

          // applies styles to hovered item (with mouse or keyboard)
          '&[data-hovered]': {},
        },
      })}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Select, {
    maw: 360,
    mx: "auto",
    placeholder: "Custom active styles",
    label: "Custom active styles",
    defaultValue: "Vue",
    data: ["React", "Angular", "Vue", "Svelte"],
    withinPortal: true,
    styles: (theme) => ({
      item: {
        "&[data-selected]": {
          "&, &:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.teal[9] : theme.colors.teal[1],
            color: theme.colorScheme === "dark" ? theme.white : theme.colors.teal[9]
          }
        },
        "&[data-hovered]": {}
      }
    })
  });
}
const stylesApi = {
  type: "demo",
  component: Demo,
  code
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Select.demo.stylesApi.js.map
