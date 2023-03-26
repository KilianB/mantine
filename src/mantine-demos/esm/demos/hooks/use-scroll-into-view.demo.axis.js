import React from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Group, Paper, Box, Text, Button } from '@mantine/core';

const code = `
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text, Group, Paper, Box } from '@mantine/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: 'x' });

  return (
    <Group position="center">
      <Paper ref={scrollableRef} h={150} w={300} sx={{ overflowX: 'scroll' }}>
        <Box pl={260} pr={450}>
          <Paper
            ref={targetRef}
            p="md"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: 'max-content',
            })}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </Box>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}
`;
function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({ axis: "x" });
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref: scrollableRef,
    h: 150,
    w: 300,
    sx: { overflowX: "scroll" }
  }, /* @__PURE__ */ React.createElement(Box, {
    pl: 260,
    pr: 450
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref: targetRef,
    p: "md",
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      width: "max-content"
    })
  }, /* @__PURE__ */ React.createElement(Text, null, "Scroll me into view")))), /* @__PURE__ */ React.createElement(Button, {
    onClick: () => scrollIntoView()
  }, "Scroll to target"));
}
const useScrollIntoViewAxis = {
  type: "demo",
  code,
  component: Demo
};

export { useScrollIntoViewAxis };
//# sourceMappingURL=use-scroll-into-view.demo.axis.js.map
