import React from 'react';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';
import { Input, Tooltip } from '@mantine/core';

const code = `
import { Input, Tooltip } from '@mantine/core';
import { IconBrandTwitter, IconAlertCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <Input
      icon={<IconBrandTwitter size="1rem" />}
      placeholder="Your twitter"
      rightSection={
        <Tooltip label="This is public" position="top-end" withArrow>
          <div>
            <IconAlertCircle size="1rem" style={{ display: 'block', opacity: 0.5 }} />
          </div>
        </Tooltip>
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Input, {
    icon: /* @__PURE__ */ React.createElement(IconBrandTwitter, {
      size: "1rem",
      stroke: 1.5
    }),
    placeholder: "Your twitter",
    rightSection: /* @__PURE__ */ React.createElement(Tooltip, {
      label: "This is public",
      position: "top-end",
      withArrow: true
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(IconAlertCircle, {
      size: "1rem",
      stroke: 1.5,
      style: { display: "block", opacity: 0.5 }
    })))
  });
}
const icon = {
  type: "demo",
  code,
  component: Demo
};

export { icon };
//# sourceMappingURL=Input.demo.icon.js.map
