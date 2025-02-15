import React from 'react';
import { useHover } from '@mantine/hooks';
import { useMantineTheme, rem, Text } from '@mantine/core';

const code = `
import { useHover } from '@mantine/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;
function Demo() {
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    style: {
      height: rem(60),
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.blue[0],
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /* @__PURE__ */ React.createElement(Text, null, hovered ? "I am hovered" : "Put mouse over me please"));
}
const useHoverDemo = {
  type: "demo",
  component: Demo,
  code
};

export { useHoverDemo };
//# sourceMappingURL=use-hover.demo.usage.js.map
