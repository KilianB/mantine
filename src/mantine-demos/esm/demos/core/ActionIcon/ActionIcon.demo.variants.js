import React from 'react';
import { IconSettings } from '@tabler/icons-react';
import { Group, ActionIcon } from '@mantine/core';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <ActionIcon variant="transparent"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="subtle"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="default"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="outline"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="filled"><IconSettings size="1rem" /></ActionIcon>
      <ActionIcon variant="light"><IconSettings size="1rem" /></ActionIcon>
    </>
  );
}
`;
const icon = /* @__PURE__ */ React.createElement(IconSettings, {
  size: "1rem"
});
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "transparent",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "subtle",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "default",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "outline",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "filled",
    color: "blue"
  }, icon), /* @__PURE__ */ React.createElement(ActionIcon, {
    variant: "light",
    color: "blue"
  }, icon));
}
const variants = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, variants };
//# sourceMappingURL=ActionIcon.demo.variants.js.map
