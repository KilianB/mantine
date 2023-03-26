import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { Group, RingProgress, Text, Center, ThemeIcon } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(RingProgress, {
    sections: [{ value: 40, color: "blue" }],
    label: /* @__PURE__ */ React.createElement(Text, {
      color: "blue",
      weight: 700,
      align: "center",
      size: "xl"
    }, "40%")
  }), /* @__PURE__ */ React.createElement(RingProgress, {
    sections: [{ value: 100, color: "teal" }],
    label: /* @__PURE__ */ React.createElement(Center, null, /* @__PURE__ */ React.createElement(ThemeIcon, {
      color: "teal",
      variant: "light",
      radius: "xl",
      size: "xl"
    }, /* @__PURE__ */ React.createElement(IconCheck, {
      size: 22
    })))
  }));
}
const label = {
  type: "demo",
  code,
  component: Demo
};

export { label };
//# sourceMappingURL=RingProgress.demo.label.js.map
