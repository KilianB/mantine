import React, { useState } from 'react';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';
import { Stepper } from '@mantine/core';

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
  const [active, setActive] = useState(0);
  return /* @__PURE__ */ React.createElement(Stepper, {
    active,
    onStepClick: setActive
  }, /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(IconUserCheck, {
      size: "1.1rem"
    })
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(IconMailOpened, {
      size: "1.1rem"
    })
  }), /* @__PURE__ */ React.createElement(Stepper.Step, {
    icon: /* @__PURE__ */ React.createElement(IconShieldCheck, {
      size: "1.1rem"
    })
  }));
}
const iconsOnly = {
  type: "demo",
  component: Demo,
  code
};

export { iconsOnly };
//# sourceMappingURL=Stepper.demo.iconsOnly.js.map
