'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { UnstyledButton, Group, Avatar, Text } from '@mantine/core';

function Demo() {
  return (
    <UnstyledButton>
      <Group>
        <Avatar size={40} color="blue">BH</Avatar>
        <div>
          <Text>Bob Handsome</Text>
          <Text size="xs" color="dimmed">bob@handsome.inc</Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.UnstyledButton, {
    "aria-label": "Open user menu"
  }, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    size: 40,
    color: "blue"
  }, "BH"), /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement(core.Text, null, "Bob Handsome"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "xs",
    color: "dimmed"
  }, "bob@handsome.inc")))));
}
const usage = {
  type: "demo",
  code,
  component: Demo
};

exports.usage = usage;
//# sourceMappingURL=UnstyledButton.demo.usage.js.map
