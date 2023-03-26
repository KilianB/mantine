import React from 'react';
import { Group, Badge } from '@mantine/core';

const code = `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    <>
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Badge>
      <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Badge>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Badge, {
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, "Indigo cyan"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, "Lime green"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, "Teal blue"), /* @__PURE__ */ React.createElement(Badge, {
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, "Orange red"), /* @__PURE__ */ React.createElement(Badge, {
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
//# sourceMappingURL=Badge.demo.gradient.js.map
