import React, { useState } from 'react';
import { Stepper, Group, Button } from '@mantine/core';
import { Content } from './_content.js';

const code = `
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          <Content>Step 2 content: Verify email</Content>
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          <Content>Step 3 content: Get full access</Content>
        </Stepper.Step>

        <Stepper.Completed>
          <Content>Completed, click back button to get to previous step</Content>
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}
`;
function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);
  const handleStepChange = (nextStep) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;
    if (isOutOfBounds) {
      return;
    }
    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };
  const shouldAllowSelectStep = (step) => highestStepVisited >= step && active !== step;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Stepper, {
    active,
    onStepClick: setActive,
    breakpoint: "sm"
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "First step",
    description: "Create an account",
    allowStepSelect: shouldAllowSelectStep(0)
  }, /* @__PURE__ */ React.createElement(Content, null, "Step 1 content: Create an account")), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Second step",
    description: "Verify email",
    allowStepSelect: shouldAllowSelectStep(1)
  }, /* @__PURE__ */ React.createElement(Content, null, "Step 2 content: Verify email")), /* @__PURE__ */ React.createElement(Stepper.Step, {
    label: "Final step",
    description: "Get full access",
    allowStepSelect: shouldAllowSelectStep(2)
  }, /* @__PURE__ */ React.createElement(Content, null, "Step 3 content: Get full access")), /* @__PURE__ */ React.createElement(Stepper.Completed, null, /* @__PURE__ */ React.createElement(Content, null, "Completed, click back button to get to previous step"))), /* @__PURE__ */ React.createElement(Group, {
    position: "center",
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "default",
    onClick: () => handleStepChange(active - 1)
  }, "Back"), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => handleStepChange(active + 1)
  }, "Next step")));
}
const allowStepSelect = {
  type: "demo",
  component: Demo,
  code
};

export { allowStepSelect };
//# sourceMappingURL=Stepper.demo.allowStepSelect.js.map
