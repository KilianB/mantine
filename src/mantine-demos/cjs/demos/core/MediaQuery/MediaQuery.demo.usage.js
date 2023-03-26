'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useMantineTheme, MediaQuery, Stack, Box, CSSObject, rem } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();

  const highlight: CSSObject = {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[7], 0.25)
        : theme.colors.blue[0],
    border: \`\${rem(1)} solid \${
      theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[3]
    }\`,
  };

  const boxStyles = {
    borderRadius: theme.radius.sm,
    padding: \`\${rem(3)} \${rem(5)}\`,
    border: \`\${rem(1)} solid transparent\`,
  };

  return (
    <Stack spacing={5}>
      <MediaQuery largerThan="lg" styles={highlight}>
        <Box sx={boxStyles}>- larger than lg</Box>
      </MediaQuery>
      <MediaQuery smallerThan="lg" styles={highlight}>
        <Box sx={boxStyles}>- Smaller than lg</Box>
      </MediaQuery>
      <MediaQuery smallerThan="xl" largerThan="sm" styles={highlight}>
        <Box sx={boxStyles}>- Smaller than xl, larger than sm</Box>
      </MediaQuery>
      <MediaQuery smallerThan={1500} largerThan={800} styles={highlight}>
        <Box sx={boxStyles}>- Smaller than 1500, larger than 800</Box>
      </MediaQuery>
    </Stack>
  );
}
`;
function Demo() {
  const theme = core.useMantineTheme();
  const highlight = {
    backgroundColor: theme.colorScheme === "dark" ? theme.fn.rgba(theme.colors.blue[7], 0.25) : theme.colors.blue[0],
    border: `${core.rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.blue[6] : theme.colors.blue[3]}`
  };
  const boxStyles = {
    borderRadius: theme.radius.sm,
    padding: `${core.rem(3)} ${core.rem(5)}`,
    border: `${core.rem(1)} solid transparent`
  };
  return /* @__PURE__ */ React__default.createElement(core.Stack, {
    spacing: 5
  }, /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    largerThan: "lg",
    styles: highlight
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: boxStyles
  }, "- larger than lg")), /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    smallerThan: "lg",
    styles: highlight
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: boxStyles
  }, "- Smaller than lg")), /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    smallerThan: "xl",
    largerThan: "sm",
    styles: highlight
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: boxStyles
  }, "- Smaller than xl, larger than sm")), /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    smallerThan: 1500,
    largerThan: 800,
    styles: highlight
  }, /* @__PURE__ */ React__default.createElement(core.Box, {
    sx: boxStyles
  }, "- Smaller than 1500, larger than 800")));
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=MediaQuery.demo.usage.js.map
