'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ]);

  return (
    <MultiSelect
      label="Creatable MultiSelect"
      data={data}
      placeholder="Select items"
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
  return /* @__PURE__ */ React__default.createElement(core.MultiSelect, {
    maw: 400,
    mx: "auto",
    label: "Creatable MultiSelect",
    data,
    placeholder: "Select items",
    searchable: true,
    creatable: true,
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
//# sourceMappingURL=MultiSelect.demo.creatable.js.map
