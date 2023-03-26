import React, { useState } from 'react';
import { MediaQuery, Group, Text } from '@mantine/core';

const getCode = (name) => `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <Group position="center">
      <${name} type="range" numberOfColumns={2} value={value} onChange={setValue} />
    </Group>
  );
}
`;
function getDemo(Component) {
  return () => {
    const [value, setValue] = useState([null, null]);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MediaQuery, {
      styles: { display: "none" },
      smallerThan: "sm"
    }, /* @__PURE__ */ React.createElement(Group, {
      position: "center"
    }, /* @__PURE__ */ React.createElement(Component, {
      type: "range",
      numberOfColumns: 2,
      value,
      onChange: setValue
    }))), /* @__PURE__ */ React.createElement(MediaQuery, {
      styles: { display: "none" },
      largerThan: "sm"
    }, /* @__PURE__ */ React.createElement(Text, {
      ta: "center"
    }, "Demo is not available on small screens. Make your screen larger to see demo.")));
  };
}
function getPickerNumberOfColumnsDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerNumberOfColumnsDemo };
//# sourceMappingURL=picker-numberOfColumns.demo.js.map
