import React from 'react';
import { Group, CopyButton, Tooltip, ActionIcon } from '@mantine/core';
import { IconCheck, IconCopy } from '@tabler/icons-react';

const code = `
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
            {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(CopyButton, {
    value: "https://mantine.dev",
    timeout: 2e3
  }, ({ copied, copy }) => /* @__PURE__ */ React.createElement(Tooltip, {
    label: copied ? "Copied" : "Copy",
    withArrow: true,
    position: "right"
  }, /* @__PURE__ */ React.createElement(ActionIcon, {
    color: copied ? "teal" : "gray",
    onClick: copy
  }, copied ? /* @__PURE__ */ React.createElement(IconCheck, {
    size: "1rem"
  }) : /* @__PURE__ */ React.createElement(IconCopy, {
    size: "1rem"
  })))));
}
const tooltip = {
  type: "demo",
  component: Demo,
  code
};

export { tooltip };
//# sourceMappingURL=CopyButton.demo.tooltip.js.map
