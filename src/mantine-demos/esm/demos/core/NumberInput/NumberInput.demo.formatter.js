import React from 'react';
import { NumberInput } from '@mantine/core';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Price"
      defaultValue={1000}
      parser={(value) => value.replace(/\\$\\s?|(,*)/g, '')}
      formatter={(value) =>
        !Number.isNaN(parseFloat(value))
          ? \`$ \${value}\`.replace(/\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, ',')
          : '$ '
      }
    />
  );
}
`;
function Demo() {
  return /* @__PURE__ */ React.createElement(NumberInput, {
    maw: 320,
    mx: "auto",
    label: "Price",
    defaultValue: 1e3,
    formatter: (value) => !Number.isNaN(parseFloat(value)) ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "$ ",
    parser: (value) => value.replace(/\$\s?|(,*)/g, "")
  });
}
const formatter = {
  type: "demo",
  code,
  component: Demo
};

export { formatter };
//# sourceMappingURL=NumberInput.demo.formatter.js.map
