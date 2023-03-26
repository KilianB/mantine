'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');
var dates = require('@mantine/dates');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>();

  return (
    <TimeInput
      label="Click click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  const ref = React.useRef();
  return /* @__PURE__ */ React__default.createElement(dates.TimeInput, {
    label: "Click click icon to show browser picker",
    ref,
    rightSection: /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
      onClick: () => ref.current.showPicker()
    }, /* @__PURE__ */ React__default.createElement(iconsReact.IconClock, {
      size: "1rem",
      stroke: 1.5
    })),
    maw: 400,
    mx: "auto"
  });
}
const picker = {
  type: "demo",
  component: Demo,
  code
};

exports.picker = picker;
//# sourceMappingURL=TimeInput.demo.picker.js.map
