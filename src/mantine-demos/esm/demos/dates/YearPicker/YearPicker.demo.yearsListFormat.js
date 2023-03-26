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
      <YearPicker yearsListFormat="YY" value={value} onChange={setValue} />
    </Group>
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(YearPicker, {
    yearsListFormat: "YY",
    value,
    onChange: setValue
  }));
}
const yearsListFormat = {
  type: "demo",
  component: Demo,
  code
};

export { yearsListFormat };
//# sourceMappingURL=YearPicker.demo.yearsListFormat.js.map
