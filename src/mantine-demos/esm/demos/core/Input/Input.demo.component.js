import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Input } from '@mantine/core';

const code = `
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button">Button input</Input>

      <Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}

`;
function Demo() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Input, {
    component: "button"
  }, "Button input"), /* @__PURE__ */ React.createElement(Input, {
    mt: "md",
    component: "select",
    rightSection: /* @__PURE__ */ React.createElement(IconChevronDown, {
      size: 14,
      stroke: 1.5
    })
  }, /* @__PURE__ */ React.createElement("option", {
    value: "1"
  }, "1"), /* @__PURE__ */ React.createElement("option", {
    value: "2"
  }, "2")));
}
const component = {
  type: "demo",
  code,
  component: Demo
};

export { component };
//# sourceMappingURL=Input.demo.component.js.map
