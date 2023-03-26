'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Group, Checkbox, Radio, MantineProvider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Group>
        <Checkbox label="Default checkbox" />
        <Radio label="Default radio" value="pointer" />
      </Group>

      <MantineProvider inherit theme={{ cursorType: 'pointer' }}>
        <Group mt="xl">
          <Checkbox label="Checkbox with pointer" />
          <Radio label="Radio with pointer" value="pointer" />
        </Group>
      </MantineProvider>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(core.Group, null, /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    label: "Default checkbox"
  }), /* @__PURE__ */ React__default.createElement(core.Radio, {
    label: "Default radio",
    value: "pointer"
  })), /* @__PURE__ */ React__default.createElement(core.MantineProvider, {
    inherit: true,
    theme: { cursorType: "pointer" }
  }, /* @__PURE__ */ React__default.createElement(core.Group, {
    mt: "xl"
  }, /* @__PURE__ */ React__default.createElement(core.Checkbox, {
    label: "Checkbox with pointer"
  }), /* @__PURE__ */ React__default.createElement(core.Radio, {
    label: "Radio with pointer",
    value: "pointer"
  }))));
}
const cursorType = {
  type: "demo",
  component: Demo,
  code
};

exports.cursorType = cursorType;
//# sourceMappingURL=Theme.demo.cursorType.js.map
