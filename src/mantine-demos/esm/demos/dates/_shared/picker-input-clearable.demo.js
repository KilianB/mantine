import React from 'react';

const getCode = (name) => `
import { ${name} } from '@mantine/dates';

function Demo() {
  return (
    <${name}
      clearable
      defaultValue={new Date()}
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
}
`;
function getDemo(Component) {
  return () => /* @__PURE__ */ React.createElement(Component, {
    clearable: true,
    defaultValue: new Date(),
    label: "Pick date",
    placeholder: "Pick date",
    mx: "auto",
    maw: 400
  });
}
function getPickerInputClearableDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputClearableDemo };
//# sourceMappingURL=picker-input-clearable.demo.js.map
