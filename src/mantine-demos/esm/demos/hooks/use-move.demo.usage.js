import React, { useState } from 'react';
import { useMantineTheme, Group, rem, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

const code = `
import { useState } from 'react';
import { useMantineTheme, Text, Code, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: rem(400),
            height: rem(120),
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
              top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
              width: rem(16),
              height: rem(16),
              backgroundColor: active ? theme.colors.teal[7] : theme.colors.blue[7],
            }}
          />
        </div>
      </Group>
      <Text align="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`;
function Demo() {
  const theme = useMantineTheme();
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement("div", {
    ref,
    style: {
      width: rem(400),
      height: rem(120),
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${value.x * 100}% - ${rem(8)})`,
      top: `calc(${value.y * 100}% - ${rem(8)})`,
      width: rem(16),
      height: rem(16),
      backgroundColor: active ? theme.colors.teal[7] : theme.colors.blue[7]
    }
  }))), /* @__PURE__ */ React.createElement(Text, {
    align: "center",
    mt: "sm"
  }, "Values ", /* @__PURE__ */ React.createElement(Code, null, `{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`)));
}
const useMoveUsage = {
  type: "demo",
  code,
  component: Demo
};

export { useMoveUsage };
//# sourceMappingURL=use-move.demo.usage.js.map
