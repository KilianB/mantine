import React, { useState } from 'react';
import { Group } from '@mantine/core';

const getCode = (name) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <${name} allowDeselect value={value} onChange={setValue} />
    </Group>
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState(null);
    return /* @__PURE__ */ React.createElement(Group, {
      position: "center"
    }, /* @__PURE__ */ React.createElement(Component, {
      allowDeselect: true,
      value,
      onChange: setValue
    }));
  };
}
function getPickerDeselectDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerDeselectDemo };
//# sourceMappingURL=picker-deselect.demo.js.map
