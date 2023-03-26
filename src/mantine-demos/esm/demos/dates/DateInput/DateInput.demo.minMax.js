import dayjs from 'dayjs';
import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      minDate={new Date()}
      maxDate={dayjs(new Date()).add(1, 'month').toDate()}
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, {
    minDate: new Date(),
    maxDate: dayjs(new Date()).add(1, "month").toDate(),
    label: "Date input",
    placeholder: "Date input",
    maw: 400,
    mx: "auto"
  });
}
const minMax = {
  type: "demo",
  component: Demo,
  code
};

export { minMax };
//# sourceMappingURL=DateInput.demo.minMax.js.map
