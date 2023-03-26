import React from 'react';
import { Group, Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, "Indigo cyan"), /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, "Lime green"), /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, "Teal blue"), /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, "Orange red"), /* @__PURE__ */ React.createElement(Button, {
    variant: "gradient",
    gradient: { from: "#ed6ea0", to: "#ec8c69", deg: 35 }
  }, "Peach"));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

export { gradient };
//# sourceMappingURL=Button.demo.gradient.js.map
