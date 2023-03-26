'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Slider, rem } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={marks}
      labelTransition="fade"
      size={2}
      styles={(theme) => ({
        track: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
        },
        mark: {
          width: rem(6),
          height: rem(6),
          borderRadius: rem(6),
          transform: \`translateX(-\${rem(3)}) translateY(-\${rem(2)})\`,
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
        },
        markFilled: {
          borderColor: theme.colors.blue[6],
        },
        markLabel: { fontSize: theme.fontSizes.xs, marginBottom: rem(5), marginTop: 0 },
        thumb: {
          height: rem(16),
          width: rem(16),
          backgroundColor: theme.white,
          borderWidth: rem(1),
          boxShadow: theme.shadows.sm,
        },
      })}
    />
  );
}
`;
const marks = [
  { value: 20, label: "20%" },
  { value: 50, label: "50%" },
  { value: 80, label: "80%" }
];
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Box, {
    maw: 400,
    pt: 15,
    pb: 20,
    mx: "auto"
  }, /* @__PURE__ */ React__default.createElement(core.Slider, {
    defaultValue: 40,
    marks,
    labelTransition: "fade",
    size: 2,
    styles: (theme) => ({
      track: {
        "&::before": {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
        }
      },
      mark: {
        width: core.rem(6),
        height: core.rem(6),
        borderRadius: core.rem(6),
        transform: `translateX(-${core.rem(3)}) translateY(-${core.rem(2)})`,
        borderColor: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.blue[1]
      },
      markFilled: {
        borderColor: theme.colors.blue[6]
      },
      markLabel: { fontSize: theme.fontSizes.xs, marginBottom: core.rem(5), marginTop: 0 },
      thumb: {
        height: core.rem(16),
        width: core.rem(16),
        backgroundColor: theme.white,
        borderWidth: core.rem(1),
        boxShadow: theme.shadows.sm
      }
    })
  }));
}
const customize = {
  type: "demo",
  component: Demo,
  code
};

exports.customize = customize;
//# sourceMappingURL=Slider.demo.customize.js.map
