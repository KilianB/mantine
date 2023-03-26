import React, { useState } from 'react';

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${name}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      mx="auto"
      maw={400}
    />
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState(null);
    return /* @__PURE__ */ React.createElement(Component, {
      dropdownType: "modal",
      label: "Pick date",
      placeholder: "Pick date",
      value,
      onChange: setValue,
      mx: "auto",
      maw: 400
    });
  };
}
function getPickerInputModalDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputModalDemo };
//# sourceMappingURL=picker-input-modal.demo.js.map
