import React from 'react';
import { Group, Tooltip, Button } from '@mantine/core';

const code = `
import { Button, Group, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Tooltip for disabled button">
        <Button
          data-disabled
          sx={{ '&[data-disabled]': { pointerEvents: 'all' } }}
          onClick={(event) => event.preventDefault()}
        >
          Disabled button
        </Button>
      </Tooltip>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Tooltip, {
    label: "Tooltip for disabled button"
  }, /* @__PURE__ */ React.createElement(Button, {
    "data-disabled": true,
    sx: { "&[data-disabled]": { pointerEvents: "all" } },
    onClick: (event) => event.preventDefault()
  }, "Disabled button")));
}
const disabledTooltip = {
  type: "demo",
  component: Demo,
  code
};

export { disabledTooltip };
//# sourceMappingURL=Button.demo.disabledTooltip.js.map
