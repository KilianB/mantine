'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var iconsReact = require('@tabler/icons-react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { Kbd, TextInput, Flex } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  const rightSection = (
    <Flex align="center">
      <Kbd mr={5}>Ctrl</Kbd>
      <span>+</span>
      <Kbd ml={5}>K</Kbd>
    </Flex>
  );

  return (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size="1rem" />}
      rightSectionWidth={90}
      rightSection={rightSection}
      styles={{ rightSection: { pointerEvents: 'none' } }}
    />
  );
}
`;
function Demo() {
  const rightSection = /* @__PURE__ */ React__default.createElement(core.Flex, {
    align: "center"
  }, /* @__PURE__ */ React__default.createElement(core.Kbd, {
    mr: 5
  }, "Ctrl"), /* @__PURE__ */ React__default.createElement("span", null, "+"), /* @__PURE__ */ React__default.createElement(core.Kbd, {
    ml: 5
  }, "K"));
  return /* @__PURE__ */ React__default.createElement(core.TextInput, {
    placeholder: "Search",
    icon: /* @__PURE__ */ React__default.createElement(iconsReact.IconSearch, {
      size: "1rem"
    }),
    rightSectionWidth: 90,
    rightSection,
    styles: { rightSection: { pointerEvents: "none" } }
  });
}
const input = {
  type: "demo",
  code,
  component: Demo
};

exports.input = input;
//# sourceMappingURL=Kbd.demo.input.js.map
