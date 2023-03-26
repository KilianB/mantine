'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} weight={100} align="center">
        H3 heading aligned to center with 100 font-weight
      </Title>
      <Title order={4} underline color="blue.5">
        Underlined h4 heading with blue color
      </Title>
      <Title order={5} color="dimmed" italic>
        Italic dimmed h5 heading
      </Title>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Title, {
    order: 3,
    weight: 100,
    align: "center"
  }, "H3 heading aligned to center with 100 font-weight"), /* @__PURE__ */ React__default.createElement(core.Title, {
    order: 4,
    underline: true,
    color: "blue.5"
  }, "Underlined h4 heading with blue color"), /* @__PURE__ */ React__default.createElement(core.Title, {
    order: 5,
    color: "dimmed",
    italic: true
  }, "Italic dimmed h5 heading"));
}
const textProps = {
  type: "demo",
  component: Demo,
  code
};

exports.textProps = textProps;
//# sourceMappingURL=Title.demo.textProps.js.map
