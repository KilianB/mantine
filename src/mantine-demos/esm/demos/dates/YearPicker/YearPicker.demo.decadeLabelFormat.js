import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Group } from '@mantine/core';
import { YearPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker decadeLabelFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(YearPicker, {
    decadeLabelFormat: "YY",
    value,
    onChange: setValue
  }));
}
const decadeLabelFormat = {
  type: "demo",
  component: Demo,
  code
};

export { decadeLabelFormat };
//# sourceMappingURL=YearPicker.demo.decadeLabelFormat.js.map
