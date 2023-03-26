import React from 'react';
import { Group, ActionIcon, rem } from '@mantine/core';
import { IconSun } from '@tabler/icons-react';

const code = `
import { ActionIcon, Group } from '@mantine/core';
import { Sun } from 'tabler-icons-react';
function Demo() {
  return (
    <>
      <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: 'orange', to: 'red' }}><IconSun size={18} /></ActionIcon>
      <ActionIcon variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}><IconSun size={18} /></ActionIcon>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" }
  }, /* @__PURE__ */ React.createElement(IconSun, {
    size: rem(18)
  })), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 }
  }, /* @__PURE__ */ React.createElement(IconSun, {
    size: rem(18)
  })), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 }
  }, /* @__PURE__ */ React.createElement(IconSun, {
    size: rem(18)
  })), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "gradient",
    gradient: { from: "orange", to: "red" }
  }, /* @__PURE__ */ React.createElement(IconSun, {
    size: rem(18)
  })), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "gradient",
    gradient: { from: "#ed6ea0", to: "#ec8c69", deg: 35 }
  }, /* @__PURE__ */ React.createElement(IconSun, {
    size: rem(18)
  })));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

export { gradient };
//# sourceMappingURL=ActionIcon.demo.gradient.js.map
