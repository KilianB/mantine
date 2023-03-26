'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />;
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(dates.TimeInput, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconClock, {
      size: "1rem",
      stroke: 1.5
    }),
    maw: 400,
    mx: "auto"
  });
}
const icon = {
  type: "demo",
  component: Demo,
  code
};

exports.icon = icon;
//# sourceMappingURL=TimeInput.demo.icon.js.map
