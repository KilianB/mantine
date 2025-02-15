import React from 'react';
import { Stack, Checkbox } from '@mantine/core';

const code = `
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked indeterminate label="Indeterminate checked checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </>
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(Stack, null, /* @__PURE__ */ React.createElement(Checkbox, {
    checked: false,
    label: "Default checkbox"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    checked: false,
    indeterminate: true,
    label: "Indeterminate checkbox"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    checked: true,
    indeterminate: true,
    label: "Indeterminate checked checkbox"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    checked: true,
    label: "Checked checkbox"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    disabled: true,
    label: "Disabled checkbox"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    disabled: true,
    checked: true,
    label: "Disabled checked checkbox"
  }), /* @__PURE__ */ React.createElement(Checkbox, {
    disabled: true,
    indeterminate: true,
    label: "Disabled indeterminate checkbox"
  }));
}
const states = {
  type: "demo",
  component: Demo,
  code
};

export { states };
//# sourceMappingURL=Checkbox.demo.states.js.map
