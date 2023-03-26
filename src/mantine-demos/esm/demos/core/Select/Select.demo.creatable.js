import React, { useState } from 'react';
import { Select } from '@mantine/core';

const code = `
import { useState } from 'react';
import { Select } from '@mantine/core';

export function Demo() {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <Select
      label="Creatable Select"
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      getCreateLabel={(query) => \`+ Create \${query}\`}
      onCreate={(query) => {
        const item = { value: query, label: query };
        setData((current) => [...current, item]);
        return item;
      }}
    />
  );
}
`;
function Demo() {
  const [data, setData] = useState([
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" }
  ]);
  return /* @__PURE__ */ React.createElement(Select, {
    maw: 320,
    mx: "auto",
    label: "Creatable Select",
    data,
    placeholder: "Select items",
    nothingFound: "Nothing found",
    searchable: true,
    creatable: true,
    withinPortal: true,
    getCreateLabel: (query) => `+ Create ${query}`,
    onCreate: (query) => {
      const item = { value: query, label: query };
      setData((current) => [...current, item]);
      return item;
    }
  });
}
const creatable = {
  type: "demo",
  code,
  component: Demo
};

export { Demo, creatable };
//# sourceMappingURL=Select.demo.creatable.js.map
