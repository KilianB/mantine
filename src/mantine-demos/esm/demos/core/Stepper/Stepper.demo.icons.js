import React, { useState } from 'react';
import { IconCircleCheck, IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';
import { Stepper } from '@mantine/core';

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
  const [active, setActive] = useState(1);
  return /* @__PURE__ */ React.createElement(Stepper, {
    active,
    onStepClick: setActive,
    completedIcon: /* @__PURE__ */ React.createElement(IconCircleCheck, null),
    breakpoint: "sm"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(IconUserCheck, {
      size: "1.1rem"
    }),
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(IconMailOpened, {
      size: "1.1rem"
    }),
    label: "Step 2",
    description: "Verify email"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(IconShieldCheck, {
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

export { icons };
//# sourceMappingURL=Stepper.demo.icons.js.map
