'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var iconsReact = require('@tabler/icons-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ThemeIcon, Text, Avatar, Timeline, Box } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Timeline>
        <Timeline.Item title="Default bullet" bulletSize={24}>
          <Text color="dimmed" size="sm">
            Default bullet without anything
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Avatar"
          bulletSize={24}
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as avatar image
          </Text>
        </Timeline.Item>
        <Timeline.Item title="Icon" bulletSize={24} bullet={<IconSun size="0.8rem" />}>
          <Text color="dimmed" size="sm">
            Timeline bullet as icon
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="ThemeIcon"
          bulletSize={24}
          bullet={
            <ThemeIcon
              size={22}
              variant="gradient"
              gradient={{ from: 'lime', to: 'cyan' }}
              radius="xl"
            >
              <IconVideo size="0.8rem" />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            Timeline bullet as ThemeIcon component
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 320,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Timeline, null, /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Default bullet",
    bulletSize: 24
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Default bullet without anything")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Avatar",
    bulletSize: 24,
    bullet: /* @__PURE__ */ React__default.createElement(core.Avatar, {
      size: 22,
      radius: "xl",
      src: "https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Timeline bullet as avatar image")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "Icon",
    bulletSize: 24,
    bullet: /* @__PURE__ */ React__default.createElement(iconsReact.IconSun, {
      size: "0.8rem"
    })
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Timeline bullet as icon")), /* @__PURE__ */ React__default.createElement(core.Timeline.Item, {
    title: "ThemeIcon",
    bulletSize: 24,
    bullet: /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
      size: 22,
      variant: "gradient",
      gradient: { from: "lime", to: "cyan" },
      radius: "xl"
    }, /* @__PURE__ */ React__default.createElement(iconsReact.IconVideo, {
      size: "0.8rem"
    }))
  }, /* @__PURE__ */ React__default.createElement(core.Text, {
    color: "dimmed",
    size: "sm"
  }, "Timeline bullet as ThemeIcon component"))));
}
const bullet = {
  type: "demo",
  component: Demo,
  code
};

exports.bullet = bullet;
//# sourceMappingURL=Timeline.demo.bullet.js.map
