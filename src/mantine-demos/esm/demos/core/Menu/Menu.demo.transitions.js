import React from 'react';
import { Group, Menu } from '@mantine/core';
import { DemoMenuItems } from './_menu-items.js';

const code = `
import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Menu, {
    transitionProps: { transition: "rotate-right", duration: 150 }
  }, /* @__PURE__ */ React.createElement(DemoMenuItems, null)));
}
const transitions = {
  type: "demo",
  code,
  component: Demo
};

export { transitions };
//# sourceMappingURL=Menu.demo.transitions.js.map
