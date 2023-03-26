'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${name}
      icon={<IconCalendar size="1.1rem" stroke={1.5} />}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = React.useState(null);
    return /* @__PURE__ */ React__default.createElement(Component, {
      icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCalendar, {
        size: "1.1rem",
        stroke: 1.5
      }),
      label: "Pick date",
      placeholder: "Pick date",
      value,
      onChange: setValue,
      mx: "auto",
      maw: 400
    });
  };
}
function getPickerInputIconDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

exports.getPickerInputIconDemo = getPickerInputIconDemo;
//# sourceMappingURL=picker-input-icon.demo.js.map
