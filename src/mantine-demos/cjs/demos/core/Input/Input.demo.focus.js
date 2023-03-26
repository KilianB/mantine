'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Input, {
    placeholder: "Input with custom focus styles",
    styles: (theme) => ({
      input: {
        "&:focus-within": {
          borderColor: theme.colors.orange[7]
        }
      }
    })
  });
}
const focus = {
  type: "demo",
  component: Demo,
  code
};

exports.focus = focus;
//# sourceMappingURL=Input.demo.focus.js.map
