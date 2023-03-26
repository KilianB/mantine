import React from 'react';
import { Group, UnstyledButton, Avatar, Text } from '@mantine/core';

const code = `
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

function Demo() {
  return (
    <UnstyledButton>
      <Group>
        <Avatar size={40} color="blue">BH</Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="dimmed">bob@handsome.inc</Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(UnstyledButton, {
    "aria-label": "Open user menu"
  }, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Avatar, {
    size: 40,
    color: "blue"
  }, "BH"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Text, null, "Bob Handsome"), /* @__PURE__ */ React.createElement(Text, {
    size: "xs",
    color: "dimmed"
  }, "bob@handsome.inc")))));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

export { usage };
//# sourceMappingURL=UnstyledButton.demo.usage.js.map
