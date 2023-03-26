import React, { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Paper, Box, Text } from '@mantine/core';

const code = `
import { useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { Text, Paper, Box } from '@mantine/core';

function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} h={300} sx={{ overflowY: 'scroll' }}>
      <Box pt={260} pb={280}>
        <Paper
          ref={ref}
          p="xl"
          sx={(theme) => ({
            backgroundColor: entry?.isIntersecting ? theme.colors.green[9] : theme.colors.red[9],
            minWidth: '50%',
          })}
        >
          <Text c="#fff" weight={700}>
            {entry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </Box>
    </Paper>
  );
}
`;
function Demo() {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1
  });
  return /* @__PURE__ */ React.createElement(Paper, {
    ref: containerRef,
    h: 300,
    sx: { overflowY: "scroll" }
  }, /* @__PURE__ */ React.createElement(Box, {
    pt: 260,
    pb: 280
  }, /* @__PURE__ */ React.createElement(Paper, {
    ref,
    p: "xl",
    sx: (theme) => ({
      backgroundColor: (entry == null ? void 0 : entry.isIntersecting) ? theme.colors.green[9] : theme.colors.red[9],
      minWidth: "50%"
    })
  }, /* @__PURE__ */ React.createElement(Text, {
    c: "#fff",
    weight: 700
  }, (entry == null ? void 0 : entry.isIntersecting) ? "Fully visible" : "Obscured"))));
}
const useIntersectionDemo = {
  type: "demo",
  code,
  component: Demo
};

export { useIntersectionDemo };
//# sourceMappingURL=use-intersection.demo.usage.js.map
