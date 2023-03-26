'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');
var styled = require('@emotion/styled');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const code = `
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';

const _StyledButton = styled(Button)\`
  border-width: ${core.rem(2)};
  color: \${({ theme }) => (theme.colorScheme === 'dark' ? theme.white : theme.black)};
\`;

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);

function Demo() {
  return (
    <StyledButton variant="outline" color="gray" radius="md">
      This is styled button
    </StyledButton>
  );
}

`;
const _StyledButton = styled__default(core.Button)`
  border-width: ${core.rem(2)};
  color: ${({ theme }) => theme.colorScheme === "dark" ? theme.white : theme.black};
`;
const StyledButton = core.createPolymorphicComponent(_StyledButton);
function Demo() {
  return /* @__PURE__ */ React__default.createElement(StyledButton, {
    variant: "outline",
    color: "gray",
    radius: "md"
  }, "This is styled button");
}
const polymorphic = {
  type: "demo",
  component: Demo,
  code
};

exports.polymorphic = polymorphic;
//# sourceMappingURL=Styled.demo.polymorphic.js.map
