'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { ThemeIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(core.Group, {
    position: "center"
  }, /* @__PURE__ */ React__default.createElement(core.RingProgress, {
    sections: [{ value: 40, color: "blue" }],
    label: /* @__PURE__ */ React__default.createElement(core.Text, {
      color: "blue",
      weight: 700,
      align: "center",
      size: "xl"
    }, "40%")
  }), /* @__PURE__ */ React__default.createElement(core.RingProgress, {
    sections: [{ value: 100, color: "teal" }],
    label: /* @__PURE__ */ React__default.createElement(core.Center, null, /* @__PURE__ */ React__default.createElement(core.ThemeIcon, {
      color: "teal",
      variant: "light",
      radius: "xl",
      size: "xl"
    }, /* @__PURE__ */ React__default.createElement(iconsReact.IconCheck, {
      size: 22
    })))
  }));
}
const label = {
  type: "demo",
  code,
  component: Demo
};

exports.label = label;
//# sourceMappingURL=RingProgress.demo.label.js.map
