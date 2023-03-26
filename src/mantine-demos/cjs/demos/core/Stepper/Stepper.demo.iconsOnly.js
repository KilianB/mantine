'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck size="1.1rem" />} />
      <Stepper.Step icon={<IconMailOpened size="1.1rem" />} />
      <Stepper.Step icon={<IconShieldCheck size="1.1rem" />} />
    </Stepper>
  );
}
`;
function Demo() {
  const [active, setActive] = React.useState(0);
  return /* @__PURE__ */ React__default.createElement(core.Stepper, {
    active,
    onStepClick: setActive
  }, /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconUserCheck, {
      size: "1.1rem"
    })
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconMailOpened, {
      size: "1.1rem"
    })
  }), /* @__PURE__ */ React__default.createElement(core.Stepper.Step, {
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconShieldCheck, {
      size: "1.1rem"
    })
  }));
}
const iconsOnly = {
  type: "demo",
  component: Demo,
  code
};

exports.iconsOnly = iconsOnly;
//# sourceMappingURL=Stepper.demo.iconsOnly.js.map
