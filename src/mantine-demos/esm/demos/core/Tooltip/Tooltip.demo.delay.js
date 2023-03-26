import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button variant="outline">Delay open - 500ms</Button>
      </Tooltip>

      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button variant="outline">Delay close - 500ms</Button>
      </Tooltip>
    </>
  );
};
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Opened after 500ms",
    openDelay: 500
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Delay open - 500ms")), /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Closes after 500ms",
    closeDelay: 500
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Delay close - 500ms")));
}
const delay = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, delay };
//# sourceMappingURL=Tooltip.demo.delay.js.map
