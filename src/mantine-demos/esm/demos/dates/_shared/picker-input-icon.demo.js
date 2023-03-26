import React, { useState } from 'react';
import { IconCalendar } from '@tabler/icons-react';

const getCode = (name) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <${name}
      icon={<IconCalendar size="1.1rem" stroke={1.5} />}
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
      icon: /* @__PURE__ */ React.createElement(IconCalendar, {
        size: "1.1rem",
        stroke: 1.5
      }),
      label: "Pick date",
      placeholder: "Pick date",
      value,
      onChange: setValue,
      mx: "auto",
      maw: 400
    });
  };
}
function getPickerInputIconDemo(Component) {
  return {
    type: "demo",
    code: getCode(Component.displayName.replace("@mantine/dates/", "")),
    component: getDemo(Component)
  };
}

export { getPickerInputIconDemo };
//# sourceMappingURL=picker-input-icon.demo.js.map
