import React, { useState } from 'react';
import { useMantineTheme, Group, Button, Paper, rem } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { Paper, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), ['mouseup', 'touchend']);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), ["mouseup", "touchend"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => setOpened(true)
  }, "Open dropdown")), opened && /* @__PURE__ */ React.createElement(Paper, {
    ref,
    shadow: "sm",
    sx: {
      width: rem(300),
      height: rem(60),
      position: "absolute",
      top: 0,
      left: `calc(50% - ${rem(150)})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white
    }
  }, /* @__PURE__ */ React.createElement("span", null, "Click outside to close"))));
}
const useClickOutsideEvents = {
  type: "demo",
  component: Demo,
  code
};

export { useClickOutsideEvents };
//# sourceMappingURL=use-click-outside.demo.events.js.map
