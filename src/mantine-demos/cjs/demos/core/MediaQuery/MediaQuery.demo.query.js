'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MediaQuery, Text, rem } from '@mantine/core';

function Demo() {
  return (
    <MediaQuery
      query="(max-width: ${core.em(1200)}) and (min-width: ${core.em(800)})"
      styles={{ fontSize: rem(20), '&:hover': { backgroundColor: 'silver' } }}
    >
      <Text>(max-width: ${core.em(1200)}) and (min-width: ${core.em(800)}) breakpoints</Text>
    </MediaQuery>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MediaQuery, {
    query: `(max-width: ${core.em(1200)}) and (min-width: ${core.em(800)})`,
    styles: { fontSize: core.rem(20), "&:hover": { backgroundColor: "silver" } }
  }, /* @__PURE__ */ React__default.createElement(core.Text, null, "(max-width: ", core.em(1200), ") and (min-width: ", core.em(800), ") breakpoints"));
}
const query = {
  type: "demo",
  component: Demo,
  code
};

exports.query = query;
//# sourceMappingURL=MediaQuery.demo.query.js.map
