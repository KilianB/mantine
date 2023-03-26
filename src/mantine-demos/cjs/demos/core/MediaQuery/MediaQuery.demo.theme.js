'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MediaQuery, Text } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${core.em(1200)}) and (min-width: ${core.em(800)})"
      styles={(theme) => ({
        fontSize: theme.fontSizes.lg,
        '&:hover': { backgroundColor: theme.fn.primaryColor(), color: theme.white },
      })}
    >
      <Text>(max-width: ${core.em(1200)}) and (min-width: ${core.em(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    query: `(max-width: ${core.em(1200)}) and (min-width: ${core.em(800)})`,
    styles: (theme2) => ({
      fontSize: theme2.fontSizes.lg,
      "&:hover": { backgroundColor: theme2.fn.primaryColor(), color: theme2.white }
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "(max-width: ", core.em(1200), ") and (min-width: ", core.em(800), ") breakpoints"));
}
const theme = {
  type: "demo",
  component: Demo,
  code
};

exports.theme = theme;
//# sourceMappingURL=MediaQuery.demo.theme.js.map
