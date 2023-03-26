import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { TextInput, Flex, Kbd } from '@mantine/core';

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
  const rightSection = /* @__PURE__ */ React.createElement(Flex, {
    align: "center"
  }, /* @__PURE__ */ React.createElement(Kbd, {
    mr: 5
  }, "Ctrl"), /* @__PURE__ */ React.createElement("span", null, "+"), /* @__PURE__ */ React.createElement(Kbd, {
    ml: 5
  }, "K"));
  return /* @__PURE__ */ React.createElement(TextInput, {
    placeholder: "Search",
    icon: /* @__PURE__ */ React.createElement(IconSearch, {
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

export { input };
//# sourceMappingURL=Kbd.demo.input.js.map
