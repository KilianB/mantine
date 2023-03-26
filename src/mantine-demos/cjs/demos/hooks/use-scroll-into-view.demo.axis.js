'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var hooks = require('@mantine/hooks');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const { scrollIntoView, targetRef, scrollableRef } = hooks.useScrollIntoView({ axis: "x" });
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref: scrollableRef,
    h: 150,
    w: 300,
    sx: { overflowX: "scroll" }
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    pl: 260,
    pr: 450
  }, /* @__PURE__ */ React__default.createElement(core.Paper, {
    ref: targetRef,
    p: "md",
    sx: (theme) => ({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
      width: "max-content"
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "Scroll me into view")))), /* @__PURE__ */ React__default.createElement(core.Button, {
    onClick: () => scrollIntoView()
  }, "Scroll to target"));
}
const useScrollIntoViewAxis = {
  type: "demo",
  code,
  component: Demo
};

exports.useScrollIntoViewAxis = useScrollIntoViewAxis;
//# sourceMappingURL=use-scroll-into-view.demo.axis.js.map
