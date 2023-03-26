'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { IconUserCheck, IconMailOpened, IconShieldCheck, IconCircleCheck } from '@tabler/icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} completedIcon={<IconCircleCheck />}>
      <Stepper.Step icon={<IconUserCheck size="1.1rem" />} label="Step 1" description="Create an account" />
      <Stepper.Step icon={<IconMailOpened size="1.1rem" />} label="Step 2" description="Verify email" />
      <Stepper.Step icon={<IconShieldCheck size="1.1rem" />} label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = React.useState(1);
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active,
    onStepClick: setActive,
    completedIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconCircleCheck, null),
    breakpoint: "sm"
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconUserCheck, {
      size: "1.1rem"
    }),
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconMailOpened, {
      size: "1.1rem"
    }),
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconShieldCheck, {
      size: "1.1rem"
    }),
    label: "Step 3",
    description: "Get full access"
  }));
}
const icons = {
  type: "demo",
  component: Demo,
  code
};

exports.icons = icons;
//# sourceMappingURL=Stepper.demo.icons.js.map
