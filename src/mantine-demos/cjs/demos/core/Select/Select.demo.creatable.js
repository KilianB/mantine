'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  const [data, setData] = React.useState([
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" }
  ]);
  return /* @__PURE__ */ React__default.createElement(core.Select, {
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

exports.Demo = Demo;
exports.creatable = creatable;
//# sourceMappingURL=Select.demo.creatable.js.map
