'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ActionIcon, Avatar, Badge, Group, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

const avatar = (
  <Avatar
    alt="Avatar for badge"
    size={24}
    mr={5}
    src="./avatar.png"
  />
);

const removeButton = (
  <ActionIcon size="xs" color="blue" radius="xl" variant="transparent">
    <IconX size={rem(10)} />
  </ActionIcon>
);

function Demo() {
  return (
    <Group>
      <Badge pl={0} size="lg" color="teal" radius="xl" leftSection={avatar}>
        Badge with Avatar
      </Badge>
      <Badge variant="outline" pr={3} rightSection={removeButton}>
        Badge with right section
      </Badge>
      <Badge variant="outline" pl={3} leftSection={removeButton}>
        Badge with left section
      </Badge>
    </Group>
  );
}
`;
const avatar = /* @__PURE__ */ React__default.createElement(core.Avatar, {
  alt: "Avatar for badge",
  size: 24,
  mr: 5,
  src: "https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
});
const removeButton = /* @__PURE__ */ React__default.createElement(core.ActionIcon, {
  size: "xs",
  color: "blue",
  radius: "xl",
  variant: "transparent"
}, /* @__PURE__ */ React__default.createElement(iconsReact.IconX, {
  size: core.rem(10)
}));
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Badge, {
    pl: 0,
    size: "lg",
    color: "teal",
    radius: "xl",
    leftSection: avatar
  }, "Badge with Avatar"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "outline",
    pr: 3,
    rightSection: removeButton
  }, "Badge with right section"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "outline",
    pl: 3,
    leftSection: removeButton
  }, "Badge with left section"));
}
const sections = {
  type: "demo",
  code,
  component: Demo
};

exports.sections = sections;
//# sourceMappingURL=Badge.demo.sections.js.map
