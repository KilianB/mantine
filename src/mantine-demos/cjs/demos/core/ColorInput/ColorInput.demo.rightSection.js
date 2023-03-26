'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { IconRefresh } from '@tabler/icons-react';
import { ActionIcon, ColorInput } from '@mantine/core';

const randomColor = () => \`#\${Math.floor(Math.random() * 16777215).toString(16)}\`;

function Demo() {
  const [value, onChange] = useState(randomColor());
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      value={value}
      onChange={onChange}
      rightSection={
        <ActionIcon onClick={() => onChange(randomColor())}>
          <IconRefresh size="1rem" />
        </ActionIcon>
      }
    />
  );
}
`;
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
function Demo() {
  const [value, onChange] = React.useState(randomColor());
  return /* @__PURE__ */ React__default.createElement(core.ColorInput, {
    maw: 320,
    mx: "auto",
    placeholder: "Pick color",
    label: "Your favorite color",
    value,
    onChange,
    rightSection: /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
      onClick: () => onChange(randomColor())
    }, /* @__PURE__ */ React__default.createElement(iconsReact.IconRefresh, {
      size: "1rem"
    }))
  });
}
const rightSection = {
  type: "demo",
  component: Demo,
  code
};

exports.rightSection = rightSection;
//# sourceMappingURL=ColorInput.demo.rightSection.js.map
