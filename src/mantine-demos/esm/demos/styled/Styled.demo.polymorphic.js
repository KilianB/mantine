import React from 'react';
import { rem, Button, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';

const code = `
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';

const _StyledButton = styled(Button)\`
  border-width: ${rem(2)};
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
const _StyledButton = styled(Button)`
  border-width: ${rem(2)};
  color: ${({ theme }) => theme.colorScheme === "dark" ? theme.white : theme.black};
`;
const StyledButton = createPolymorphicComponent(_StyledButton);
function Demo() {
  return /* @__PURE__ */ React.createElement(StyledButton, {
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

export { polymorphic };
//# sourceMappingURL=Styled.demo.polymorphic.js.map
