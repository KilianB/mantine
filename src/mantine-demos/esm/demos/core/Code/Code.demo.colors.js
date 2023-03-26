import React from 'react';
import { Group, Code } from '@mantine/core';

const code = `
import { Code } from '@mantine/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Group, null, /* @__PURE__ */ React.createElement(Code, {
    color: "red"
  }, "React.createElement()"), /* @__PURE__ */ React.createElement(Code, {
    color: "teal"
  }, "React.createElement()"), /* @__PURE__ */ React.createElement(Code, {
    color: "blue"
  }, "React.createElement()"));
}
const colors = {
  type: "demo",
  code,
  component: Demo
};

export { colors };
//# sourceMappingURL=Code.demo.colors.js.map
