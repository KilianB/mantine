import React from 'react';
import { DateInput } from '@mantine/dates';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput
      dateParser={(input) => {
        if (input === 'WW2') {
          return new Date(1939, 8, 1);
        }
        return new Date(input);
      }}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
      maw={400}
      mx="auto"
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(DateInput, {
    dateParser: (input) => {
      if (input === "WW2") {
        return new Date(1939, 8, 1);
      }
      return new Date(input);
    },
    valueFormat: "DD/MM/YYYY",
    label: "Type WW2",
    placeholder: "Type WW2",
    maw: 400,
    mx: "auto"
  });
}
const parser = {
  type: "demo",
  component: Demo,
  code
};

export { parser };
//# sourceMappingURL=DateInput.demo.parser.js.map
