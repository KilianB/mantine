'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { MantineProvider, Group, Button, Badge, ButtonStylesParams } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: '${core.rem(42)}',
                padding: '0 ${core.rem(30)}',
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },

          Badge: {
            // Use raw styles object if you do not need theme dependency
            styles: {
              root: { borderWidth: '${core.rem(2)}' },
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="outline">Outline button</Button>
        <Button variant="filled" color="cyan">Filled button</Button>
        <Badge variant="dot">Dot badge</Badge>
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
          styles: (theme, params, { variant }) => ({
            root: {
              height: core.rem(42),
              padding: `0 ${core.rem(30)}`,
              backgroundColor: variant === "filled" ? theme.colors[params.color || theme.primaryColor][9] : void 0
            }
          })
        },
        Badge: {
          styles: {
            root: { borderWidth: core.rem(2) }
          }
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "outline"
  }, "Outline button"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "filled",
    color: "cyan"
  }, "Filled button"), /* @__PURE__ */ React__default.createElement(core.Badge, {
    variant: "dot"
  }, "Dot badge")));
}
const providerStyles = {
  type: "demo",
  component: Demo,
  code
};

exports.providerStyles = providerStyles;
//# sourceMappingURL=Theme.demo.providerStyles.js.map
