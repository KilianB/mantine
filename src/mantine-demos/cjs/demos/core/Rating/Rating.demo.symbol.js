'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Rating, {
    emptySymbol: /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, {
      size: "1rem"
    }),
    fullSymbol: /* @__PURE__ */ React__default.createElement(iconsReact.IconMoon, {
      size: "1rem"
    })
  }));
}
const symbol = {
  type: "demo",
  component: Demo,
  code
};

exports.symbol = symbol;
//# sourceMappingURL=Rating.demo.symbol.js.map
