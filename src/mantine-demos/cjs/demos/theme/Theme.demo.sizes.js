'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            sizes: {
              xxxs: () => ({
                root: {
                  height: '${core.rem(20)}',
                  padding: '${core.rem(5)}',
                  fontSize: '${core.rem(8)}',
                },
              }),

              xxl: (theme) => ({
                root: {
                  fontSize: '${core.rem(28)}',
                  height: '${core.rem(80)}',
                  padding: theme.spacing.xl,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button size="xxxs">XXXS button</Button>
        <Button size="xxl">XXL button</Button>
      </Group>
    </MantineProvider>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: {
      components: {
        Button: {
          sizes: {
            xxxs: () => ({
              root: {
                height: core.rem(20),
                padding: core.rem(5),
                fontSize: core.rem(8)
              }
            }),
            xxl: (theme) => ({
              root: {
                fontSize: core.rem(28),
                height: core.rem(80),
                padding: theme.spacing.xl
              }
            })
          }
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xxxs"
  }, "XXXS button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    size: "xxl"
  }, "XXL button")));
}
const sizes = {
  type: "demo",
  component: Demo,
  code
};

exports.sizes = sizes;
//# sourceMappingURL=Theme.demo.sizes.js.map
