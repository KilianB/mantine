import React from 'react';
import { Group, Checkbox, Radio, MantineProvider } from '@mantine/core';

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Checkbox, {
    label: "Default checkbox"
  }), /* @__PURE__ */ React.createElement(Radio, {
    label: "Default radio",
    value: "pointer"
  })), /* @__PURE__ */ React.createElement(MantineProvider, {
    inherit: true,
    theme: { cursorType: "pointer" }
  }, /* @__PURE__ */ React.createElement(Group, {
    mt: "xl"
  }, /* @__PURE__ */ React.createElement(Checkbox, {
    label: "Checkbox with pointer"
  }), /* @__PURE__ */ React.createElement(Radio, {
    label: "Radio with pointer",
    value: "pointer"
  }))));
}
const cursorType = {
  type: "demo",
  component: Demo,
  code
};

export { cursorType };
//# sourceMappingURL=Theme.demo.cursorType.js.map
