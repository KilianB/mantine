'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Button, rem } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons-react';

function Demo() {
  return (
    <Group position="center">
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mantinedev"
        leftIcon={<IconBrandTwitter size={rem(18)} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
            '&:not([data-disabled])': theme.fn.hover({
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </Group>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    component: "a",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://twitter.com/mantinedev",
    leftIcon: /* @__PURE__ */ React__default.createElement(iconsReact.IconBrandTwitter, {
      size: core.rem(18)
    }),
    styles: (theme) => ({
      root: {
        backgroundColor: "#00acee",
        border: 0,
        height: core.rem(42),
        paddingLeft: core.rem(20),
        paddingRight: core.rem(20),
        "&:not([data-disabled])": theme.fn.hover({
          backgroundColor: theme.fn.darken("#00acee", 0.05)
        })
      },
      leftIcon: {
        marginRight: theme.spacing.md
      }
    })
  }, "Follow on Twitter"));
}
const customize = {
  type: "demo",
  code,
  component: Demo
};

exports.customize = customize;
//# sourceMappingURL=Button.demo.customize.js.map
