'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = React.useState(null);
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(dates.YearPicker, {
    decadeLabelFormat: "YY",
    value,
    onChange: setValue
  }));
}
const decadeLabelFormat = {
  type: "demo",
  component: Demo,
  code
};

exports.decadeLabelFormat = decadeLabelFormat;
//# sourceMappingURL=YearPicker.demo.decadeLabelFormat.js.map
