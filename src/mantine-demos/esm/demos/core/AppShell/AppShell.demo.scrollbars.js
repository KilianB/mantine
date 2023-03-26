import React from 'react';
import { Navbar, ScrollArea, Box } from '@mantine/core';
import { User } from './_user.js';
import { Brand } from './_brand.js';
import { MainLinks } from './_mainLinks.js';

const code = `
import { Navbar, ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <Navbar height={600} p="xs" width={{ base: 300 }}>
      <Navbar.Section mt="xs">{/* Header with logo */}</Navbar.Section>

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {/* scrollable content here */}
      </Navbar.Section>

      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Navbar, {
    height: 600,
    p: "xs",
    width: { base: 300 }
  }, /* @__PURE__ */ React.createElement(Navbar.Section, {
    mt: "xs"
  }, /* @__PURE__ */ React.createElement(Brand, null)), /* @__PURE__ */ React.createElement(Navbar.Section, {
    grow: true,
    component: ScrollArea,
    mx: "-xs",
    px: "xs"
  }, /* @__PURE__ */ React.createElement(Box, {
    py: "md"
  }, /* @__PURE__ */ React.createElement(MainLinks, null), /* @__PURE__ */ React.createElement(MainLinks, null), /* @__PURE__ */ React.createElement(MainLinks, null), /* @__PURE__ */ React.createElement(MainLinks, null))), /* @__PURE__ */ React.createElement(Navbar.Section, null, /* @__PURE__ */ React.createElement(User, null)));
}
const scrollbars = {
  type: "demo",
  component: Demo,
  demoProps: { spacing: false },
  code
};

export { scrollbars };
//# sourceMappingURL=AppShell.demo.scrollbars.js.map
