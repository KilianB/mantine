'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const code = `
import styled from '@emotion/styled';

const StyledComponent = styled.div\`
  text-align: center;
  background-color: \${({ theme }) =>
    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]};
  padding: ${core.rem(30)};
  border-radius: ${core.rem(5)};
  cursor: pointer;

  &:hover {
    background-color: \${({ theme }) =>
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]};
  }
\`;

function Demo() {
  return <StyledComponent />;
}
`;
const StyledComponent = styled__default.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]};
  padding: ${core.rem(30)};
  border-radius: ${core.rem(5)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]};
  }
`;
function Demo() {
  return /* @__PURE__ */ React__default.createElement(StyledComponent, null, "Styled component");
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

exports.usage = usage;
//# sourceMappingURL=Styled.demo.usage.js.map
