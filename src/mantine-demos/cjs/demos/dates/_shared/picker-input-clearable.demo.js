'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}
`;
function getDemo(Component) {
  return () => /* @__PURE__ */ React__default.createElement(Component, {
    clearable: true,
    defaultValue: new Date(),
    label: "Pick date",
    placeholder: "Pick date",
    mx: "auto",
    maw: 400
  });
}
function getPickerInputClearableDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerInputClearableDemo = getPickerInputClearableDemo;
//# sourceMappingURL=picker-input-clearable.demo.js.map
