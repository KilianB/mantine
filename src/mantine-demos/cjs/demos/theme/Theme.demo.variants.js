'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const code = `
import { MantineProvider, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            variants: {
              danger: (theme) => ({
                root: {
                  backgroundColor: theme.colors.red[9],
                  color: theme.colors.red[0],
                  ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
                },
              }),

              success: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.cyan[theme.fn.primaryShade()],
                    theme.colors.teal[theme.fn.primaryShade()],
                    theme.colors.green[theme.fn.primaryShade()]
                  ),
                  color: theme.white,
                },
              }),
            },
          },
        },
      }}
    >
      <Group position="center">
        <Button variant="danger">Danger variant</Button>
        <Button variant="success">Success variant</Button>
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
          variants: {
            danger: (theme) => ({
              root: __spreadValues({
                backgroundColor: theme.colors.red[9],
                color: theme.colors.red[0]
              }, theme.fn.hover({ backgroundColor: theme.colors.red[8] }))
            }),
            success: (theme) => ({
              root: {
                backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[theme.fn.primaryShade()], theme.colors.teal[theme.fn.primaryShade()], theme.colors.green[theme.fn.primaryShade()]),
                color: theme.white
              }
            })
          }
        }
      }
    }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "danger"
  }, "Danger variant"), /* @__PURE__ */ React__default.createElement(core.Button, {
    variant: "success"
  }, "Success variant")));
}
const variants = {
  type: "demo",
  component: Demo,
  code
};

exports.variants = variants;
//# sourceMappingURL=Theme.demo.variants.js.map
