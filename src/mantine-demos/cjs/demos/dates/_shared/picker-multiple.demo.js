'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <${name} type="multiple" value={value} onChange={setValue} />
    </Group>
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = React.useState([]);
    return /* @__PURE__ */ React__default.createElement(core.Group, {
      position: "center"
    }, /* @__PURE__ */ React__default.createElement(Component, {
      type: "multiple",
      value,
      onChange: setValue
    }));
  };
}
function getPickerMultipleDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerMultipleDemo = getPickerMultipleDemo;
//# sourceMappingURL=picker-multiple.demo.js.map
