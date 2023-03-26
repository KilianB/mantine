import React, { useState } from 'react';
import { Group } from '@mantine/core';

const getCode = (name) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <${name} type="multiple" value={value} onChange={setValue} />
    </Group>
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([]);
    return /* @__PURE__ */ React.createElement(Group, {
      position: "center"
    }, /* @__PURE__ */ React.createElement(Component, {
      type: "multiple",
      value,
      onChange: setValue
    }));
  };
}
function getPickerMultipleDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerMultipleDemo };
//# sourceMappingURL=picker-multiple.demo.js.map
