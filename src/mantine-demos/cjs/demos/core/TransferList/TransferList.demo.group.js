'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var core = require('@mantine/core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const code = `
import { useState } from 'react';
import { TransferList, TransferListData } from '@mantine/core';

const initialValues: TransferListData = [
  [
    { value: 'react', label: 'React', group: 'Frameworks' },
    { value: 'ng', label: 'Angular', group: 'Frameworks' },
    { value: 'next', label: 'Next.js', group: 'Frameworks' },
    { value: 'jq', label: 'jQuery', group: 'Frameworks' },
    { value: 'sv', label: 'Svelte', group: 'Libraries' },
    { value: 'dj', label: 'Django', group: 'Libraries' },
    { value: 'fl', label: 'Flask', group: 'Libraries' },
  ],
  [
    { value: 'blitz', label: 'Blitz.js', group: 'Frameworks' },
    { value: 'gatsby', label: 'Gatsby.js', group: 'Frameworks' },
    { value: 'vue', label: 'Vue', group: 'Frameworks' },
    { value: 'rw', label: 'Redwood', group: 'Libraries' },
    { value: 'np', label: 'NumPy', group: 'Libraries' },
  ],
];

function Demo() {
  const [data, setData] = useState<TransferListData>(initialValues);
  return (
    <TransferList
      value={data}
      onChange={setData}
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
    />
  );
}
`;
const mockdata = [
  [
    { value: "react", label: "React", group: "Frameworks" },
    { value: "ng", label: "Angular", group: "Frameworks" },
    { value: "next", label: "Next.js", group: "Frameworks" },
    { value: "jq", label: "jQuery", group: "Frameworks" },
    { value: "sv", label: "Svelte", group: "Libraries" },
    { value: "dj", label: "Django", group: "Libraries" },
    { value: "fl", label: "Flask", group: "Libraries" }
  ],
  [
    { value: "blitz", label: "Blitz.js", group: "Frameworks" },
    { value: "gatsby", label: "Gatsby.js", group: "Frameworks" },
    { value: "vue", label: "Vue", group: "Frameworks" },
    { value: "rw", label: "Redwood", group: "Libraries" },
    { value: "np", label: "NumPy", group: "Libraries" }
  ]
];
function Demo() {
  const [data, setData] = React.useState(mockdata);
  return /* @__PURE__ */ React__default.createElement(core.TransferList, {
    value: data,
    onChange: setData,
    searchPlaceholder: "Search...",
    nothingFound: "Nothing here"
  });
}
const group = {
  type: "demo",
  component: Demo,
  code
};

exports.group = group;
//# sourceMappingURL=TransferList.demo.group.js.map
