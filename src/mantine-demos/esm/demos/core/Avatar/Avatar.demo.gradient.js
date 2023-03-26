import React from 'react';
import { Group, Avatar } from '@mantine/core';

const code = `
import { IconPhoto } from '@tabler/icons-react';
import { Avatar, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Avatar variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: 'orange', to: 'red' }} radius="xl" />
      <Avatar variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} radius="xl" />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Avatar, {
    variant: "gradient",
    gradient: { from: "indigo", to: "cyan" },
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    variant: "gradient",
    gradient: { from: "teal", to: "lime", deg: 105 },
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    variant: "gradient",
    gradient: { from: "teal", to: "blue", deg: 60 },
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    variant: "gradient",
    gradient: { from: "orange", to: "red" },
    radius: "xl"
  }), /* @__PURE__ */ React.createElement(Avatar, {
    variant: "gradient",
    gradient: { from: "#ed6ea0", to: "#ec8c69", deg: 35 },
    radius: "xl"
  }));
}
const gradient = {
  type: "demo",
  component: Demo,
  code
};

export { gradient };
//# sourceMappingURL=Avatar.demo.gradient.js.map
