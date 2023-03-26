import React, { useState } from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DateInput
      value={value}
      onChange={setValue}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  const [value, setValue] = useState(null);
  return /* @__PURE__ */ React.createElement(DateInput, {
    value,
    onChange: setValue,
    label: "Date input",
    placeholder: "Date input",
    maw: 400,
    mx: "auto",
    popoverProps: { withinPortal: true }
  });
}
const usage = {
  type: "demo",
  component: Demo,
  code
};

export { usage };
//# sourceMappingURL=DateInput.demo.usage.js.map
