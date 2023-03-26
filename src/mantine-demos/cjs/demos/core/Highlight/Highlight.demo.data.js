'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={['this', 'that']}
      sx={(theme) => ({
        '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
        '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] },
      })}
    >
      Highlight this, that, also this and also that
    </Highlight>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Highlight, {
    highlight: ["this", "that"],
    sx: (theme) => ({
      '& [data-highlight="this"]': { backgroundColor: theme.colors.grape[4] },
      '& [data-highlight="that"]': { backgroundColor: theme.colors.teal[4] }
    })
  }, "Highlight this, that, also this and also that");
}
const data = {
  type: "demo",
  code,
  component: Demo
};

exports.data = data;
//# sourceMappingURL=Highlight.demo.data.js.map
