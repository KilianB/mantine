import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" withArrow>
        <Button variant="outline">Default arrow</Button>
      </Tooltip>

      <Tooltip label="Arrow with size" withArrow arrowSize={6}>
        <Button variant="outline">With size</Button>
      </Tooltip>

      <Tooltip label="Arrow with radius" withArrow arrowSize={6} arrowRadius={4}>
        <Button variant="outline">With radius</Button>
      </Tooltip>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Default arrow",
    withArrow: true
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "Default arrow")), /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Arrow with size",
    withArrow: true,
    arrowSize: 6
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "With size")), /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Arrow with radius",
    withArrow: true,
    arrowSize: 6,
    arrowRadius: 4
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "With radius")));
}
const arrow = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, arrow };
//# sourceMappingURL=Tooltip.demo.arrow.js.map
