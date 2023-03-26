import React from 'react';
import { useFocusWithin } from '@mantine/hooks';
import { Box, Text, TextInput, Button } from '@mantine/core';

const code = `
import { useFocusWithin } from '@mantine/hooks';
import { TextInput, Button, Box, Text } from '@mantine/core';

function Demo() {
  const { ref, focused } = useFocusWithin();
  return (
    <div ref={ref}>
      <Box
        sx={(theme) => ({
          backgroundColor: focused
            ? theme.fn.variant({ variant: 'light' }).background
            : 'transparent',
          padding: theme.spacing.xl,
        })}
      >
        <Text size="sm">One of elements has focus: {focused.toString()}</Text>
        <TextInput label="Focus this input" placeholder="Styles will be added to parent" />
        <Button mt="md">Button</Button>
      </Box>
    </div>
  );
}
`;
function Demo() {
  const { ref, focused } = useFocusWithin();
  return /* @__PURE__ */ React.createElement("div", {
    ref
  }, /* @__PURE__ */ React.createElement(Box, {
    sx: (theme) => ({
      backgroundColor: focused ? theme.fn.variant({ variant: "light" }).background : "transparent",
      padding: theme.spacing.xl
    })
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "sm"
  }, "One of elements has focus: ", focused.toString()), /* @__PURE__ */ React.createElement(TextInput, {
    label: "Focus this input",
    placeholder: "Styles will be added to parent"
  }), /* @__PURE__ */ React.createElement(Button, {
    mt: "md"
  }, "Button")));
}
const useFocusWithinDemo = {
  type: "demo",
  component: Demo,
  code
};

export { useFocusWithinDemo };
//# sourceMappingURL=use-focus-within.demo.usage.js.map
