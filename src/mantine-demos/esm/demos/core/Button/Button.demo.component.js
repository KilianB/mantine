import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { Group, Button } from '@mantine/core';

const code = `
import { Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Button component="a" href="#" variant="outline" leftIcon={<IconExternalLink size="0.9rem" />}>
      Open in new tab
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    component: "a",
    href: "#",
    variant: "outline",
    leftIcon: /* @__PURE__ */ React.createElement(IconExternalLink, {
      size: "0.9rem"
    })
  }, "Open in new tab"));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=Button.demo.component.js.map
