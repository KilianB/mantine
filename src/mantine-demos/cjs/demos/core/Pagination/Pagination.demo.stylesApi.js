'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
          },
        },
      })}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Pagination, {
    total: 10,
    position: "center",
    styles: (theme) => ({
      control: {
        "&[data-active]": {
          backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" })
        }
      }
    })
  });
}
const stylesApi = {
  type: "demo",
  code,
  component: Demo
};

exports.stylesApi = stylesApi;
//# sourceMappingURL=Pagination.demo.stylesApi.js.map
