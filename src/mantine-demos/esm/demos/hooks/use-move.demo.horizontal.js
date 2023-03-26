import React, { useState } from 'react';
import { useMantineTheme, Group, rem, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { useMantineTheme, Group, Text, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(16),
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: rem(16),
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - \${rem(8)})\`,
              top: 0,
              width: rem(16),
              height: rem(16),
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`;
function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: {
      width: rem(400),
      height: rem(16),
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      width: `${value * 100}%`,
      height: rem(16),
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.blue[9] : theme.colors.blue[2]
    }
  }), /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${value * 100}% - ${rem(8)})`,
      top: 0,
      width: rem(16),
      height: rem(16),
      backgroundColor: theme.colors.blue[7]
    }
  }))), /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    mt: "sm"
  }, "Value: ", Math.round(value * 100)));
}
const useMoveHorizontal = {
  type: "demo",
  code,
  component: Demo
};

export { useMoveHorizontal };
//# sourceMappingURL=use-move.demo.horizontal.js.map
