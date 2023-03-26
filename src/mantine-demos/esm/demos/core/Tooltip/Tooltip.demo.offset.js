import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Default arrow" offset={20}>
        <Button variant="outline">20 offset</Button>
      </Tooltip>
      <Tooltip label="Arrow with size" offset={-10}>
        <Button variant="outline">-10 offset</Button>
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
    offset: 20
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "20 offset")), /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Arrow with size",
    offset: -10
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline"
  }, "-10 offset")));
}
const offset = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, offset };
//# sourceMappingURL=Tooltip.demo.offset.js.map
