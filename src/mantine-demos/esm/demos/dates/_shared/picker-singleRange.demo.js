import React, { useState } from 'react';
import { Group } from '@mantine/core';

const getCode = (name) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <${name} type="range" allowSingleDateInRange value={value} onChange={setValue} />
    </Group>
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([null, null]);
    return /* @__PURE__ */ React.createElement(Group, {
      position: "center"
    }, /* @__PURE__ */ React.createElement(Component, {
      type: "range",
      allowSingleDateInRange: true,
      value,
      onChange: setValue
    }));
  };
}
function getPickerSingleRangeDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerSingleRangeDemo };
//# sourceMappingURL=picker-singleRange.demo.js.map
