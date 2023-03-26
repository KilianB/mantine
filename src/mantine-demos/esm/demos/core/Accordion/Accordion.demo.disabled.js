import { Accordion, Box } from '@mantine/core';
import React from 'react';
import { baseAccordionMockdata } from './_mockdata.js';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control disabled>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`;
const baseDemoItems = baseAccordionMockdata.map((item, index) => /* @__PURE__ */ React.createElement(Accordion.Item, {
  key: item.label,
  value: item.id
}, /* @__PURE__ */ React.createElement(Accordion.Control, {
  disabled: index === 1
}, item.label), /* @__PURE__ */ React.createElement(Accordion.Panel, null, item.content)));
function Demo() {
  return /* @__PURE__ */ React.createElement(Box, {
    maw: 380,
    mx: "auto"
  }, /* @__PURE__ */ React.createElement(Accordion, null, baseDemoItems));
}
const disabled = {
  type: "demo",
  component: Demo,
  code
};

export { baseDemoItems, disabled };
//# sourceMappingURL=Accordion.demo.disabled.js.map
