import React from 'react';
import { IconCircleX } from '@tabler/icons-react';
import { Stepper } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Stepper, {
    active: 2,
    breakpoint: "sm"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 1",
    description: "Create an account"
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 2",
    description: "Verify email",
    color: "red",
    completedIcon: /* @__PURE__ */ React.createElement(IconCircleX, {
      size: "1.1rem"
    })
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Step 3",
    description: "Get full access"
  }));
}
const stepColor = {
  type: "demo",
  component: Demo,
  code
};

export { stepColor };
//# sourceMappingURL=Stepper.demo.stepColor.js.map
