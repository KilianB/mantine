'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Price"
      defaultValue={1000}
      parser={(value) => value.replace(/\\$\\s?|(,*)/g, '')}
      formatter={(value) =>
        !Number.isNaN(parseFloat(value))
          ? \`$ \${value}\`.replace(/\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, ',')
          : '$ '
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Price",
    defaultValue: 1e3,
    formatter: (value) => !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "$ ",
    parser: (value) => value.replace(/\$\s?|(,*)/g, "")
  });
}
const formatter = {
  type: "demo",
  code,
  component: Demo
};

exports.formatter = formatter;
//# sourceMappingURL=NumberInput.demo.formatter.js.map
