'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Stepper } from '@mantine/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX size="1.1rem" />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active: 2,
    breakpoint: "sm"
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 2",
    description: "Verify email",
    color: "red",
    completedIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleX, {
      size: "1.1rem"
    })
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const stepColor = {
  type: "demo",
  component: Demo,
  code
};

exports.stepColor = stepColor;
//# sourceMappingURL=Stepper.demo.stepColor.js.map
