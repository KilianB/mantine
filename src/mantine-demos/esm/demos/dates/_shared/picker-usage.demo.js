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
      <${name} value={value} onChange={setValue} />
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
      value,
      onChange: setValue
    }));
  };
}
function getPickerUsageDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerUsageDemo };
//# sourceMappingURL=picker-usage.demo.js.map
