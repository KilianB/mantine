import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button variant="outline">Button with tooltip</Button>
    </Tooltip>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Tooltip"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Button with tooltip")));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=Tooltip.demo.usage.js.map
