'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Button component="a" href="#" variant="outline" leftIcon={<IconExternalLink size="0.9rem" />}>
      Open in new tab
    </Button>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    component: "a",
    href: "#",
    variant: "outline",
    leftIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconExternalLink, {
      size: "0.9rem"
    })
  }, "Open in new tab"));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

exports.component = component;
//# sourceMappingURL=Button.demo.component.js.map
