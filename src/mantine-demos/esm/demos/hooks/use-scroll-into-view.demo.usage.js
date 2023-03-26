import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Group, Button, Box, Text } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <Group position="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '50vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        })}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}
`;
function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView({
    offset: 60
  });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => scrollIntoView({
      alignment: "center"
    })
  }, "Scroll to target"), /* @__PURE__ */ React.createElement(Box, {
    sx: (theme) => ({
      width: "100%",
      height: "50vh",
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    })
  }), /* @__PURE__ */ React.createElement(Text, {
    ref: targetRef
  }, "Hello there"));
}
const useScrollIntoViewUsage = {
  type: "demo",
  code,
  component: Demo
};

export { useScrollIntoViewUsage };
//# sourceMappingURL=use-scroll-into-view.demo.usage.js.map
