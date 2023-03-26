'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack spacing={5}>
              <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://twitter.com/mantinedev"
                color="dimmed"
                size="xs"
                sx={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" spacing="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
`;
function HoverCardHomePageDemo({ children }) {
  return /* @__PURE__ */ React__default.createElement(core.HoverCard, {
    width: 320,
    shadow: "md",
    withArrow: true,
    openDelay: 200,
    closeDelay: 400
  }, /* @__PURE__ */ React__default.createElement(core.HoverCard.Target, null, children), /* @__PURE__ */ React__default.createElement(core.HoverCard.Dropdown, null, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: "https://avatars.githubusercontent.com/u/79146003?s=200&v=4",
    radius: "xl"
  }), /* @__PURE__ */ React__default.createElement(core.Stack, {
    spacing: 5
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    weight: 700,
    sx: { lineHeight: 1 }
  }, "Mantine"), /* @__PURE__ */ React__default.createElement(core.Anchor, {
    href: "https://twitter.com/mantinedev",
    color: "dimmed",
    size: "xs",
    sx: { lineHeight: 1 }
  }, "@mantinedev"))), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm",
    mt: "md"
  }, "Customizable React components and hooks library with focus on usability, accessibility and developer experience"), /* @__PURE__ */ React__default.createElement(core.Group, {
    mt: "md",
    spacing: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm"
  }, /* @__PURE__ */ React__default.createElement("b", null, "0"), " Following"), /* @__PURE__ */ React__default.createElement(core.Text, {
    size: "sm"
  }, /* @__PURE__ */ React__default.createElement("b", null, "1,174"), " Followers"))));
}
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(HoverCardHomePageDemo, null, /* @__PURE__ */ React__default.createElement(core.Avatar, {
    src: "https://avatars.githubusercontent.com/u/79146003?s=200&v=4",
    radius: "xl"
  })));
}
const profile = {
  type: "demo",
  component: Demo,
  code
};

exports.HoverCardHomePageDemo = HoverCardHomePageDemo;
exports.profile = profile;
//# sourceMappingURL=HoverCard.demo.profile.js.map
